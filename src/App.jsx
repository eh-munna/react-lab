import Counter from './components/Counter/Counter';
import From from './components/Form/Form';

function App() {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <From />
        <Counter />
      </div>
    </>
  );
}

export default App;
