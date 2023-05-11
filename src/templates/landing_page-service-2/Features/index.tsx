import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function ServiceFeatures({ data }: { data: any }) {
  return (
    <Box p={4}>
      <Flex justifyContent="center">
        <Stack spacing={4} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>{data.copy.features.title}</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            {data.copy.features.description}
          </Text>
        </Stack>
      </Flex>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
          {data.copy.features.feature_items.map((feature: any, i: number) => (
            <HStack align={"top"} key={i}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.description}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
