import { FileText } from "lucide-react";

export default function page() {
  return (
    <div className="flex flex-col space-y-4 border border-blue-400">
      {/* header */}
      <header className="flex items-center space-x-4">
        <FileText className="size-8 animate-pulse" />

        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">
          Education & Experience
        </h2>
      </header>

      <section className="border border-green-300 flex flex-col pl-[15px]">
        <div className="flex border border-red-400 h-32"></div>
      </section>
    </div>
  );
}
