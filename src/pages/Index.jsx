import { Container, Text, VStack, Heading, Box, Image, HStack, Link, Progress, SimpleGrid } from "@chakra-ui/react";
import { FaGithub, FaGit } from "react-icons/fa";

const Index = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Container centerContent maxW="container.md" py={10}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} boxShadow="md" w="100%">
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg">Programming Languages</Heading>
            <Box w="100%">
              <Text>JavaScript</Text>
              <Progress value={80} size="sm" colorScheme="teal" />
            </Box>
            <Box w="100%">
              <Text>Python</Text>
              <Progress value={70} size="sm" colorScheme="teal" />
            </Box>
            <Box w="100%">
              <Text>Java</Text>
              <Progress value={60} size="sm" colorScheme="teal" />
            </Box>
          </VStack>
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
            <Box display="flex" justifyContent="center" w="100%">
                <HStack spacing={4} mt={6}>
                  <Link href="https://github.com" isExternal>
                    <FaGithub size="24px" />
                  </Link>
                  <Link href="https://gitee.com" isExternal>
                    <FaGit size="24px" />
                  </Link>
                </HStack>
              </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </Container>
    </Box>
  );
};

export default Index;