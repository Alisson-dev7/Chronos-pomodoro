import { Home } from './pages/Home';
import {TaskContextProvider } from './contexts/TaskContext';

import './Styles/theme.css';
import './Styles/global.css';



export function App() {
  return ( 
    <TaskContextProvider>
      <Home/>
    </TaskContextProvider>
  );
}
