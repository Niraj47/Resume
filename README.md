# Niraj Thapa - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases professional experience, skills, projects, and provides a way for potential employers or clients to get in touch.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Accessible**: Built with accessibility best practices
- **Fast**: Optimized for performance with Next.js
- **SEO Ready**: Proper meta tags and structured data

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Phosphor Icons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd niraj-thapa-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

- `components/Hero.tsx` - Hero section with name, title, and bio
- `components/About.tsx` - About section content
- `components/Experience.tsx` - Work experience details
- `components/Skills.tsx` - Skills and technologies
- `components/Projects.tsx` - Portfolio projects
- `components/Contact.tsx` - Contact information

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles in individual component files

### Content

1. **Resume PDF**: Replace `niraj-thapa_6.pdf` with your own resume
2. **Images**: Add your profile picture and project screenshots
3. **Links**: Update social media and project links
4. **Contact**: Update contact information and form handling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx       # Experience section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   └── Contact.tsx          # Contact section
├── public/
│   └── niraj-thapa_6.pdf    # Resume PDF
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: niraj.thapa@email.com
- **LinkedIn**: [linkedin.com/in/niraj-thapa](https://linkedin.com/in/niraj-thapa)
- **GitHub**: [github.com/niraj-thapa](https://github.com/niraj-thapa)

---

Built with ❤️ using Next.js and Tailwind CSS
