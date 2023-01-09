import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import data from "../data.json";
import headingStyles from "../styles/headingStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import Layout from "../components/Layout";

const Crew: NextPage = () => {
  SwiperCore.use([EffectCoverflow, Pagination]);
  return (
    <>
      <Layout
        name="crew"
        component={
          <>
            <Flex
              flexDirection="column"
              gap={9}
              alignItems="center"
              minH="100vh"
            >
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
                  Meet your crew
                </Text>
              </Flex>
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
                        <Flex
                          textAlign={{ base: "center", lg: "start" }}
                          flexDirection={{
                            base: "column",
                            md: "column-reverse",
                            lg: "row-reverse",
                          }}
                          alignItems="center"
                        >
                          <Box>
                            <AspectRatio ratio={0.7} w="250px">
                              <Image src={src} alt={crew.name} />
                            </AspectRatio>
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
                        </Flex>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
            </Flex>
          </>
        }
      />
    </>
  );
};

export default Crew;
