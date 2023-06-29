import { Box, Text, Heading, SimpleGrid, Container } from "@chakra-ui/react";
import { GridItem } from "../components/GridItem";
import Section from "../components/Section";
import { useParams } from "react-router-dom";

const ProjectDesc = () => {
  const { projID } = useParams();
  console.log(projID);
  return (
    <Section>
      <Box>
        <Box mr={10} mb={3} textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            {projID}
          </Heading>
        </Box>
      </Box>
    </Section>
  );
};

export default ProjectDesc;
