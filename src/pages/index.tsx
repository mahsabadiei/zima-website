import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Layout>
        <main></main>
      </Layout>
    </>
  );
};

export default Home;
