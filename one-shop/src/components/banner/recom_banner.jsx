import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Rec_banner1 from '../images/Rec_banner1.png'
import { BsArrowRight } from 'react-icons/bs'

function recom_banner() {
    return (
        <>
            <Box my={'5%'} display={'grid'} gap={'4%'} gridTemplateColumns={{ base: 'auto ',md:'auto auto',xl:'auto auto auto' }}>
                <Box position={'relative'} w={'100%'} h={"300px"} bg={'#DEDEE2'}>
                    <Box mx={'8%'} my={'3%'} w={'60%'}>
                        <Text fontSize={{base:'30px',md:'26px',xl:'28px'}} fontWeight='600'>Моторные масла Genesis</Text>
                        <Button mt={'10%'} color={'white'} bg={'#5946D7'} variant={'unset'}> <Text mr={'3%'}>Перейти</Text> <BsArrowRight /> </Button>
                    </Box>
                    
                    <Image position={'absolute'} right={'0'} bottom={'0'} w={'80%'} src={Rec_banner1}/>
                    
                </Box>
                <Box position={'relative'} w={'100%'} h={"300px"} bg={'#DEDEE2'}>
                    <Box mx={'8%'} my={'3%'} w={'60%'}>
                        <Text fontSize={{base:'30px',md:'26px',xl:'28px'}} fontWeight='600'>Моторные масла Genesis</Text>
                        <Button mt={'10%'} color={'white'} bg={'#5946D7'} variant={'unset'}> <Text mr={'3%'}>Перейти</Text> <BsArrowRight /> </Button>
                    </Box>
                    
                    <Image position={'absolute'} right={'0'} bottom={'0'} w={'80%'} src={Rec_banner1}/>
                    
                </Box>
                <Box position={'relative'} w={'100%'} h={"300px"} bg={'#DEDEE2'}>
                    <Box mx={'8%'} my={'3%'} w={'60%'}>
                        <Text fontSize={{base:'30px',md:'26px',xl:'28px'}} fontWeight='600'>Моторные масла Genesis</Text>
                        <Button mt={'10%'} color={'white'} bg={'#5946D7'} variant={'unset'}> <Text mr={'3%'}>Перейти</Text> <BsArrowRight /> </Button>
                    </Box>
                    
                    <Image position={'absolute'} right={'0'} bottom={'0'} w={'80%'} src={Rec_banner1}/>
                    
                </Box>

            </Box>
        </>
    )
}

export default recom_banner