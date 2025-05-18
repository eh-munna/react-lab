import Heading from './components/Heading';
import Section from './components/Section';

export default function App() {
  return (
    <>
      <div className="text-red-400 space-y-3">
        <h1 className="text-3xl font-bold underline text-center">
          Passing Data Deeply with Context
        </h1>
        <p className="text-center">
          Usually, you will pass information from a parent component to a child
          component via props. But passing props can become verbose and
          inconvenient if you have to pass them through many components in the
          middle, or if many components{' '}
          <a
            className="text-blue-300 underline"
            target="_blank"
            href="https://react.dev/learn/passing-data-deeply-with-context"
          >
            👉 Learn more...
          </a>
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl text-indigo-300 font-semibold">
          Prop Drilling Using Context Api
        </h2>

        <Section>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub Heading</Heading>
            <Heading>Sub Heading</Heading>
            <Heading>Sub Heading</Heading>
            <Section>
              <Heading>Sub Sub Heading</Heading>
              <Heading>Sub Sub Heading</Heading>
              <Heading>Sub Sub Heading</Heading>
            </Section>
          </Section>
        </Section>
      </div>
    </>
  );
}
