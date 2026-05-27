import { motion } from 'framer-motion';
import { FiDownload, FiUser, FiBookOpen, FiBriefcase } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { profile, education, experience } from '../data';
import resumeFile from '../documents/prahnu-resume.pdf';
import styles from './Resume.module.css';

function ResumeItem({ item, hasPoints }) {
	return (
		<motion.div
			className={styles.resumeItem}
			initial={{ opacity: 0, x: -16 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5 }}>
			<h4>{item.title}</h4>
			<span className={styles.period}>{item.period}</span>
			<div className={styles.org}>{item.institution}</div>
			{hasPoints ? (
				<ul>
					{item.points.map((p, i) => (
						<li key={i}>{p}</li>
					))}
				</ul>
			) : (
				<p>{item.description}</p>
			)}
		</motion.div>
	);
}

export default function Resume() {
	return (
		<PageTransition>
			<SectionTitle
				title='Resume'
				subtitle='A snapshot of my professional background, technical expertise, and creative contributions.'
			/>

			<div style={{ textAlign: 'center', marginTop: -32, marginBottom: 56 }}>
				<a className='btn btn-primary' href={resumeFile} download='prahnu-resume.pdf'>
					Download Resume <FiDownload />
				</a>
			</div>

			<div className={styles.resumeGrid}>
				<div>
					<h3 className={styles.resumeTitle}>
						<FiUser /> Summary
					</h3>
					<motion.div
						className={styles.resumeItem}
						initial={{ opacity: 0, x: -16 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}>
						<h4>{profile.name}</h4>
						<p style={{ fontStyle: 'italic', marginBottom: 12 }}>
							I'm a creative designer and developer who blends UX/UI design with front-end development. I work on
							gamification, knowledge assets, and campaign prototypes — always aiming to deliver clean, impactful
							solutions that meet real business needs.
						</p>
						<ul>
							<li>{profile.location}</li>
							<li>{profile.phone}</li>
							<li>{profile.email}</li>
						</ul>
					</motion.div>

					<h3 className={styles.resumeTitle} style={{ marginTop: 40 }}>
						<FiBookOpen /> Education
					</h3>
					{education.map((e, i) => (
						<ResumeItem key={i} item={e} />
					))}
				</div>

				<div>
					<h3 className={styles.resumeTitle}>
						<FiBriefcase /> Professional Experience
					</h3>
					{experience.map((e, i) => (
						<ResumeItem key={i} item={e} hasPoints />
					))}
				</div>
			</div>
		</PageTransition>
	);
}
