import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-color via-dark-one to-secondary-color">
			<div className="text-center px-4 max-w-2xl">
				<h1 className="text-6xl md:text-8xl font-bold text-bright-one mb-4">
					404
				</h1>
				<h2 className="text-3xl md:text-4xl font-bold text-bright-one mb-4">
					الصفحة غير موجودة
				</h2>
				<p className="text-lg md:text-xl text-bright-two mb-8">
					عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
				</p>
				<Link
					href="/"
					className="inline-block px-8 py-4 bg-accent-color text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg"
				>
					العودة إلى الصفحة الرئيسية
				</Link>
			</div>
		</div>
	);
}

