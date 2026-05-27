import { useMemo, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data';
import styles from './Portfolio.module.css';

const filters = [
	{ id: 'all', label: 'All' },
	{ id: 'app', label: 'App Design' },
	{ id: 'graphic', label: 'Graphic Design' },
	{ id: 'web', label: 'Web Design' },
];

const getInitials = (title) =>
	title
		.split(' ')
		.map((w) => w[0])
		.slice(0, 3)
		.join('');

export default function Portfolio() {
	const [filter, setFilter] = useState('all');

	const filtered = useMemo(
		() => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
		[filter],
	);

	return (
		<PageTransition>
			<SectionTitle
				title='Portfolio'
				subtitle='Explore a showcase of my top projects featuring innovative designs, interactive applications, and impactful solutions across web, UI/UX, and enterprise platforms.'
			/>

			<div className={styles.portfolioFilters}>
				{filters.map((f) => (
					<button key={f.id} className={filter === f.id ? styles.active : ''} onClick={() => setFilter(f.id)}>
						{f.label}
					</button>
				))}
			</div>

			<LayoutGroup>
				<motion.div className={styles.portfolioGrid} layout>
					<AnimatePresence mode='popLayout'>
						{filtered.map((p, i) => (
							<motion.div
								key={p.title}
								className={styles.portfolioCard}
								style={p.image ? undefined : { background: p.gradient }}
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
								whileHover={{ y: -6 }}>
								<Link
									to={`/portfolio/${p.id}`}
									className={styles.portfolioCardLink}
									aria-label={`View details for ${p.title}`}>
									<div className={styles.thumb}>
										{p.image ? (
											<img className={styles.thumbImage} src={p.image} alt={p.title} loading='lazy' />
										) : (
											getInitials(p.title)
										)}
									</div>
									<div className={styles.overlay}>
										<div className={styles.cat}>{p.subtitle}</div>
										<div className={styles.title}>{p.title}</div>
										<div className={styles.desc}>{p.description}</div>
										<span className={styles.viewDetails}>
											View details <FiArrowUpRight />
										</span>
									</div>
								</Link>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</LayoutGroup>
		</PageTransition>
	);
}
