import { FiLinkedin } from 'react-icons/fi';
import { profile } from '../data';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.socials}>
				<a href={profile.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'>
					<FiLinkedin />
				</a>
			</div>
			<div>
				© {new Date().getFullYear()} {profile.name}. All rights reserved.
			</div>
		</footer>
	);
}
