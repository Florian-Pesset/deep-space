import { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import CelestialBodyInfo from "../components/CelestialBodyInfo";
import Navigation from "../components/Navigation";
import data from "../data.json";

const Destination: NextPage = () => {
  const [selectedBody, setSelectedBody] = useState(data.destinations[0]);
  const [hoveredDestination, setHoveredDestination] = useState("");

  const devices = (device: string) => {
    return `url('../assets/destination/background-destination-${device}.jpg')`;
  };
  const src = `.${selectedBody.images.png}`;

  return (
    <>
      <Head>
        <title>Destination</title>
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
              01
            </Text>
            <Text fontSize="xl" color="primary">
              Pick your destination
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection={{ base: "column", xl: "row" }}
            gap={8}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image
                src={src}
                alt={selectedBody.name}
                width="300px"
                height="300px"
                ml={2}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              width={{ base: "90vw", xl: "40vw" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent={{ base: "center", xl: "start" }}
                ml={8}
              >
                {data.destinations.map((destination) => (
                  <Text
                    mr={5}
                    color={
                      selectedBody.name === destination.name
                        ? "primary"
                        : "secondary"
                    }
                    cursor="pointer"
                    textDecoration={
                      hoveredDestination === destination.name
                        ? "underline 3px rgba(151, 151, 151, 1)"
                        : selectedBody.name === destination.name
                        ? "underline 3px"
                        : "none"
                    }
                    textUnderlineOffset="15px"
                    onMouseEnter={() => setHoveredDestination(destination.name)}
                    onMouseLeave={() => setHoveredDestination("")}
                  >
                    <a onClick={() => setSelectedBody(destination)}>
                      {destination.name}
                    </a>
                  </Text>
                ))}
              </Box>
              <CelestialBodyInfo body={selectedBody} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Destination;
