import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle }) {
	return (
		<motion.div
			className={styles.sectionTitle}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.6 }}>
			<h2>{title}</h2>
			{subtitle && <p>{subtitle}</p>}
		</motion.div>
	);
}
