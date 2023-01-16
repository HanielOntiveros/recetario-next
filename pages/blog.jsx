import client from "@/lib/client";

export default function Blog({ posts }) {
  return (
    <>
      <main>
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <li key={post._id}>{post?.title}</li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts
    }
  };
}
