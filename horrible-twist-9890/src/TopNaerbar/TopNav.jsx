import { useState } from "react"
import { Box,Image } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'

const navhead = [["après all day, the Anthro way!", "GONE SKIING", "shop the new collection"], ["Ready...Get Set...for Thanksgiving!", "Order by 11/11, 1PM EST with Standard Shipping", "spice up your holiday"]]
const NavColor = ["#b52016", "#73490f"]
export const Nav = () => {
  const [count, setCount] = useState(0)
  const onhendel = () => {
    if (count == 1) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }
  const onhendl = () => {
    count === 0 ? setCount(1) : setCount(count - 1)
  }
  // eslint-disable-next-line
  return <>
 
    <Box bg={NavColor[count]} w='100%' p={3} color='white'>
      <Flex color='white' justifyContent='space-between' gap="20">
        <button style={{ background: "none", border: "0px" }} onClick={onhendl}>{<ArrowLeftIcon color="white" />}</button>
        <p style={{ fontSize: "15px" }}>{navhead[count][0]}<span style={{ marginLeft: "30px" }}>{navhead[count][1]}</span><span style={{ marginLeft: "30px" }}>{navhead[count][2]}</span></p>
        <button style={{ background: "none", border: "0px" }} onClick={onhendel}>{<ArrowRightIcon color="white" />}</button>
      </Flex>

    </Box>

  </>
}