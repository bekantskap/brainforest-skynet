import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";
import Block, { BLOCKS_FIELD } from "../../components/Block";
import Layout from "../../layouts/Layout";
import client from "../../utils/client";
import { NextPageWithLayout } from "../_app";

const Post: NextPageWithLayout = ({ post }: any) => {
  const { title, blocks } = post;
  console.log(blocks);

  return (
    <>
      <Head>
        <title>Brainforest intranät</title>
        <meta name="description" content="Brainforest intranät" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <article className="w-[595px] min-h-[842px] p-4 col-span-12 lg:col-span-8 bg-primarycolor">
          <div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold">{title}</h2>
              <div className="ml-2 mr-2 flex justify-between">
                <p className="text-xs ">12-22-2022</p>
                <p className="text-xs">Author Authorsson</p>
              </div>
            </div>

            {blocks
              ? blocks.map((block: any, index: number) => (
                  <Block block={block} key={index} />
                ))
              : null}

            {/* <p className="text-sm p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              bibendum porta ornare. Duis elementum tincidunt sapien, quis
              sollicitudin ipsum dignissim a. Proin scelerisque metus sed lorem
              finibus, sit amet efficitur nunc pulvinar. Cras dignissim ut est
              vehicula mollis. Phasellus ac justo leo. Cras laoreet, quam in
              lacinia gravida, enim urna malesuada turpis, a fermentum augue
              turpis et turpis. Donec eget congue ligula. Vivamus egestas vitae
              turpis scelerisque pulvinar. Maecenas lobortis vitae justo eget
              efficitur. Nam malesuada leo eu malesuada rhoncus. Integer tortor
              odio, cursus eu suscipit eget, consequat elementum est. Donec quis
              sapien enim. Sed nec sem accumsan, accumsan ipsum a, bibendum
              orci. Vivamus vitae dictum sapien, eget pharetra eros.
            </p>
            <Image
              src={
                "https://images.unsplash.com/photo-1670139018135-6711b8932acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              }
              width={500}
              height={500}
              alt="/"
              className="ml-4"
            />
            <p className="text-sm p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              bibendum porta ornare. Duis elementum tincidunt sapien, quis
              sollicitudin ipsum dignissim a. Proin scelerisque metus sed lorem
              finibus, sit amet efficitur nunc pulvinar. Cras dignissim ut est
              vehicula mollis. Phasellus ac justo leo. Cras laoreet, quam in
              lacinia gravida, enim urna malesuada turpis, a fermentum augue
              turpis et turpis. Donec eget congue ligula. Vivamus egestas vitae
              turpis scelerisque pulvinar. Maecenas lobortis vitae justo eget
              efficitur. Nam malesuada leo eu malesuada rhoncus. Integer tortor
              odio, cursus eu suscipit eget, consequat elementum est. Donec quis
              sapien enim. Sed nec sem accumsan, accumsan ipsum a, bibendum
              orci. Vivamus vitae dictum sapien, eget pharetra eros.
            </p> */}
          </div>
        </article>
        <section className="w-[295px] h-fit col-span-12 lg:col-span-4">
          <form className="flex flex-col items-end">
            <textarea className="w-full h-40 resize-none focus:outline-accentcolor"></textarea>
            <button className="h-10 w-14 bg-accentcolor text-white text-sm hover:text-textcolor hover:border-accentcolor hover:bg-primarycolor hover:border">
              Skicka
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Post;

const GET_POST = gql`
  query getPost($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      ...BlocksField
    }
  }
  ${BLOCKS_FIELD}
`;

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  // const uri = params.uri;
  const uri = params.uri.join("/");

  const res = await client.query({
    query: GET_POST,
    variables: { uri },
  });

  const post = res?.data?.post;
  if (!post) {
    return { notFound: true };
  }
  return {
    props: { post },
    revalidate: 120,
  };
}

Post.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
