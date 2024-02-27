import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, FormControl, FormLabel, Input, FormHelperText, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { FaTrophy, FaUserPlus, FaRegListAlt } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.100");

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg={bgColor} color={textColor} minHeight="100vh">
        <Flex direction="column" alignItems="center" justifyContent="center" py={10} pt={20}>
          <VStack spacing={8} alignItems="center" w="full">
            <Heading as="h1" size="2xl" color="black">
              TripleAlms Africa
            </Heading>
            <Text fontSize="xl" color="gray.500">
              Contest and Awards
            </Text>
            <Text fontSize="lg" color="gray.300">
              TripleAlms Africa is an African promoter offering you the chance to win big. Participate now and stand a chance to win from 1 million to 3 million!
            </Text>
            <Button size="lg" leftIcon={<FaTrophy />} colorScheme="teal" variant="solid">
              Enter Contest
            </Button>
          </VStack>

          <VStack spacing={4} mt={10} w="100%">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Full Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <Button size="md" leftIcon={<FaUserPlus />} colorScheme="blackAlpha" variant="outline">
              Register Now
            </Button>
          </VStack>

          <Box w="100%" mt={12}>
            <Heading as="h3" size="lg" mb={4}>
              Leaderboards
            </Heading>
            <List spacing={3}>
              {Array.from({ length: 5 }, (_, i) => (
                <ListItem key={i}>
                  <ListIcon as={FaRegListAlt} color="green.500" />
                  Contestant {i + 1} - Score: {Math.floor(Math.random() * 100)}
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Navigation Bar is now at the top of the page */}
          <NavBar />
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
