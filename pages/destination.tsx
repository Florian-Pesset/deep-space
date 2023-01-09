import { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import CelestialBodyInfo from "../components/CelestialBodyInfo";
import data from "../data.json";
import Layout from "../components/Layout";

const Destination: NextPage = () => {
  const [selectedBody, setSelectedBody] = useState(data.destinations[0]);
  const [hoveredDestination, setHoveredDestination] = useState("");

  const src = `.${selectedBody.images.png}`;

  return (
    <>
      <Layout
        name="destination"
        component={
          <>
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
              <Text fontSize="xl" color="primary" textTransform="uppercase">
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
                      onMouseEnter={() =>
                        setHoveredDestination(destination.name)
                      }
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
          </>
        }
      />
    </>
  );
};

export default Destination;
