declare namespace InputData {
  interface NewsLetter {
    email: string;
  }
  interface ContactUs {
    name: string;
    email: string;
    phone: string;
    companyName?: string;
    projectDetail?: string;
    isAgreed?: boolean;
  }
  interface Career {
    role: string;
    postedDate: string;
    expiryDate: string;
    jobLocation: jobLocation;
    jobType: JobType;
    description: string;
    numberOfOpenings: number;
    status: CareerStatus;
    careerDetails: CareerDetail[];
  }
  interface CareerDetail {
    label: string;
    value: string;
  }

  interface Applicant {
    name: string;
    email: string;
    phone: string;
    careerId?: number;
    attachment?: any;
  }

  interface Blog {
    category: string;
    label: string;
    description: string;
    postDate: string;
    author: string;
    isFeatured: boolean;
    isPublished: boolean;
    blogDetails: BlogDetail[];
    attachment?: any;
    hasAttachment?: boolean;
  }
  interface BlogDetail {
    id?: string | number;
    label: string;
    value: string;
  }
}
