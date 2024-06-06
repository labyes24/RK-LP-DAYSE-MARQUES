import { useTranslation } from 'react-i18next'

/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesPT = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9972',
    title: 'Brisamar',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Lindo e amplo apartamento, dois dormitórios, sendo 1 suíte, sacada com churrasqueira, totalmente mobiliado em condomínio com piscina, numa das melhores ruas da Praia dos Ingleses. Localizado a 500 mts do mar.',
    price: 'R$ 650.000,00',
    details: {
      square: '78,52 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/brisamar-f05.jpg',
      './properties/brisamar-f01.jpg',
      './properties/brisamar-f02.jpg',
      './properties/brisamar-f03.jpg',
      './properties/brisamar-f04.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '7581',
    title: 'Ilha das Galés',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Maravilhosa cobertura com 4 dormitórios sendo 3 suítes, amplo terraço com piscina, sala dois ambientes, totalmente mobiliada, com vista mar, localizada na parte nobre do bairro e a uma quadra da praia.',
    price: 'R$ 2.600.000,00',
    details: {
      square: '235,47 m²',
      rooms: '4',
      bathrooms: '5',
      garage: '2',
    },
    pictures: [
      './properties/ilha-f05.jpg',
      './properties/ilha-f01.jpg',
      './properties/ilha-f03.jpg',
      './properties/ilha-f04.jpg',
      './properties/ilha-f02.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9839',
    title: 'Ponta do Mar',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Imperdível! Se você está procurando um apartamento amplo e próximo ao mar, esse é o imóvel certo. Apartamento mobiliado, com 3 dormitórios, sendo uma suíte com sacada, cozinha planejada integrada à sala, varanda espaçosa com churrasqueira a carvão, uma vaga de garagem e hobby box. O condomínio oferece piscina, salão de festas, elevador e segurança.',
    price: 'R$ 739.000,00',
    details: {
      square: '105,30 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/ponta-f01.jpg',
      './properties/ponta-f02.jpg',
      './properties/ponta-f04.jpg',
      './properties/ponta-f03.jpg',
      './properties/ponta-f05.jpg',
    ],
  },
]

/**  @type {Array<Property>} The Spanish properties data */
const propertiesES = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9972',
    title: 'Brisamar',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Hermoso y espacioso departamento, dos habitaciones, 1 suite, balcón con parrilla, completamente amueblado en condominio con piscina, en una de las mejores calles de Praia dos Ingleses. Situado a 500 metros del mar.',
    price: 'R$ 650.000,00',
    details: {
      square: '78,52 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/brisamar-f05.jpg',
      './properties/brisamar-f01.jpg',
      './properties/brisamar-f02.jpg',
      './properties/brisamar-f03.jpg',
      './properties/brisamar-f04.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '7581',
    title: 'Ilha das Galés',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Maravilloso penthouse de 4 recámaras, 3 suites, amplia terraza con alberca, sala de dos ambientes, completamente amueblado, con vista al mar, ubicado en la zona privilegiada del barrio y a una cuadra de la playa.',
    price: 'R$ 2.600.000,00',
    details: {
      square: '235,47 m²',
      rooms: '4',
      bathrooms: '5',
      garage: '2',
    },
    pictures: [
      './properties/ilha-f05.jpg',
      './properties/ilha-f01.jpg',
      './properties/ilha-f03.jpg',
      './properties/ilha-f04.jpg',
      './properties/ilha-f02.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9839',
    title: 'Ponta do Mar',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Si busca un apartamento espacioso cerca del mar, esta es la propiedad adecuada.\n\n Apartamento amueblado, de 3 habitaciones, una de ellas suite con balcón, cocina amueblada e integrada al salón, amplio balcón con barbacoa de carbón, plaza de aparcamiento y hobby box.\n\n El condominio ofrece piscina, salón de fiestas, ascensor y seguridad.',
    price: 'R$ 739.000,00',
    details: {
      square: '105,30 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/ponta-f01.jpg',
      './properties/ponta-f02.jpg',
      './properties/ponta-f04.jpg',
      './properties/ponta-f03.jpg',
      './properties/ponta-f05.jpg',
    ],
  },
]

/**
 * The Properties data
 * @typedef {Object} PropertiesData
 * @property {Array<Property>} pt - The Portuguese property data.
 * @property {Array<Property>} es - The Spanish property data.
 */

/** @type {PropertiesData} The properties data */
const properties = {
  pt: propertiesPT,
  es: propertiesES,
}

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  const {
    i18n: { language },
  } = useTranslation()

  if (properties[language]) {
    return properties[language]
  } else {
    return properties['pt']
  }
}
