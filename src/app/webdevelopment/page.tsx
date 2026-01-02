import Development from '@/pages/WebDevelopment';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Web Development - Erik Filipov',
    description: '',
};

export default function DevelopmentPage() {
    return <Development />;
}