import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://mafazaa.com';
	const currentDate = new Date().toISOString();

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/support_us`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/join`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/details`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/terms-of-use`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.6,
		},
	];
}

