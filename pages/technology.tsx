import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import headingStyles from "../styles/headingStyles";
import data from "../data.json";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ISSposition from "../components/ISSposition";

const technology: NextPage = () => {
  const [isLargerThan62em] = useMediaQuery("(min-width: 62em)");
  const [selectedBody, setSelectedBody] = useState(data.technology[0]);
  const [hoveredTechnology, setHoveredTechnology] = useState("");

  const src = isLargerThan62em
    ? `.${selectedBody.images.portrait}`
    : `.${selectedBody.images.landscape}`;

  return (
    <>
      <Layout
        name="technology"
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
                02
              </Text>
              <Text fontSize="xl" color="primary" textTransform="uppercase">
                SPACE LAUNCH 101
              </Text>
            </Flex>
            <Flex
              flexDirection={{ base: "column", lg: "row-reverse" }}
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                position={{ lg: "absolute" }}
                right={{ lg: 0 }}
              >
                <Image
                  src={src}
                  alt={selectedBody.name}
                  width={{ base: "100vw", lg: "400px" }}
                />
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection={{ base: "column", lg: "row" }}
                width={{ base: "fit-content", lg: "50vw" }}
                mr={{ lg: "20em" }}
              >
                <Flex
                  flexDirection={{ base: "row", lg: "column" }}
                  justifyContent="center"
                >
                  {data.technology.map((technology, id) => (
                    <Flex
                      as="button"
                      borderRadius="50%"
                      width="50px"
                      height="50px"
                      backgroundColor={
                        selectedBody.name === technology.name ? "white" : "none"
                      }
                      border={
                        hoveredTechnology === technology.name
                          ? "solid white"
                          : selectedBody.name === technology.name
                          ? "none"
                          : "solid gray"
                      }
                      alignItems="center"
                      justifyContent="center"
                      m={5}
                      onClick={() => setSelectedBody(technology)}
                    >
                      <Text
                        color={
                          selectedBody.name === technology.name
                            ? "black"
                            : "white"
                        }
                        onMouseEnter={() =>
                          setHoveredTechnology(technology.name)
                        }
                        onMouseLeave={() => setHoveredTechnology("")}
                      >
                        {id + 1}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems={{ base: "center", lg: "start" }}
                  textAlign={{ base: "center", lg: "start" }}
                  width="80vw"
                >
                  <Text m={5} color="secondary" textTransform="uppercase">
                    THE TERMINOLOGY…
                  </Text>
                  <Heading m={5} as="h1" sx={headingStyles} mt={5}>
                    {selectedBody.name}
                  </Heading>
                  <Text m={5} color="secondary">
                    {selectedBody.description}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              gap={1}
              justifyContent="center"
              alignItems="center"
              width="80vw"
              mt="5em"
            >
              <Text
                fontSize="xl"
                color="primary"
                fontWeight="bold"
                textAlign="center"
                mb="3em"
              >
                Find actual ISS position
              </Text>
              <ISSposition />
            </Flex>
          </>
        }
      />
    </>
  );
};

export default technology;
