import { siteName } from '@messages/seo/pageSeo';

export default function HomePage() {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-32">
      <h1 className="text-4xl font-semibold tracking-tight">{siteName}</h1>
    </section>
  );
}
