import {
  Text,
  Box,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Button,
  Grid,
  Link,
  Image
} from "@chakra-ui/react";
import { FaFacebookSquare,FaInstagram,FaPinterest,FaTwitter } from 'react-icons/fa';

import {EmailIcon,LinkIcon} from "@chakra-ui/icons"
import { About } from "../About";

export const Footer = () => {
  return (
    <>
      {/* <About/> */}
      <Box
        mt={10}
        backgroundColor="#faf9f7"
        borderTop="1px solid #c2c0bc"
        pt={6}
      >
        <Box borderBottom="1px solid #c2c0bc" pb={8}>
          <Flex justifyContent="space-evenly">
            <Box>
              <Text fontSize="xl">Sign Up for Email</Text>
              <Text fontSize="sm" mt={4} color="#8f8f8f">
                Receive early access to new arrivals, sales, exclusive content,
                events and<br/> much more!
              </Text>
            </Box>
            <Box >
              <FormControl>
                <FormLabel fontSize="sm">Email Address*</FormLabel>
                <Flex>
                  <Input
                    borderRadius="2px"
                    width="400px"
                    border="1px solid #c2c0bc"
                    
                  />
                  <Button
                    borderRadius="0px"
                    backgroundColor="#3d475c"
                    color="white"
                    pl={8}
                    ml={10}
                    pr={8}
                    fontSize="sm"
                  >
                    SUBMIT
                  </Button>
                </Flex>
              </FormControl>
            </Box>
          </Flex>
          <Text fontSize="xs" ml="187px" mt="30px" color="#8f8f8f">
            By signing up, you will receive Anthropologie offers, promotions and
            other commercial messages. You are also agreeing to Anthropologie’s
            Privacy Policy. You may unsubscribe at any time.
          </Text>
        </Box>
        <Flex justifyContent="space-evenly" mt={10} pr={55} pl={55}>
          <Grid gap={3}>
            <Text  fontSize="md">Help</Text>
            <Link color="#8f8f8f" fontSize="xs">Track Your Order</Link>
            <Link color="#8f8f8f" fontSize="xs">Start A Return Or Exchange (US)</Link>
            <Link color="#8f8f8f" fontSize="xs">Returns & Exchanges</Link>
            <Link color="#8f8f8f" fontSize="xs">Shipping</Link>
            <Link color="#8f8f8f" fontSize="xs">Customer Service</Link>
            <Link color="#8f8f8f" fontSize="xs">Current Promotions</Link>
            <Link color="#8f8f8f" fontSize="xs">Product Recalls</Link>
          </Grid>
          <Grid>
            <Text fontSize="md">About Us</Text>
            <Link color="#8f8f8f" fontSize="xs">Our Story</Link>
            <Link color="#8f8f8f" fontSize="xs">Events</Link>
            <Link color="#8f8f8f" fontSize="xs">A Greater Good</Link>
            <Link color="#8f8f8f" fontSize="xs">Diversity & Inclusion</Link>
            <Link color="#8f8f8f" fontSize="xs">Stories</Link>
            <Link fontSize="xs"></Link>
            <Link fontSize="xs"></Link>
          </Grid>
          <Grid>
            <Text fontSize="md">Services</Text>
            <Link color="#8f8f8f" fontSize="xs">AnthroPerks</Link>
            <Link color="#8f8f8f" fontSize="xs">Gift Cards</Link>
            <Link color="#8f8f8f" fontSize="xs">AnthroLiving Designer & Trade Program</Link>
            <Link color="#8f8f8f" fontSize="xs">Furniture: Guides & Services</Link>
            <Link color="#8f8f8f" fontSize="xs">Store Pickup & Collection Points</Link>
            <Link color="#8f8f8f" fontSize="xs">Klarna</Link>
            <Link fontSize="xs"></Link>
          </Grid>
          <Grid>
            <Text fontSize="md">Connect</Text>
            <Link color="#8f8f8f" fontSize="xs">Contact Us</Link>
            <Link color="#8f8f8f" fontSize="xs">Stay Connected</Link>
            <Link color="#8f8f8f" fontSize="xs">Careers</Link>
            <Link color="#8f8f8f" fontSize="xs">Styling Services</Link>
            <Link color="#8f8f8f" fontSize="xs">Request A Catalog</Link>
            <Link fontSize="xs"></Link>
            <Link fontSize="xs"></Link>
          </Grid>
          <Grid>
            <Link fontSize="md" color="teal"><LinkIcon/> Store Locator</Link>
            <Link fontSize="md" color="teal"><EmailIcon  mt={-0.5}/> Get Email</Link>
            <Link fontSize="xs"></Link>
            <Link fontSize="xs"></Link>
            <Link fontSize="xs"></Link>
            <Link fontSize="xs"></Link>
            <Link fontSize="xs"></Link>
            <Link fontSize="xs"></Link>
          </Grid>
        </Flex>
        <Flex justifyContent="center" gap={10} mt={10}>
          <Image src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"/>
          <Flex gap={3}>
          <Link fontSize="2xl" mt={1} href="https://www.pinterest.com/anthropologie/" target="_blank" color="teal"><FaPinterest/></Link>
          <Link fontSize="2xl" mt={1} href="https://www.instagram.com/anthropologie/" target="_blank" color="teal"><FaInstagram /></Link>
          <Link fontSize="2xl" mt={1} href="https://www.facebook.com/Anthropologie" target="_blank" color="teal"><FaFacebookSquare /></Link>
          <Link fontSize="2xl" mt={1} href="https://twitter.com/anthropologie" target="_blank" color="teal"><FaTwitter  /></Link>
          </Flex>
        </Flex>
        <Flex p={6} pr={20} pl={20}>
          <Image src="https://images.ctfassets.net/5de70he6op10/2DRgCRXNIEkk0wIqUo2ywa/20ea44a95fb361eaf034b42eec179d44/_site_footer__download_app_enable_push_.jpg"/>
        </Flex>
        <Flex justifyContent="center" mt={10}>
          <Link color="#8f8f8f" pr={2} pl={2} fontSize="xs" >Us</Link>
          <Text color="#8f8f8f" fontSize="xs">|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>France</Link>
          <Text color="#8f8f8f" fontSize="xs" >|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>Germany</Link>
          <Text color="#8f8f8f" fontSize="xs" >|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>Italy</Link>
          <Text color="#8f8f8f" fontSize="xs" >|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>Spain</Link>
          <Text color="#8f8f8f" fontSize="xs" >|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>Uk</Link>
        </Flex>
        <Flex justifyContent="space-between" pt={10} pb={6} pr={20} pl={20}>
         
          <Flex gap={2} >
          <Link color="#8f8f8f" pr={2} pl={2} fontSize="xs" >Privacy Policy</Link>
          <Text color="#8f8f8f" fontSize="xs">|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>Terms of Use</Link>
          <Text color="#8f8f8f" fontSize="xs" >|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>CA Transparency</Link>
          <Text color="#8f8f8f" fontSize="xs" >|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>Accessibility</Link>
          <Text color="#8f8f8f" fontSize="xs" >|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>URBN.comFor</Link>
          <Text color="#8f8f8f" fontSize="xs" >|</Text>
          <Link color="#8f8f8f" fontSize="xs"  pr={2} pl={2}>CA Residents</Link>
          </Flex>
          <Text color="#8f8f8f" fontSize="xs">2022 URBN.com. All Rights Reserved.</Text>
        </Flex>
      </Box>
    </>
  );
};
