import './App.scss'
import { Header } from './components/Header';
import { Preview } from './components/Preview';
import { ToolsBox } from './components/ToolsBox';
import { Workspace } from './components/Workspace';

const App = () => (
  <>
    <Header />
    <div className="container">
      <ToolsBox />
      <Workspace />
      <Preview />
    </div>
  </>
);


export default App
