import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Erik Filipov',
	description: '',
};

export default function ProjectsPage() {
	return <Projects />;
}