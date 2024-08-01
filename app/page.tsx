import Tab from "@/components/Tab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-yellow-300">
      <div className="w-[400px] bg-white border-[1px] border-black h-[500px] rounded-lg  p-5">
        {/* <div className="absolute inset-0 bg-black rounded-lg  "></div> */}
        <div className="flex flex-col w-full gap-y-3">
          <div className="flex w-full justify-center">
            <Image
              src={`/assets/images/illustration-article.svg`}
              width={350}
              height={200}
              alt="illustration"
              className="rounded-lg"
            />
          </div>
          <Tab />
        </div>
      </div>
    </main>
  );
}
