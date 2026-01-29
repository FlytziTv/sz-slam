import AboutMe from "@/components/card/AboutMe";
import AboutMore from "@/components/card/AboutMore";
import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="À propos" />

      <main className="grid grid-cols-3 gap-4 max-w-340 mx-auto justify-center my-6">
        <AboutMe />
        <AboutMore />
      </main>
      <Footer />
    </div>
  );
}
