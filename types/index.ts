/**
 * ============================================
 * SHARED TYPES
 * ============================================
 * 
 * This file contains all shared TypeScript types and interfaces
 * used across the application. This ensures type safety and consistency.
 * 
 * ============================================
 */

/**
 * Button configuration interface
 * Used in HeroSection, FeatureSection, and other components
 */
export interface Button {
	/** Whether the button should be filled or outlined */
	fill: boolean;
	/** Button text label */
	text: string;
	/** Background color (if filled) or border color (if outlined) */
	backgroundOrBorderColor: string;
	/** Text color */
	textColor: string;
	/** Link URL */
	link: string;
}

/**
 * Social media link configuration
 */
export interface SocialLink {
	/** Link URL */
	href: string;
	/** Icon image source */
	src: string | any;
	/** Link text/alt text */
	text: string;
	/** Optional alt text for accessibility */
	alt?: string;
}

/**
 * Navigation link configuration
 */
export interface ImportantLink {
	/** Link URL */
	href: string;
	/** Link text */
	text: string;
}

/**
 * Header component configuration
 */
export interface HeaderConfig {
	/** Social media links to display */
	socialLinks: SocialLink[];
	/** Important navigation links */
	importantLinks: ImportantLink[];
}

/**
 * Footer component configuration
 */
export interface FooterConfig {
	/** Social media links to display */
	socialLinks: SocialLink[];
	/** Important navigation links */
	importantLinks: ImportantLink[];
	/** Support email address */
	supportEmail: string;
}

/**
 * Hero section props
 */
export interface HeroSectionProps {
	/** Text color for the description */
	textColor: string;
	/** Main description text (supports newlines) */
	description: string;
	/** Array of action buttons */
	buttons: Button[];
}

/**
 * Feature section props
 */
export interface FeatureSectionProps {
	/** Image source for the feature */
	imageSrc: any;
	/** Section title */
	title: string;
	/** Section description */
	description: string;
	/** Text color */
	textColor: string;
	/** Array of action buttons */
	buttons: Button[];
	/** Whether to reverse the layout (image on right) */
	reverse?: boolean;
}

