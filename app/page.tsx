import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import HeroSection from "@/components/main/HeroSection";

export default function Page() {
  return (
    <main className="flex flex-col space-y-4 my-6">
      <img
        alt="Jane Smith"
        className="aspect-square overflow-hidden rounded-full object-cover object-center justify-self-start"
        height="150"
        src="/placeholder.svg"
        width="150"
      />

      <HeroSection />
    </main>
  );
}
