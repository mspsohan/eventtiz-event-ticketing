import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className='h-[100vh] home'>
        <Nav />
        <Hero />
        <HomeSection />
        <Footer />
      </main>
    </>
  );
}