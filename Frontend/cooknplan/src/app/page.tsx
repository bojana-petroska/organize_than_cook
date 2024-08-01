import Image from "next/image";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div>plan & cook</div>
      <Navbar />
      <Hero />
    </main>
  );
}
