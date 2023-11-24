import { Box, Button, Container, Image, Input, Text } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { SiGooglemaps } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { IoGrid } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../images/logo.png'
import { useEffect, useState } from "react";

function Headers() {

  let [ScrolL, setScrolL] = useState(true)
    useEffect(() => {
        let handelScroll = () => {
            if (window.scrollY > 50) {
              setScrolL(false)
            }
            else{
              setScrolL(true)
            }
        }
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [])

    return (
      <Box h='140px'>
        <Box w="100%" bg="white" boxShadow='0px 5px 20px 0px rgba(44, 41, 51, 0.10)' position='fixed' top='0' zIndex='10'>
          <Container px={{base:"5%",lg:"0%"}} maxW={{base:'100%',lg:"80%"}}>
            <Box display="flex" alignItems="center" justifyContent="space-between" h="70px" >
              <Image src={logo} alt="logo is not" />
              <Box border={'1px solid #DEDEE2'}  w={{base:'50%',xl:'40%'}} display="flex" alignItems="center" bg="#F4F5F6" borderRadius="10px">
                <Input color={'#505255'} placeholder="Введите номер запчасти или VIN " variant="unset" bg="transparent" />
                <Button variant={'unstyled'} color={'#2E1066'} bg="#F4F5F6">
                  <CiSearch size="26px" />
                </Button>
              </Box>
              <Box display="flex" alignItems="center">
                <SiGooglemaps color="rgba(89, 70, 215, 1)" size="20px" />
                <Text display={{base:'none',xl:"inline-block"}} fontSize={{base:"14",'2xl':'18px'}} p="0 5px">Санкт-Петербург</Text>
              </Box>
             <a href="tel:+998938918811">
              <Box display="flex" alignItems="center">
                <BsFillTelephoneFill color="rgba(89, 70, 215, 1)" size="20px" />
                <Text display={{base:'none',xl:"inline-block"}} fontSize={{base:"14",'2xl':'18px'}} p="0 5px"  fontWeight="600">
                  +7 (347) 229-46-45
                </Text>
              </Box>
             </a>
              <Box display="flex" alignItems="center">
                <HiUsers color="rgba(89, 70, 215, 1)" size="22px" />
                <Text display={{base:'none',xl:"inline-block"}} fontSize={{base:"14",'2xl':'18px'}} p="0 5px">Вход / Регистрация</Text>
              </Box>
            </Box>
          </Container>
          <Box w="100%" h="2px" bg="gray.200"></Box>
          <Container px={{base:"5%",lg:"0%"}} maxW={{base:'100%',lg:"80%"}} transition='all 0.3s ease' h={ScrolL ? "70px" : '0px'} overflow='hidden'>
            <Box display="flex" alignItems="center" justifyContent="space-between" h="70px">

              <Box display="flex" alignItems="center" justifyContent="center" p="6px 15px" bg="rgba(89, 70, 215, 1)" borderRadius="10px">
                <IoGrid color="white" size="20px" />
                <Button color="white" p="0 0 0 10px" variant="unset">
                  Все категории
                </Button>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center" p="6px 15px" bg="white" _hover={{bg:"#F4F5F6"}} transition='all 0.2s ease' borderRadius="10px" >
                <Button color="#1B1D1F" p="0 0 0 10px" variant="unset">
                  Запчасти для ТО
                </Button>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center" p="6px 15px" bg="white" _hover={{bg:"#F4F5F6"}} transition='all 0.2s ease' borderRadius="10px" >
                <Button color="#1B1D1F" p="0 0 0 10px" variant="unset">
                  Автомасла
                </Button>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center" p="6px 15px" bg="white" _hover={{bg:"#F4F5F6"}} transition='all 0.2s ease' borderRadius="10px" >
                <Button color="#1B1D1F" p="0 0 0 10px" variant="unset">
                  Оригинальные запчасти
                </Button>
              </Box>

              <Box display={{base:'none',lg:'flex'}} alignItems="center" justifyContent="center" p="6px 15px" bg="white" _hover={{bg:"#F4F5F6"}} transition='all 0.2s ease' borderRadius="10px" >
                <Button color="#1B1D1F" p="0 0 0 10px" variant="unset">
                  Неоригинальные запчасти
                </Button>
              </Box>

              <Box display={{base:'none',lg:'flex'}} alignItems="center" justifyContent="center" p="6px 15px" bg="white" _hover={{bg:"#F4F5F6"}} transition='all 0.2s ease' borderRadius="10px" >
                <Button color="#1B1D1F" p="0 0 0 10px" variant="unset">
                  Лампочки
                </Button>
              </Box>

              <Box display={{base:'none',lg:'flex'}} alignItems="center" justifyContent="center" p="6px 15px" bg="white" _hover={{bg:"#F4F5F6"}} transition='all 0.2s ease' borderRadius="10px" >
                <Button color="#1B1D1F" p="0 0 0 10px" variant="unset">
                  Аккумуляторы
                </Button>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center" p="6px 15px" bg="white" _hover={{bg:"#F4F5F6"}} transition='all 0.2s ease' borderRadius="10px">
                
                <Button color="#1B1D1F" gap={'5%'} p="0 0 0 0px" variant="unset">
                  <FaShoppingCart mr={'5%'} color="rgba(89, 70, 215, 1)" size="20px" />
                  <Text display={{base:"none",lg:'flex'}}>Корзина</Text>
                </Button>
              </Box>

            </Box>
          </Container>
        </Box>
      </Box>
    );
}

export default Headers