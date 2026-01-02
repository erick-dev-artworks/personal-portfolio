import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Erik Filipov',
	description: '',
};

export default function ContactPage() {
	return <Contact />;
}