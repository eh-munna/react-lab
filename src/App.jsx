import Gallery from './components/Gallery';

export default function App() {
  return (
    <>
      <div className="text-red-400 space-y-3">
        <h1 className="text-3xl font-bold underline text-center">
          Context Passes Through Intermediate Components
        </h1>
        <p className="text-center">
          You can insert as many components as you like between the component
          that provides context and the one that uses it. This includes both
          built-in components{' '}
          <a
            className="text-blue-300 underline"
            target="_blank"
            href="https://react.dev/learn/passing-data-deeply-with-context#context-passes-through-intermediate-components"
          >
            👉 Learn more...
          </a>
        </p>
      </div>

      {/* <div className="mt-6">
        <h2 className="text-2xl text-indigo-300 font-semibold">
          Prop Drilling Using Context Api
        </h2>

        <Section isFancy={false}>
          <Heading>My Profile</Heading>
          <Post title="Hello traveler!" body="Read about my adventures." />
          <AllPosts />
        </Section>
      </div> */}

      <div>
        <Gallery />
      </div>
    </>
  );
}
