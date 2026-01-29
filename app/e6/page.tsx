import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";

export default function E6() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Mes projets E6" />

      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center my-6"></main>
      <Footer />
    </div>
  );
}
