import {
  Box,
  Flex,
  Link,
  IconButton,
  Image,
  Divider,
  Center,
  SlideFade,
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../public/assets/shared/logo.png";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => setShowMenu((prev) => !prev);

  const menuLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Destination",
      path: "/destination",
    },
    {
      name: "Crew",
      path: "/crew",
    },
    {
      name: "Technology",
      path: "/technology",
    },
  ];

  return (
    <Flex as="nav" pt={2} justifyContent="end">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100vw"
      >
        <Image src={logo.src} alt="Space Logo" boxSize="32px" ml={2} />
        <Center
          width="35vw"
          sx={{ width: { base: "none", sm: "25vw", md: "25vw", xl: "35vw" } }}
          position="absolute"
          left="110px"
          zIndex={10}
        >
          <Divider />
        </Center>
        <Box
          sx={{ display: { base: "none", sm: "flex" } }}
          bg="rgba(255, 255, 255, 0.04)"
          backdropFilter="blur(40.7742px)"
          height="96px"
          alignItems="center"
          width="60vw"
          justifyContent="space-evenly"
        >
          {menuLinks.map((link) => (
            <Flex key={link.name}>
              <Link color="primary" href={link.path} fontSize="md">
                <b>0{menuLinks.indexOf(link)}</b> {link.name}
              </Link>
            </Flex>
          ))}
        </Box>
      </Box>
      <Box
        position="absolute"
        top="0.5rem"
        right="0.5rem"
        display={{ base: "block", sm: "none" }}
        onClick={handleToggleMenu}
        zIndex={10}
      >
        <IconButton
          aria-label="Menu"
          icon={
            showMenu ? <CloseIcon boxSize={4} /> : <HamburgerIcon boxSize={8} />
          }
          colorScheme="none"
          color="secondary"
        />
      </Box>
      <Box
        display={{ base: showMenu ? "flex" : "none", sm: "none" }}
        position="fixed"
        top="0"
        right="0"
        padding={12}
        width={{ base: "256px", sm: "none" }}
        height={{ base: "100vh", sm: "none" }}
        flexDirection="column"
        zIndex={1}
        bg="rgba(255, 255, 255, 0.04)"
        backdropFilter="blur(40.7742px)"
      >
        <SlideFade in={showMenu} offsetX="256px">
          {menuLinks.map((link) => (
            <Flex mt={5} key={link.name}>
              <Link color="primary" href={link.path}>
                <b>0{menuLinks.indexOf(link)}</b> {link.name}
              </Link>
            </Flex>
          ))}
        </SlideFade>
      </Box>
    </Flex>
  );
};

export default Navigation;
