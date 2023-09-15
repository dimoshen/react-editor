
import ReactDOM from 'react-dom/client'
import { ReduxProvider } from './redux/provider.tsx'
import App from './App.tsx'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ReduxProvider>
      <App />
    </ReduxProvider>
);
