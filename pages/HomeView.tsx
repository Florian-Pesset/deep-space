import { Box, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Head from "next/head";
import headingStyles from "../styles/headingStyles";

const HomeView: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Box
        display="flex"
        mt={{ base: "none", xl: "1em", "2xl": "15em" }}
        flexDirection={{ base: "column", xl: "row" }}
        gap={{ base: "20px", xl: "400px" }}
      >
        <Box width={{ base: "fit-content", md: "470px" }}>
          <Text color="primary">SO, YOU WANT TO TRAVEL TO</Text>
          <Heading as="h1" sx={headingStyles}>
            SPACE
          </Heading>
          <Text color="primary">
            Let&rsquo;s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&rsquo;ll give you a truly out of
            this world experience!
          </Text>
        </Box>

        <Box
          as="button"
          borderRadius="50%"
          width="200px"
          height="200px"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.1)",
            transition: " 1s ease",
            transitionProperty: "revert",
            border: "25px solid grey !important",
          }}
          alignSelf={{ base: "center", xl: "end" }}
          onClick={() => router.push("/destination")}
        >
          <Text fontSize="lg">Explore</Text>
        </Box>
      </Box>
    </>
  );
};

export default HomeView;
