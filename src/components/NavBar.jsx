import { Box, Flex, Link, Stack } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="blackAlpha.800" color="white" px={4} py={3}>
      <Flex alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto">
        <Stack direction={{ base: "column", md: "row" }} spacing={6}>
          <Link href="/" color="teal.500">
            Home
          </Link>
          <Link href="/contest" color="teal.500">
            Contest
          </Link>
          <Link href="/privacy-policy" color="teal.500">
            Privacy Policy
          </Link>
          <Link href="/rules-and-regulations" color="teal.500">
            Rules and Regulations
          </Link>
          <Link href="/terms-and-conditions" color="teal.500">
            Terms and Conditions
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
