import Head from "next/head";
import { urlFor } from "../../lib/client";
import { client } from "../../lib/client";
import Image from "next/image";
export default function Post({ recipe }) {
  return (
    <>
      <Head></Head>
      <div className="relative flex w-full h-screen">
        <Image
          src={urlFor(recipe.image).url()}
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
              <p className="text-white">|</p>
              <p className="pl-6 text-lg font-light text-center text-white uppercase font-mont">
                {recipe.lekua}
              </p>
            </div>
            <div className="py-2">
              <p className="text-5xl font-semibold text-white font-mont">
                {recipe.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex py-4 mx-auto bg-blue-200">
        <div className=""></div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const query = `*[_type == "recipe"] {
        slug {
            current
        }
    }`;

  const recipes = await client.fetch(query);
  const paths = recipes.map((recipe) => ({
    params: {
      slug: recipe.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "recipe" && slug.current == '${slug}'][0]`;

  const recipe = await client.fetch(query);

  return {
    props: {
      recipe,
    },
  };
}
