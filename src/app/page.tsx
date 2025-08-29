import { Container } from '@/components/atoms/container';
import { ExternalLink } from '@/components/atoms/external-link';

export default function Home() {
  return (
    <Container>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center">
        <header className="container flex h-16 items-center justify-center">
          {/* Space for logo, nav, or actions */}
        </header>
        <main className="flex flex-col items-center">
          <blockquote className="max-w-2xl text-center text-2xl text-muted-foreground">
            &quot;Questions are places in your mind where answers fit. If you
            haven&apos;t asked the question, the answer has nowhere to go&quot;
          </blockquote>
        </main>
        <footer className="flex h-16 flex-wrap items-center justify-center gap-4">
          <ExternalLink href="https://x.com/holdenmatt">
            @holdenmatt
          </ExternalLink>
          <span className="select-none text-muted-foreground">·</span>
          <ExternalLink href="https://github.com/holdenmatt">
            GitHub
          </ExternalLink>
        </footer>
      </div>
    </Container>
  );
}
