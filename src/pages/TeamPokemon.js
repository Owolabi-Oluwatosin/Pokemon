import React, { useEffect } from "react";
import {
    Container,
    Grid,
    VStack,
    Badge,
    Text,
    Center,
    Heading,
    useToast
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { PokemonComponent } from "../components/PokemonComponent";

/**
* @author Owolabi Oluwatosin Daniel
* @function TeamPokemon
**/

export const TeamPokemon = () => {
    const [pokemo, setPokemo] = React.useState([]);
    const toast = useToast();
    const [isExtraSmallerScreen, isSmallScreen, isMediumScreen, isLargeScreen] = useMediaQuery([
        "(max-width:414px)",
        "(max-width:678px)",
        "(max-width:900px)",
        "(max-width:1300px)"
    ]);

    useEffect(() => {
        const getPokemonFromLocalStorage = localStorage.getItem("pokemonStorage");
        if (getPokemonFromLocalStorage) {
            return setPokemo(JSON.parse(getPokemonFromLocalStorage));
        } else {
            return [];
        }
    }, []);

    const handleDelete = (pokemonItem) => {
        const newPokemo = pokemo.filter(pok => {
            return pok.pokemon.id !== pokemonItem.id
        });
        console.log(pokemonItem)
        localStorage.setItem("pokemonStorage", JSON.stringify(newPokemo));
        setPokemo(newPokemo);
        toast({
            title: `${pokemonItem.name} Pokemon as been deleted from your team!`,
            status: "success",
            duration: "5000",
            isClosable: true
        });
    }


    if (!pokemo || !pokemo.length) {
        return (
            <VStack
            >
                <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
                    <Text>No pokemon added yet!</Text>
                </Badge>
            </VStack>
        )
    }

    return (
        <Container maxW="container.xl" pt="20px">
            {
                pokemo.length < 0 ? <Center><Heading fontSize="lg">loading...</Heading></Center> :
                    <Grid
                        templateColumns={isExtraSmallerScreen ?
                            "repeat(1, 1fr)" : isSmallScreen ?
                                "repeat(2, 1fr)" : isMediumScreen ?
                                    "repeat(3, 1fr)" : isLargeScreen ?
                                        "repeat(4, 1fr)" : "repeat(5, 1fr)"} gap={6}>
                        {
                            pokemo.map((pok, index) => {
                                return (
                                    <PokemonComponent key={index} pok={pok} handleDelete={handleDelete} />
                                )
                            })
                        }
                    </Grid>
            }
        </Container>
    )

}