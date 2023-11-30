import { ContainerSplide } from './styles'

const PER_PAGE_MOBILE = 2
const PER_PAGE_DESKTOP = 4

/**
 * Creates a styled Carousel component.
 * options are rendered as children into a <SplideSlide> tag.
 * @param {String} option - Type of component into carousel can be | 'card' | 'cardProperty' | 'picture' | style.
 * @param {Number} length - length of array.
 * @return {JSX.Element} The styled Carousel component.
 */
export function Carousel({
  children,
  option = 'default',
  length = 0,
  ...rest
}) {
  const defaultOption = {
    rewind: true,
    type: 'loop',
    arrows: false,
    gap: '1rem',
    autoWidth: true,
  }

  const cardOption = {
    rewind: true,
    type: length === PER_PAGE_DESKTOP ? '' : 'loop',
    arrows: true,
    navigation: true,
    perPage: PER_PAGE_DESKTOP,
    gap: '9rem',
    autoWidth: false,
    autoplay: true,
    // drag: ,
    breakpoints: {
      1024: {
        //abaixo de 1024
        // arrows: length <= PER_PAGE_MOBILE,
        type: length === PER_PAGE_MOBILE ? '' : 'loop',
        perPage: PER_PAGE_MOBILE,
        gap: '1rem',
        autoWidth: true,
        // drag: ,
      },
    },
  }
  const propertyCardOption = {
    type: 'loop',
    arrows: false,
    gap: '3.2rem',
    focus: 'center',
    autoWidth: true,
    autoplay: true,
    pauseOnFocus: true,

    breakpoints: {
      1024: {
        type: 'loop',
        arrows: false,
        gap: '1rem',
        focus: 'center',
        autoWidth: true,
      },
    },
  }

  const pictureOption = {
    arrows: true,
    type: 'fade',
    perPage: 1,
    width: '100%',
    height: '100%',
    drag: false,
    rewind: true,
  }

  let settings = defaultOption

  switch (option) {
    case 'card':
      settings = cardOption
      break
    case 'cardProperty':
      settings = propertyCardOption
      break
    case 'picture':
      settings = pictureOption
      break
    default:
      settings = defaultOption
  }

  return (
    <ContainerSplide
      options={settings}
      $option={option}
      aria-labelledby="carousel"
      {...rest}
    >
      {children}
    </ContainerSplide>
  )
}
