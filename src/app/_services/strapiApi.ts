const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  "https://motivated-garden-51da92c7c8.strapiapp.com";

export interface StrapiBlogDetail {
  id: number;
  heading: string;
  content: string;
}

export interface StrapiBlog {
  id: number;
  documentId: string;
  title: string;
  description: string;
  category: string;
  author: string;
  postDate: string;
  isFeatured: boolean;
  slug: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blogDetails: StrapiBlogDetail[];
  featuredImage?: {
    id: number;
    documentId: string;
    name: string;
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
    formats?: any;
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

class StrapiApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = STRAPI_API_URL;
  }

  async fetchBlogs(): Promise<StrapiBlog[]> {
    console.log(process.env.NEXT_PUBLIC_STRAPI_API_TOKEN);

    try {
      const response = await fetch(
        `${this.baseUrl}/api/blogs?populate=*&sort[0]=postDate:desc`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.statusText}`);
      }

      const result: StrapiResponse<StrapiBlog[]> = await response.json();
      return result.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  }

  async fetchBlogById(id: string): Promise<StrapiBlog | null> {
    try {
      let response = await fetch(
        `${this.baseUrl}/api/blogs?filters[id][$eq]=${id}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch blog: ${response.statusText}`);
      }

      const result: StrapiResponse<StrapiBlog[]> = await response.json();
      return result.data.length > 0 ? result.data[0] : null;
    } catch (error) {
      console.error(`Error fetching blog ${id}:`, error);
      return null;
    }
  }

  async fetchBlogBySlug(slug: string): Promise<StrapiBlog | null> {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch blog: ${response.statusText}`);
      }

      const result: StrapiResponse<StrapiBlog[]> = await response.json();
      return result.data.length > 0 ? result.data[0] : null;
    } catch (error) {
      console.error(`Error fetching blog by slug ${slug}:`, error);
      return null;
    }
  }

  convertToLegacyFormat(strapiBlog: StrapiBlog): OutputData.Blog {
    return {
      id: strapiBlog.id,
      category: strapiBlog.category,
      label: strapiBlog.title,
      description: strapiBlog.description,
      postDate: strapiBlog.postDate,
      author: strapiBlog.author,
      isFeatured: strapiBlog.isFeatured,
      isPublished: true,
      createdAt: strapiBlog.createdAt,
      updatedAt: strapiBlog.updatedAt,
      blogDetails: strapiBlog.blogDetails.map((detail) => ({
        id: detail.id,
        label: detail.heading,
        value: detail.content,
        blogId: strapiBlog.id,
        createdAt: strapiBlog.createdAt,
        updatedAt: strapiBlog.updatedAt,
      })),
      attachment: strapiBlog.featuredImage
        ? {
            id: strapiBlog.featuredImage.id,
            modelName: "BLOG",
            modelId: strapiBlog.id,
            type: "image/png",
            key: "strapi-media",
            name: `blog-${strapiBlog.id}-featured-image`,
            createdAt: strapiBlog.createdAt,
            updatedAt: strapiBlog.updatedAt,
            deletedAt: null,
            size: 0,
            storage: "strapi",
            url: `${strapiBlog.featuredImage.url}`,
            meta: {
              type: "DEFAULT",
            },
          }
        : {
            id: 0,
            modelName: "BLOG",
            modelId: strapiBlog.id,
            type: "image/png",
            key: "placeholder",
            name: "placeholder",
            createdAt: strapiBlog.createdAt,
            updatedAt: strapiBlog.updatedAt,
            deletedAt: null,
            size: 0,
            storage: "placeholder",
            url: "/images/blog-placeholder.png",
            meta: {
              type: "DEFAULT",
            },
          },
    };
  }
}

export const strapiApi = new StrapiApiService();
export default strapiApi;
