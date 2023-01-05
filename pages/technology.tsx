import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import headingStyles from "../styles/headingStyles";
import data from "../data.json";
import { useState } from "react";

const technology: NextPage = () => {
  const [selectedBody, setSelectedBody] = useState(data.technology[0]);

  const devices = (device: string) => {
    return `url('../assets/technology/background-technology-${device}.jpg')`;
  };

  const src = `.${selectedBody.images.landscape}`;

  return (
    <>
      <Head>
        <title>Technology</title>
      </Head>
      <Box
        bgImage={{
          base: devices("mobile"),
          md: devices("tablet"),
          xl: devices("desktop"),
        }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Navigation />
        <Box
          flexDirection="column"
          display="flex"
          gap={9}
          alignItems="center"
          minH="90vh"
        >
          <Box
            flexDirection="row"
            display="flex"
            gap={1}
            justifyContent={{ base: "center", sm: "start" }}
            width="80vw"
          >
            <Text
              fontSize="xl"
              color="primary"
              opacity={0.25}
              fontWeight="bold"
            >
              02
            </Text>
            <Text fontSize="xl" color="primary" textTransform="uppercase">
              SPACE LAUNCH 101
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image src={src} alt={selectedBody.name} />
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center">
              {data.technology.map((technology, id) => (
                <Box
                  as="button"
                  borderRadius="50%"
                  width="50px"
                  height="50px"
                  backgroundColor="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  m={5}
                >
                  <Text
                    color="black"
                    // onMouseEnter={() => setHoveredDestination(destination.name)}
                    // onMouseLeave={() => setHoveredDestination("")}
                  >
                    <a onClick={() => setSelectedBody(technology)}>{id + 1}</a>
                  </Text>
                </Box>
              ))}
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Text color="secondary" textTransform="uppercase">
                THE TERMINOLOGY…
              </Text>
              <Heading as="h1" sx={headingStyles} mt={5}>
                {selectedBody.name}
              </Heading>
              <Text color="primary">{selectedBody.description}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default technology;
