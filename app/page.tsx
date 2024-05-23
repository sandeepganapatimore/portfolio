import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black">

      <div className="max-w 10xl w-full">
        <FloatingNav navItems={[{
          name: "Home", link: "/", icon: <FaHome />
        }]} />
        <Hero />
      </div>
    </main>
  );
}
