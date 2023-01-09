import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Navigation from "./Navigation";

interface LayoutPageProps {
  name: string;
  component: any;
}

const Layout = ({ name, component }: LayoutPageProps) => {
  const devices = (device: string) => {
    return `url('../assets/${name}/background-${name}-${device}.jpg')`;
  };

  return (
    <>
      <Head>
        <title style={{ textTransform: "capitalize" }}>{name}</title>
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
        <Flex flexDirection="column" gap={9} alignItems="center" minH="90vh">
          {component}
        </Flex>
      </Box>
    </>
  );
};

export default Layout;
