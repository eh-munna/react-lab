import Feature from '@/components/feature';

export default function Home() {
  return (
    <>
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Next.js Learning Journey!
        </h1>
        <p className="text-lg text-cyan-300 mb-2 underline">
          You&apos;re now viewing the Home page.
        </p>
      </section>
      <Feature>Dynamic Route Segments</Feature>
    </>
  );
}
