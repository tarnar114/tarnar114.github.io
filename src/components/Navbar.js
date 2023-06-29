import {
  Container,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link as ReactRouterLink } from "react-router-dom";
import ThemeToggle from "./theme-toggle";
import PDF from '../TanzirHossain.pdf'
const Navbar = (props) => {
  const resumeClick=()=>{
    window.open(PDF,'_blank')
  }
  return (
    <Box
      as="nav"
      w="100%"
      position="fixed"
      wrap="wrap"
      bg={useColorModeValue("#ffeecc", "#262f40")}
    >
      <Container display="flex" maxW="container.lg" wrap="wrap" p={1}>
        <Flex align="center" mr={6}>
          <Link as={ReactRouterLink} to="/">
            <Heading as="h1" size="lg" letterSpacing="tighter">
              <Text fontWeight={"semibold"}>Tarnar</Text>
            </Heading>
          </Link>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          spacing={3}
          mt={{ base: 4, md: 0 }}
        >
          <Link as={ReactRouterLink} to="/projects">
            <Text fontSize="md" fontWeight={"semibold"}>
              Projects
            </Text>
          </Link>
          <Link as="a" onClick={resumeClick}>
            <Text fontSize="md" fontWeight={"semibold"}>
              Resume
            </Text>
          </Link>
          <Link href="https://github.com/tarnar114/tarnar114.github.io/tree/master" isExternal display="inline-flex" alignItems={"center"} style={{gap: 3}}>
            <AiFillGithub/>
            <Text fontSize="md" fontWeight={"semibold"}>
              Source
            </Text>
          </Link>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          spacing={4}
          mt={{ base: 4, md: 0 }}
          justify="right"
        >
          <Link href="https://github.com/tarnar114" isExternal>
            <AiFillGithub size={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tanzir-hossain-30b221198"
            isExternal
          >
            <AiFillLinkedin size={28} />
          </Link>
          <ThemeToggle />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
