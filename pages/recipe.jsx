import { client } from "@/lib/client";
import Recipes from "@/components/Recipes";

export default function Recipe({ recipes }) {
  return (
    <>
      <div className="h-screen bg-neutral-800">
        <div className="flex gap-4">
          {recipes.map((recipe) => (
            <Recipes key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const recipes = await client.fetch(`*[_type == "recipe"]`);

  return {
    props: {
      recipes,
    },
  };
}
