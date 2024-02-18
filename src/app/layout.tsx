import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './assets/styles/globals.scss';

const poppins = Poppins({ weight: '600', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cerebrum',
	description: 'Cerebrum IQ',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
