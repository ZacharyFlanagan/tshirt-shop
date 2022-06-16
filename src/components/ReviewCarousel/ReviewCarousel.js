import React from 'react'
import { Card, Typography } from 'antd';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import QuoteIcon from '../../assets/quote.png'

const ReviewCarousel = () => {
  const { Title } = Typography;
  return (
    <Card style={{ marginTop: 30, borderRadius: 8 }}>
        <div style={{ backgroundColor: 'black', padding: 5, height: 70, width: 70, borderRadius: '50%', position: 'absolute', top: -20, right: -20}}>
            <img style={{ display: 'block', height: 40, width: 40, margin: '10px auto auto' }} src={QuoteIcon} />
        </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={4}
        isPlaying
        interval={8000}
        infinite
      >
        <Slider >
          <Slide index={0}>
            <Title level={4}>
                "My order was shipped within two days and arrived correctly. I'll purchasing again next year."
                -A.A
            </Title>
          </Slide>
          <Slide index={1}>
            <Title level={4}>
                "We use The T-shirt Shop for every event at my company. I love how simple the process is."
                -J.W
            </Title>
          </Slide>
          <Slide index={2}>
            <Title level={4}>
                "Good selection of fabrics with reasonable pricing. The owner is very friendly"
                -Z.F
            </Title>
          </Slide>
          <Slide index={3}>
            <Title level={4}>
               "I asked for a custom design and the customer support guided me through the steps. It took 5 minutes to get what I wanted."
               -O.P
            </Title>
          </Slide>
        </Slider>
      </CarouselProvider>
    </Card>
  )
}

export default ReviewCarousel