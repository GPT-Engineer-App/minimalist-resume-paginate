import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

const Contact = () => (
  <Container centerContent maxW="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center">
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} boxShadow="md" w="100%" h="100%">
      <VStack spacing={4} align="start" h="100%">
        <Heading as="h1" size="xl">Contact</Heading>
        <Text fontSize="md">This is the contact page.</Text>
      </VStack>
    </Box>
  </Container>
);

export default Contact;