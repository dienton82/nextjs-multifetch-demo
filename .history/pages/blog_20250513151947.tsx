import { GetStaticProps } from 'next';

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Blog (SSG)</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow hover:shadow-md">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 60 // Regenerar la página cada 60 segundos si hay visitas
  };
};
