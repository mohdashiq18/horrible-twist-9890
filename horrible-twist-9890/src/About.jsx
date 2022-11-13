import { Box,Text,Link } from "@chakra-ui/react"
import { useState } from "react"


export const About=()=>{
    const [hide,setHide]=useState(true)
    return (
        <>
        <Box pl={20} pt={6} pr={20}>
        <Text fontSize="md">About Us</Text>
        <Text mt={6} fontSize="sm">
          Our mission at Anthropologie has always been to surprise and delight
          you with unexpected, distinctive finds for your closet and home. We
          source and craft all of our products with care, ensuring that any
          treasure you find at Anthropologie is unique, just like you. Explore
          our dress shop to find styles and fits perfect for any occasion, from
          cocktail parties to weddings to casual daytime silhouettes. Browse
          party skirts, wide-leg pants{hide?<span>...</span>:<span>pants and jeans, and blouses that will turn heads. Complete your look with uncommon accessories—think only-here slides and head-turning totes. Discover our expansive home collections, from furniture to curtains, decorative pillows to duvets, wall art to Moroccan-inspired rugs. Looking for a housewarming gift? Try a coffee table book, original glassware or a set of coasters.</span>}
        </Text>
        <Link color="teal" textDecoration="underline" onClick={()=>setHide(!hide)}>{hide?"Read More":"Hide"}</Link>
      </Box>
        </>
    )
}