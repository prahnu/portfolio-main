import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../data';
import resumeFile from '../documents/prahnu-resume.pdf';
import styles from './Navbar.module.css';

const links = [
	{ to: '/', label: 'Home' },
	{ to: '/about', label: 'About' },
	{ to: '/resume', label: 'Resume' },
	{ to: '/services', label: 'Services' },
	{ to: '/portfolio', label: 'Portfolio' },
	{ to: '/contact', label: 'Contact' },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setOpen(false);
	}, [location.pathname]);

	return (
		<>
			<motion.nav
				className={styles.navbar}
				initial={{ y: -80, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
				<NavLink to='/' className={styles.brand}>
					{profile.shortName}
				</NavLink>

				<ul className={styles.navLinks}>
					{links.map((l) => (
						<li key={l.to}>
							<NavLink
								to={l.to}
								end={l.to === '/'}
								className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
								{({ isActive }) => (
									<>
										{isActive && (
											<motion.span
												layoutId='nav-pill'
												className={styles.navPill}
												transition={{ type: 'spring', stiffness: 380, damping: 30 }}
											/>
										)}
										{l.label}
									</>
								)}
							</NavLink>
						</li>
					))}
					{/* <li>
						<a
							className={`${styles.navLink} ${styles.resumeCta}`}
							href={resumeFile}
							target='_blank'
							rel='noreferrer'
							aria-label='Open Resume PDF'>
							<FiDownload size={14} /> Resume PDF
						</a>
					</li> */}
				</ul>

				<div className={styles.navSocial}>
					<a href={profile.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'>
						<FiLinkedin size={16} />
					</a>
				</div>

				<button className={styles.navToggle} onClick={() => setOpen((o) => !o)} aria-label='Toggle menu'>
					{open ? <FiX /> : <FiMenu />}
				</button>
			</motion.nav>

			<AnimatePresence>
				{open && (
					<motion.div
						className={styles.navMobile}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}>
						{links.map((l) => (
							<NavLink
								key={l.to}
								to={l.to}
								end={l.to === '/'}
								className={({ isActive }) => (isActive ? styles.active : '')}>
								{l.label}
							</NavLink>
						))}
						<a
							className={styles.resumeCtaMobile}
							href={resumeFile}
							target='_blank'
							rel='noreferrer'
							aria-label='Open Resume PDF'>
							<FiDownload size={14} /> Resume PDF
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
