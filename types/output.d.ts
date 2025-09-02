declare namespace OutputData {
  interface NewsLetter {
    id: number;
    email: string;
    action?: string;
  }
  interface ContactUs {
    id: number;
    name: string;
    email: string;
    phone: string;
    companyName?: string;
    projectDetail?: string;
    isAgreed?: boolean;
  }
  interface Career extends InputData.Career {
    id: number;
    createdAt: string;
    updatedAt: string;
    action?: string;
  }
  interface CareerDetail extends InputData.CareerDetail {
    id: number;
    createdAt: string;
    updatedAt: string;
  }
  interface Applicant extends InputData.Applicant {
    id: number;
    action?: string;
    applyDate?: string;
    jobRole?: string;
    createdAt: string;
    updatedAt: string;
    career?: Career;
    status?: string;
  }

  interface Blog extends InputData.Blog {
    id: number;
    createdAt: string;
    updatedAt: string;
    action?: string;
  }
  interface BlogDetail extends InputData.BlogDetail {
    id: number;
    createdAt: string;
    updatedAt: string;
  }
}
