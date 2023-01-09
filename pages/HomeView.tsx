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
import { useState } from "react";
import { PictureOfDayProps } from ".";
import headingStyles from "../styles/headingStyles";

type HomeViewProps = {
  pictureOfDay: PictureOfDayProps;
};

const HomeView = ({ pictureOfDay }: HomeViewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
                src={pictureOfDay?.hdurl}
                borderRadius="lg"
                alt={pictureOfDay?.title}
                onClick={() => setIsOpen(true)}
              />
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent bgColor="gray.300">
                  <ModalHeader>{pictureOfDay?.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Image src={pictureOfDay?.hdurl} width="80vw" />
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Text>
                {pictureOfDay.copyright} - {pictureOfDay.date}
              </Text>
            </Flex>

            <Box width={{ md: "300px", lg: "40vw" }}>
              <Text as="h3" fontSize="2xl">
                {pictureOfDay.title}
              </Text>

              <Text>{pictureOfDay.explanation}</Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default HomeView;
