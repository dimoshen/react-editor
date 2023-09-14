import './App.scss'
import { Header } from './components/Header';
import { Preview } from './components/Preview/Preview';
import { Toolbar } from './components/Toolbar';
import { Workspace } from './components/Workspace';

const App = () => (
  <>
    <Header />
    <div className="container">
      <Toolbar />
      <Workspace />
      <Preview />
    </div>
  </>
);


export default App
