export type Page =
  | 'home'
  | 'message-from-head'
  | 'background-vision-mission'
  | 'academic-staff'
  | 'meet-our-expert'
  | 'grants'
  | 'honor-awards'
  | 'facilities'
  | 'research-norazila'
  | 'research-faizal'
  | 'research-zamri'
  | 'research-fairus'
  | 'research-norikhwan'
  | 'news'
  | 'services'
  | 'vacancy'
  | 'training'
  | 'publication'
  | 'expertise-showcase';

export interface NavSubChild {
  label: string;
  page?: Page;
  href?: string;
}

export interface NavChild {
  label: string;
  page?: Page;
  href?: string;
  children?: NavSubChild[];
}

export interface NavItem {
  label: string;
  href?: string;
  page?: Page;
  children: NavChild[];
}
