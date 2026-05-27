import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
	FiArrowLeft,
	FiArrowRight,
	FiBriefcase,
	FiCalendar,
	FiCheckCircle,
	FiMaximize2,
	FiTag,
	FiTool,
	FiUser,
	FiX,
} from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import { projects } from '../data';
import styles from './ProjectDetail.module.css';

const categoryLabel = {
	app: 'App Design',
	graphic: 'Graphic Design',
	web: 'Web Design',
};

export default function ProjectDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [activeImageIndex, setActiveImageIndex] = useState(null);
	const [slideDirection, setSlideDirection] = useState(0);

	const { project, prev, next, index } = useMemo(() => {
		const idx = projects.findIndex((p) => p.id === id);
		if (idx === -1) return { project: null };
		return {
			project: projects[idx],
			prev: projects[(idx - 1 + projects.length) % projects.length],
			next: projects[(idx + 1) % projects.length],
			index: idx,
		};
	}, [id]);

	const gallery = project?.gallery?.length ? project.gallery : project?.image ? [project.image] : [];
	const activeImageSrc = activeImageIndex !== null ? gallery[activeImageIndex] : null;

	useEffect(() => {
		if (activeImageIndex === null) return undefined;

		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const onKeyDown = (event) => {
			if (event.key === 'Escape') setActiveImageIndex(null);
			if (event.key === 'ArrowRight') {
				setActiveImageIndex((prev) => ((prev ?? 0) + 1) % gallery.length);
			}
			if (event.key === 'ArrowLeft') {
				setActiveImageIndex((prev) => ((prev ?? 0) - 1 + gallery.length) % gallery.length);
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.style.overflow = originalOverflow;
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [activeImageIndex, gallery.length]);

	const showPrevImage = () => {
		setSlideDirection(-1);
		setActiveImageIndex((prev) => ((prev ?? 0) - 1 + gallery.length) % gallery.length);
	};

	const showNextImage = () => {
		setSlideDirection(1);
		setActiveImageIndex((prev) => ((prev ?? 0) + 1) % gallery.length);
	};

	const openImage = (i) => {
		setSlideDirection(0);
		setActiveImageIndex(i);
	};

	const closeImage = () => setActiveImageIndex(null);

	if (!project) {
		return (
			<PageTransition>
				<div className={styles.projectMissing}>
					<h2>Project not found</h2>
					<p>The project you’re looking for doesn’t exist or has been moved.</p>
					<Link to='/portfolio' className='btn btn-primary'>
						<FiArrowLeft /> Back to Portfolio
					</Link>
				</div>
			</PageTransition>
		);
	}

	const initials = project.title
		.split(' ')
		.map((w) => w[0])
		.slice(0, 3)
		.join('');

	const facts = [
		{ icon: FiBriefcase, label: 'Client', value: project.client },
		{ icon: FiUser, label: 'My Role', value: project.role },
		{ icon: FiCalendar, label: 'Year', value: project.year },
		{ icon: FiTag, label: 'Category', value: categoryLabel[project.category] || project.category },
	];

	const heroStyle = project.image
		? {
				backgroundImage: `url(${project.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}
		: { background: project.gradient };

	return (
		<PageTransition>
			<motion.button
				className={styles.backLink}
				onClick={() => navigate(-1)}
				whileHover={{ x: -4 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.1 }}>
				<FiArrowLeft /> Back
			</motion.button>

			<motion.div
				className={styles.projectHero}
				style={heroStyle}
				initial={{ opacity: 0, scale: 0.97 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
				<div className={styles.projectHeroOverlay}>
					<motion.span
						className={styles.cat}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						{project.subtitle}
					</motion.span>
					<motion.h1
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.28, duration: 0.6 }}>
						{project.title}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}>
						{project.description}
					</motion.p>
				</div>
				{!project.image && (
					<div className={styles.projectHeroMono} aria-hidden='true'>
						{initials}
					</div>
				)}
			</motion.div>

			<div className={styles.projectFacts}>
				{facts.map((f, i) => {
					const Icon = f.icon;
					return (
						<motion.div
							key={f.label}
							className={styles.factCard}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.45 + i * 0.08 }}>
							<div className={styles.factIcon}>
								<Icon />
							</div>
							<div>
								<div className={styles.factLabel}>{f.label}</div>
								<div className={styles.factValue}>{f.value}</div>
							</div>
						</motion.div>
					);
				})}
			</div>

			{gallery.length > 0 && (
				<motion.section
					className={styles.gallerySection}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.5 }}>
					<h2>Project Screens</h2>
					<div className={styles.galleryRail}>
						{gallery.map((src, i) => (
							<motion.figure
								key={src}
								className={styles.galleryCard}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: i * 0.06 }}>
								<button
									type='button'
									className={styles.galleryButton}
									onClick={() => openImage(i)}
									aria-label={`Open ${project.title} screenshot ${i + 1}`}>
									<img src={src} alt={`${project.title} screenshot ${i + 1}`} loading='lazy' />
									<span className={styles.galleryHint}>
										<FiMaximize2 />
										View
									</span>
								</button>
							</motion.figure>
						))}
					</div>
				</motion.section>
			)}

			{createPortal(
				<AnimatePresence>
					{activeImageSrc && (
						<motion.div
							className={styles.lightbox}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.22 }}
							onClick={closeImage}>
							<motion.div
								className={styles.lightboxPanel}
								initial={{ y: 30, scale: 0.9, opacity: 0 }}
								animate={{ y: 0, scale: 1, opacity: 1 }}
								exit={{ y: 20, scale: 0.92, opacity: 0 }}
								transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
								onClick={(event) => event.stopPropagation()}>
								<button
									type='button'
									className={styles.lightboxClose}
									onClick={closeImage}
									aria-label='Close image preview'>
									<FiX />
								</button>

								{gallery.length > 1 && (
									<>
										<button
											type='button'
											className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
											onClick={showPrevImage}
											aria-label='Previous image'>
											<FiArrowLeft />
										</button>
										<button
											type='button'
											className={`${styles.lightboxNav} ${styles.lightboxNext}`}
											onClick={showNextImage}
											aria-label='Next image'>
											<FiArrowRight />
										</button>
									</>
								)}

								<div className={styles.lightboxImageWrap}>
									<AnimatePresence mode='wait' initial={false} custom={slideDirection}>
										<motion.img
											key={activeImageIndex}
											className={styles.lightboxImage}
											src={activeImageSrc}
											alt={`${project.title} screenshot ${activeImageIndex + 1}`}
											custom={slideDirection}
											initial={(dir) => ({ opacity: 0, x: dir * 60, scale: 0.96 })}
											animate={{ opacity: 1, x: 0, scale: 1 }}
											exit={(dir) => ({ opacity: 0, x: dir * -60, scale: 0.96 })}
											transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
										/>
									</AnimatePresence>
								</div>
								<div className={styles.lightboxMeta}>
									{activeImageIndex + 1} / {gallery.length}
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body,
			)}

			<div className={styles.projectBody}>
				<motion.section
					className={styles.projectSection}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}>
					<h2>Overview</h2>
					<p>{project.overview}</p>
				</motion.section>

				<motion.section
					className={styles.projectSection}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}>
					<h2>The Challenge</h2>
					<p>{project.challenge}</p>
				</motion.section>

				<motion.section
					className={styles.projectSection}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}>
					<h2>The Solution</h2>
					<p>{project.solution}</p>
				</motion.section>

				<motion.section
					className={styles.projectSection}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}>
					<h2>Key Features</h2>
					<ul className={styles.featureList}>
						{project.features.map((f, i) => (
							<motion.li
								key={i}
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: i * 0.05 }}>
								<FiCheckCircle />
								<span>{f}</span>
							</motion.li>
						))}
					</ul>
				</motion.section>

				<motion.section
					className={styles.projectSection}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}>
					<h2>
						<FiTool style={{ verticalAlign: 'middle', marginRight: 8 }} />
						Tools & Technologies
					</h2>
					<div className={styles.chipRow}>
						{project.tools.map((t) => (
							<span key={t} className={styles.chip}>
								{t}
							</span>
						))}
					</div>
				</motion.section>
			</div>

			<div className={styles.projectNav}>
				<Link to={`/portfolio/${prev.id}`} className={`${styles.projectNavLink} ${styles.prev}`}>
					<FiArrowLeft />
					<div>
						<span className={styles.label}>Previous</span>
						<span className={styles.title}>{prev.title}</span>
					</div>
				</Link>
				<Link to='/portfolio' className={`${styles.projectNavLink} ${styles.center}`}>
					<span className={styles.label}>
						{index + 1} / {projects.length}
					</span>
					<span className={styles.title}>All projects</span>
				</Link>
				<Link to={`/portfolio/${next.id}`} className={`${styles.projectNavLink} ${styles.next}`}>
					<div>
						<span className={styles.label}>Next</span>
						<span className={styles.title}>{next.title}</span>
					</div>
					<FiArrowRight />
				</Link>
			</div>
		</PageTransition>
	);
}
