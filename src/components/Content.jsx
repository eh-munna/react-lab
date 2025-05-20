import Counter from './Counter';
import Intro from './Intro';
import Stopwatch from './Stopwatch';

export default function Content() {
  return (
    <>
      <main className="container mx-auto px-4 py-6 w-full min-h-[80vh]">
        <Intro />

        <section className="mt-8">
          <Counter />
        </section>
        <section className="mt-8">
          <Stopwatch />
        </section>
      </main>
    </>
  );
}
