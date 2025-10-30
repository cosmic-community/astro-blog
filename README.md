# Modern Astro Blog Platform

![App Preview](https://imgix.cosmicjs.com/da99a750-b541-11f0-84b8-c1eed342c5b6-photo-1506126613408-eca07ce68773-1761795486014.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A blazing-fast, modern blog platform built with Astro and powered by Cosmic CMS. Features include lightning-fast page loads, beautiful responsive design, category filtering, and rich markdown content rendering.

## ✨ Features

- ⚡ **Lightning-Fast Performance** - Static site generation with Astro for optimal speed and SEO
- 📱 **Fully Responsive Design** - Beautiful layouts that work perfectly on all devices
- 🏷️ **Category Filtering** - Browse posts by Technology, Travel, or Lifestyle categories
- 👤 **Author Profiles** - Dedicated pages with author bios and their published posts
- 📝 **Rich Content Rendering** - Full markdown support with beautiful typography
- 🖼️ **Optimized Images** - Automatic image optimization using imgix
- 🎨 **Modern UI** - Clean, minimalist design with smooth animations
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🚀 **Edge-Ready** - Deploy anywhere with static HTML output

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6902dd5b271316ad9f4cce56&clone_repository=6902e0b0271316ad9f4cceab)

## 📋 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a blog with posts, authors, and categories"

### Code Generation Prompt

> "Based on the content model I created for "Create a content model for a blog with posts, authors, and categories", now build a complete web application using Astro that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Astro 5.x** - The web framework for content-driven websites
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Marked** - Markdown parser for rich content rendering

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket credentials

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env` file in the root directory with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Start the development server:

```bash
bun run dev
```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📚 Cosmic SDK Examples

### Fetching All Posts with Related Data

```typescript
import { cosmic } from './lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes author and category data

// Posts now include nested author and category objects
posts.forEach(post => {
  console.log(post.title)
  console.log(post.metadata.author.title) // Author name
  console.log(post.metadata.category.title) // Category name
})
```

### Fetching a Single Post

```typescript
const { object: post } = await cosmic.objects
  .findOne({
    type: 'posts',
    slug: 'post-slug'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Posts by Category

```typescript
// First get the category ID
const { object: category } = await cosmic.objects
  .findOne({
    type: 'categories',
    slug: 'technology'
  })

// Then query posts by category ID
const { objects: posts } = await cosmic.objects
  .find({
    type: 'posts',
    'metadata.category': category.id
  })
  .depth(1)
```

### Fetching Posts by Author

```typescript
// First get the author ID
const { object: author } = await cosmic.objects
  .findOne({
    type: 'authors',
    slug: 'author-slug'
  })

// Then query posts by author ID
const { objects: posts } = await cosmic.objects
  .find({
    type: 'posts',
    'metadata.author': author.id
  })
  .depth(1)
```

## 🔗 Cosmic CMS Integration

This application uses Cosmic as a headless CMS to manage all content. The content structure includes:

- **Posts** - Blog articles with markdown content, featured images, authors, and categories
- **Authors** - Writer profiles with bios and profile photos
- **Categories** - Content organization with descriptions

The Cosmic SDK client is configured in `lib/cosmic.ts` and used throughout the application to fetch content server-side for optimal performance.

## 🚀 Deployment Options

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key

## 📖 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->