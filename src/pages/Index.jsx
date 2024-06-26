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