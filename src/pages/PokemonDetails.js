import React, { useEffect } from "react";
import {
  Grid,
  Container,
  Heading,
  Center,
  useToast
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { BoxComponent } from "../components/BoxComponent";

/**
* @author Owolabi Oluwatosin Daniel
* @function PokemonDetails
**/


export const PokemonDetails = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [datas, setDatas] = React.useState([]);
  const [pokemonDetail, setPokemonDetail] = React.useState([]);
  const [pokemon, setPokemon] = React.useState(
    () => JSON.parse(localStorage.getItem("pokemonStorage")) || []
  );
  const toast = useToast();
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

  const getDetailPokemon = (url) => {
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
      await pokemonDetails(res.results);
      setLoading(false);
    }
    fetchPokemon();
  }, [])

  const pokemonDetails = async (data) => {
    let _pokemonDetails = await Promise.all(data.map(async pokemon => {
      let pokemonResult = await getDetailPokemon(pokemon.url);
      return pokemonResult;
    }))
    setPokemonDetail(_pokemonDetails);
  }

  useEffect(() => {
    localStorage.setItem("pokemonStorage", JSON.stringify(pokemon))
  }, [pokemon])



  function addToTeam(detail) {
    const newPokemon = pokemon.filter(pok => { //filtering the array and return only matched pokemon 
      return pok.pokemon.id === detail.id
    });

    if (!newPokemon.length) {
      setPokemon([
        ...pokemon,
        {
          pokemon: detail
        }
      ])
    } else {
      toast({
        title: `${detail.name} Pokemon already added to your team!`,
        status: "error",
        duration: "5000",
        isClosable: true
      });

      return
    }
  }


  return (
    <Container maxW="container.xl" pt="20px">
      {
        loading ? <Center><Heading fontSize="lg">loading...</Heading></Center> :
          <Grid
            templateColumns={isExtraSmallerScreen ?
              "repeat(1, 1fr)" : isSmallScreen ?
                "repeat(2, 1fr)" : isMediumScreen ?
                  "repeat(3, 1fr)" : isLargeScreen ?
                    "repeat(4, 1fr)" : "repeat(5, 1fr)"} gap={6}>
            {
              pokemonDetail.map((detail, index) => {
                return (
                  <BoxComponent key={index} detail={detail} addToTeam={addToTeam} />
                )
              })
            }
          </Grid>
      }
    </Container>
  )

}