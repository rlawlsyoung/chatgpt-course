import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimalInput(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });

    setAnimalInput("");
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
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              name="animal"
              placeholder="애완동물 종류를 입력해주세요."
              value={animalInput}
              onChange={onChangeHandler}
            />
            <input type="submit" value="이름 생성하기" />
          </form>
        </main>
      </div>
    </>
  );
}
