import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';

import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Projects />
    </>
  );
}

export default App;
