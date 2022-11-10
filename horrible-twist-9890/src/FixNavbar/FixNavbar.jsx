import { Box, Button, Flex, Input, Link, Image } from "@chakra-ui/react"
import { useState } from "react"
import { NavLink } from "react-router-dom"


export const FixNavbar = () => {

    return (
        <>
            <Flex justifyContent="space-between" >
                <Box ml={10} display="flex" >
                    <Link pt={5} pl={8} pr={8} borderTop="3px solid teal" borderLeft="1px solid #c2c2d6" borderRight="1px solid #c2c2d6">*ANTHROPOLOGIE*</Link>
                    <Image p={5} borderRight="1px solid #c2c2d6" src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" />
                </Box>
                <Box mr={10}>
                    <Input mt={3} type="search" placeholder="Seach Anthropologie"></Input>
                </Box>
            </Flex>
            <Flex gap="30px" pl={20}  border="0.5px solid #c2c2d6">

                {/* <Link style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>
                    Gift
                </Link> */}
                <Link pt={3} pb={3} color="#b52016" to="/" end>Gift</Link>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/new" >New!</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/dresses" >Dresses</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/clothing" >Clothing</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/Kitchen">Shoes</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/accessories">Accessories</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/wadding">BHLDN Wadding</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/furniture">Home & Furniture</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/beauty">Beauty & Wellness</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/outdoor">Garden & Outdoor</NavLink>
                <NavLink className="Nav" style={{paddingTop:"11px"}} to="/sale">Sale</NavLink>

            </Flex>
        </>
    )
}