# Mafazaa Website

This is a [Next.js](https://nextjs.org/) project for the Mafazaa organization website.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Managing Site Content

### Social Media Links & Contact Information

Header and Footer are **INDEPENDENT** - each has its own configuration in **`app/siteConfig.ts`**.

To update links:

1. Open `app/siteConfig.ts`
2. Edit the configuration for the component you want to change:
   - **Header Links**: Edit `headerConfig` object
   - **Footer Links**: Edit `footerConfig` object
3. Save the file

Each component can be modified independently without affecting the other.

#### Example:

```typescript
// Header Configuration (independent)
export const headerConfig: HeaderConfig = {
  socialLinks: [
    {
      href: "https://facebook.com/mafazaa.unite",  // ← Edit header links here
      src: facebookIcon,
      text: "Facebook",
    },
    // ... more social links
  ],
  importantLinks: [
    // ... navigation links for header
  ],
};

// Footer Configuration (independent)
export const footerConfig: FooterConfig = {
  socialLinks: [
    {
      href: "https://facebook.com/mafazaa.unite",  // ← Edit footer links here
      src: facebookIcon,
      text: "Facebook",
    },
    // ... more social links
  ],
  importantLinks: [
    // ... navigation links for footer
  ],
  supportEmail: "support@mafazaa.com",  // ← Footer-specific email
};
```

### Page Content

Each page manages its own content directly:
- **Home Page**: Edit `app/page.tsx` - contains the hero section data
- **Details Page**: Edit `app/details/page.tsx` - contains skilled/non-skilled section data

### Styling

- **Global Styles**: `app/globals.css`
- **Tailwind Configuration**: `tailwind.config.js` - contains brand colors and theme settings
- **Brand Colors**:
  - Primary: `#0d309e`
  - Secondary: `#60148c`
  - Accent: `#18cad3`

## Project Structure

```
mafazaa-web/
├── app/
│   ├── page.tsx              # Home page (independent data)
│   ├── template.tsx          # Root template with Header/Footer
│   ├── siteConfig.ts         # ⭐ Independent Header & Footer configs
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   ├── contact/
│   │   └── page.tsx          # Contact page (independent)
│   ├── details/
│   │   └── page.tsx          # Details page (independent data)
│   ├── join/
│   │   └── page.tsx          # Join page (independent)
│   ├── support_us/
│   │   └── page.tsx          # Support us page (independent)
│   ├── privacy-policy/
│   │   └── page.tsx          # Privacy policy (independent)
│   └── terms-of-use/
│       └── page.tsx          # Terms of use (independent)
├── components/
│   ├── HeroSection.tsx       # ✅ Hero section (fully independent)
│   ├── FeatureSection.tsx    # ✅ Feature section (fully independent)
│   ├── CustomFooter.tsx      # ✅ Custom footer (fully independent)
│   ├── Project.tsx           # ⚠️ Unused (kept for future)
│   ├── poemSection.tsx      # ⚠️ Unused (kept for future)
│   └── README.md             # Components documentation
├── types/
│   └── index.ts              # ⭐ Shared TypeScript types
└── assets/                   # Images and icons
```

## Component Independence

All components are **fully independent**:
- ✅ No shared state or global dependencies
- ✅ All data passed via props
- ✅ Clear TypeScript interfaces
- ✅ Comprehensive JSDoc documentation
- ✅ Self-contained and reusable

## Type Safety

All components use TypeScript with shared types from `types/index.ts`:
- `Button` - Button configuration
- `SocialLink` - Social media link
- `ImportantLink` - Navigation link
- `HeaderConfig` - Header configuration
- `FooterConfig` - Footer configuration
- `HeroSectionProps` - Hero section props
- `FeatureSectionProps` - Feature section props

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
