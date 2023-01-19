import IndexMain from "@/components/Sections/IndexMain";
import Recipes from "@/components/Recipes";
import { client } from "@/lib/client";
import Image from "next/image";
import { urlFor } from "@/lib/client";


export default function Index({ recipes }) {
  return (
    <>
      <IndexMain />
      {/* <div className="flex gap-4">
        {recipes.map((recipe) => (
          <Recipes key={recipe._id} {...recipe} />
        ))}
      </div> */}
      <div className="flex gap-4 bg-blue-500">
        <h1>{recipes[0].title}</h1>
        <Image
          src={urlFor(recipes[0].image).url()}
          alt="Prueba"
          width="400"
          height="100"
          className="rounded-t-lg"
        /> 
        <ul >
          <li>{recipes[0].description}</li>
          <li>{recipes[0].time}</li>
        </ul>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const recipes = await client.fetch(`*[_type == "recipe"]`);
  console.log(recipes[0])

  return {
    props: {
      recipes,
    },
  };
}
