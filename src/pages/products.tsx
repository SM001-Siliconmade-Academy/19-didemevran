import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Header from "~/components/Header";
import Image from "next/image";
import ContentList from "~/components/ContentList";
import Products from "~/components/Products";

const Home: NextPage = () => {
  const { data: products } = api.product.getAllProducts.useQuery();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isActive={true} />
      <div className="flex justify-center flex-wrap w-2/3 my-10 mx-auto gap-10">
        <Products products={products} />
      </div>
    </>
  );
};

export default Home;
