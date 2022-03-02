import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Projectlist from "./components/projectlist/Projectlist";
import Projects from "./components/projects/Projects";
import Contact from './components/contact/Contact';

const App = () => {

  return <div>
    <Intro />
    <About />
    <Projectlist />
    <Contact />
  </div>;
};

export default App;