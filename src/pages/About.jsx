import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { profile, skills, testimonials } from '../data';
import styles from './About.module.css';

const initials = profile.name
	.split(' ')
	.map((n) => n[0])
	.join('');

export default function About() {
	return (
		<PageTransition>
			<SectionTitle title='About Me' subtitle={profile.bio} />

			<div className={styles.aboutGrid}>
				<motion.div
					className={styles.aboutAvatar}
					initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
					<span className={styles.initials}>{initials}</span>
				</motion.div>

				<motion.div
					className={styles.aboutContent}
					initial={{ opacity: 0, x: 24 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.15 }}>
					<h3>{profile.role}</h3>
					<p className={styles.italic}>{profile.about[0]}</p>

					<ul className={styles.aboutInfo}>
						<li>
							<FiChevronRight />
							<span>
								<strong>Birthday:</strong> {profile.birthday}
							</span>
						</li>
						<li>
							<FiChevronRight />
							<span>
								<strong>Phone:</strong> {profile.phone}
							</span>
						</li>
						<li>
							<FiChevronRight />
							<span>
								<strong>City:</strong> {profile.city}
							</span>
						</li>
						<li>
							<FiChevronRight />
							<span>
								<strong>Age:</strong> {profile.age}
							</span>
						</li>
						<li>
							<FiChevronRight />
							<span>
								<strong>Degree:</strong> {profile.degree}
							</span>
						</li>
						<li>
							<FiChevronRight />
							<span>
								<strong>Email:</strong> {profile.email}
							</span>
						</li>
					</ul>

					<p>{profile.about[1]}</p>
				</motion.div>
			</div>

			{/* Skills */}
			<div style={{ marginTop: 120 }}>
				<SectionTitle
					title='Skills'
					subtitle="A versatile blend of design and development expertise — here's a snapshot of my skill set."
				/>
				<div className={styles.skillsGrid}>
					{skills.map((s, i) => (
						<motion.div
							key={s.name}
							className={styles.skillRow}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.5, delay: i * 0.05 }}>
							<div className={styles.skillHead}>
								<span>{s.name}</span>
								<span className={styles.val}>{s.value}%</span>
							</div>
							<div className={styles.skillBar}>
								<motion.div
									className={styles.skillFill}
									initial={{ width: 0 }}
									whileInView={{ width: `${s.value}%` }}
									viewport={{ once: true, amount: 0.4 }}
									transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Testimonials */}
			<div style={{ marginTop: 120 }}>
				<SectionTitle
					title='Testimonials'
					subtitle="Real words from colleagues and leaders who've worked closely with me."
				/>
				<div className={styles.testimonialsGrid}>
					{testimonials.map((t, i) => (
						<motion.div
							key={t.name}
							className={styles.testimonialCard}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
							whileHover={{ y: -6 }}>
							<div className={styles.quote}>“</div>
							<p className={styles.text}>{t.text}</p>
							<div className={styles.author}>
								<div className={styles.avatar}>
									{t.name
										.split(' ')
										.map((p) => p[0])
										.slice(0, 2)
										.join('')}
								</div>
								<div>
									<div className={styles.name}>{t.name}</div>
									<div className={styles.role}>{t.role}</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</PageTransition>
	);
}
