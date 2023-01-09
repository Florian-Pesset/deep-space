import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
            <Flex
              flexDirection="row"
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
            </Flex>
            <Flex flexDirection={{ base: "column", xl: "row" }} gap={8}>
              <Flex justifyContent="center" alignItems="center">
                <Image
                  src={src}
                  alt={selectedBody.name}
                  width="300px"
                  height="300px"
                  ml={2}
                />
              </Flex>

              <Flex flexDirection="column" width={{ base: "90vw", xl: "40vw" }}>
                <Flex
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
                </Flex>
                <CelestialBodyInfo body={selectedBody} />
              </Flex>
            </Flex>
          </>
        }
      />
    </>
  );
};

export default Destination;
