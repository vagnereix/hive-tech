import Aos from 'aos';
import { useEffect } from 'react';
import { MainProject } from './components/MainProject';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';

import { GlobalStyles } from './styles/global';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Projects />
      <MainProject />
    </>
  );
}

export default App;
