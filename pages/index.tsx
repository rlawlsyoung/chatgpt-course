import Head from "next/head";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <img src="/favicon.ico" alt="favicon" />
          <h3>애완동물 이름 짓기</h3>
          <form>
            <input type="text" name="animal" placeholder="Enter an animal" />
            <input type="submit" />
          </form>
        </main>
      </div>
    </>
  );
}
