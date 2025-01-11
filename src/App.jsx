import BucketList from './components/BucketList/BucketList';
import CounterList from './components/CounterList/CounterList';
import List from './components/List/List';
import ShapeEditor from './components/ShapeEditor/ShapeEditor';
import Task from './components/Task/Task';

function App() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <Task />
        <ShapeEditor />
        <CounterList />
        <List />
        <BucketList />
      </div>
    </>
  );
}

export default App;
