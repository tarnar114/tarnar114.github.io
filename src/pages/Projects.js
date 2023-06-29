import { Box, Heading, SimpleGrid, Container } from "@chakra-ui/react";
import { SkillItem } from "../components/GridItem";
import Section from "../components/Section";
import OHM from "../images/bobrossv2.jpg";
import Mininet from "../images/Mininet.png";
import bookMgmt from "../images/books.jpg";
import bikeTheft from "../images/biketheft.jpg";
import alzheimers from "../images/alzheimers.jpeg";
const Projects = () => {
  return (
    <Section>
      <Box>
        <Box mr={10} mb={3} textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            Projects
          </Heading>
          <Container maxW="container.md">
            <SimpleGrid columns={[1, 2, 2]} spacing={6}>
              <SkillItem
                children="Only Happy Mistakes"
                title="Only Happy Mistakes"
                thumbnail={OHM}
                git={true}
                gitLink='https://github.com/tiwaojo/Only-Happy-Mistakes-OHMs-'
              />
              <SkillItem
                children="SDN DDoS mitigation system"
                title="SDN DDoS mitigation system"
                thumbnail={Mininet}
                git={true}
                gitLink='https://github.com/tarnar114/SDN'
              />
              <SkillItem
                children="Book Management System"
                title="Book Repo System"
                git={true}
                gitLink='https://github.com/tarnar114/bookRepo'
                thumbnail={bookMgmt}
              />
              <SkillItem
                git={true}
                gitLink='https://github.com/tarnar114/CapstoneApp'
                children="Bike Anti Theft System"
                title="Bike Anti Theft System"
                thumbnail={bikeTheft}
              />
              <SkillItem
                git={true}
                gitLink='https://github.com/tarnar114/AlzheimersDetection'
                children="Alzheimer's Detection System"
                title="Alzheimer's Detection System"
                thumbnail={alzheimers}
              />
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </Section>
  );
};

export default Projects;
