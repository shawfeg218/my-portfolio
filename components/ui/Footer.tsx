import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky border-t z-20 bottom-0 px-6 py-3 bg-background/70 backdrop-filter backdrop-blur-lg">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
