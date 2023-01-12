import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import headingStyles from "../styles/headingStyles";

interface PictureOfDayProps {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const HomeView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pictureOfDay, setPictureOfDay] = useState<PictureOfDayProps>({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  });
  const { hdurl, title, copyright, date, explanation } = pictureOfDay!;
  const router = useRouter();

  const getPictureOfDay = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY_APOD;
    const result = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    setPictureOfDay(await result.json());
  };

  useEffect(() => {
    getPictureOfDay();
  }, []);

  return (
    <>
      <Flex
        mt={{ base: "none", xl: "1em", "2xl": "15em" }}
        flexDirection={{ base: "column", xl: "row" }}
        gap={{ base: "20px", xl: "400px" }}
        alignItems={{ base: "center" }}
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

        <Flex
          as="button"
          borderRadius="50%"
          width="200px"
          height="200px"
          backgroundColor="white"
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
        </Flex>
      </Flex>
      <Card bg="#2C3540" mt={20}>
        <CardHeader>
          <Text as="h2" fontSize="lg" color="primary">
            Image of the day
          </Text>
        </CardHeader>
        <CardBody color="primary">
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            gap={6}
            alignItems={{ base: "center", md: "start" }}
          >
            <Flex
              flexDirection="column"
              width={{ md: "300px" }}
              alignItems="center"
              justifyContent={{ base: "center", md: "start" }}
            >
              <Image
                src={hdurl}
                borderRadius="lg"
                alt={title}
                onClick={() => setIsOpen(true)}
              />
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent bgColor="gray.300">
                  <ModalHeader>{title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Image src={hdurl} width="80vw" />
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Text>
                {copyright} - {date}
              </Text>
            </Flex>

            <Box width={{ md: "300px", lg: "40vw" }}>
              <Text as="h3" fontSize="2xl">
                {title}
              </Text>
              <Text>{explanation}</Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default HomeView;
