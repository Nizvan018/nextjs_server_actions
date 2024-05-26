import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Server Actions CRUD",
	description: "A TODO app made in Next.js and including Server Actions CRUD",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Navbar />

				<main>
					{children}
				</main>
			</body>
		</html>
	);
}
