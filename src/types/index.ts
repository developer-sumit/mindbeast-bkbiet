export interface IProjectProps {
  name: string;
  description: string;
  icon: string;
  url: string;
  version: string;
}

export interface IUserCardProps {
  name: string;
  href?: string;
  avatar: string;
  role: string;
  socialLinks?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
    discord?: string;
  };
}

export type IProfileProps = IUserCardProps & {
  projects?: IProjectProps[];
};

export interface IProjectProps {
  name: string;
  description: string;
  icon: string;
  url: string;
  version: string;
}
