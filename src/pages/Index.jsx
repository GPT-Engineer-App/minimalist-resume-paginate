import { Container, Text, VStack, Heading, Box, Image, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaGit } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} boxShadow="md" w="100%">
        <VStack spacing={4} align="start">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            alignSelf="center"
          />
          <Heading as="h1" size="2xl" textAlign="center" w="100%">John Doe</Heading>
          <Text fontSize="lg" textAlign="center" w="100%">Full Stack Developer</Text>
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
          <HStack spacing={4} alignSelf="center" mt={6}>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://gitee.com" isExternal>
              <FaGit size="24px" />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;