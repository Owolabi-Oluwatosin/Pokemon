import React from 'react';
import { Box, HStack, VStack, Spacer, Text, useColorMode, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaTimes, FaStream } from "react-icons/fa"


/**
* @author Owolabi Oluwatosin Daniel
* @function Header
**/

export const Header = (props) => {
    const [show, setShow] = React.useState(false);

    const toggleMenu = () => setShow(!show);

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <VStack
                alignItems="end"
                bg={show && "#116979"}
            >
                <Box
                    as="span"
                    display={{ base: "block", md: "none" }}
                    px="20px"
                    color={colorMode === "light" && "#116979"}
                    fontSize="xl"
                    onClick={toggleMenu}
                    pt="10px"
                >
                    {show ?
                        <IconButton icon={<FaTimes color="#116979" />} />

                        :
                        <IconButton icon={<FaStream color="#116979" />} />
                    }
                </Box>
            </VStack>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                bg={colorMode === "light" && "#116979"}
                boxShadow={colorMode === "dark" && "lg"}
                w="100%" p={4} color="white"
            >
                {
                    show ?
                        <VStack
                            alignItems="end"
                        >
                            <Text>PokemonList</Text>
                            <Spacer />
                            <Link to="/">Home</Link>
                            <Link to="/pokemon-details">Pokemon Details</Link>
                            <Link to="/team-pokemon">User Pokemon</Link>
                            <Spacer />
                            {colorMode === "light" ? <FaSun cursor="pointer" onClick={toggleColorMode} /> : <FaMoon cursor="pointer" onClick={toggleColorMode} />}
                        </VStack>
                        :
                        <HStack spacing="24px">
                            <Text>PokemonList</Text>
                            <Spacer />
                            <Link to="/">Home</Link>
                            <Link to="/pokemon-details">Pokemon Details</Link>
                            <Link to="/team-pokemon">User Pokemon</Link>
                            <Spacer />
                            {colorMode === "light" ? <FaSun cursor="pointer" onClick={toggleColorMode} /> : <FaMoon cursor="pointer" onClick={toggleColorMode} />}
                        </HStack>
                }

            </Box>
        </>
    )

}

