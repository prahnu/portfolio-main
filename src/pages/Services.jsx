import { motion } from 'framer-motion';
import { FiLayout, FiPenTool, FiCode, FiGrid, FiVideo, FiMusic } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data';
import styles from './Services.module.css';

const iconMap = { FiLayout, FiPenTool, FiCode, FiGrid, FiVideo, FiMusic };

export default function Services() {
	return (
		<PageTransition>
			<SectionTitle
				title='Services'
				subtitle='I offer a range of creative and technical services tailored to digital experiences and enterprise solutions.'
			/>

			<div className={styles.servicesGrid}>
				{services.map((s, i) => {
					const Icon = iconMap[s.icon] || FiCode;
					return (
						<motion.div
							key={s.title}
							className={styles.serviceCard}
							style={{ '--c': s.color }}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
							whileHover={{ y: -8 }}>
							<div className={styles.icon}>
								<Icon />
							</div>
							<h3>{s.title}</h3>
							<p>{s.description}</p>
						</motion.div>
					);
				})}
			</div>
		</PageTransition>
	);
}
