import { Box, Heading, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import Masla from "../images/Masla.png"
import Products from "../mains/props/product";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Box>
        
        <Slider {...settings}>
          <Box>
          <Box w="100%" minH="420px" border="1px solid rgba(0, 0, 0, 0.07)" borderRadius='10px' bg={'#5946D7'} boxShadow='0px 4px 20px rgba(0, 0, 0, 0.07)'>
                            <Heading m={'5% 8%'} color={'white'} size={'lg'}>Автомасла №1 <br />
                                от официальных
                                дилеров</Heading>
                                <Box height={'270px'} position={'relative'}>
                                <Image right={'0'} bottom={'0'} w={'250px'} position={'absolute'}    src={Masla} alt="img"/>
                                </Box>
                        </Box>
          </Box>
          <Box>
          <Products />
          </Box>
          <Box>
          <Products />
          </Box>
          <Box>
          <Products />
          </Box>
         
        </Slider>
      </Box>
    );
  }
}