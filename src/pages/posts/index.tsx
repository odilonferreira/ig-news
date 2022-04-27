import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>26 de abril de 2022</time>
            <strong>Título do post em si</strong>
            <p>
              Conteúdo do post Conteúdo do post Conteúdo do post Conteúdo do
              Conteúdo do post Conteúdo do post Conteúdo do post post Conteúdo
              do post{" "}
            </p>
          </a>
          <a>
            <time>26 de abril de 2022</time>
            <strong>Título do post em si</strong>
            <p>Conteúdo do post</p>
          </a>
          <a>
            <time>26 de abril de 2022</time>
            <strong>Título do post em si</strong>
            <p>Conteúdo do post</p>
          </a>
        </div>
      </main>
    </>
  );
}
