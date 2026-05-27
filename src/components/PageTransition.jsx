import { motion } from 'framer-motion';
import styles from './PageTransition.module.css';

const variants = {
	initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
	enter: { opacity: 1, y: 0, filter: 'blur(0px)' },
	exit: { opacity: 0, y: -16, filter: 'blur(8px)' },
};

export default function PageTransition({ children }) {
	return (
		<motion.main
			className={styles.page}
			variants={variants}
			initial='initial'
			animate='enter'
			exit='exit'
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
			{children}
		</motion.main>
	);
}
