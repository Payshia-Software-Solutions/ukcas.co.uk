export interface Institute {
  id: string;
  name: string;
  logoUrl: string;
  country: string;
  description: string;
  courses: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: string;
}

export interface Event {
  slug: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
}
