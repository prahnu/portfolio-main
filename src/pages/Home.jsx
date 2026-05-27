import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import { profile } from '../data';
import styles from './Home.module.css';

const stats = [
	{ num: '4+', label: 'Years Experience' },
	{ num: '10+', label: 'Projects Delivered' },
	{ num: '10+', label: 'Happy Stakeholders' },
	{ num: '∞', label: 'Cups of Coffee' },
];

const word = {
	hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
	show: (i) => ({
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
	}),
};

export default function Home() {
	const nameWords = profile.name.split(' ');
	return (
		<PageTransition>
			<section className={styles.hero}>
				<div className={styles.heroInner}>
					<motion.div
						className={styles.heroEyebrow}
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.5 }}>
						<span className={styles.dot} /> Available for new opportunities
					</motion.div>

					<h1>
						{nameWords.map((w, i) => (
							<motion.span
								key={i}
								custom={i}
								initial='hidden'
								animate='show'
								variants={word}
								style={{ display: 'inline-block', marginRight: '0.3em' }}
								className={i === nameWords.length - 1 ? styles.gradient : ''}>
								{w}
							</motion.span>
						))}
					</h1>

					<motion.p
						className={styles.tag}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.6 }}>
						{profile.tagline} A {profile.role.toLowerCase()} crafting intuitive, performant, and visually compelling
						digital experiences.
					</motion.p>

					<motion.div
						className={styles.heroCta}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.6 }}>
						<Link to='/portfolio' className='btn btn-primary'>
							View My Work <FiArrowRight />
						</Link>
						<Link to='/contact' className='btn btn-ghost'>
							<FiMail /> Get in Touch
						</Link>
					</motion.div>

					<div className={styles.heroStats}>
						{stats.map((s, i) => (
							<motion.div
								key={s.label}
								className={styles.statCard}
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
								whileHover={{ y: -6 }}>
								<div className={styles.num}>{s.num}</div>
								<div className={styles.label}>{s.label}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</PageTransition>
	);
}
