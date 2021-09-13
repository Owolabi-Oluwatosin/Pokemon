import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Container,
  Text,
  Heading,
  Center
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

/**
* @author Owolabi Oluwatosin Daniel
* @function PokemonDetails
**/

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [datas, setDatas] = React.useState([]);
  const [isExtraSmallerScreen, isSmallScreen, isMediumScreen, isLargeScreen] = useMediaQuery([
    "(max-width:414px)",
    "(max-width:678px)",
    "(max-width:900px)",
    "(max-width:1300px)"
  ]);


  const allPokemonData = async (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          resolve(data);
        })
    })
  }


  useEffect(() => {
    const fetchPokemon = async () => {
      let res = await allPokemonData(`https://pokeapi.co/api/v2/pokemon`);
      // console.log(res)
      setDatas(res.results);
      setLoading(false);
    }
    fetchPokemon();
  }, [])


  return (

    <Container>
      {
        loading ? <Center><Heading fontSize="lg">loading...</Heading></Center> :
          <Grid templateColumns={isExtraSmallerScreen ?
            "repeat(1, 1fr)" : isSmallScreen ?
              "repeat(2, 1fr)" : isMediumScreen ?
                "repeat(3, 1fr)" : isLargeScreen ?
                  "repeat(4, 1fr)" : "repeat(5, 1fr)"} gap={6}>
            {
              datas.map((data, index) => {
                return (
                  <Box
                    key={index}
                    w="100%"
                    h="10"
                    as="span"
                    fontWeight="bold"
                    fontSize="lg"
                    my="20px"
                    p="10px"
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
                  >
                    <Text>{data.name}</Text>
                  </Box>
                )
              })
            }
          </Grid>
      }
    </Container>
  )
}
export default Home;