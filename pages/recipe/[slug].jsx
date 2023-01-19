import Head from "next/head";
import { urlFor } from "../../lib/client";
import { client } from "../../lib/client";
import Image from "next/image";
import recipe from "@/backend-recetario/schemas/recipe";

export default function Post({ recipe }) {
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
        <p className="text-6xl font-bold text-white">{recipe.title}</p>
        <p className="pt-4 text-2xl font-light text-white">
          {recipe.description}
        </p>
      </div>
      <div className="grid grid-cols-3 py-12 bg-neutral-800">
        <div className="px-12">
          <h5 className="text-4xl font-bold text-white">Ingredientes</h5>
          <div className="flex py-6">
            <ul>
              {recipe.ingredients.map((ingredient) => (
                // eslint-disable-next-line react/jsx-key
                <li className="pb-2 text-xl font-bold text-white">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <h5 className="text-4xl font-bold text-white">Preparacion</h5>
          <div className="flex items-start w-4/6 py-6">
            <Image src="/fast-right-circle.svg" width={24} height={24} alt="" />
            <p className="pl-6 font-bold leading-relaxed text-white">
              {recipe.preparation}
            </p>
          </div>
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
