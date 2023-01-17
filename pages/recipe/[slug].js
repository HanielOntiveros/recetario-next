import Head from "next/head";
import { urlFor } from "../../lib/client";
import { client } from "../../lib/client";
import Image from "next/image";
import recipe from "@/backend-recetario/schemas/recipe";

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
            <div className="py-2">
              <p className="text-5xl font-semibold text-white font-mont">
                {recipe.title}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-start py-4 mx-auto bg-blue-300">
        <div className="bg-white w-screen">
          <h2 className="text-lg">{recipe.description}</h2>
          <h5 className="text-2xl text-center ">Ingredientes:</h5>
          <ul className="mx-10 list-disc mb-2 text-base font-bold tracking-tight text-gray-900">
            {recipe.ingredients.map((ingredient) => (
              // eslint-disable-next-line react/jsx-key
              <li>{ingredient}</li>
            ))}
          </ul>
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
