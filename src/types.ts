export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  link: string;
}

export interface TourDate {
  id: string;
  date: string;
  venue: string;
  location: string;
  status: 'Tickets' | 'Sold Out' | 'Canceled';
  link: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  bio: string;
  profilePic: string;
  previewAudioUrl?: string;
  email: string;
  country?: string;
  socialLinks: SocialLink[];
  discography: Album[];
  tourDates: TourDate[];
}
