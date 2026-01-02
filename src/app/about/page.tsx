import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Erik Filipov',
	description: '',
};

export default function AboutPage() {
	return <About />;
}