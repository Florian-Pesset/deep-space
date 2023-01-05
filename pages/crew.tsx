import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";

import Head from "next/head";
import Navigation from "../components/Navigation";
import data from "../data.json";
import headingStyles from "../styles/headingStyles";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

const Crew: NextPage = () => {
  const devices = (device: string) => {
    return `url('../assets/crew/background-crew-${device}.jpg')`;
  };
  SwiperCore.use([EffectCoverflow, Pagination]);
  return (
    <>
      <Head>
        <title>Crew</title>
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
          minH="100vh"
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
              Meet your crew
            </Text>
          </Box>
          <Box width="80vw">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
            >
              {data.crew.map((crew) => {
                const src = `.${crew.images.png}`;

                return (
                  <SwiperSlide key={crew.name}>
                    <Box
                      textAlign={{ base: "center", lg: "start" }}
                      display="flex"
                      flexDirection={{
                        base: "column",
                        md: "column-reverse",
                        lg: "row-reverse",
                      }}
                      alignItems="center"
                    >
                      <Box>
                        <Image src={src} alt={crew.name} height="400px" />
                        <Divider
                          visibility={{ base: "visible", md: "hidden" }}
                        />
                      </Box>
                      <Box
                        mb={20}
                        width={{ base: "100%", lg: "50vw" }}
                        mr={{ lg: "10em" }}
                      >
                        <Text
                          color="primary"
                          opacity={0.5}
                          textTransform="uppercase"
                          mt="5em"
                        >
                          {crew.role}
                        </Text>
                        <Heading as="h2" sx={headingStyles} fontSize="xl">
                          {crew.name}
                        </Heading>
                        <Text color="primary">{crew.bio}</Text>
                      </Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Crew;
