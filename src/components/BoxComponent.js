import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Badge,
  Button,
  SimpleGrid
} from "@chakra-ui/react";

/**
* @author
* @function Box
**/

export const BoxComponent = ({ detail, addToTeam }) => {

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={detail.sprites.back_default} alt={detail.sprites.front_default} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {detail.name}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            &bull; {detail.species.name}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {detail.types.map(type => {
            return (
              type.type.name
            )
          })}
        </Box>

        <Box>
          {detail.weight}
          <Box as="span" color="gray.600" fontSize="sm">
            kg
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {detail.height} m
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Button fontSize="sm" onClick={() => addToTeam(detail)}>Add to team</Button>
        </Box>
      </Box>
    </Box>
  )

}