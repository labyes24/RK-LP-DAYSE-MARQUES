import { useState } from 'react'
import { useBrokerProfile } from '../../../../../data/BrokerData'
import { sendMail } from '../../../../../services/sendMail'
import { toast } from 'react-toastify'

import { TextInput } from '../../../../components/TextInput'
import { TextArea } from '../../../../components/TextArea'
import { SelectOption } from '../../../../components/SelectOption'
import { Modal } from '../../../Properties/components/Modal'

import { FormContainer, ShortButton } from './styles'

export function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { email: brokerEmail } = useBrokerProfile()
  const devMode = import.meta.env.DEV
  let sendMailTo = ''

  if (devMode) {
    sendMailTo = import.meta.env.VITE_EMAILJS_MAIL_TEST
  } else {
    sendMailTo = brokerEmail
  }

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    const messageText = `Dados pessoais: \n
      Nome: ${data?.name}
      Email: ${data?.email}
      Whatsapp: ${data?.whatsapp} \n\n
      Dados do Imóvel: \n
      Localização: ${data?.local}
      Finalidade: ${data?.purpose}
      Categoria: ${data?.category}
      Quartos: ${data?.bedroom}
      Valor mínimo: ${data?.min_value}
      Valor máximo: ${data?.max_value}
      Informações extras: ${data?.extra_info}`

    setIsFormSubmitted(true)

    sendMail(data.name, messageText, sendMailTo)
      .then(response => {
        if (response.status === 200) {
          event.target.reset()
        }
      })
      .catch(error => {
        toast.error('Ocorreu um erro. \nPor favor, tente novamente mais tarde.')
        console.error(error)
      })
      .finally(() => {
        setIsModalOpen(true)
        setIsFormSubmitted(false)
      })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="fieldsContainer">
        <fieldset>
          <legend>
            <span> Dados pessoais</span>
          </legend>

          <div className="inputWrapper">
            <label htmlFor="name">
              Nome <span>(Campo obrigatório):</span>
            </label>
            <TextInput
              placeholder="Digite seu nome"
              name="name"
              id="name"
              required
              minLength={2}
            />
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="email">Email:</label>
              <TextInput
                placeholder="Digite seu e-mail"
                type="email"
                name="email"
                id="email"
                pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="whatsapp">
                Whatsapp <span>(Campo obrigatório):</span>
              </label>
              <TextInput
                placeholder="+55 (00) 00000-0000"
                name="whatsapp"
                id="whatsapp"
                pattern="^[+]?(\d{9,17})"
                minLength={10}
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>Imóvel</span>
          </legend>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="local">Localização desejada: </label>
              <TextInput
                placeholder="Cidade, bairro..."
                name="local"
                id="local"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="purpose">Finalidade:</label>
              <SelectOption name="purpose" id="purpose" defaultValue="">
                <option value="" hidden>
                  Selecione
                </option>
                <option value="comprar">Comprar</option>
                <option value="vender">Vender</option>
              </SelectOption>
            </div>
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="category">Categoria:</label>
              <SelectOption name="category" id="category" defaultValue="">
                <option value="" hidden>
                  Selecione
                </option>
                <option value="apartmento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="galpão">Galpão</option>
                <option value="terreno">Terreno</option>
                <option value="outros">outros</option>
              </SelectOption>
            </div>

            <div className="inputWrapper">
              <label htmlFor="bedroom">Quartos:</label>
              <SelectOption name="bedroom" id="bedroom" defaultValue="">
                <option value="" hidden>
                  Selecione
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5 ou mais">5 ou mais</option>
              </SelectOption>
            </div>
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="min_value">Valor mínimo:</label>
              <TextInput
                min={100}
                placeholder="Mín (R$)"
                type="number"
                name="min_value"
                id="min_value"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="max_value">Valor máximo:</label>
              <TextInput
                min={100}
                placeholder="Máx (R$)"
                type="number"
                name="max_value"
                id="max_value"
              />
            </div>
          </div>

          <div className="inputWrapper">
            <label htmlFor="extra_info">Informações extras:</label>
            <TextArea
              placeholder="Preferências de imóveis na planta e/ou interesse do imóvel..."
              name="extra_info"
              id="extra_info"
              rows="6"
            />
          </div>
        </fieldset>
      </div>
      <footer>
        <p>
          Ao informar meus dados eu concordo com a{' '}
          <a href="/privatePolicy" target="_blank">
            Política de Privacidade
          </a>
          .
        </p>

        <ShortButton size="small" type="submit" isLoading={isFormSubmitted}>
          Enviar
        </ShortButton>
      </footer>

      <Modal
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        success={true}
      />
    </FormContainer>
  )
}
