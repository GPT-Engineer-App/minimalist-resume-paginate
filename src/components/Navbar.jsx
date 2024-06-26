import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold" fontSize="xl">
          Minimalist Resume
        </Box>
        <Flex alignItems="center">
          <RouterLink to="/">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/about">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              About
            </Button>
          </RouterLink>
          <RouterLink to="/contact">
            <Button as={Link} colorScheme="teal" variant="ghost">
              Contact
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;