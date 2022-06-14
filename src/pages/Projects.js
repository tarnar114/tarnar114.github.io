import { Box, Text, Heading, SimpleGrid ,Container} from "@chakra-ui/react";
import { GridItem } from "../components/GridItem";
import Section from "../components/Section";
import OHM from "../images/bobrossv2.jpg";
import Mininet from '../images/Mininet.png'
import bookMgmt from '../images/book_diary.jpg'
const Projects = () => {
  return (
      <Section>
    <Box>
      <Box mr={10} mb={3} textAlign="center">
        <Heading as="h3" size="lg" mb={4}>
          Projects
        </Heading>
        <Container maxW="container.md">
        <SimpleGrid columns={[1, 2, 2]} spacing={6} >
          <GridItem
            children="Only Happy Mistakes"
            href="https://github.com/tiwaojo/Only-Happy-Mistakes-OHMs-"
            title="Only Happy Mistakes"
            thumbnail={OHM}
          />
          <GridItem
            children="SDN DDoS mitigation system"
            href="https://github.com/tarnar114/SDN"
            title="SDN DDoS mitigation system"
            thumbnail={Mininet}
          />
          <GridItem
            children="Book Management System"
            href="https://github.com/tarnar114/bookRepo"
            title="Book Management System"
            thumbnail={bookMgmt}/>
        </SimpleGrid>
        </Container>
      </Box>
    </Box>
    </Section>
  );
};

export default Projects;
