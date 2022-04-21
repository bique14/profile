export interface ResumeType {
  name: string;
  nickname: string;
  position: string;
  companies: CompanyType[];
  internship: InternshipType;
  skill: SkillType;
  educations: EducationType[];
  playgrounds: PlaygroundType[];
  github: string;
}

interface CompanyType {
  name: string;
  location: string;
  position: string;
  duration: {
    start: string;
    end: string;
  };
  projects: EmploymentHistoryProjectType[];
}

interface EmploymentHistoryProjectType {
  name: string;
  link: string | null;
  description: string;
  stacks: string;
}

interface InternshipType {
  company: string;
  location: string;
  position: string;
  duration: {
    start: string;
    end: string;
  };
  project: {
    name: string;
    description: string;
    stacks: string;
  };
}

interface SkillType {
  languages: string[];
  tools: string[];
}

interface EducationType {
  institution: string;
  degree: string;
  major: string;
  duration: {
    start: string;
    end: string;
  };
}

interface PlaygroundType {
  name: string;
  link: string | null;
  date: string;
  description: string;
  stacks: string;
}
