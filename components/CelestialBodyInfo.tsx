import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import headingStyles from "../styles/headingStyles";

const CelestialBodyInfo = ({ body }: any) => {
  const { name, description, distance, travel } = body;

  return (
    <Box
      m={8}
      display="flex"
      flexDirection="column"
      alignItems={{ base: "center", xl: "start" }}
      gap={5}
    >
      <Heading as="h1" sx={headingStyles}>
        {name}
      </Heading>
      <Text color="secondary" align={{ base: "center", xl: "start" }}>
        {description}
      </Text>
      <Divider />
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        gap={5}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ base: "center", xl: "start" }}
        >
          <Text color="secondary">AVG. DISTANCE</Text>
          <Heading as="h2" sx={headingStyles} fontSize="xl">
            {distance}
          </Heading>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ base: "center", xl: "start" }}
        >
          <Text color="secondary">Est. travel time</Text>
          <Heading as="h2" sx={headingStyles} fontSize="xl">
            {travel}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default CelestialBodyInfo;
