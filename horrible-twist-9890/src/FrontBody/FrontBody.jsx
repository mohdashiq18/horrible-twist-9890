import { Box, Button, Flex, Grid,Image,Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeftIcon,ChevronRightIcon } from '@chakra-ui/icons'

export const FrontBody=()=>{
const Ima=["https://images.ctfassets.net/5de70he6op10/sElVOkh1LlYRV8lFchscj/3fa66885dac24294a26ad182591b8639/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp","https://images.ctfassets.net/5de70he6op10/4oTq1foXQNa8hecONKjGA6/a091e50197f15deccb8f606f78358de6/ALiving_HPG_LS_01-2_2x.jpg?w=2640&q=80&fm=webp","https://images.ctfassets.net/5de70he6op10/3no3vcSJTVoCfU0Xmz31Vn/e2f584c43ba1ab614e3376db991de762/ALiving_HPG_LS_01-3_2x.jpg?w=2640&q=80&fm=webp"]
const [count,setCount]=useState(0)

const imgData=[["https://images.urbndata.com/is/image/Anthropologie/4112017560198_001_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100",""]]
    return (
        <>
        <Box pl={20} pr={20}>
        <Grid mt={8} templateColumns='repeat(4, 1fr)' gap={6}>
                <Image src="https://images.ctfassets.net/5de70he6op10/66gBHQY9rlKtf5IItLdMCa/eb48274717871eb64ba75900e042218f/LS_M0_Banner_a.jpg?w=630&q=80&fm=webp"/>
                <Image src="https://images.ctfassets.net/5de70he6op10/7FtJ5t3fiV8RM8Q80ufmqS/4b8d59935ecd871b8f0b1055665bbe09/LS_M0_Banner_b.jpg?w=630&q=80&fm=webp"/>
                <Image src="https://images.ctfassets.net/5de70he6op10/6Rg6bbVw5EcY8ZFGylD3Lt/52e96081fac4772cbd0e5aabda58219a/LS_M0_Banner_c.jpg?w=630&q=80&fm=webp"/>
                <Image src="https://images.ctfassets.net/5de70he6op10/2jP2GsJVfSqC66yrxJJPOX/a4b3ecfc7c2a6de75aa10b764c9cfe9f/LS_M0_Banner_d.jpg?w=630&q=80&fm=webp"/>
            </Grid>
            <Grid mt={10} templateColumns='repeat(2, 1fr)' gap={6}>
                <Image src="https://images.ctfassets.net/5de70he6op10/iMM14RuhLCVUGYVmrKvc9/b97a6a1d371ca72bbc1ae9aaf4a11f26/LS_M1a.jpg?w=1302&q=80&fm=webp"/>
                
                <Image src="https://images.ctfassets.net/5de70he6op10/6pgHrENVmjeLfmWwwGZuiG/7087546a3b3529f4de0de0ccedca384e/LS_M1b.jpg?w=1302&q=80&fm=webp"/>
            </Grid>
            
            <Flex justifyContent="space-around" marginTop="-70px">
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop new clothing & accessories</Link>
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop jacckets & coat</Link>
            </Flex>
            <Grid mt={20} templateColumns='repeat(3, 1fr)' gap={6}>
                <Image src="https://images.ctfassets.net/5de70he6op10/3w8rGkLqypJyMI94W5jAz6/b1a47476e9fa52841b06bcbf50e8c337/LS_M2a.jpg?w=856&q=80&fm=webp"/>
                <Image src="https://images.ctfassets.net/5de70he6op10/4dc0UZzh9jWMuJPdVGcr2v/8a7ace4023132337f5e9a81d4ac819f4/LS_M2b.jpg?w=856&q=80&fm=webp"/>
                <Image src="https://images.ctfassets.net/5de70he6op10/28WqNdcNbssmLjzWncssjE/a9ef1a745783404fb8f054796735b3b1/LS_M2c.jpg?w=856&q=80&fm=webp"/>
            </Grid>
            <Flex justifyContent="space-around" marginTop="-70px">
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop sweaters</Link>
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop cold-weather accessories</Link>
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop pants</Link>
            </Flex>
            <Grid mt={20}>
                <Image  src={Ima[count]}/>
            </Grid>
            <Flex marginTop="-18rem" justifyContent="space-between">
                <button style={{backgroundColor:"white",padding:"6px"}} disabled={count<=0} onClick={()=>setCount(count-1)}>{<ChevronLeftIcon fontSize="2xl"/>}</button>
                <button style={{backgroundColor:"white",padding:"6px"}} disabled={count>=2} onClick={()=>setCount(count+1)}>{<ChevronRightIcon fontSize="2xl"/>}</button>
            </Flex>
            <Flex justifyContent="space-around" marginTop="200px">
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop gifts for the home </Link>
            
            </Flex>
            <Grid mt={20}>
                <Image src="https://images.ctfassets.net/5de70he6op10/6YcDf5MI12J4gw9cOaz9WP/70f858a9574c2e0ff43b2b7bdc6e61af/LS_M4.jpg?w=2641&q=80&fm=webp"/>
            </Grid>
            <Flex justifyContent="space-around" marginTop="-70px">
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop dresses</Link>
            
            </Flex>

            <Grid mt={20} templateColumns='repeat(3, 1fr)' gap={6}>
                <Image src="https://images.ctfassets.net/5de70he6op10/7fzJY7mnX3XvCv1RNf6mTp/79d5f396c261126621d9a105c88faaf3/RR_Kitchen_Dining.jpg?w=856&q=80&fm=webp"/>
                <Image src="https://images.ctfassets.net/5de70he6op10/6qpsukHAAtvED0Tc12y84m/645098d9a2f3d0da07fc3ad86e11a228/RR_Bedding.jpg?w=856&q=80&fm=webp"/>
                <Image src="https://images.ctfassets.net/5de70he6op10/7xfJSO2og2DDZa4IpAilFz/882783ed4607343a932d4d975fe22be6/RR_Furniture.jpg?w=856&q=80&fm=webp"/>
            </Grid>
            <Flex justifyContent="space-around" marginTop="-70px">
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop kitchen & dining</Link>
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop bedding, pillows & throws</Link>
            <Link to="/New_cloths" style={{paddingRight:"20px",paddingLeft:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",fontSize:"13px"}}>shop furniture</Link>
            </Flex>
            <Text borderBottom="1px solid black" pb={3} fontSize="xl" pt={5} mt={10}>
            You May Also Like
            </Text>
            
            <Grid templateColumns='repeat(5, 1fr)' gap={6} mt={8}>
                <Link>
                <Image src="https://images.urbndata.com/is/image/Anthropologie/79660395_066_b?$an-category$&qlt=80&fit=constrain"/>
                
                <Text mt={2} fontSize="sm">By Anthropologie Rosette Tulle Sleeves</Text>
                </Link>
                <Box>
                <Image src="https://images.urbndata.com/is/image/Anthropologie/4114383100025_090_b2?$an-category$&qlt=80&fit=constrain"/>
                <Text mt={2} fontSize="sm">Aldomartins Scenic Swearter Coat</Text>
                </Box>
                <Box>
                <Image src="https://images.urbndata.com/is/image/Anthropologie/4112257230163_001_b2?$an-category$&qlt=80&fit=constrain"/>
                <Text mt={2} fontSize="sm">Sunday in Brooklyn Pearl Ponte Top</Text>
                </Box>
                <Box>
                <Image src="https://images.urbndata.com/is/image/Anthropologie/4130647160147_009_b2?$an-category$&qlt=80&fit=constrain"/>
                <Text mt={2} fontSize="sm">By Anthropologie Printed Wrap Dress</Text>
                </Box>
                <Box>
                <Image src="https://images.urbndata.com/is/image/Anthropologie/4122382010315_001_b2?$an-category$&qlt=80&fit=constrain"/>
                <Text mt={2} fontSize="sm">The Jada High-Risk Wide-Leg Jeans</Text>
                </Box>
                
            </Grid>
            
        </Box>
        </>
    )
}