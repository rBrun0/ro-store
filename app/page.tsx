import { useEffect } from "react";
import { Header } from "./components/Header";
import { MainProducts } from "./components/MainProducts";

export default function Home() {

  return (
    <main>
      <Header/>
      <MainProducts/>
    </main>
  );
}
