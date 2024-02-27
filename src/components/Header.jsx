import { Box, Flex, Link, Stack, useBreakpointValue } from "@chakra-ui/react";

const Header = () => {
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Box as="header" width="full" p={4} boxShadow="sm" bg="blackAlpha.900" color="white">
      <Flex justifyContent="space-between" alignItems="center" direction={stackDirection}>
        <Link href="/" p={2}>
          Home
        </Link>
        <Link href="#contest" p={2}>
          Contest
        </Link>
        <Link href="#privacy-policy" p={2}>
          Privacy Policy
        </Link>
        <Link href="#rules-and-regulations" p={2}>
          Rules and Regulations
        </Link>
        <Link href="#terms-and-conditions" p={2}>
          Terms and Conditions
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
