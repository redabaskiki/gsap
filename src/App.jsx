import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";


import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

 const App = () => {
	<main>
	 <Navbar />
	 <Hero />
	 <Cocktails />
	</main>
 
}

export default App
