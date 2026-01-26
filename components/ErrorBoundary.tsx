"use client";

import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// Log error to console in development
		if (process.env.NODE_ENV === 'development') {
			console.error('Error caught by ErrorBoundary:', error, errorInfo);
		}
		
		// In production, you might want to log to an error reporting service
		// Example: logErrorToService(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Custom fallback UI
			return (
				this.props.fallback || (
					<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-color via-dark-one to-secondary-color">
						<div className="text-center px-4 max-w-2xl">
							<h1 className="text-4xl md:text-5xl font-bold text-bright-one mb-4">
								عذراً، حدث خطأ
							</h1>
							<p className="text-lg md:text-xl text-bright-two mb-8">
								نعتذر عن هذا الخطأ. يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.
							</p>
							<button
								onClick={() => window.location.href = '/'}
								className="px-8 py-4 bg-accent-color text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg"
							>
								العودة إلى الصفحة الرئيسية
							</button>
						</div>
					</div>
				)
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

