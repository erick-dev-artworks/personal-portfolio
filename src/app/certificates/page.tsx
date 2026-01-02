import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates - Erik Filipov',
	description: ' ',
};

export default function CertificatesPage() {
	return <Certificates />;
}