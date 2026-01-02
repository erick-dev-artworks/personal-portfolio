import type { Metadata } from 'next';
import Kali from '@/pages/Kali';

export const metadata: Metadata = {
	title: 'Download Kali Linux OVA - Erik Filipov',
	description: '',
};

export default function KaliPage() {
	return <Kali />;
}