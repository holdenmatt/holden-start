import { ExternalLink } from "@/components/atoms/external-link";
import { DarkModeToggle } from "@/components/atoms/mode-toggle";
import { ReadmeDisplay } from "@/components/readme-display";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center">
      <header className="container flex h-16 items-center justify-center">
        <DarkModeToggle className="ml-auto" />
      </header>
      <main className="flex flex-col items-center">
        <ReadmeDisplay />
      </main>
      <footer className="flex h-16 flex-wrap items-center justify-center gap-4">
        <ExternalLink href="https://x.com/holdenmatt">@holdenmatt</ExternalLink>
        <span className="text-muted-foreground select-none">·</span>
        <ExternalLink href="https://github.com/holdenmatt">GitHub</ExternalLink>
      </footer>
    </div>
  );
}
