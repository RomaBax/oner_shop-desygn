import { Box, Button, Image, Text } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";

function Products() {
    return (
      <>
        <Box w="100%" minH="420px" border="1px solid rgba(0, 0, 0, 0.07)" borderRadius='10px' boxShadow='0px 4px 20px rgba(0, 0, 0, 0.07)'>
            <Box display='flex' alignItems='center' justifyContent='center' w='100%' h='280px'>
                <Image src='https://imgpng.ru/d/tire_PNG40.png' w='140px' />
            </Box>
            <Box p='10px'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Text fontSize='13px' fontWeight='300'>Артикул: 153789</Text>
                    <Text fontSize='13px' fontWeight='300'>4.0 (51)</Text>
                </Box>
                <Box mt='10px'>
                    <Text fontSize='15px'>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</Text>
                </Box>
                <Box mt='10px' h='45px'>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Box display='flex' alignItems='self-start'>
                            <Text>2 334 ₽</Text>
                            <Text ml='10px' textDecoration='line-through' color='gray' fontSize='13px'>2 864 ₽</Text>
                        </Box>
                        <Box bg='transparent' border='1px solid rgba(107, 89, 204, 1)' borderRadius='10px'>
                            <Button variant='unset' p='0px'><CiShoppingCart fontSize='20px' color="rgba(107, 89, 204, 1)"/></Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
      </>
    );
}

export default Products;