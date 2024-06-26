import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Contact</Heading>
      <Text fontSize="md">This is the contact page.</Text>
    </VStack>
  </Box>
);

export default Contact;