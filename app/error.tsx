"use client";

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log error in development
		if (process.env.NODE_ENV === 'development') {
			console.error('Error:', error);
		}
	}, [error]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-color via-dark-one to-secondary-color">
			<div className="text-center px-4 max-w-2xl">
				<h1 className="text-4xl md:text-5xl font-bold text-bright-one mb-4">
					عذراً، حدث خطأ
				</h1>
				<p className="text-lg md:text-xl text-bright-two mb-8">
					نعتذر عن هذا الخطأ. يرجى المحاولة مرة أخرى.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						onClick={() => reset()}
						className="px-8 py-4 bg-accent-color text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg"
					>
						حاول مرة أخرى
					</button>
					<button
						onClick={() => (window.location.href = '/')}
						className="px-8 py-4 bg-transparent border-2 border-bright-one text-bright-one rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
					>
						العودة إلى الصفحة الرئيسية
					</button>
				</div>
			</div>
		</div>
	);
}

