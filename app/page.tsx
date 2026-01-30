import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Accueil" />

      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center mb-6"></main>
      <Footer />
    </div>
  );
}
