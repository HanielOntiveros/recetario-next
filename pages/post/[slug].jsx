import Head from "next/head";
import Layout from "../../components/Layout";
import { urlFor } from "../../lib/client";
import { client } from "../../lib/client";
import { format } from "date-fns";
import Image from "next/image";
import Content from "@/components/Content";
export default function Post({ post }) {
  const date = format(new Date(post.publishedDate), "dd MMM yyy");
  return (
    <>
      <Head></Head>
      <div className="relative flex w-full h-screen">
        <Image
          src={urlFor(post.image).url()}
          alt=""
          width="1920"
          height="100"
          className=""
        />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 bottom-32 left-1/2">
        <div className="container mx-auto ">
          <div className="items-center justify-center ">
            <div className="flex items-center justify-center">
              <p className="pr-6 text-sm font-semibold text-center text-white uppercase font-mont">
                {date}
              </p>
              <p className="text-white">|</p>
              <p className="pl-6 text-lg font-light text-center text-white uppercase font-mont">
                {post.lekua}
              </p>
            </div>
            <div className="py-2">
              <p className="text-5xl font-semibold text-white font-mont">
                {post.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex py-4 mx-auto bg-blue-200">
        <div className="">
          <Content body={post.body} />
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const query = `*[_type == "post"] {
        slug {
            current
        }
    }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
}
