import { GhostButton } from '@components/Button';
import Headline from '@components/Headline';

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-start justify-center gap-8 py-24">
      <p className="eyebrow m-0 text-signal-red">404</p>
      <Headline
        as="h1"
        text="This page"
        accent="doesn't exist."
        className="text-[clamp(48px,7vw,120px)]"
      />
      <GhostButton href="/">Back to home</GhostButton>
    </section>
  );
}
