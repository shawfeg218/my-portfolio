import HeroSection from "@/components/main/HeroSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import avatarFallbackImg from "@/public/svg/pyramid720.svg";

export default function Page() {
  return (
    <main className="flex flex-col space-y-4 my-6">
      <Avatar className="size-32">
        <AvatarImage src="https://github.com/shawfeg218.png" alt="@shawfeg218" />
        <AvatarFallback>
          <div className="size-32 rounded-full overflow-hidden relative bg-secondary/70">
            <Image
              className="opacity-50"
              alt="SF"
              src={avatarFallbackImg}
              style={{ objectFit: "fill" }}
            />
          </div>
        </AvatarFallback>
      </Avatar>

      <HeroSection />
    </main>
  );
}
