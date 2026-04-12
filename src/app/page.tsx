import Hero from "@/components/hero";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
