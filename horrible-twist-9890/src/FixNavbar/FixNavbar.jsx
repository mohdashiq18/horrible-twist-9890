import { Box, Button, Flex, Input,Text, Image,InputRightElement,InputGroup } from "@chakra-ui/react"
import { useState } from "react"
import { NavLink , Link} from "react-router-dom"
import BasicUsage from "../MidNavbar/MidNavbar"
import { BsSearch } from "react-icons/bs";
import {IoBagOutline} from "react-icons/io5"
export const FixNavbar = () => {

    return (
        <>
            <Box position="sticky" w="100%" bg="white" top={0} >
            <BasicUsage/>
            <Flex justifyContent="space-between" position="static" >
                <Box ml={10} display="flex" >
                    <Link to="/" 
                    style={{paddingTop:"16px",paddingLeft:"22px",paddingRight:"22px",borderTop:"3px solid teal",borderLeft:"1px solid #c2c2d6", borderRight:"1px solid #c2c2d6"}}
                    >*ANTHROPOLOGIE*</Link>
                    <Image p={5} borderRight="1px solid #c2c2d6" src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" />
                </Box>
                <Flex mr={10}>
                    {/* <Input mt={3} type="search" placeholder="Seach Anthropologie"></Input> */}


                    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type="search"
        mt={3}
        placeholder='Seach Anthropologie'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm'fontSize="xl" color="teal" mt={6} bg="none" >
          {<BsSearch />}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Link style={{fontSize:"28px",marginTop:"17px",color:"teal",marginLeft:"10px"}}>{<IoBagOutline/>}</Link> 
                </Flex>
            </Flex>
            <Flex gap="30px" pl={20}  border="0.5px solid #c2c2d6">

                {/* <Link style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>
                    Gift
                </Link> */}
                <Link  style={{paddingTop:"15px",paddingBottom:"15px",fontSize:"14px",color:"#b52016"}}
                 to="/" end>Gift</Link>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/new" >New!</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/dresses" >Dresses</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/clothing" >Clothing</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/Kitchen">Shoes</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/accessories">Accessories</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/wadding">BHLDN Wadding</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/furniture">Home & Furniture</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/beauty">Beauty & Wellness</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/outdoor">Garden & Outdoor</NavLink>
                <NavLink   className="Nav" style={{paddingTop:"11px",fontSize:"14px",marginTop:"5px"}} to="/sale">Sale</NavLink>

            </Flex>
            </Box>
        </>
    )
}