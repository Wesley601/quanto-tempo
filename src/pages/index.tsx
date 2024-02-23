import Timer from "@/components/Timer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex h-screen p-24 ${inter.className}`}>
      <div className="m-auto flex flex-col items-center">
        <Timer />
      </div>
    </main>
  );
}
