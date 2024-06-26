import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">About Me</Heading>
      <Text fontSize="md">This is the about page.</Text>
    </VStack>
  </Box>
);

export default About;