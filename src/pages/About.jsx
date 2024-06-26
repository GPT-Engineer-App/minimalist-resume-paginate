import { Box, Heading, Text, VStack, SimpleGrid, Container } from "@chakra-ui/react";

const About = () => (
  <Container centerContent maxW="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center">
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} boxShadow="md" w="100%" h="100%">
      <VStack spacing={4} align="start" h="100%">
        <Heading as="h1" size="xl">About Me</Heading>
        <Text fontSize="md">This is the about page.</Text>
        <Box w="100%">
          <Heading as="h2" size="lg" mt={6} mb={4}>Experience</Heading>
          <SimpleGrid columns={1} spacing={4}>
            <Box>
              <Heading as="h3" size="md">Company A</Heading>
              <Text fontSize="sm">Role: Senior Developer</Text>
              <Text fontSize="sm">Duration: Jan 2020 - Present</Text>
              <Text fontSize="sm">Description: Worked on various projects...</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Company B</Heading>
              <Text fontSize="sm">Role: Junior Developer</Text>
              <Text fontSize="sm">Duration: Jan 2018 - Dec 2019</Text>
              <Text fontSize="sm">Description: Assisted in developing...</Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box w="100%">
          <Heading as="h2" size="lg" mt={6} mb={4}>Education</Heading>
          <SimpleGrid columns={1} spacing={4}>
            <Box>
              <Heading as="h3" size="md">University X</Heading>
              <Text fontSize="sm">Degree: B.Sc. in Computer Science</Text>
              <Text fontSize="sm">Duration: 2014 - 2018</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  </Container>
);

export default About;