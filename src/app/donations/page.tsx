import Donations from '@/pages/Donations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Donations - Erik Filipov',
    description: '',
};

export default function DonationsPage() {
    return <Donations />;
}