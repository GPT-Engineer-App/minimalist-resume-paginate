import { Container, Text, VStack, Heading, Box, Image, HStack, Link, Progress, SimpleGrid } from "@chakra-ui/react";
import { FaGithub, FaGit } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} boxShadow="md" w="100%" h="100%">
        <SimpleGrid columns={[1, null, 2]} spacing={10} h="100%">
          <VStack spacing={4} align="start" h="100%">
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
          <VStack spacing={4} align="start" h="100%">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              alignSelf="center"
            />
            <Heading as="h1" size="2xl" textAlign="center" w="100%">John Doe</Heading>
            <Text fontSize="lg" textAlign="center" w="100%">Full Stack Developer</Text>
            <HStack spacing={4} alignSelf="center" mt={6}>
              <Link href="https://github.com" isExternal>
                <FaGithub size="24px" />
              </Link>
              <Link href="https://gitee.com" isExternal>
                <FaGit size="24px" />
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;