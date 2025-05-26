import CatFriends from '../features/CatFriends';
import Form from '../features/Form';
import { Heading, Intro, Paragraph } from './Intro';

export default function Content() {
  return (
    <>
      <main className="container mx-auto px-4 py-6 w-full min-h-[80vh]">
        <Intro link={`https://react.dev/learn/manipulating-the-dom-with-refs`}>
          <Heading>Manipulating the DOM with Refs</Heading>
          <Paragraph>
            React automatically updates the DOM to match your render output, so
            your components won’t often need to manipulate it. However,
            sometimes you might need access to the DOM elements managed by
            React...
          </Paragraph>
        </Intro>

        <section className="mt-8">
          <Form />
        </section>
        <section className="mt-8">
          <CatFriends />
        </section>
      </main>
    </>
  );
}
