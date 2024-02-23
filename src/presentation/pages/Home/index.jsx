import { Container, Content } from './styles'
import { Video } from '../../components/Video'
import { Card } from '../../components/Card'
import { WhatsappButton } from '../../components/WhatsappButton'
import { SplideSlide } from '@splidejs/react-splide'
import { Carousel } from '../../components/Carousel'

import { useBrokerProfile } from '../../../data/BrokerData'

import videoMobile from '../../assets/rk-video-mobile.mp4'
import videoDesktop from '../../assets/rk-video-desktop.mp4'

export function Home() {
  const broker = useBrokerProfile()
  const { comments: quotes } = useBrokerProfile()
  const brokerPhoneNumber = broker.phone

  const isDeviceScreenPortrait = window.matchMedia(
    '(orientation: portrait)',
  ).matches

  return (
    <Container>
      <div className="bg-img" />
      <Content>
        <h2>Oportunidades únicas não esperam por ninguém!</h2>

        {isDeviceScreenPortrait ? (
          <Video src={videoMobile} />
        ) : (
          <Video src={videoDesktop} />
        )}

        <Carousel option="card" length={quotes.length}>
          {quotes.map(quote => (
            <SplideSlide key={quote.id}>
              <Card {...quote} />
            </SplideSlide>
          ))}
        </Carousel>
      </Content>
      <WhatsappButton phoneNumber={brokerPhoneNumber} />
    </Container>
  )
}
