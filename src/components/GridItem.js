import { Box, LinkBox, LinkOverlay, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox>
        <Image src={thumbnail} alt={title} loading="lazy" borderRadius="12px" />
        <LinkOverlay href={href} isExternal>
          <Text mt={2} fontWeight="semibold">
            {title}
          </Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
};

export const SkillItem = ({ children, title, thumbnail, git,gitLink }) => {
  return (
    <LinkBox textAlign="center">
      <Image src={thumbnail} alt={title} borderRadius="12px" loading="lazy" />
      
      
     { git 
     ? <LinkOverlay as='a' href={gitLink} target="_blank" >
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
     :<LinkOverlay as={Link} to={`./${title}`} >
        <Text mt={2}>{title}</Text>
      </LinkOverlay>}
      
    </LinkBox>
  );
};
/* {} */