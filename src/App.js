import './App.css';
import Experience from './components/Experience/Experience';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Element } from 'react-scroll';
import Landing from './components/Landing/Landing';

function App() {
	return (
		<div className="app">
			<NavBar />
			<div className="app__container">
				<Element name="landing">
					<Landing />
				</Element>
				<Element name="about">
					<About />
				</Element>
				<Element name="experience">
					<Experience />
				</Element>
				<Element name="projects">
					<Projects />
				</Element>
				<Element name="contact">
					<Contact />
				</Element>
			</div>
		</div>
	);
}

export default App;
