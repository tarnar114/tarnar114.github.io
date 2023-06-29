import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Link,
  Button,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import PFP from "../images/dawg.jpg";
import onlyHappyMistake from "../images/bobross.png";
import { GridItem, SkillItem } from "../components/GridItem";
import { IoLogoPython, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { DiJava, DiPhp, DiHtml5, DiLaravel, DiReact } from "react-icons/di";
import {
  AiOutlineConsoleSql,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import Section from "../components/Section";

const Home = (props) => {
  const toast = useToast();
  function handleClick() {
    navigator.clipboard.writeText("tanzirh10@gmail.com");
    toast({
      title: "Email Copied",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  }
  return (
      <Section>
    <Box>
      <Box mr={10} mb={3}>
        <Heading as="h3" size="md" mb={2}>
          About
        </Heading>
        <Text>
         Hi, my name is Tanzir Hossain. I'm a recent Software Engineer Graduate at Ontario Tech University. 
         Im skilled in multiple languages like python, C#, and multitude other programming languages and frameworks.
        </Text>
      </Box>

      {/* skills */}
      <Box mr={10} mb={3}>
        <Heading as="h3" size="md" mb={2}>
          Skills
        </Heading>
        <SimpleGrid columns={[2, 2, 3]} spacingY={3}>
          <Box align="center">
            <IoLogoPython size={63} />
            <Text fontWeight="semibold">Python</Text>
          </Box>
          <Box align="center">
            <IoLogoJavascript size={63} />
            <Text fontWeight="semibold">JavaScript</Text>
          </Box>
          <Box align="center">
            <DiJava size={63} />
            <Text fontWeight="semibold">Java</Text>
          </Box>
          <Box align="center">
            <DiPhp size={63} />
            <Text fontWeight="semibold">PHP</Text>
          </Box>
          <Box align="center">
            <DiHtml5 size={63} />
            <Text fontWeight="semibold">HTML</Text>
          </Box>
          <Box align="center">
            <AiOutlineConsoleSql size={63} />
            <Text fontWeight="semibold">SQL</Text>
          </Box>
          <Box align="center">
            <DiLaravel size={63} />
            <Text fontWeight={"semibold"}>Laravel</Text>
          </Box>
          <Box align="center">
            <DiReact size={63} />
            <Text fontWeight={"semibold"}>React</Text>
          </Box>
          <Box align="center">
            <IoLogoNodejs size={63} />
            <Text fontWeight={"semibold"}>NodeJS</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* hobbies */}
      <Box mr={10} mb={3}>
        <Heading as="h3" size="md" mb={2}>
          I like:
        </Heading>
        <Text ml={2}>
          Music, Cooking, Video Games, Fullstack Development, Cloud Computing
        </Text>
      </Box>

      {/* contacts */}
      <Box mr={10}>
        <Heading as="h3" size="md" mb={2}>
          Contact Me!
        </Heading>
        <List spacing={1}>
          <ListItem>
            <Link href="https://github.com/tarnar114" isExternal>
              <Button
                colorScheme="teal"
                variant="ghost"
                leftIcon={<AiFillGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/tanzir-hossain-30b221198"
              isExternal
            >
              <Button
                colorScheme="teal"
                variant="ghost"
                leftIcon={<AiFillLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>

          <Button
            colorScheme="teal"
            variant="ghost"
            leftIcon={<AiOutlineMail />}
            onClick={handleClick}
          >
            Email
          </Button>
          <ListItem></ListItem>
        </List>
      </Box>
    </Box>
    </Section>
  );
};

export default Home;
