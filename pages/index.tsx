import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimalInput(e.target.value);
  };
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
            <input
              type="text"
              name="animal"
              placeholder="Enter an animal"
              value={animalInput}
              onChange={onChangeHandler}
            />
            <input type="submit" />
          </form>
        </main>
      </div>
    </>
  );
}
