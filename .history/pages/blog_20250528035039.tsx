"use client";

import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Blog (SSG)</h1>
        <button
          onClick={() => router.back()}
          className="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          ← Atrás
        </button>
      </div>

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
    revalidate: 60, // Regenerar la página cada 60 segundos si hay visitas
  };
};
