import { Box } from "@chakra-ui/react";
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
        <title>
          {name}
          <meta name="description" content={`${name} page`} />
          <link rel="icon" href="/favicon.ico" />
        </title>
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
          minH="90vh"
        >
          {component}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
