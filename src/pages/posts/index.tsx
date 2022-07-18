import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { RichText } from "prismic-dom";
import { createClient } from "../../services/prismic";
import styles from "./styles.module.scss";

type Post = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.summary}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const prismic = createClient({ previewData });
  const response = await prismic.getAllByType("post", {
    fetch: ["post.title", "post.content"],
    pageSize: 100,
  });

  const posts =
    response &&
    response.map((post) => {
      return {
        id: post.id,
        slug: post.uid,
        title: RichText.asText(post?.data?.title),
        summary:
          post.data.content.find((content) => content.type === "paragraph")
            ?.text ?? "",
        updatedAt: new Date(post.last_publication_date).toLocaleDateString(
          "pt-BR",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }
        ),
      };
    });

  return {
    props: { posts },
  };
};
