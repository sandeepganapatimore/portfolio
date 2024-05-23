import Hero from "@/Components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black">

      <div className="max-w 10xl w-full">
        <Hero />
      </div>
    </main>
  );
}
