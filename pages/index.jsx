import IndexMain from "@/components/Sections/IndexMain";
import Recipes from "@/components/Recipes";
import { client } from "@/lib/client";
export default function Index({ recipes }) {
  return (
    <>
      <IndexMain />
      <div className="flex gap-4">
        {recipes.map((recipe) => (
          <Recipes key={recipe._id} {...recipe} />
        ))}
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
