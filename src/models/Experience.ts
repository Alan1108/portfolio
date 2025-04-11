export interface Experience {
  company: string;
  position: string;
  projects: Project[];
  startDate: string;
  endDate: string;
}

export interface Project {
  title: string;
  description: string;
}
