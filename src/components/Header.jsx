import { Box, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="black" color="white" w="100%" p={4}>
      <Flex justify={{ base: "space-between", md: "flex-end" }} align="center">
        <IconButton display={{ base: "flex", md: "none" }} onClick={isOpen ? onClose : onOpen} icon={<FaBars />} variant="outline" aria-label="Open Menu" />
        <Menu isOpen={isOpen}>
          <MenuButton as={Box} display={{ base: "none", md: "block" }}>
            <Link p={2}>Home</Link>
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} href="/contest">
              Contest
            </MenuItem>
            <MenuItem as={Link} href="/privacy-policy">
              Privacy Policy
            </MenuItem>
            <MenuItem as={Link} href="/rules-and-regulations">
              Rules and Regulations
            </MenuItem>
            <MenuItem as={Link} href="/terms-and-conditions">
              Terms and Conditions
            </MenuItem>
          </MenuList>
        </Menu>
        <Box display={{ base: "none", md: "flex" }} ml={6}>
          <Link p={2} href="/contest">
            Contest
          </Link>
          <Link p={2} href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link p={2} href="/rules-and-regulations">
            Rules and Regulations
          </Link>
          <Link p={2} href="/terms-and-conditions">
            Terms and Conditions
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
