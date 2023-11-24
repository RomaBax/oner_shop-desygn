import { Box, Button, Container, Grid, Text } from "@chakra-ui/react";
import SimpleSlider from "../carusel/carusel";
import Product_carausel from "../carusel/product_carausel";
import Rectangle from "./props/Rectangle";
import Recom_banner from "../banner/recom_banner";

function Main() {
    return (
        <Box w="100%" bg='#FAFAFD' >
            <Container maxW="80%" p='30px 0'>
                <Box>
                    <SimpleSlider />
                    <Grid templateColumns={{ base: 'auto', md: 'auto auto', xl: 'auto auto auto' }} mt='30px' gap='2px' bg='gray.200' borderRadius='20px' overflow='hidden' boxShadow='0 4px 10px rgba(0, 0, 0, 0.10)'>
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={true} />
                    </Grid>
                </Box>
            </Container>
            <Box bg='white'>
                <Container maxW="80%" p='30px 0 0'>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Text color='#1B1D1F' fontSize='30px' fontWeight='600'>Автомасла</Text>
                        <Box bg='#F4F5F6' borderRadius='5px'>
                            <Button variant='unset' color="#2E1066">Все автомасла</Button>
                        </Box>
                    </Box>
              

                    <Product_carausel/>
                    <Recom_banner/>

                </Container>
            </Box>
        </Box>
    )
}

export default Main