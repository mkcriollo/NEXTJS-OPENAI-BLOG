import Image from "next/image";
import { Logo } from "../components/logo";
import HeroImage from "../public/hero.webp";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="Hero" className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
          The AI-powered SAAS solution to generate SEO-optimized blog posts in
          minutes. Get High-quality content, without sacrificing your time.
        </p>
        <Link href="/post/new" className="btn">
          Begin
        </Link>
      </div>
    </div>
  );
}
