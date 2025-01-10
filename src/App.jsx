import SignUp from './components/Form/SignUp';
import MediaPlayer from './components/MediaPlayer/MediaPlayer';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="space-y-3 border border-indigo-400 p-4">
          <Toolbar />
        </div>
        <div className="space-y-3 border border-indigo-400 p-4">
          <MediaPlayer />
        </div>
        <div className="space-y-3 border border-indigo-400 p-4">
          <SignUp />
        </div>
      </div>
    </>
  );
}

export default App;
