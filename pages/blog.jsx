import { client } from "@/lib/client";
import Post from "@/components/Post";

export default function Blog({ posts }) {
  return (
    <>
      <div className="flex px-12 py-24 bg-gray-200">
        <div className="flex gap-4">
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}
