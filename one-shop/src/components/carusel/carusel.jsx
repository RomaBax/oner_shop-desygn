import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Box borderRadius='10px' >
        <Slider {...settings}>
          <div>
            <Image src="https://petronas.sindikaoil.ru/themes/petronasrus/assets/images/temp/product-welcome.png" alt="img error" width='100%' h='60vh' objectFit='cover' borderRadius='10px' />
          </div>
          <div>
            <Image src="https://www.alpetmadeniyaglari.com/wp-content/uploads/2023/06/alpett.jpg" alt="img error" width='100%' h='60vh' objectFit='cover' borderRadius='10px' />
          </div>
        </Slider>
      </Box>
    );
  }
}