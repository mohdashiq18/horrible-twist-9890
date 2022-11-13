import {
  Flex,
  Grid,
  Image,
  Box,
  Link,
  Button,
  Text,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const NewAll = () => {
  const [showprodunt, setShowprodunt] = useState(false);
  const [price, setPrice] = useState(false);
  const [colorBox, setColorBox] = useState(false);
  const [style, setStyle] = useState(false);
  const [sleeve, setSleeve] = useState(false);
  const [length, setLength] = useState(false);
  const [neckline, setNeckline] = useState(false);
  const [occasion, setOccasion] = useState(false);
  const [brand, setBrand] = useState(false);
  const [size, setSize] = useState(false);
  const [stock, setStock] = useState(false);
  const [type, setType] = useState(false);
  const [pickup, setPickup] = useState(false);
  const onpickup = () => {
    setPickup(!pickup);
  };
  const onstock = () => {
    setStock(!stock);
  };
  const ontype = () => {
    setType(!type);
  };
  const onsize = () => {
    setSize(!size);
  };
  const onbrand = () => {
    setBrand(!brand);
  };
  const onoccasion = () => {
    setOccasion(!occasion);
  };
  const onnickline = () => {
    setNeckline(!neckline);
  };
  const onsleeve = () => {
    setSleeve(!sleeve);
  };
  const onlength = () => {
    setLength(!length);
  };
  const onstyle = () => {
    setStyle(!style);
  };
  const colorclick = () => {
    setColorBox(!colorBox);
  };
  const onclick = () => {
    setShowprodunt(!showprodunt);
  };
  const onprice = () => {
    setPrice(!price);
  };
  return (
    <>
      <Flex
        justifyContent="center"
        gap={2}
        fontSize="sm"
        mt={6}
        fontWeight="light"
      >
        <Link>Clothing</Link>/<Link>New! </Link>
      </Flex>
      <Flex justifyContent="space-evenly" gap={20} pr={20} pl={20} mt={6}>
        <Box w={170}>
          <Text
            borderBottom="1px solid black"
            fontSize="sm"
            fontWeight="medium"
            pb={3}
          >
            Browse By:
          </Text>
          <Grid gap={-3}>
            <Link fontSize="sm" mt={3}>
              New!
            </Link>
            <br />
            <hr width="20px" />
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-2}>
              New Today
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              New This Week
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Dresses
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Jackets
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Jeans
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Jumpsuits
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Lounge & Activewear
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Pants
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Petites
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Plus
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Shorts
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Skirts
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Sleepwear & Intimates
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Sweaters
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Swimwear
            </Link>
            <br />
            <Link fontSize="sm" fontWeight="normal" mt={-4}>
              Tops
            </Link>
          </Grid>

          <Text
            borderBottom="1px solid black"
            mt={10}
            fontSize="sm"
            fontWeight="medium"
            pb={3}
          >
            Filter By:
          </Text>
          <Flex justifyContent="space-between" mt={4}>
            <Text fontWeight="semibold">Product Type</Text>
            <button onClick={onclick} fontSize="20px">
              {showprodunt ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {showprodunt ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (317)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Dresses (219)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (213)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (182)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Pants (142)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jeans (118)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sleepwear (67)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Skirts (62)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Cover-Ups (49)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Swim Tops (29)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jumpsuits & Rompers (27)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Undies (26)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (25)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Swim Bottoms (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                One-Piece Swimsuits (17)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Shorts (9)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sets (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweatshirts (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Apparel (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Boots (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Activewear One-Pieces (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Flats (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Shapewear (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (1)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* style Box */}
          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Style</Text>
            <button onClick={onstyle} fontSize="20px">
              {style ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>

          {style ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                A-Line (112)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Active (9)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Ankle Boot (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Babydoll (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bandeau (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bikini (3)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Blazer (28)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Blouse (126)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bodysuit (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Boho (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bomber (3)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bootcut (25)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Boyshort (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bralette (23)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Brief (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Buttondown (54)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Caftan (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Cami (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Cape (3)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Cardigan (72)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Cheeky (3)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Chino (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Coat (61)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Collar (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Column (76)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* length Box */}
          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Length</Text>
            <button onClick={onlength} fontSize="20px">
              {length ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {length ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Full-Length (129)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Mini (99)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Midi (95)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Ankle (84)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Long (84)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Maxi (71)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Mid-Length (71)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Cropped (30)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Short (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Knee Length (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                High-Low (1)
              </Box>
            </Box>
          ) : (
            ""
          )}
          {/* Sleeve Length */}
          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Sleeve Length</Text>
            <button onClick={onsleeve} fontSize="20px">
              {sleeve ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {sleeve ? (
            <Box mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Long Sleeve (514)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sleeveless (155)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Short Sleeve (90)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                3/4 Sleeve (27)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Neckline */}
          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Neckline</Text>
            <button onClick={onnickline} fontSize="20px">
              {neckline ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {neckline ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (150)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (77)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hats (42)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hair (41)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Rings (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jewelry (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (16)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (15)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bracelets (14)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Eyewear (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (8)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Gloves (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Belts (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Veils (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tights (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (1)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Occasion */}
          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Occasion</Text>
            <button onClick={onoccasion} fontSize="20px">
              {occasion ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {occasion ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (150)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (77)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hats (42)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hair (41)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Rings (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jewelry (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (16)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (15)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bracelets (14)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Eyewear (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (8)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Gloves (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Belts (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Veils (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tights (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (1)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Price */}
          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Price</Text>
            <button onClick={onprice} fontSize="20px">
              {price ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {price ? (
            <Box mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Less than $25 (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                $25 - $50 (159)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                $50 - $100 (138)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                $100 - $200 (63)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                $200 - $500 (60)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                More than $500 (19)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Color */}

          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Color</Text>
            <button onClick={colorclick} fontSize="20px">
              {colorBox ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {colorBox ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (150)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (77)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hats (42)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hair (41)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Rings (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jewelry (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (16)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (15)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bracelets (14)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Eyewear (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (8)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Gloves (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Belts (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Veils (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tights (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (1)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Brand */}
          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Brand</Text>
            <button onClick={onbrand} fontSize="20px">
              {brand ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {brand ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (150)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (77)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hats (42)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hair (41)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Rings (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jewelry (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (16)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (15)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bracelets (14)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Eyewear (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (8)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Gloves (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Belts (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Veils (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tights (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (1)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Size */}

          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Size</Text>
            <button onClick={onsize} fontSize="20px">
              {size ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {size ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (150)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (77)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hats (42)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hair (41)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Rings (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jewelry (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (16)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (15)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bracelets (14)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Eyewear (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (8)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Gloves (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Belts (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Veils (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tights (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (1)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Size Type */}

          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Size Type</Text>
            <button onClick={ontype} fontSize="20px">
              {type ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {type ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (150)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (77)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hats (42)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hair (41)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Rings (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jewelry (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (16)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (15)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bracelets (14)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Eyewear (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (8)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Gloves (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Belts (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Veils (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tights (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (1)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* In Stock */}
          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">In Stock</Text>
            <button onClick={onstock} fontSize="20px">
              {stock ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {stock ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (150)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (77)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hats (42)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hair (41)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Rings (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jewelry (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (16)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (15)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bracelets (14)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Eyewear (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (8)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Gloves (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Belts (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Veils (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tights (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (1)
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Free Pickup */}

          <Flex
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
          >
            <Text fontWeight="semibold">Free Pickup</Text>
            <button onClick={onpickup} fontSize="20px">
              {pickup ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </Flex>
          {pickup ? (
            <Box className="scroll" mt={4}>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Earrings (150)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Necklaces (77)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hats (42)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Hair (41)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bags (24)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Rings (21)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jewelry (20)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Scarves (16)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks & Tights (15)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bracelets (14)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Eyewear (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Sweaters (12)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Jackets & Outerwear (8)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Gloves (7)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Belts (6)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tops (5)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Veils (4)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Socks (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Tights (2)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Body Jewelry (1)
              </Box>
              <Box className="pruductBox" fontSize="sm" p={3}>
                Bras (1)
              </Box>
            </Box>
          ) : (
            ""
          )}
          <Text
            justifyContent="space-between"
            mt={4}
            pt={4}
            borderTop="1px solid black"
            fontWeight="light"
          >
            Reset all filters
          </Text>
        </Box>

        <Box>
          <Flex justifyContent="space-between">
            <Flex>
              <Text fontSize="2xl"> Winter Clothing</Text>
              <Text fontSize="sm" fontWeight="light" p={3}>
                1428 products
              </Text>
            </Flex>
            <Flex>
              <Text mt={1} mr={2}>
                sort:
              </Text>
              <Select size="sm" borderRadius={5}>
                <option value="option1">Featured</option>
                <option value="option2">Price:Low to High</option>
                <option value="option3">Price:High to Low</option>
                <option value="option1">Newest</option>
                <option value="option2">Bestselling</option>
                <option value="option3">Rating:High to Low</option>
                <option value="option1">A-Z</option>
                <option value="option2">Z-A</option>
              </Select>
            </Flex>
          </Flex>
          <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={5}>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $298.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4112917820001_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>By Anthropologie Damask Tube Top</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $128.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4120944440001_008_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>By Anthropologie Jacquard Ball Skirt</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $158.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/4120652010032_079_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $298.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4130916210122_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $248.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/4130370060103_266_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4120652010032_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $148.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/4130675950012_072_s?fit=constrain&hei=56&qlt=75"/>
                  <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/4130675950012_081_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  3 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4130370060103_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $180.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/4123650590201_040_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4130370060103_266_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $180.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Image width="20px"
                  height="20px"
                  borderRadius={50} ml={2} src="https://images.urbndata.com/is/image/Anthropologie/79593604_066_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/79491866_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $168.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/79593604_040_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4130675950012_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $248.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/78849429_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $78.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4114529100222_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $168.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Image  width="20px"
                  height="20px"
                  borderRadius={50} ml={2} src="https://images.urbndata.com/is/image/Anthropologie/4130657990054_080_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4133293120004_029_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $298.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>

            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4123800430150_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $88.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4133910370009_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $300.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>

            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4123650590201_037_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $130.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/4123650590201_040_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>






            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4111522160011_006_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Pilcro Corset Sweatshirt

</Text>
              </Link>
              <Text mt={1} fontSize="sm">
              $88.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/4111522160011_006_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/4111522160011_016_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/64892649_034_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>FREECITY Sweatpants

</Text>
              </Link>
              <Text mt={1} fontSize="sm">
              $148.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/64892649_034_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/64892649_041_s?fit=constrain&hei=56&qlt=75"/>
                 <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/64892649_260_s?fit=constrain&hei=56&qlt=75"/>
                 <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/64892649_031_s?fit=constrain&hei=56&qlt=75"/>
                
                <Text fontSize="sm" ml={2}>
                  7 Color
                </Text>
              </Flex>
            </Box>
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/80093370_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $90.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/80093370_001_s?fit=constrain&hei=56&qlt=75"
                />
                <Image ml={2} width="20px"
                  height="20px"
                  borderRadius={50} src="https://images.urbndata.com/is/image/Anthropologie/80093370_012_s?fit=constrain&hei=56&qlt=75"/>
                <Text fontSize="sm" ml={2}>
                  2 Color
                </Text>
              </Flex>
            </Box>
            
            <Box>
              <Link className="imageBox">
                <Image
                  width="300px"
                  src="https://images.urbndata.com/is/image/Anthropologie/4130370060105_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
                />
                <Text mt={2}>Verb by Pallavi Singhee Smocked Corset Dress</Text>
              </Link>
              <Text mt={1} fontSize="sm">
                $198.00
              </Text>
              <Flex mt={2}>
                <Image
                  width="20px"
                  height="20px"
                  borderRadius={50}
                  src="https://images.urbndata.com/is/image/Anthropologie/80093370_001_s?fit=constrain&hei=56&qlt=75"
                />
                <Text fontSize="sm" ml={2}>
                  1 Color
                </Text>
              </Flex>
            </Box>
          </Grid>
          <Box mt={20} borderTop="1px solid black" pt={8}>
            <Text fontSize="xl" fontWeight="medium">
              New Winter Clothing for Women
            </Text>
            <Text fontSize="sm" mt={3}>
              Discover the latest and greatest from Anthropologie. Explore
              hundreds of new women's clothing arrivals, including dresses,
              blouses, sweaters, jeans, pants, and more.
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
