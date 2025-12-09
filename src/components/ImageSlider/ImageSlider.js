import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function ImageSlider() {
  return (
    <Splide
      TODO:// we have for that project // May need to change some of the options per project. i.e. 'perPage: 3' to how many pics
      options={{
        type: 'loop',
        perPage: 3,
        autoplay: true,
        gap: '1rem',
      }}
    >
      {/* Slide 1 for Set */}
      <SplideSlide>
        TODO:
        {/* Will need to change Img Info to Real Image Info for Projects */}
        <img src="/images/pic1.jpg" alt="Pic 1" />
      </SplideSlide>

      {/* Slide 2 for Set */}
      <SplideSlide>
        <img src="/images/pic2.jpg" alt="Pic 2" />
      </SplideSlide>

      {/* Slide 3 for Set */}
      <SplideSlide>
        <img src="/images/pic3.jpg" alt="Pic 3" />
      </SplideSlide>
    </Splide>
  )
}
