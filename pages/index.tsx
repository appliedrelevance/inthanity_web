import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { theme } from "../styles/theme";
import { Heading, Button, ColorModeScript } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Heading as="h1" size="2xl">
            Welcome to Inthanity
          </Heading>
          <Heading as="h2" size="xl">
            Fact: 88% of new business comes from referrals
          </Heading>
          <Button size="lg" height="200px" width="400px">
            <Heading>Make a Referral</Heading>
            <ArrowRightIcon />
          </Button>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
