import Alerte from "@/components/sz/Alerte";
import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <Alerte />

      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center mb-6"></main>
      <Footer />
    </div>
  );
}
