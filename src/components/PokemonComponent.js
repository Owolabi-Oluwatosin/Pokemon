import React, { useEffect } from 'react';
import {
    Box,
    Image,
    Badge,
    Text,
    VStack,
    IconButton
} from "@chakra-ui/react";
import { FaTrash } from 'react-icons/fa';

/**
* @author
* @function Box
**/

export const PokemonComponent = ({pok, handleDelete}) => {
    
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={pok.pokemon.sprites.back_default} alt={pok.pokemon.sprites.back_default} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {pok.pokemon.name}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        &bull; {pok.pokemon.species.name}
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {pok.pokemon.types.map(type => {
                        return (
                            type.type.name
                        )
                    })}
                </Box>

                <Box>
                    {pok.pokemon.weight}
                    <Box as="span" color="gray.600" fontSize="sm">
                        kg
                    </Box>
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {pok.pokemon.height} m
                    </Box>
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                    <IconButton icon={<FaTrash />} onClick={() => handleDelete(pok.pokemon)} />
                </Box>
            </Box>
        </Box>
    )

}