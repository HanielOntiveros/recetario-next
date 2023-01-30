import Head from "next/head";
import { urlFor } from "../../lib/client";
import { client } from "../../lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Post({ recipe }) {
  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <img
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value).width(320).height(240).fit("max").auto("format")}
          />
        );
      },
    },
  };
  return (
    <>
      <Head></Head>
      <div className="relative flex w-full h-screen bg-neutral-800">
        <Image
          src={urlFor(recipe.image).url()}
          alt=""
          width="1920"
          height="100"
          className=""
        />
      </div>
      <div className="px-12 py-12 bg-neutral-800">
        <p className="text-4xl font-bold text-white">{recipe.title}</p>
        <p className="pt-4 text-xl font-light text-white">
          {recipe.description}
        </p>
      </div>
      <div className="grid grid-cols-3 py-12 bg-neutral-800">
        <div className="px-12">
          <h5 className="text-2xl font-bold text-white">Ingredientes</h5>
          <div className="flex py-6">
            <ul>
              {recipe.ingredients.map((ingredient) => (
                // eslint-disable-next-line react/jsx-key
                <li className="pb-2 text-lg font-bold text-white">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4">
            <p className="text-2xl font-bold text-white">
              Tiempo de Preparacion
            </p>
            <p className="pt-4 pb-2 text-lg font-bold text-white">
              {recipe.cookingtime} Min
            </p>
          </div>
          <div className="py-4">
            <p className="text-2xl font-bold text-white">Tiempo de Coccion</p>
            <p className="pt-4 pb-2 text-lg font-bold text-white">
              {recipe.preparationtime} Min
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <h5 className="text-2xl font-bold text-white">Preparacion</h5>
          <div className="flex items-start w-4/6 py-6">
            <p className="font-bold leading-relaxed text-white">
              {recipe.preparation}
            </p>
          </div>
          <div className="grid w-4/6 grid-cols-2 gap-4 px-6 py-6">
            {recipe.imageGallery.map((img) => (
              // eslint-disable-next-line react/jsx-key
              <Image
                src={urlFor(img.asset._ref).url()}
                alt=""
                width="600"
                height="100"
                className=""
              />
            ))}
          </div>
          <PortableText value={recipe.body} components={ptComponents} />
        </div>
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
