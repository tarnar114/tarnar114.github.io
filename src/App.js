
import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import PFP from "./images/dawg.jpg";
import Router from "./components/Router";
function App() {
  return (
    <Box as='main' pb={8}>
      <Navbar />
      <Container maxW="container.md" pt={20}>
        <Box display="flex" justifyContent="center" mr={10} mb={4}>
          <Box>
            <Heading size="2xl" mt={2}>
              Tanzir Hossain
            </Heading>
            <Box
              float="right"
              maxWidth="70%"
              borderRadius="md"
              p={2}
              textAlign="center"
              bg={useColorModeValue("#ffeecc", "whiteAlpha.200")}
            >
              <Text>Software Dev/Student</Text>
            </Box>
          </Box>
          <Image
            ml={7}
            mr={10}
            borderColor="gray.400"
            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            boxSize="150px"
            src={PFP}
            alt="TarnarPFP"
          />
        </Box>

        <Router/>

        </Container>
    </Box>
  );

}

export default App;
