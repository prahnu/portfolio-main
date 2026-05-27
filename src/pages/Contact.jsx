import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMapPin, FiPhone, FiMail, FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { profile } from '../data';
import styles from './Contact.module.css';

// EmailJS configuration (matches the original portfolio repo)
const EMAILJS_PUBLIC_KEY = 'AkG7yXyOWihMSLBbo';
const EMAILJS_SERVICE_ID = 'service_3841hqo';
const EMAILJS_NOTIFICATION_TEMPLATE = 'template_mqg5nd4';
const EMAILJS_AUTOREPLY_TEMPLATE = 'template_fhe2919';

const items = [
	{ icon: FiMapPin, label: 'Address', value: profile.address },
	{ icon: FiPhone, label: 'Call', value: profile.phone },
	{ icon: FiMail, label: 'Email', value: profile.email },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
	const [form, setForm] = useState(initialForm);
	const [status, setStatus] = useState({ state: 'idle', message: '' });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({ state: 'loading', message: '' });

		const notificationParams = {
			to_name: 'Prahnu',
			from_name: form.name,
			from_email: form.email,
			subject: form.subject,
			message: form.message,
		};

		const autoReplyParams = {
			to_name: form.name,
			to_email: form.email,
			subject: `Re: ${form.subject}`,
			message: `Dear ${form.name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nPrahnu Bordoloi`,
		};

		try {
			await Promise.all([
				emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NOTIFICATION_TEMPLATE, notificationParams, {
					publicKey: EMAILJS_PUBLIC_KEY,
				}),
				emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE, autoReplyParams, {
					publicKey: EMAILJS_PUBLIC_KEY,
				}),
			]);
			setStatus({ state: 'success', message: 'Your message has been sent. Thank you!' });
			setForm(initialForm);
		} catch (err) {
			console.error('EmailJS error:', err);
			setStatus({
				state: 'error',
				message: 'Message could not be sent. Please try again later.',
			});
		}
	};

	const isLoading = status.state === 'loading';

	return (
		<PageTransition>
			<SectionTitle
				title='Contact'
				subtitle="Feel free to reach out for collaborations, project inquiries, or just to say hello. I'm always open to new opportunities and conversations."
			/>

			<div className={styles.contactGrid}>
				<div>
					{items.map((it, i) => {
						const Icon = it.icon;
						return (
							<motion.div
								key={it.label}
								className={styles.infoCard}
								initial={{ opacity: 0, x: -24 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}>
								<div className={styles.icon}>
									<Icon />
								</div>
								<div>
									<h3>{it.label}</h3>
									<p>{it.value}</p>
								</div>
							</motion.div>
						);
					})}

					<motion.div
						className={styles.contactMap}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, delay: 0.3 }}>
						<iframe
							title='Location'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.171655136839!2d77.71699497454544!3d12.89668141651747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12b78a834d93%3A0xacea1def895b93dd!2sKodathi%20gate%2C%20155%2FD%2C%20Sarjapur%20main%20road%2C%20Bengaluru%2C%20Karnataka%20560035!5e0!3m2!1sen!2sin!4v1756894139894!5m2!1sen!2sin'
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							allowFullScreen
						/>
					</motion.div>
				</div>

				<motion.form
					className={styles.contactForm}
					onSubmit={handleSubmit}
					initial={{ opacity: 0, x: 24 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}>
					<div className={styles.formRow}>
						<div className={styles.formField}>
							<label htmlFor='name'>Your Name</label>
							<input
								id='name'
								name='name'
								type='text'
								value={form.name}
								onChange={handleChange}
								disabled={isLoading}
								required
							/>
						</div>
						<div className={styles.formField}>
							<label htmlFor='email'>Your Email</label>
							<input
								id='email'
								name='email'
								type='email'
								value={form.email}
								onChange={handleChange}
								disabled={isLoading}
								required
							/>
						</div>
					</div>

					<div className={styles.formField}>
						<label htmlFor='subject'>Subject</label>
						<input
							id='subject'
							name='subject'
							type='text'
							value={form.subject}
							onChange={handleChange}
							disabled={isLoading}
							required
						/>
					</div>

					<div className={styles.formField}>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							rows='6'
							value={form.message}
							onChange={handleChange}
							disabled={isLoading}
							required
						/>
					</div>

					<div style={{ textAlign: 'center' }}>
						<motion.button
							type='submit'
							className='btn btn-primary'
							whileHover={!isLoading ? { scale: 1.03 } : {}}
							whileTap={!isLoading ? { scale: 0.97 } : {}}
							disabled={isLoading}
							style={isLoading ? { opacity: 0.75, cursor: 'wait' } : undefined}>
							{isLoading ? (
								<>
									<motion.span
										animate={{ rotate: 360 }}
										transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
										style={{ display: 'inline-flex' }}>
										<FiLoader />
									</motion.span>
									Sending...
								</>
							) : (
								<>
									Send Message <FiSend />
								</>
							)}
						</motion.button>
					</div>

					<AnimatePresence mode='wait'>
						{status.state === 'success' && (
							<motion.div
								key='success'
								className={`${styles.formStatus} ${styles.formStatusSuccess}`}
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}>
								<FiCheckCircle /> {status.message}
							</motion.div>
						)}
						{status.state === 'error' && (
							<motion.div
								key='error'
								className={`${styles.formStatus} ${styles.formStatusError}`}
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}>
								<FiAlertCircle /> {status.message}
							</motion.div>
						)}
					</AnimatePresence>
				</motion.form>
			</div>
		</PageTransition>
	);
}
