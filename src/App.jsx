import Form from './components/Form/Form';
import MovingDot from './components/MovingDot/MovingDot';
import Person from './components/Person/Person';

function App() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <MovingDot />
        <Form />
        <Person />
      </div>
    </>
  );
}

export default App;
