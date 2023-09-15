import './App.scss'
import { Header } from './components/Header';
import { Preview } from './components/Preview';
import { ToolBox } from './components/ToolBox';
import { Workspace } from './components/Workspace';

const App = () => (
  <>
    <Header />
    <div className="container">
      <ToolBox />
      <Workspace />
      <Preview />
    </div>
  </>
);


export default App
