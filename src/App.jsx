import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

import styles from './App.module.css';

export default function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location.pathname]);

	return (
		<div className={styles.app}>
			<div className={styles.bgOrbs} aria-hidden='true' />
			<Navbar />

			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/resume' element={<Resume />} />
					<Route path='/services' element={<Services />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/portfolio/:id' element={<ProjectDetail />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<Home />} />
				</Routes>
			</AnimatePresence>

			<Footer />
			<ScrollToTop />
		</div>
	);
}
