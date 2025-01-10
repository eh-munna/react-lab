import Button from './components/Button/Button';
import Media from './components/Media/Media';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="space-y-3">
          <Button />
        </div>
        <div className="space-y-3">
          <Toolbar />
        </div>
        <div className="space-y-3">
          <Media />
        </div>
      </div>
    </>
  );
}

export default App;
