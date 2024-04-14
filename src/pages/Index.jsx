import React from "react";
import { Box, Heading, Text, Button, Stack, Grid, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaLeaf, FaTruck, FaMoneyBillAlt } from "react-icons/fa";

const Index = () => {
  const features = [
    {
      title: "Fresh Produce",
      icon: FaLeaf,
      description: "We source the freshest ingredients for our products.",
    },
    {
      title: "Fast Delivery",
      icon: FaTruck,
      description: "Get your food delivered straight to your doorstep.",
    },
    {
      title: "Affordable Prices",
      icon: FaMoneyBillAlt,
      description: "Enjoy delicious food without breaking the bank.",
    },
  ];

  const products = [
    {
      name: "Organic Salad",
      image: "https://images.unsplash.com/photo-1621295213070-e7c9c89972af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwc2FsYWR8ZW58MHx8fHwxNzEzMDk4OTQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      price: "$9.99",
    },
    {
      name: "Fruit Basket",
      image: "https://images.unsplash.com/photo-1593278684776-62f6e2dc7604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMGJhc2tldHxlbnwwfHx8fDE3MTMwOTg5NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      price: "$14.99",
    },
    {
      name: "Veggie Wrap",
      image: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZWdnaWUlMjB3cmFwfGVufDB8fHx8MTcxMzA5ODk0N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      price: "$7.99",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="green.500" color="white" py={20} px={[4, 8]} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Fresh Foods
        </Heading>
        <Text fontSize="xl" mb={8}>
          Discover a world of delicious and healthy food options
        </Text>
        <Button size="lg" colorScheme="white" bg="transparent" _hover={{ bg: "white", color: "green.500" }} leftIcon={<FaShoppingCart />}>
          Shop Now
        </Button>
      </Box>

      {/* Features Section */}
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {features.map((feature, index) => (
            <Box key={index} textAlign="center">
              <Icon as={feature.icon} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                {feature.title}
              </Heading>
              <Text>{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Products Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Products
          </Heading>
          <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
            {products.map((product, index) => (
              <Box key={index} bg="white" p={6} borderRadius="md" textAlign="center">
                <Image src={product.image} alt={product.name} borderRadius="md" mb={4} />
                <Heading as="h4" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text fontWeight="bold" color="green.500">
                  {product.price}
                </Text>
                <Button mt={4} colorScheme="green">
                  Add to Cart
                </Button>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10} textAlign="center">
        <Text>&copy; 2023 Fresh Foods. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
