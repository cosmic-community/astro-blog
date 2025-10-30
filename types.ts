// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// Author type
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Category type
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    description?: string;
  };
}

// Post type
export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    category?: Category;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}