import client from "@/lib/client";
import Recipes from "@/components/Recipes";

export default function Recipe({ recipes }) {
  return (
    <>
      <div className="flex gap-4">
            {recipes.map((recipe) => (
              <Recipes key={recipe._id} {...recipe} />
            ))}
          </div>
    </>
  );
}

export async function getStaticProps() {
  const recipes = await client.fetch(`*[_type == "recipes"]`);

  return {
    props: {
      recipes
    }
  };
}

