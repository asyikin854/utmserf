import { BookOpen, Award, Atom, GraduationCap, FlameKindling, Zap, Wind, Microscope, Beaker } from 'lucide-react';
import type { NavItem, Page } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'About Us',
    children: [
      { label: 'Message From Head of Research Group', page: 'message-from-head' },
      { label: 'Background, Vision & Mission', page: 'background-vision-mission' },
      {
        label: 'Organization Structure',
        children: [
          { label: 'Academic Staff', page: 'academic-staff' },
          { label: 'Students & Alumni', href: '#about' },
        ],
      },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    label: 'Our Expert',
    children: [
      { label: 'Meet Our Expert', page: 'meet-our-expert' },
      { label: 'Expertise Showcase', page: 'expertise-showcase' },
    ],
  },
  {
    label: 'R&D',
    children: [
      { label: 'Grant', page: 'grants' },
      { label: 'Honor & Awards', page: 'honor-awards' },
      { label: 'Publication', page: 'publication' },
      { label: 'Collaboration', href: '#collaborations' },
      {
        label: 'Research Activities',
        children: [
          { label: "Dr. Norazila's Research", page: 'research-norazila' },
          { label: "Dr. Faizal's Research", page: 'research-faizal' },
          { label: "Dr. Fairus's Research", page: 'research-fairus' },
          { label: "Dr. Zamri's Research", page: 'research-zamri' },
          { label: "Dr. Norikhwan's Research", page: 'research-norikhwan' },
        ],
      },
    ],
  },
  {
    label: 'Facilities & Services',
    children: [
      {
        label: 'HiREF Facilities',
        page: 'facilities',
        children: [
          { label: 'Research Facilities', page: 'facilities', href: '#research-facilities' },
        ],
      },
      { label: 'HiREF Services', page: 'services' },
      { label: 'GTC Facilities', href: '#research' },
      { label: 'Safety Guideline', href: '#contact' },
    ],
  },
  {
    label: 'Vacancy',
    children: [
      { label: 'Master / PhD', page: 'vacancy' },
      { label: 'Internship', page: 'vacancy' },
    ],
  },
  {
    label: 'Training',
    children: [
      { label: 'Training Programs', page: 'training' },
    ],
  },
];

export const STATS = [
  { value: '120+', label: 'Indexed Publications', icon: BookOpen },
  { value: '2,400+', label: 'Total Citations', icon: Award },
  { value: '8', label: 'Patents Granted', icon: Atom },
  { value: '25+', label: 'Master Postgraduate', icon: GraduationCap },
  { value: '15+', label: 'PhD Postgraduate', icon: GraduationCap },
];

export const RESEARCH_AREAS = [
  {
    icon: FlameKindling,
    title: 'Combustion',
    desc: 'Fundamental and applied research in turbulent combustion, flame dynamics, and thermochemical modelling for clean energy applications.',
    color: 'bg-orange-100 text-orange-600',
    border: 'hover:border-orange-300',
  },
  {
    icon: Zap,
    title: 'Heat Transfer',
    desc: 'Advanced heat transfer studies including convection, radiation, and coupled thermal-fluid interactions in engineering systems.',
    color: 'bg-amber-100 text-amber-600',
    border: 'hover:border-amber-300',
  },
  {
    icon: Microscope,
    title: 'Microscale Reacting Flow',
    desc: 'Miniaturised combustion systems and microfluidic reacting flows for next-generation energy and chemical processing technologies.',
    color: 'bg-sky-100 text-sky-600',
    border: 'hover:border-sky-300',
  },
  {
    icon: Wind,
    title: 'Supersonic Combustion',
    desc: 'State-of-the-art experimental platforms for supersonic shock wave investigations and hypersonic propulsion research.',
    color: 'bg-blue-100 text-blue-600',
    border: 'hover:border-blue-300',
  },
  {
    icon: Beaker,
    title: 'Flame-based Nanomaterials',
    desc: 'Synthesis of functional nanomaterials via flame processes, leveraging high-temperature reacting flows for material engineering.',
    color: 'bg-teal-100 text-teal-600',
    border: 'hover:border-teal-300',
  },
  {
    icon: Atom,
    title: 'Thermofluids',
    desc: 'Multidisciplinary thermofluid research encompassing gas turbine combustion, sustainable energy, and reacting flow modelling.',
    color: 'bg-slate-100 text-slate-600',
    border: 'hover:border-slate-300',
  },
];

export interface NewsItem {
  slug: string;
  date: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
  body: string[];
  gallery?: string[];
}

export const NEWS: NewsItem[] = [
  {
    slug: 'nurizat-rahman-recent-publication',
    date: 'Oct 24, 2024',
    tag: 'Publication',
    title: 'Congratulations Ir. Dr. Mohammad Nurizat Rahman on his Recent Publication',
    desc: 'Celebrating the latest indexed publication from our research group, advancing the frontiers of thermofluid science.',
    img: './research-activities/syngas-2.jpg',
    body: ['Celebrating the latest indexed publication from our research group, advancing the frontiers of thermofluid science.'],
  },
  {
    slug: 'welcome-muhammed-zakariya-phd-candidate',
    date: 'Sep 26, 2024',
    tag: 'Welcome',
    title: 'Welcome to HIREF — Muhammed Zakariya Bin Hasnol Joins as PhD Candidate',
    desc: 'Muhammed Zakariya is pursuing his PhD under the guidance of Dr. Mohd Fairus Mohd Yasin. We wish him all the best.',
    img: './fairus-research/figure-3.png',
    body: ['Muhammed Zakariya is pursuing his PhD under the guidance of Dr. Mohd Fairus Mohd Yasin. We wish him all the best.'],
  },
  {
    slug: 'business-lunch-sustainable-combustion',
    date: 'Jul 18, 2024',
    tag: 'Event',
    title: 'UTM Hosts Business Lunch on Sustainable Combustion for Cleaner Energy in Malaysia',
    desc: 'The Sustainable Combustion Showcase, hosted by UTM\'s SERF Research Group, brought together key industrial players in the energy sector.',
    img: './research-activities/combustion-1.jpeg',
    body: ['The Sustainable Combustion Showcase, hosted by UTM\'s SERF Research Group, brought together key industrial players in the energy sector.'],
  },
  {
    slug: 'congratulation-ismail-najib-aminu-q2-publication',
    date: 'Jul 3, 2024',
    tag: 'Publication',
    title: 'Congratulation! Ismail Najib Aminu (Q2 Publication)',
    desc: '',
    img: './news/01-80adf434.jpg',
    body: [],
  },
  {
    slug: 'congratulations-dr-mohd-fairus-mohd-yasin-for-successfully-securing-prototype-development-fund-2-grant',
    date: 'May 2, 2024',
    tag: 'Grant',
    title: 'Congratulations Dr. Mohd Fairus Mohd Yasin for successfully securing Prototype Development Fund 2 Grant',
    desc: '',
    img: './news/02-058daa85.jpg',
    body: [],
  },
  {
    slug: 'congratulations-dr-norazila-othman-for-successfully-securing-digital-infused-utm-dir-2024-grant',
    date: 'May 2, 2024',
    tag: 'Grant',
    title: 'Congratulations Dr. Norazila Othman for successfully securing DIGITAL-INFUSED (UTM-DIR) 2024 Grant!',
    desc: '',
    img: './news/03-152c1293.jpg',
    body: [],
  },
  {
    slug: 'congratulations-to-mr-mohd-shukri-ansar-on-his-appointment-as-a-technical-staff-member',
    date: 'Mar 31, 2024',
    tag: 'Appointment',
    title: 'Congratulations to Mr. Mohd Shukri Ansar on his appointment as a Technical Staff Member',
    desc: 'Congratulations to Mr. Muhd Shukri Ansar on being appointed by the Faculty as a Technical Staff Member at the High Speed Reacting Flow (SERF) Laboratory. Our sincerest wishes for continuous success in your professional endeavors.',
    img: './news/04-2414cd0b.jpg',
    body: ['Congratulations to Mr. Muhd Shukri Ansar on being appointed by the Faculty as a Technical Staff Member at the High Speed Reacting Flow (SERF) Laboratory. Our sincerest wishes for continuous success in your professional endeavors.'],
  },
  {
    slug: 'congratulations-ir-dr-mohammad-nurizat-rahman-awarded-prestigious-professional-engineer-by-bem',
    date: 'Feb 19, 2024',
    tag: 'Award',
    title: 'Congratulations, Ir. Dr. Mohammad Nurizat Rahman! Awarded Prestigious Professional Engineer by BEM',
    desc: 'Heartiest congratulations to Ir. Dr. Mohammad Nurizat Rahman on his well-deserved recognition as a professional engineer by the Board of Engineers Malaysia (BEM). Our sincerest wishes for your continued success in your professional endeavours.',
    img: './news/05-b19d306b.jpg',
    body: ['Heartiest congratulations to Ir. Dr. Mohammad Nurizat Rahman on his well-deserved recognition as a professional engineer by the Board of Engineers Malaysia (BEM). Our sincerest wishes for your continued success in your professional endeavours.'],
  },
  {
    slug: 'welcome-yi-ka-fong-student-volunteer-for-i-cipec2024',
    date: 'Feb 19, 2024',
    tag: 'Welcome',
    title: 'Welcome Yi Ka Fong ! Student Volunteer for i-CIPEC2024',
    desc: 'Yi Ka Fong has been appointed as a student volunteer for the 12th International Conference on Combustion,Incineration/Pyrolysis, Emission, and Climate Change (i-CIPEC2024) that will be organised by HiREF in December 2024. Yi Ka Fong will be supervised by Dr.',
    img: './news/06-8be25103.jpg',
    body: ['Yi Ka Fong has been appointed as a student volunteer for the 12th International Conference on Combustion,Incineration/Pyrolysis, Emission, and Climate Change (i-CIPEC2024) that will be organised by HiREF in December 2024. Yi Ka Fong will be supervised by Dr. Muhammad Farooq Fong, who is a committee member of the conference. Welcome on board!'],
  },
  {
    slug: 'congratulations-on-the-three-year-project-completion',
    date: 'Feb 19, 2024',
    tag: 'Milestone',
    title: 'Congratulations on the three-year project completion!',
    desc: 'Dr. Mohsin Mohd Sies (Principal Investigator), Dr. Mohd Fairus Mohd Yasin (Co-Researcher), and Muhammad Hilmi Ibrahim (Research Assistant) have successfully completed the three-year project entitled “Investigation of Nanomaterial Growth on High-Mobility Substrate Using Chemical Vapor Deposition with Flame-Enhanced…',
    img: './news/07-66516219.jpg',
    body: [],
  },
  {
    slug: 'congratulations-ismail-najib-aminu-for-passing-his-phd-viva-voce-on-16-january-2024',
    date: 'Jan 16, 2024',
    tag: 'PhD Viva',
    title: 'Congratulations, Ismail Najib Aminu, for passing his PhD viva-voce on 16 January 2024!',
    desc: 'Ismail Najib Aminu successfully defended his PhD thesis entitled “Biogas Flameless Combustion Characteristics using Asymmetric Combustion”. Supervision was done by Prof. Dr. Mazlan Abdul Wahid.',
    img: './news/08-2537dd81.jpg',
    body: ['Ismail Najib Aminu successfully defended his PhD thesis entitled “Biogas Flameless Combustion Characteristics using Asymmetric Combustion”. Supervision was done by Prof. Dr. Mazlan Abdul Wahid.'],
  },
  {
    slug: 'collaboration-visit-at-patsber-sdn-bhd',
    date: 'Jan 11, 2024',
    tag: 'Visit',
    title: 'Collaboration visit at Patsber Sdn. Bhd.',
    desc: 'On January 9, 2024, Dr. Fairus and his team had a collaboration visit to a UTM spin-off company, Patsber Sdn Bhd, which is involved in the commercialization of nano-tech products, including carbon-based nanomaterials. The team was welcomed by the CEO of the company, Ts. ChM. Dr.',
    img: './news/09-f217c99b.jpg',
    body: ['On January 9, 2024, Dr. Fairus and his team had a collaboration visit to a UTM spin-off company, Patsber Sdn Bhd, which is involved in the commercialization of nano-tech products, including carbon-based nanomaterials. The team was welcomed by the CEO of the company, Ts. ChM. Dr. Faizuan Abdullah, production staff, and fellow postgraduate students involved in the project.'],
    gallery: ['./news/09-f217c99b-2.jpg'],
  },
  {
    slug: 'congratulations-mohammed-bashir-abdulrahman-for-passing-his-phd-viva-voce-on-27th-december-2023',
    date: 'Dec 28, 2023',
    tag: 'PhD Viva',
    title: 'Congratulations, Mohammed Bashir Abdulrahman, for passing his PhD viva-voce on 27th December 2023!',
    desc: 'Mohammed Bashir Abdulrahman successfully defended his PhD thesis entitled “The Characteristics of Ethanol Fuel Flameless Combustion with Various Flow Configurations”. Supervision was done by Prof. Dr. Mazlan Abdul Wahid and Dr. Mohd Fairus Mohd Yasin',
    img: './news/10-e12ee93e.jpg',
    body: ['Mohammed Bashir Abdulrahman successfully defended his PhD thesis entitled “The Characteristics of Ethanol Fuel Flameless Combustion with Various Flow Configurations”. Supervision was done by Prof. Dr. Mazlan Abdul Wahid and Dr. Mohd Fairus Mohd Yasin'],
  },
  {
    slug: 'congratulations-to-dr-norazila-othman-and-the-team-on-participating-as-presenters-at-the-pameran-teknologi-penyelidikan-inovasi-dan-kolaborasi-utm-johor-port-berhad',
    date: 'Dec 13, 2023',
    tag: 'Event',
    title: 'Congratulations to Dr. Norazila Othman and the team on participating as presenters at the Pameran Teknologi Penyelidikan, Inovasi dan Kolaborasi UTM (Johor Port Berhad)',
    desc: 'Congratulations to Dr. Norazila Othman and the team on participating as presenters at the the Pameran Teknologi Penyelidikan, Inovasi dan Kolaborasi UTM-Johor Port Berhad at Perpustakaan PRZS, Blok T04 on December 11, 2023.Congratulations to Dr.',
    img: './news/11-443bf557.jpg',
    body: ['Congratulations to Dr. Norazila Othman and the team on participating as presenters at the the Pameran Teknologi Penyelidikan, Inovasi dan Kolaborasi UTM-Johor Port Berhad at Perpustakaan PRZS, Blok T04 on December 11, 2023.Congratulations to Dr. Norazila Othman and the team on participating as presenters at the the Pameran Teknologi Penyelidikan, Inovasi dan Kolaborasi UTM-Johor Port Berhad at Perpustakaan PRZS, Blok T04 on December 11, 2023.'],
  },
  {
    slug: 'congratulations-dr-ali-houssein-asmayou-for-passing-his-phd-viva-voce',
    date: 'Nov 23, 2023',
    tag: 'PhD Viva',
    title: 'Congratulations Dr. Ali Houssein Asmayou for passing his PhD viva-voce!',
    desc: 'Dr. Ali Houssein Asmayou successfully defended his thesis entitled “Thermal and Fluid Flow Analysis of Mesoscale Flameless Combustion Using Biogas Fuel” on November 22, 2023. Supervision was done by Prof. Dr. Mazlan Abdul Wahid and Assoc. Prof. Dr. Aminuddin Saat.',
    img: './news/12-e0d07c33.jpg',
    body: [],
  },
  {
    slug: 'congratulations-to-abdelgader-agilah-saleh-gheidan-on-your-graduation',
    date: 'Nov 19, 2023',
    tag: 'Graduation',
    title: 'Congratulations to Abdelgader Agilah Saleh Gheidan on your graduation!',
    desc: 'Congratulations to Abdelgader Agilah Saleh Gheidan on your graduation at the 67th convocation ceremony at Dewan Sultan Iskandar, UTM. The research title is “Air-Fuel Configurations and Preheating Effect on the Emission Characteristics of Mesoscale Flameless Combustion”.',
    img: './news/13-7b2e8de8.jpg',
    body: ['Congratulations to Abdelgader Agilah Saleh Gheidan on your graduation at the 67th convocation ceremony at Dewan Sultan Iskandar, UTM. The research title is “Air-Fuel Configurations and Preheating Effect on the Emission Characteristics of Mesoscale Flameless Combustion”. We wish you all the best, prayers, and blessings for your future!'],
  },
  {
    slug: 'congratulations-to-umar-ikhwan-mohd-rozaiddin-on-your-graduation',
    date: 'Nov 19, 2023',
    tag: 'Graduation',
    title: 'Congratulations to Umar Ikhwan Mohd Rozaiddin on your graduation!',
    desc: 'Congratulations to Umar Ikhwan Mohd Rozaiddin on your graduation at the 67th convocation ceremony at Dewan Sultan Iskandar, UTM. The research title is “Investigation of Performance of a Methane-Oxygen Rotating Detonation Engine with Acetylene Additives”. We wish you all the best, prayers, and blessings for your future!',
    img: './news/14-34ab2d2b.jpg',
    body: ['Congratulations to Umar Ikhwan Mohd Rozaiddin on your graduation at the 67th convocation ceremony at Dewan Sultan Iskandar, UTM. The research title is “Investigation of Performance of a Methane-Oxygen Rotating Detonation Engine with Acetylene Additives”. We wish you all the best, prayers, and blessings for your future!'],
  },
  {
    slug: 'hiref-alumni-congratulations-to-dr-shehab-elhawary-post-doctoral-fellow',
    date: 'Nov 1, 2023',
    tag: 'Alumni',
    title: 'HIREF Alumni: Congratulations to Dr. Shehab Elhawary! Post-Doctoral Fellow',
    desc: 'Dr. Shehab Elhawary, an alumnus of HiREF Laboratory, is undergoing a post-doctoral programme at the Centre for Hydrogen Energy. Congratulations, Dr. Shehab!',
    img: './news/15-833664b7.jpg',
    body: ['Dr. Shehab Elhawary, an alumnus of HiREF Laboratory, is undergoing a post-doctoral programme at the Centre for Hydrogen Energy. Congratulations, Dr. Shehab!'],
  },
  {
    slug: 'welcome-muhammad-roslan-bin-rahim-hiref-research-assistant-phd',
    date: 'Oct 30, 2023',
    tag: 'Welcome',
    title: 'Welcome Muhammad Roslan Bin Rahim! HIREF Research Assistant (PhD)',
    desc: 'Muhammad Roslan Bin Rahim, undergoing PhD programme, has been appointed as a research assistant under Dr. Norazila Othman. All the best for the project!',
    img: './news/16-375751ff.jpg',
    body: ['Muhammad Roslan Bin Rahim, undergoing PhD programme, has been appointed as a research assistant under Dr. Norazila Othman. All the best for the project!'],
  },
  {
    slug: 'welcome-umar-ikhwan-bin-mohd-rozaiddin-hiref-research-assistant',
    date: 'Oct 30, 2023',
    tag: 'Welcome',
    title: 'Welcome Umar Ikhwan Bin Mohd Rozaiddin! HIREF Research Assistant',
    desc: 'Umar Ikhwan bin Mohd Rozaiddin, has been appointed as a Research Assistant under Prof. Dr. Mazlan Abd Wahid',
    img: './news/17-459dcbf9.jpg',
    body: ['Umar Ikhwan bin Mohd Rozaiddin, has been appointed as a Research Assistant under Prof. Dr. Mazlan Abd Wahid'],
  },
  {
    slug: 'welcome-muhammad-amri-mazlan-hiref-research-assistant',
    date: 'Oct 30, 2023',
    tag: 'Welcome',
    title: 'Welcome, Muhammad Amri Mazlan! HIREF Research Assistant',
    desc: 'Muhammad Amri Mazlan, undergoing a research project, has been appointed as a research assistant under Prof. Dr. Mazlan Abd Wahid. All the best for the project',
    img: './news/18-8e5a52ac.jpg',
    body: ['Muhammad Amri Mazlan, undergoing a research project, has been appointed as a research assistant under Prof. Dr. Mazlan Abd Wahid. All the best for the project'],
  },
  {
    slug: 'welcome-kamil-hafizudin-bin-kamal-azam-hiref-research-assistant-mphil',
    date: 'Oct 30, 2023',
    tag: 'Welcome',
    title: 'Welcome Kamil Hafizudin Bin Kamal Azam ! HIREF Research Assistant (MPhil)',
    desc: 'Kamil Hafizudin Bin Kamal Azam, a Research Assistant undergoing MPhil programme under Dr. Natrah Kamaruzaman. All the best for the project!',
    img: './news/19-26be8759.jpg',
    body: ['Kamil Hafizudin Bin Kamal Azam, a Research Assistant undergoing MPhil programme under Dr. Natrah Kamaruzaman. All the best for the project!'],
  },
  {
    slug: 'welcome-new-final-year-project-students',
    date: 'Oct 30, 2023',
    tag: 'Welcome',
    title: 'Welcome new Final Year Project students!',
    desc: 'Welcome to the new Final Year Project students! All the best for the project !',
    img: './news/20-2ba5ed05.jpg',
    body: ['Welcome to the new Final Year Project students! All the best for the project !'],
  },
  {
    slug: 'welcome-dr-abiodun-abdulhameed-amusa-associate-member-of-hiref-laboratory',
    date: 'Oct 30, 2023',
    tag: 'Welcome',
    title: 'Welcome Dr. Abiodun Abdulhameed Amusa! Associate Member of HiREF Laboratory',
    desc: '',
    img: './news/21-db35a42f.jpg',
    body: [],
  },
  {
    slug: 'congratulations-to-dr-norikhwan-hamzah-and-the-team-on-receiving-the-bronze-award-at-the-25th-industrial-art-technology-exhibition-inatex-2023',
    date: 'Oct 29, 2023',
    tag: 'Award',
    title: 'Congratulations to Dr. Norikhwan Hamzah and the team on receiving the bronze award at the 25th Industrial Art & Technology Exhibition (INATEX 2023)!',
    desc: 'Congratulations to Dr. Norikhwan Hamzah and the team on receiving the bronze award for the invention and innovation of FLASYN:Flame-Based Nanomaterial Synthesis for Upscaled Production at the 25th Industrial Art & Technology Exhibition (INATEX 2023) at Residensi UTM Kuala Lumpur on October 25–26, 2023!',
    img: './news/22-7b2f3aba.jpg',
    body: ['Congratulations to Dr. Norikhwan Hamzah and the team on receiving the bronze award for the invention and innovation of FLASYN:Flame-Based Nanomaterial Synthesis for Upscaled Production at the 25th Industrial Art & Technology Exhibition (INATEX 2023) at Residensi UTM Kuala Lumpur on October 25–26, 2023!'],
  },
  {
    slug: 'congratulations-to-muhammad-amirrul-amin-moen-and-the-team-for-the-best-paper-award',
    date: 'Oct 26, 2023',
    tag: 'Award',
    title: 'Congratulations to Muhammad Amirrul Amin Moen and the Team for the Best Paper Award!',
    desc: 'Congratulations to Muhammad Amirrul Amin Moen, Vincent Tan Yi De, Dr. Mohd Fairus Mohd Yasin, and Dr. Norikhwan Hamzah on winning the Best Paper Award with the title “Analysis of Fuel Concentration Effect Towards Carbon Nanotubes Growth in Methane Diffusion Flames Using CFD Simulations” at the 22nd Asia Simulation…',
    img: './news/23-d1d354ae.jpg',
    body: ['Congratulations to Muhammad Amirrul Amin Moen, Vincent Tan Yi De, Dr. Mohd Fairus Mohd Yasin, and Dr. Norikhwan Hamzah on winning the Best Paper Award with the title “Analysis of Fuel Concentration Effect Towards Carbon Nanotubes Growth in Methane Diffusion Flames Using CFD Simulations” at the 22nd Asia Simulation Conference 2023.'],
  },
  {
    slug: 'congratulations-prof-dr-mazlan-abd-wahid-for-the-best-paper-award',
    date: 'Oct 23, 2023',
    tag: 'Award',
    title: 'Congratulations Prof. Dr. Mazlan Abd Wahid for the Best Paper Award!',
    desc: 'Congratulations, Prof. Dr. Mazlan Abd Wahid, on your outstanding achievement in winning the Best Paper Award at the 17th Asian International Conference on Fluid Machinery (AICFM17) in Zhenjiang, China. Best wishes for your future endeavors!',
    img: './news/24-bb885894.jpg',
    body: ['Congratulations, Prof. Dr. Mazlan Abd Wahid, on your outstanding achievement in winning the Best Paper Award at the 17th Asian International Conference on Fluid Machinery (AICFM17) in Zhenjiang, China. Best wishes for your future endeavors!'],
  },
  {
    slug: 'congratulations-to-prof-dr-mazlan-abd-wahid-on-becoming-a-guest-professor-at-jiangsu-university',
    date: 'Oct 23, 2023',
    tag: 'Appointment',
    title: 'Congratulations to Prof. Dr. Mazlan Abd Wahid on Becoming a Guest Professor at Jiangsu University!',
    desc: 'Prof. Dr. Mazlan Abd Wahid received an invitation to visit a lab and participate in a meeting as a guest professor at Jiangsu University. The event occurred on October 22, 2023, at the Second Lecture Hall of the JSU Conference Center, offering a valuable opportunity for academic collaboration and knowledge exchange.',
    img: './news/25-a10d5beb.jpg',
    body: ['Prof. Dr. Mazlan Abd Wahid received an invitation to visit a lab and participate in a meeting as a guest professor at Jiangsu University. The event occurred on October 22, 2023, at the Second Lecture Hall of the JSU Conference Center, offering a valuable opportunity for academic collaboration and knowledge exchange.'],
  },
  {
    slug: 'congratulations-to-prof-mazlan-abd-wahid-and-the-team-appointed-as-a-training-provider-for-the-hydrogen-gas-turbine-technology-course-from-ilsas-tnb-integrated-learning-solution-sdn-bhd',
    date: 'Oct 23, 2023',
    tag: 'Appointment',
    title: 'Congratulations to Prof. Mazlan Abd Wahid and the team! Appointed as a training provider for the “Hydrogen Gas Turbine Technology Course” from ILSAS, TNB Integrated Learning Solution Sdn Bhd',
    desc: 'Prof. Mazlan Abd Wahid, Dr. Norazila Othman, Assoc. Prof. Dr. Aminuddin Saat, and Dr. Mohd Fairus Mohd Yasin have been appointed as training providers for the upcoming training from November 16–17, 2023.',
    img: './news/26-4d39c143.jpg',
    body: ['Prof. Mazlan Abd Wahid, Dr. Norazila Othman, Assoc. Prof. Dr. Aminuddin Saat, and Dr. Mohd Fairus Mohd Yasin have been appointed as training providers for the upcoming training from November 16–17, 2023. Wish the team the best to prepare the nation’s workforce for the implementation of the Hydrogen for Power Initiative under the National Energy Transition Roadmap.'],
  },
  {
    slug: 'industrial-collaboration-visit-by-petronas',
    date: 'Oct 16, 2023',
    tag: 'Visit',
    title: 'Industrial Collaboration Visit by Petronas',
    desc: 'HiREF welcomed a visit from Petronas team (Sungai Udang regional office) headed by Mr. Sazli on 12 Oct 2023 as part of collaborative plan program between Petronas & UTM. Prof Mazlan and Dr.',
    img: './news/27-a4085197.jpg',
    body: ['HiREF welcomed a visit from Petronas team (Sungai Udang regional office) headed by Mr. Sazli on 12 Oct 2023 as part of collaborative plan program between Petronas & UTM. Prof Mazlan and Dr. Mohd Fairus shared the related work on flameless combustion, rotating detonation engine (RDE), and co-production of blue hydrogen & carbon nanomaterials.'],
    gallery: ['./news/27-a4085197-2.jpg'],
  },
  {
    slug: 'congratulations-assoc-prof-dr-aminuddin-saat-on-the-anugerah-jasa-bakti-achievement',
    date: 'Oct 11, 2023',
    tag: 'Award',
    title: 'Congratulations, Assoc. Prof. Dr. Aminuddin Saat on the Anugerah Jasa Bakti achievement',
    desc: 'Congratulations to Assoc. Prof. Dr. Aminuddin Saat for being honored with Anugerah Jasa Bakti. We extend our heartfelt congratulations and wish your ongoing journey to be filled with even greater accomplishments.',
    img: './news/28-be4767ed.jpg',
    body: ['Congratulations to Assoc. Prof. Dr. Aminuddin Saat for being honored with Anugerah Jasa Bakti. We extend our heartfelt congratulations and wish your ongoing journey to be filled with even greater accomplishments.'],
    gallery: ['./news/28-be4767ed-2.jpg'],
  },
  {
    slug: 'congratulations-dr-norazila-othman-for-successfully-securing-fundamental-research-grant-scheme-frgs-2023-grant',
    date: 'Oct 8, 2023',
    tag: 'Grant',
    title: 'Congratulations Dr. Norazila Othman for successfully securing Fundamental Research Grant Scheme (FRGS) 2023 Grant!',
    desc: '',
    img: './news/29-3cd781d9.jpg',
    body: [],
  },
  {
    slug: 'congratulations-assoc-prof-dr-aminuddin-saat-for-successfully-securing-utm-encouragement-research-utmer-2023-grant',
    date: 'Oct 8, 2023',
    tag: 'Grant',
    title: 'Congratulations Assoc. Prof. Dr. Aminuddin Saat for successfully securing UTM Encouragement Research (UTMER) 2023 Grant!',
    desc: '',
    img: './news/30-65b2b1c0.jpg',
    body: [],
  },
  {
    slug: 'congratulations-for-the-completion-of-ugp-ii',
    date: 'Aug 2, 2023',
    tag: 'Milestone',
    title: 'Congratulations for the completion of UGP II',
    desc: '',
    img: './news/31-a627aad0.jpg',
    body: [],
  },
  {
    slug: 'congratulation-mohammed-bashir-abdelgader-shehab-dr-talhah-for-the-publication',
    date: 'Aug 2, 2023',
    tag: 'Publication',
    title: 'Congratulation! Mohammed Bashir, Abdelgader, Shehab & Dr Talhah for the publication',
    desc: '',
    img: './news/32-9c630f0b.jpg',
    body: [],
  },
  {
    slug: 'congratulation-muhammad-hilmi-ibrahim-q2-publication',
    date: 'Aug 2, 2023',
    tag: 'Publication',
    title: 'Congratulation! Muhammad Hilmi Ibrahim (Q2 Publication)',
    desc: '',
    img: './news/33-9c0427a6.jpg',
    body: [],
  },
  {
    slug: 'serf-bank-of-proposal-workshop-ii',
    date: 'Aug 1, 2023',
    tag: 'Event',
    title: 'SERF Bank of Proposal Workshop II',
    desc: 'SERF Bank of Proposal Workshop II was done at ALERT Room on July 31, 2023, E07, involving 3 facilitators from FKM, 1 facilitator from MJIIT, and 4 PhD students. Overall, 3 UTM FR and 1 FRGS proposals were presented. All the best for the proposal submission!',
    img: './news/34-99ecc1c1.jpg',
    body: ['SERF Bank of Proposal Workshop II was done at ALERT Room on July 31, 2023, E07, involving 3 facilitators from FKM, 1 facilitator from MJIIT, and 4 PhD students. Overall, 3 UTM FR and 1 FRGS proposals were presented. All the best for the proposal submission!'],
  },
  {
    slug: 'congrats-serf-to-be-selected-for-the-organizer-for-imat-2024',
    date: 'Jul 29, 2023',
    tag: 'Event',
    title: 'Congrats SERF to be selected for the organizer for IMAT 2024',
    desc: 'Prof. Dr. Mazlan Abdul Wahid and Dr. Mohd Fairus Mohd Yasin represented UTM to bid for the organization of the 13th International Meeting on the Advances in Thermofluids (IMAT), October 2024. The bid was presented during the International Conference of Polygeneration, Bali, Indonesia on 28 July 2023.',
    img: './news/35-5530c093.jpg',
    body: ['Prof. Dr. Mazlan Abdul Wahid and Dr. Mohd Fairus Mohd Yasin represented UTM to bid for the organization of the 13th International Meeting on the Advances in Thermofluids (IMAT), October 2024. The bid was presented during the International Conference of Polygeneration, Bali, Indonesia on 28 July 2023. The bid was successful and the IMAT committee was grateful for the commitment extended by the working committee of UTM. All best for the conference!'],
  },
  {
    slug: 'visit-to-micron-batu-kawan-mmp-burn-in-area',
    date: 'Jul 21, 2023',
    tag: 'Visit',
    title: 'Visit to Micron Batu Kawan (MMP) Burn-in Area',
    desc: 'The first visit of the UTM team to the Micron Batu Kawan (MMP) Burn-in area was on July 21, 2023. The visit intends to discover the manufacturing process, specifically the burn-in process of electronic components under extreme conditions, and see their high-tech facility.',
    img: './news/36-de20fac8.jpg',
    body: ['The first visit of the UTM team to the Micron Batu Kawan (MMP) Burn-in area was on July 21, 2023. The visit intends to discover the manufacturing process, specifically the burn-in process of electronic components under extreme conditions, and see their high-tech facility. Thanks a lot to the Micron team for their gracious hospitality. The UTM team is represented by Prof. Mazlan, Dr. Natrah, and Irfan.'],
  },
  {
    slug: 'congratulations-jimoh-ajani-for-passing-the-proposal-defense',
    date: 'Jul 4, 2023',
    tag: 'Proposal Defence',
    title: 'Congratulations Jimoh Ajani for passing the proposal defense!',
    desc: 'Ajani successfully defended his proposal entitled “Modelling The Upscaled Synthesis System of Carbon Nanotubes Using The Flame Assisted-Chemical Vapour Deposition” on 3 July 2023. Supervision was done by Dr. Mohd Fairus Mohd Yasin, Dr. Muhammad Thalhah Zainal, Dr. Muhamad Fauzi Abd Rased, and Prof. Dr.',
    img: './news/37-275aedfa.jpg',
    body: ['Ajani successfully defended his proposal entitled “Modelling The Upscaled Synthesis System of Carbon Nanotubes Using The Flame Assisted-Chemical Vapour Deposition” on 3 July 2023. Supervision was done by Dr. Mohd Fairus Mohd Yasin, Dr. Muhammad Thalhah Zainal, Dr. Muhamad Fauzi Abd Rased, and Prof. Dr. Mazlan Abdul Wahid. All the best for the project!'],
  },
  {
    slug: 'congratulations-irfan-suhaimi-for-passing-the-proposal-defence',
    date: 'Jul 4, 2023',
    tag: 'Proposal Defence',
    title: 'Congratulations Irfan Suhaimi for passing the proposal defence!',
    desc: 'Irfan successfully defended his proposal entitled “Enhancement of The Heat Sinking Action Process using a Device Equipped with Vortex Generator” on 3 July 2023. Supervision was done by Dr. Natrah Binti Kamaruzaman, Prof. Dr. Mazlan Bin Abdul Wahid and Dr. Mohsin Bin Mohd Sies. All the best for the project!',
    img: './news/38-c7528000.jpg',
    body: ['Irfan successfully defended his proposal entitled “Enhancement of The Heat Sinking Action Process using a Device Equipped with Vortex Generator” on 3 July 2023. Supervision was done by Dr. Natrah Binti Kamaruzaman, Prof. Dr. Mazlan Bin Abdul Wahid and Dr. Mohsin Bin Mohd Sies. All the best for the project!'],
  },
  {
    slug: 'congrats-the-proposal-for-the-establishment-of-the-hiref-centre-is-approved-by-the-faculty-of-mechanical-engineering-ready-for-the-next-phase-of-presentation',
    date: 'Jan 3, 2023',
    tag: 'Milestone',
    title: 'Congrats! The proposal for the Establishment of the HIREF Centre Is Approved by the Faculty of Mechanical Engineering. Ready for the Next Phase of Presentation',
    desc: 'Prof. Dr. Mazlan Abd Wahid and Dr. Mohd Fairus Mohd Yasin successfully presented the proposal for the establishment of a new research centre (HIREF Centre) at Jawatankuasa Penyelidikan dan Inovasi, Fakulti Kejuruteraan Mekanikal (FKM) on Thursday, 29 Dec 2022.',
    img: './news/39-4235fa91.jpg',
    body: ['Prof. Dr. Mazlan Abd Wahid and Dr. Mohd Fairus Mohd Yasin successfully presented the proposal for the establishment of a new research centre (HIREF Centre) at Jawatankuasa Penyelidikan dan Inovasi, Fakulti Kejuruteraan Mekanikal (FKM) on Thursday, 29 Dec 2022. The proposal is approved at the Faculty level and will be presented to the University soon. We pray for the best! Special thanks to the Task Force as follows for the hard work up to this point:', 'Dr. Mohd Fairus bin Mohd Yasin\nDr. Norikhwan bin Hamzah\nDr. Norazila binti Othman\nEn. Mohd Fahmi bin Md Salleh\nEn. Umar Ikhwan Mohd Rozaiddin\nEn. Muhammad Hilmi Ibrahim'],
  },
  {
    slug: 'congratulations-dr-norikhwan-hamzah-for-the-best-paper-award',
    date: 'Dec 15, 2022',
    tag: 'Award',
    title: 'Congratulations Dr. Norikhwan Hamzah for the Best Paper Award!',
    desc: 'Dr. Norikhwan Hamzah, received the “Best Paper Awards” at SIE Conference 2022. Congratulations Dr!',
    img: './news/40-0ca17173.jpg',
    body: ['Dr. Norikhwan Hamzah, received the “Best Paper Awards” at SIE Conference 2022. Congratulations Dr!'],
  },
  {
    slug: 'sustainability-integrated-engineering-international-conference-2022-and-strategic-planning-meeting',
    date: 'Dec 15, 2022',
    tag: 'Event',
    title: 'Sustainability & Integrated Engineering International Conference 2022 and Strategic Planning Meeting',
    desc: '1. Conference presentation in Sustainability & Integrated Engineering International Conference 2022. Dr. Mohd Fairus Mohd Yasin, Dr. Norikhwan Hamzah, Hilmi Ibrahim 2. Strategic Planning Meeting: Flame Synthesis Thank you Dr. Abdillah Sani for joining the meeting as guest member. “',
    img: './news/41-35670a77.jpg',
    body: ['1. Conference presentation in Sustainability & Integrated Engineering International Conference 2022. Dr. Mohd Fairus Mohd Yasin, Dr. Norikhwan Hamzah, Hilmi Ibrahim', '2. Strategic Planning Meeting: Flame Synthesis', 'Thank you Dr. Abdillah Sani for joining the meeting as guest member. “'],
  },
  {
    slug: 'hiref-alumni-congratulations-dr-izat-mnr-for-the-excellence-award',
    date: 'Dec 12, 2022',
    tag: 'Award',
    title: 'HIREF Alumni: Congratulations Dr. Izat (MNR) for the Excellence Award!',
    desc: 'Dr. Mohammad Nurizat Rahman, an alumnus of HiREF Laboratory, received “The Most Promising Researcher” award at the TNBR’s Employee Excellence Award 2022. Congratulations Dr. Izat!',
    img: './news/42-5f1433e5.jpg',
    body: ['Dr. Mohammad Nurizat Rahman, an alumnus of HiREF Laboratory, received “The Most Promising Researcher” award at the TNBR’s Employee Excellence Award 2022. Congratulations Dr. Izat!'],
  },
  {
    slug: 'welcome-muhammad-irfan-bin-suhaimi-hiref-research-assistant-mphil',
    date: 'Dec 8, 2022',
    tag: 'Welcome',
    title: 'Welcome Muhammad Irfan bin Suhaimi! HIREF Research Assistant (MPhil)',
    desc: 'Muhammad Irfan bin Suhaimi, is a Research Assistant undergoing an MPhil programme under Dr. Natrah Kamaruzaman starting from the 20222023/1 session. He was chosen to be appointed under the research grant from Micron Technology Inc.',
    img: './news/43-dcf58a13.jpg',
    body: ['Muhammad Irfan bin Suhaimi, is a Research Assistant undergoing an MPhil programme under Dr. Natrah Kamaruzaman starting from the 20222023/1 session. He was chosen to be appointed under the research grant from Micron Technology Inc. entitled “Development of Novel Microchannel Heat Sink for High Power Density Device Cooling” after completing his undergraduate studies. All the best for the project!'],
  },
  {
    slug: 'welcome-irvan-trisapta-permana-hiref-reserach-volunteer-20222023-1',
    date: 'Dec 5, 2022',
    tag: 'Welcome',
    title: 'Welcome Irvan Trisapta Permana, HIREF Reserach Volunteer 20222023/1',
    desc: 'Irvan Trisapta Permana, the recipient of the IISMAVO Scholarship from the Indonesian government, is now attached with HIREF to assist with social media and IT administration. Coming from Institut Teknologi Sepuluh Nopember (ITS), Indonesia, he wishes to establish a collaborative research network while in UTM.',
    img: './news/44-8768bb0c.jpg',
    body: ['Irvan Trisapta Permana, the recipient of the IISMAVO Scholarship from the Indonesian government, is now attached with HIREF to assist with social media and IT administration. Coming from Institut Teknologi Sepuluh Nopember (ITS), Indonesia, he wishes to establish a collaborative research network while in UTM. At the same time, Irvan who is interested in Computational Fluid Dynamics study will gain research experience in related projects that are going on at HIREF. With some experience in computer maintenance, Irvan is happy to assist with computer-related issues. Glad to have you here Irvan!'],
  },
  {
    slug: 'welcome-tarit-das-short-term-research-assistant',
    date: 'Dec 4, 2022',
    tag: 'Welcome',
    title: 'Welcome Tarit Das! Short-Term Research Assistant',
    desc: 'Supervisor: Dr Mohd Fairus Mohd Yasin Project: Nanomaterial Synthesis and Application Session: 20222023',
    img: './news/45-050c2e38.jpg',
    body: ['Supervisor: Dr Mohd Fairus Mohd Yasin\nProject: Nanomaterial Synthesis and Application\nSession: 20222023'],
  },
  {
    slug: 'welcome-new-final-year-project-students-nanomaterial-synthesis-and-applications',
    date: 'Dec 1, 2022',
    tag: 'Welcome',
    title: 'Welcome new Final Year Project students! Nanomaterial Synthesis and Applications',
    desc: 'Welcome to the new Final Year Project students! All the best for the project 👍',
    img: './news/46-eea2e35e.jpg',
    body: ['Welcome to the new Final Year Project students! All the best for the project 👍'],
  },
  {
    slug: 'congratulations-dr-muhammad-thalhah-zainal-for-appointment-as-senior-lecturer',
    date: 'Dec 1, 2022',
    tag: 'Appointment',
    title: 'Congratulations Dr. Muhammad Thalhah Zainal for Appointment as Senior Lecturer',
    desc: 'Dr. Thalhah has been hand-picked among other candidates to fill the position of Senior Lecturer at Dept. of Mechanical Precision Engineering, Malaysia-Japan International Institute of Technology (MJIIT), Universiti Teknologi Malaysia (UTM). He is reporting for duty today, 1st Dec 2022.',
    img: './news/47-5c95e019.jpg',
    body: ['Dr. Thalhah has been hand-picked among other candidates to fill the position of Senior Lecturer at Dept. of Mechanical Precision Engineering, Malaysia-Japan International Institute of Technology (MJIIT), Universiti Teknologi Malaysia (UTM). He is reporting for duty today, 1st Dec 2022. Heartful congratulations from HIREF! All best for the future career progress!'],
  },
  {
    slug: 'congratulations-prof-mazlan-abd-wahid-global-top-2-scientist-2022',
    date: 'Nov 1, 2022',
    tag: 'Award',
    title: 'Congratulations Prof. Mazlan Abd Wahid! Global Top 2% Scientist 2022',
    desc: 'HIREF is proud to celebrate the success of Prof. Mazlan who joins other 51 UTM researchers as top global scientists👍👍👍. May the success inspire others in the team!',
    img: './news/48-0c14c375.jpg',
    body: ['HIREF is proud to celebrate the success of Prof. Mazlan who joins other 51 UTM researchers as top global scientists👍👍👍. May the success inspire others in the team!'],
  },
  {
    slug: 'mr-kusnadi-phd-candidate-presented-at-utm-brin-colloquium-3rd-oct-2022',
    date: 'Oct 18, 2022',
    tag: 'Event',
    title: 'Mr. Kusnadi (PhD Candidate) presented at UTM-BRIN Colloquium, 3rd Oct 2022',
    desc: 'Mr Kusnadi presented his work on biogas combustion with flameless combustion mode in the Colloquium held at La Grandeur hotel on 3 Oct 2022.',
    img: './news/49-f10ff74a.jpg',
    body: ['Mr Kusnadi presented his work on biogas combustion with flameless combustion mode in the Colloquium held at La Grandeur hotel on 3 Oct 2022. The program is part of the UTM – BRIN (Indonesia) remote PhD programme that involves Faculty of Electrical Engineering , Faculty of Mechanical Engineering, and Faculty of Computing UTM. Mr Kusnadi is supervised by Prof. Dr. Mazlan Abdul Wahid and Dr. Mohd Fairus Mohd Yasin. All best for the project!'],
  },
  {
    slug: 'congrtulations-for-the-completion-of-industrial-internship',
    date: 'Oct 13, 2022',
    tag: 'Milestone',
    title: 'Congratulations for the Completion of Industrial Internship',
    desc: 'Nasif Zafar, Ahmad Syahmi Abd Wahid, and Ainur Suffiah Amir from the Faculty of Mechanical Engineering successfully completed their industrial internship on 13 Oct 2022. Thanks for the cooperation and commitment and all the best for the rest of the study at UTM!',
    img: './news/50-bd86e1a3.jpg',
    body: ['Nasif Zafar, Ahmad Syahmi Abd Wahid, and Ainur Suffiah Amir from the Faculty of Mechanical Engineering successfully completed their industrial internship on 13 Oct 2022. Thanks for the cooperation and commitment and all the best for the rest of the study at UTM!'],
  },
];

export const EVENTS = [
  { name: '11th International Conference on Combustion, Incineration, Pyrolysis and Climate Change', abbr: 'i-CIPEC 2024', dates: '18 – 20 December 2024', location: 'Kuala Lumpur, Malaysia', status: 'upcoming' },
  { name: '13th International Meeting on Advances in Thermofluid', abbr: 'IMAT 2024', dates: '18 – 19 December 2024', location: 'Kuala Lumpur, Malaysia', status: 'upcoming' },
  { name: '12th International Meeting on Advances in Thermofluids', abbr: 'IMAT 2021', dates: '1 November 2021', location: 'Virtual', status: 'ended' },
  { name: '9th International Meeting on Advances in Thermofluids', abbr: 'IMAT 2017', dates: '25 January 2017', location: 'Malaysia', status: 'ended' },
  { name: '7th International Meeting on Advances in Thermofluids', abbr: 'IMAT 2014', dates: '26 – 27 November 2014', location: 'Malaysia', status: 'ended' },
];

export const HERO_SLIDES = [
  {
    tag: 'Research Mission',
    headline: 'Global Leader in\nResource Sustainability',
    sub: 'Advancing turbulence and thermochemical models across combustion, heat transfer, and supersonic reacting flows.',
    img: './c17-upper.jpg',
  },
  {
    tag: 'Universiti Teknologi Malaysia',
    headline: 'World-Ranked\nResearch University',
    sub: 'HIREF is proudly part of UTM — a globally recognised research university advancing science and engineering.',
    img: './61717629439_QSUTM.webp',
  },
  {
    tag: 'High Speed Flow',
    headline: 'High Speed\nReacting Flow Lab',
    sub: "State-of-the-art platforms for supersonic shock wave investigations and hypersonic propulsion at UTM's HIREF.",
    img: './UTM-image.jpg',
  },
];

export const ACADEMIC_STAFF = {
  fellows: [
    { name: 'Prof. Dr. Mazlan Abdul Wahid', role: 'Research Fellow', email: 'mazlan@utm.my', profileId: 'mw1v' },
    { name: 'Dr. Mohd Fairus Mohd Yasin', role: 'Research Fellow', email: 'mohdfairus@utm.my', profileId: 'OQG5' },
    { name: 'Prof. Madya Dr. Aminuddin Saat', role: 'Research Fellow', email: 'aminudin@utm.my', profileId: 'E2OY' },
    { name: 'Dr. Mohsin Mohd Sies', role: 'Research Fellow', email: 'mohsin@utm.my', profileId: 'ZQry' },
    { name: 'Dr. Norikhwan Hamzah', role: 'Research Fellow', email: 'norikhwan@utm.my', profileId: 'gWdY' },
    { name: 'Dr. Natrah Kamaruzaman', role: 'Research Fellow', email: 'natrahk@utm.my', profileId: '11Db' },
    { name: 'Ir. Dr. Norazila Othman', role: 'Research Fellow', email: 'norazilao@utm.my', profileId: 'vynD' },
    { name: 'Dr. Mohd Faizal Hasan', role: 'Research Fellow', email: 'mfaizal@utm.my', profileId: 'OQ7b' },
  ],
  associates: [
    { name: 'Dr. Muhammad Thalhah Zainal', role: 'Associate Research Fellow', email: 'mthalhah@utm.my', profileId: 'R8Vl' },
    { name: 'Prof. Madya Ir. Dr. Mohd Zarhamdy Md. Zain', role: 'Associate Research Fellow', email: 'zarhamdy@utm.my', profileId: 'jdGk' },
    { name: 'Dr. Mohd Ibthisham Ardani', role: 'Associate Research Fellow', email: 'ibthisham@utm.my', profileId: 'OQEd' },
    { name: 'Ts. Dr. Mohd Zamri Mohd Yusop', role: 'Associate Research Fellow', email: 'zamriyusop@utm.my', profileId: 'ZOpj' },
  ],
};

export interface Expert {
  name: string;
  title: string;
  position: string;
  affiliation: string;
  email: string;
  degrees: string;
  bio: string;
  research: string;
  linkedin: string | null;
  photo: string;
  scholarProfile: string;
  utmScholar: string;
  orcid: string;
  utmDirectory: string;
  publications: string[];
  researchPage?: Page;
}

export const EXPERTS: Expert[] = [
  {
    name: 'Assoc. Prof. Ir. Ts. Dr. Norazila Othman',
    title: 'Assoc. Prof. Ir. Ts. Dr.',
    position: 'Senior Lecturer & Research fellow',
    affiliation: 'Department of Aeronautics, Automotive and Ocean Engineering, Faculty of Mechanical Engineering',
    email: 'norazilao@utm.my',
    degrees: 'Bachelor of Engineering in Mechanical Engineering (Aeronautics), Universiti Teknologi Malaysia, Malaysia, 2009 · Master of Engineering in Mechanical Engineering, Universiti Teknologi Malaysia, Malaysia, 2011 · Doctor of Philosophy in Applied Aerodynamics, Tokyo Metropolitan University, Japan, 2016',
    bio: 'Assoc. Prof. Ir. Ts. Dr. Norazila Othman is a Senior Lecturer in the Department of Aeronautics, Automotive and Ocean Engineering at Universiti Teknologi Malaysia (UTM). She earned her Bachelor of Engineering in Mechanical Engineering (Aeronautics) and Master of Engineering in Mechanical Engineering (Propulsion) from UTM. She subsequently advanced her academic journey in Japan, completing her Doctor of Philosophy (PhD) in Applied Aerodynamics at Tokyo Metropolitan University.\n\nHer research expertise encompasses a diverse and highly technical range of engineering fields. She specializes in applied aerodynamics for aircraft design and performance, alongside the enhancement of aircraft and rocket propulsion engines. Furthermore, Dr. Norazila is actively engaged in sustainable energy research, specifically focusing on combustion characteristics, emissions, and the production of both liquid (biodiesel, biojet, and synthetic fuels) and gas (syngas) biofuels. To drive innovation in these areas, she extensively applies process optimization techniques utilizing Response Surface Methodology (RSM) and Artificial Neural Networks (ANN).\n\nAs a prolific academic, she has a robust publication record, frequently contributing high-impact research on topics such as thermo-acoustic instabilities, biofuel combustion optimization, and advanced gasification technologies to the global scientific community.',
    research: 'Applied aerodynamics on aircraft design and performance; Process optimisation using Response Surface Methodology (RSM) and Artificial Neural Network (ANN); Aircraft and rocket propulsion engine enhancement; Combustion characteristics on the performance and emission of combusted fuel; Production of liquid (biodiesel, biojet and synthetic fuel) and gas (syngas) biofuel.',
    linkedin: 'https://linkedin.com/in/ir-ts-dr-norazila-othman-357399158',
    photo: './experts/norazila.png',
    scholarProfile: 'https://scholar.google.com/citations?user=A2yRIbQAAAAJ&hl=en',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/vynD',
    orcid: 'https://orcid.org/0000-0001-9163-8293',
    utmDirectory: 'https://www.utm.my/directory/staff/norazilao',
    researchPage: 'research-norazila',
    publications: [
      'Agonga, O. F., Othman, N., & Yasin, M. F. M. (2026). A hybrid CFD-neural network framework for the early prediction of longitudinal thermo-acoustic instabilities in hydrogen-fueled gas turbine combustors. Next Energy, 10, 100497.',
      'Araibi, A. S., Trisasongko, A. P., Othman, N., & Jaafar, M. N. M. (2025). Mitigation of NOx and CO emissions from liquid fuel burner firing jatropha biodiesel blends. Jurnal Teknologi (Sciences & Engineering), 87(1), 1-10.',
      'Dzolkepli, I. Z. S., Hasan, M. F., Yasin, M. F. M., Othman, N., Supee, A., & Sukiran, M. A. (2025). Solar-driven torrefaction for sustainable bioenergy production: A review. Biomass and Bioenergy, 195, 107685.',
      'Nik Leh, N. S. H., Othman, N., & Md Lias, M. K. H. (2025). Ammonia-coal co-firing: A critical review of technical challenges and decarbonization pathways. The Engineer Story, 15, 13-16.',
      'Othman, M. H., Rahim, M. R., Jaafar, M. N. M., Said, M., Othman, N., Malik, M. S. A., & Azli, A. A. M. (2024). Study of combustion performance of syngas from biomass waste (wood waste) in a gas burner. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 60(2), 247-257.',
      'Ong, J. S. J., Malik, M. S. A., Othman, N., & Wahid, M. A. (2024). Soybean and waste cooking oil based feedstocks as a sustainable biofuel. Jurnal Mekanikal, 47(1), 39-50.',
      'Rahim, M. R., Trisasongko, A. P., Wahid, M. A., Othman, N., Araibi, A. S., & Said, M. (2024). Gasification technology and its future: A review. ASEAN Engineering Journal, 14(1), 45-61.',
      'Mariaprakasam, R. D. R., Mat, S., Samin, P. M., Othman, N., Ab Wahid, M., & Said, M. (2023). Review on flow controls for vehicles aerodynamic drag reduction. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 101(1).',
      'Mohammed, A. T., Said, M. F. M., Othman, N., Abdullah, T. A. T., Opia, A. C., Malik, M. S. A., & Roslan, M. F. (2023). MgCl2 salt assisted hydro-distillation extraction of orange peel oil for biofuel application. 1st International Conference on Recent Studies 2023 (ICRS 2023).',
      'Mohammed, A. T., Said, M. F. M., Othman, N., Opia, A. C., & Veza, I. (2023). Feasibility study of biofuel incorporated nanoparticles as sustainable IC engine fuel: Opportunities and challenges-an overview. Automotive Experiences, 6(1), 94-121.',
      'Rahim, M. R., Othman, N., Ramli, Y., & Malik, M. S. A. (2023). Utilization of synthesis gas generated from agricultural waste as clean sustainable fuel. ASEAN Engineering Journal, 13(2).',
      'Hang, L. C., Rosli, N. A. N., Wahid, M. A., Othman, N., Mat, S., & Zain, M. Z. M. (2022). CFD analysis on propeller at varying propeller disc angle and advance ratio. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 96(1), 82-95.',
      'Rahim, M. R., Trisasongko, A. P., Jaafar, M. N. M., Othman, N., Ramli, Y., Malik, M. S. A., & Said, M. (2022). Ulasan: Pembangunan teknologi penggasan dan penggunaan. Jurnal Teknologi, 84(1), 193-210.',
      'Hakim, M. S. A., Wahid, M. A., Othman, N., Mat, S., Mansor, S., Dahalan, M. N., & Ali, W. K. W. (2021). Numerical simulation of aerofoil with flow injection at the upper surface. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 88(1), 1-15.',
      'Mohammed, A. T., Jaafar, M. N. M., Othman, N., Veza, I., & Mohammed, B. (2021). Soil fertility enrichment potential of Jatropha curcas for sustainable agricultural production: A case study of Birnin Kebbi, Nigeria. Annals of the Romanian Society for Cell Biology, 25(4), 21061-21073.',
      'Othman, N., & Wahid, M. A. (Eds.). (2021). Aeronautical analysis via experimental and computational approaches. Penerbit UTM Press.',
      'Othman, N., Mat, S., & Wahid, M. A. (2021). Influence of active flow control on blunt-edged VFE-2 delta wing model. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 80(1), 1-12.',
      'Othman, N., Rahim, M. R., & Jaafar, M. N. M. (2021). Novel swirl fixed bed gasifier for production of synthesis gas using empty fruit bunch (EFB). Science Proceedings Series, 4(1), 15-19.',
      'Othman, N., Wahid, M. A., & Mat, S. (2021). Torrefaction of palm kernel shell and petcoke blends for various mixing ratios and temperatures. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 85(1), 1-10.',
      'Shahrin, M. S. N., Othman, N., Nik Mohd, N. A. R., Ab Wahid, M., & Md. Zain, M. Z. (2021). Porosity effect of the silver catalyst in hydrogen peroxide monopropellant thruster. CFD Letters, 13(12), 1-20.',
      'Shahrin, M. S. N., Othman, N., Nik Mohd, N. A. R., & Wahid, M. A. (2021). Numerical analysis of hydrogen peroxide monopropellant thruster. International Journal of Sustainable Aviation, 7(3), 249-263.',
      'Rahim, M. R., Jaafar, M. N. M., Shaiful, A. I. M., Omar, W. Z. W., & Othman, N. (2021). Utilizing of biodiesel fuel for micro gas turbine combustion performance. AIP Conference Proceedings, 2339(1), 020235.',
    ],
  },
  {
    name: 'Ts. Dr. Mohd Faizal Hasan',
    title: 'Ts. Dr.',
    position: 'Senior Lecturer, Research Fellow',
    affiliation: 'Department of Thermofluids, Faculty of Mechanical Engineering, Universiti Teknologi Malaysia',
    email: 'mfaizal@utm.my',
    degrees: 'Bachelor of Mechanical Engineering, Kitami Institute of Technology, Japan · Master of Engineering in Mechanical Engineering, Universiti Teknologi Malaysia, Malaysia · Doctor of Philosophy in Engineering, Keio University, Japan',
    bio: 'Dr. Mohd Faizal Hasan obtained his Ph.D. degree in Engineering from Keio University (Japan). His Ph.D. research was related to Palladium/Argentum (Pd/Ag) purification membrane for fuel cell application, and also methanol steam reforming for hydrogen production. Now, he is doing researches on densification, hydrotreatment, torrefaction and pyrolysis of biomass. Dr. Mohd Faizal has been appointed as the Coordinator for Thermodynamics Field at the faculty, and serves as an editor and reviewer for various prestigious international journals.',
    research: 'Renewable Energy; Alternative Fuels; Biomass; Torrefaction; Pyrolysis.',
    linkedin: null,
    photo: './experts/faizal.png',
    scholarProfile: 'https://scholar.google.com/citations?user=YmXMlTEAAAAJ&hl=en',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/OQ7b',
    orcid: 'https://orcid.org/0000-0002-6417-2819',
    utmDirectory: 'https://www.utm.my/directory/staff/mfaizal',
    researchPage: 'research-faizal',
    publications: [
      'Dzolkepli, I. Z. S., Hasan, M. F., Mohd Yasin, M. F., Othman, N., Supee, A., & Sukiran, M. A. (2025). Solar-driven torrefaction for sustainable bioenergy production: A review. Biomass and Bioenergy, 195, 107685. https://doi.org/10.1016/j.biombioe.2025.107685',
      'Elsehsah, K. A. A. A., Noorden, Z. A., Mat Saman, N., Ahmad, N. A., Hasan, M. F., & Mohd Ghazali, M. N. (2025). Enhancing graphene-based supercapacitors with plasma methods: A review. FlatChem, 50, 100832. https://doi.org/10.1016/j.flatc.2025.100832',
      'Chang, Y. H., Tee, M. Y., Chong, W. W. F., Hasan, M. F., & Abdul Patah, M. F. (2024). Microwave co-pyrolysis on plastic and sludge waste: Effect of heating insulation on product yield. Chemical Engineering Transactions, 113, 589–594. https://doi.org/10.3303/CET24113099',
      'Mohd Fuad, M. A. H., Hasan, M. F., Chong, W. W. F., Ani, F. N., & Ngadiman, N. H. A. (2024). A novel oxidative microwave torrefaction approach for producing empty fruit bunch-starch binder briquettes as a potential biomass-based energy. Renewable Energy, 228, 120592. https://doi.org/10.1016/j.renene.2024.120592',
      'Hasan, M. F., Abdul Rahman, M. R., Nyakuma, B. B., & Muhamad Said, M. F. (2024). Alternatives for inert torrefaction to produce high-quality solid fuel: Review of available techniques, parameters, potentials and challenges. Biomass and Bioenergy, 182, 107108. https://doi.org/10.1016/j.biombioe.2024.107108',
      'Selvam, D. S., Abdul Rahim, N. A., Saad, M. R., Syawal, S., Hasan, M. F., & Abdul Rahman, M. R. (2023). Numerical simulation of a modified trapped vortex combustor. Journal of Thermal Analysis and Calorimetry, 148, 3129–3135. https://doi.org/10.1007/s10973-022-11382-9',
      'Nyakuma, B. B., Wong, S. L., Faizal, H. M., Hambali, H. U., Oladokun, O., & Abdullah, T. A. T. (2022). Carbon dioxide torrefaction of oil palm empty fruit bunches pellets: Characterisation and optimisation by response surface methodology. Biomass Conversion and Biorefinery, 12(12), 5881–5900. https://doi.org/10.1007/s13399-020-01071-8',
      'Hasan, M. F., Omar, M. S., Sukiran, M. A., Nyakuma, B. B., & Muhamad Said, M. F. (2022). Torrefaction of fibrous empty fruit bunch under mild pressurization technique. Renewable Energy, 194, 349–358. https://doi.org/10.1016/j.renene.2022.05.099',
      'Nyakuma, B. B., Oladokun, O., Ogunbode, E. B., Akinyemi, S. A., Wong, S., Ali, J. B., M. Faizal, H., & Abdullah, T. A. T. (2022). Extraction and characterisation of natural fibres from Imperata cylindrica: Morphological, microstructural, thermal, and kinetic properties. Journal of Natural Fibers, 19(15), 12325–12338. https://doi.org/10.1080/15440478.2022.2057384',
      'Abdul Rahman, M. R., Wan Shuib, W. M. A. W., Saad, M. R., Idris, A. C., & Faizal, H. M. (2021). Combustion characteristic inside micro channel combustor. Jurnal Kejuruteraan, SI 4(1), 109–116. https://doi.org/10.17576/jkukm-2021-si4(1)-14',
      'Hasan, M. F., Nyakuma, B. B., Abdul Rahman, M. R., Othman, N., Ahmad, N., & Muhamad Said, M. F. (2021). Torrefaction of palm kernel shell and petcoke blends for various mixing ratios and temperatures. Annales de Chimie: Science des Matériaux, 45(6), 477–484. https://doi.org/10.18280/acsm.450606',
      'Kamaruzaman, N., Kok, Y. H., Abdul Manaf, N., Ku Azman Shah, K. N. A., Mohd Yusop, M. Z., Rohani, J. M., Fadil, N. A., Hasan, M. F., Mohd Yasin, M. F., & Kamaruzaman, N. (2021). Modelling and control analysis of bamboo-based gasification: Towards the modern renewable energy. Chemical Engineering Transactions, 89, 223–228. https://doi.org/10.3303/CET2189038',
      'Idris, R., Chong, W. W. F., Ali, A., Idris, S., Hasan, M. F., Ani, F. N., & Chong, C. T. (2021). Phenol-rich bio-oil derivation via microwave-induced fast pyrolysis of oil palm empty fruit bunch with activated carbon. Environmental Technology & Innovation, 21, 101291. https://doi.org/10.1016/j.eti.2020.101291',
      'Hasan, M. F., Mat Ail, M. Z., & Muhamad Said, M. F. (2023). Combustion behaviour of palm kernel shell torrefied by mild pressurization technique. AIP Conference Proceedings, 2749(1), 060005. https://doi.org/10.1063/5.0136493',
      'Ku Azman Shah, K. N. A., Mohd Yusop, M. Z., Rohani, J. M., Fadil, N. A., Hasan, M. F., Mohd Yasin, M. F., Kamaruzaman, N., Bakar, E. M. N. E. A., Samion, S., Yahya, M. Y., Manaf, N. A., Hartono, B., Tuyen, N. D., Masaki, T., Ahmad, A. S., & Ramli, A. (2021). Solar and biomass potential of renewable energy in selected ASEAN countries and Japan. Journal of Physics: Conference Series, 2053(1), 012018. https://doi.org/10.1088/1742-6596/2053/1/012018',
      'Hasan, M. F., Nyakuma, B. B., Shawalluddin, M. N., & Abdul Rahman, M. R. (2024). Development of multilevel torrefaction reactor for biomass improvement. In M. F. Hasan (Ed.), Technical enhancement for renewable energy utilisation. UTM Press.',
      'Hasan, M. F. (2024). Transition into renewable energy utilisation. In M. F. Hasan (Ed.), Technical enhancement for renewable energy utilisation. UTM Press.',
      'Hasan, M. F. (2022). Penyediaan sisa pertanian bentuk palet dan briket. In Teknologi penggasan terkini: Teori dan uji kaji. UTM Press.',
      'Said, M., & Md Sah, M. H. (2022). Penggasan tempurung kelapa sawit. In Teknologi penggasan terkini: Teori dan uji kaji. UTM Press.',
      'Said, M. (2022). Teori termodinamik penghasilan singas. In Teknologi penggasan terkini: Teori dan uji kaji. UTM Press',
    ],
  },
  {
    name: 'Ir. Dr. Norikhwan Hamzah',
    title: 'Ir. Dr.',
    position: 'Senior Lecturer',
    affiliation: 'Department of Thermofluids, Faculty of Mechanical Engineering, Universiti Teknologi Malaysia',
    email: 'norikhwan@utm.my',
    degrees: 'BSc. Mechanical Engineering, University of Wisconsin-Madison, US · MSc of Thermal Power and Management, Cranfield University, UK · PhD Mechanical Engineering, UTM, Malaysia',
    bio: 'Ir. Dr. Norikhwan Hamzah is a Senior Lecturer in the Department of Thermofluids, Faculty of Mechanical Engineering, Universiti Teknologi Malaysia (UTM). He is a Professional Engineer (Ir.) registered with the Board of Engineers Malaysia and a Chartered Engineer (CEng) registered in the United Kingdom. He obtained his Bachelor’s degree in Mechanical Engineering from the University of Wisconsin–Madison, United States, in 2007, his Master’s degree in Thermal Power from Cranfield University, United Kingdom, in 2015, and his PhD in Mechanical Engineering from Universiti Teknologi Malaysia in 2020. His current research interests include experimental investigations of advanced material synthesis using combustion processes, as well as carbon-free ammonia combustion for power generation applications.',
    research: 'Combustion; Flame based synthesis; Thermal power; Ammonia cracking; Ammonia combustion.',
    linkedin: 'https://linkedin.com/in/norikhwan-hamzah-2730863a',
    photo: './experts/norikhwan.png',
    scholarProfile: 'https://scholar.google.com/citations?user=WqMOmP4AAAAJ&hl=en',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/gWdY',
    orcid: 'https://orcid.org/0000-0002-2409-7682',
    utmDirectory: 'https://www.utm.my/directory/staff/norikhwan',
    researchPage: 'research-norikhwan',
    publications: [
      'M. A. A. Moen, M. F. M. Yasin, M. Z. M. Yusop, N. Othman, N. A. M. Subha, P. M. Abdul, S. Samidin, N. Hamzah, “Thermochemical Control of Carbon Nanotube Growth in a Diffusion Flame Using a Quasi-Pyrolysis Chamber,” Diamond and Related Materials, vol. 166, p. 113777, 2026. (Q1, IF:5.1)',
      'I. R. Bishal, M. H. Ibrahim, N. Hamzah, M. Z. M. Yusop, F. Abdullah, P. T. Indrayana, M.F.M. Yasin, "Feasibility analysis of carbon nanofiber synthesis and morphology control using LPG premixed flame”, Beilstein Journal of Nanotechnology, vol. 16, pp. 581-590, 2025 (Q2, IF: 3.272)',
      'M. H. Ibrahim, N. Hamzah, M. Z. M. Yusop, N. L. W. Septiani, and M. F. M. Yasin, “Control of morphology and crystallinity of CNTs in flame synthesis with one-dimensional reaction zone”, Beilstein Journal of Nanotechnology, vol. 14, pp. 741-750, 2023 (Q2, IF: 3.272)',
      'N. Hamzah, M. F. M. Yasin, M. T. Zainal, M. M. Sies, M. Z. M. Yusop, and C. T. Chong, “Morphology and Growth Region Analysis of Carbon Nanotubes Growth in Water-Assisted Flame Synthesis”, Combustion Science and Technology, vol. 195, pp. 860-877, 2023. (Q3, IF: 2.174)',
      'N. Hamzah, M.F.M. Yasin, M.Z.M. Yusop, M.A.Z.M. Haniff, M.F. Hasan, K.F. Tamrin, and N.A.M. Subha, “Effect of fuel and oxygen concentration toward catalyst encapsulation in water-assisted flame synthesis of carbon nanotubes,” Combustion and Flame, vol. 220, pp. 272-287, 2020. (Q1, IF:4.57)',
      'N. Hamzah, M. F. M. Yasin, M. Z. M. Yusop, A. Saat, and N. A. M. Subha, “Growth region characterization of carbon nanotubes synthesis in heterogeneous flame environment with wire-based macro-image analysis,” Diamond and Related Materials, vol. 99, p. 107500, 2019. (Q2, IF:2.29)',
      'N. Hamzah, M. F. M. Yasin, M. Z. M. Yusop, A. Saat, and N. A. M. Subha. Rapid Production of Carbon Nanotubes: A Review on Advancement in Growth Control and Morphology Manipulations of Flame Synthesis. Journal of Materials Chemistry A. 5 (48), pp. 25144-25170, November 2017 (Q1, IF: 9.93)',
    ],
  },
  {
    name: 'Dr. Mohd Ibthisham Ardani',
    title: 'Dr.',
    position: 'Senior Lecturer',
    affiliation: 'Department of Thermofluids, Faculty of Mechanical Engineering, Universiti Teknologi Malaysia',
    email: 'ibthisham@utm.my',
    degrees: 'Bachelor of Mechanical Engineering - Automotive, UTM Malaysia · Master of Science Mechanical Engineering, UTM Malaysia · PhD in Mechanical Engineering, Imperial College London United Kingdom',
    bio: 'Dr. Ibtisham has a background in mechanical engineering specializing in lithium-ion batteries, energy storage and management and heat transfer. This knowledge is integrated in a system level primarily in the area of transportation with the aim to analyse and for performance prediction.',
    research: 'Lithium-ion batteries; Heat transfer; Low-order modelling.',
    linkedin: null,
    photo: './experts/ibthisham.png',
    scholarProfile: 'https://scholar.google.com/citations?user=QE2avRAAAAAJ',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/OQEd',
    orcid: 'https://orcid.org/0009-0001-0457-4349',
    utmDirectory: 'https://www.utm.my/directory/staff/ibthisham',
    publications: [
      'Sahhouk, M., Aziz, M. J., Ardani, M. I., Ibrahim, O., & Alanssari, A. (2025). An Experimental Investigation of Capacity Performance Evaluation in New and Second Life Lithium-Ion Batteries. ELEKTRIKA- Journal of Electrical Engineering, 24(1), 29–34. https://doi.org/10.11113/elektrika.v24n1.625',
      'Masoud A Sahhouk, JA Aziz, MI Ardani (2023). State of Charge Estimation of Second Life Batteries Using First Order Thevenin Model. 53-57. DOI:10.1109/CENCON58932.2023.10368848',
      'M.I. Ardani,, Y. Patel, A. Siddiq, G.J. Offer, R.F. Martinez-Botas (2018). Combined experimental and numerical evaluation of the differences between convective and conductive thermal control on the performance of a lithium ion cell. Energy, 144, 81-97. https://doi.org/10.1016/j.energy.2017.12.032',
    ],
  },
  {
    name: 'Prof. Dr. Mazlan Abdul Wahid',
    title: 'Prof. Dr.',
    position: 'Professor, Senior Lecturer, Research Fellow',
    affiliation: 'Department of Thermofluids, Faculty of Mechanical Engineering, Universiti Teknologi Malaysia',
    email: 'mazlan@utm.my',
    degrees: 'BEng Aero, Florida · MSc Combustion, Leeds · PhD Mech, SUNY',
    bio: 'Prof. Dr. Mazlan Abdul Wahid is a Professor in Department of Thermofluid, Faculty of Engineering, Universiti Teknologi Malaysia. He received his Bachelor degree from Embry-Riddle Aeronautical University, Daytona Beach, Florida, Master Degree from Universiti of Leeds, Yorkshire, England, UK. while obtained PhD Degree from State University of New York, Buffalo, New York, USA.\n\nHis current research focus is on Combustion, Energy and Heat Transfer, Sustainable low emission combustion, High speed reacting flow, Sustainable energy conversion and Heat transfer enhancement',
    research: 'Combustion, Energy and Heat Transfer; Sustainable low emission combustion; High speed reacting flow; Sustainable energy conversion; Heat transfer enhancement.',
    linkedin: 'https://linkedin.com/in/mazlan-abdul-wahid-1a265099',
    photo: './experts/mazlan.png',
    scholarProfile: 'https://scholar.google.com/citations?user=YDfwvdwAAAAJ&hl=en',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/mw1v',
    orcid: 'https://orcid.org/0000-0001-6711-3569',
    utmDirectory: 'https://www.utm.my/directory/staff/mazlan',
    publications: [
      'Imtiaz, N., Wahid, M. A., Kamaruzaman, N., Aleem, M., Sultan, M., & Ahmad, M. (2026). Experiments and CFD simulation of a novel mist based indirect evaporative cooling system for future sustainability. International Communications in Heat and Mass Transfer, 177, 111500. https://doi.org/https://doi.org/10.1016/j.icheatmasstransfer.2026.111500',
      'Salleh, M. F. M., Wahid, M. A., Yusof, A. A. M., Rozaiddin, U. I. M., Kamaruzaman, N., Sharudin, H., & Kasim, H. A. (2026). Experimental Investigation on Performance Characteristics of a Small-Scale Rotating Detonation Engine. Journal of Mechanical Engineering, 23(1), 84–100. https://doi.org/10.24191/jmeche.v23i1.6123',
      'Almtuly, O. S., Wahid, M. A., Hussen, H. M., Ardani, M. I., Wong, K. Y., & Hatif, I. H. (2025). Enhancing building cooling efficiency with water-active PCM panels and displacement ventilation in hot climates. Energy and Buildings, 337. https://doi.org/10.1016/j.enbuild.2025.115688',
      'Almtuly, O. sabah, Wahid, M. A., Ardani, M. I., Hussen, H. M., & AL-Dhief, F. T. (2025). A comprehensive review of integrating phase change materials with radiant cooling panel systems for energy savings and improved thermal comfort designs. Results in Engineering, 26. https://doi.org/10.1016/j.rineng.2025.105169',
      'Kusnadi, K., Wahid, M. A., Yasin, M. F. M., Andriani, D., Wresta, A., Santosa, A., Rajani, A., Atmaja, T. D., Saepudin, A., & Fudholi, A. (2025). Design and Performance of Water Scrubber and Desulfurization System for CO2 and H2S Purification of Biogas Produced from POME. International Journal of Renewable Energy Research, 15(4), 743–752. https://doi.org/10.20508/ijrer.v15i4.14918.g9132',
    ],
  },
  {
    name: 'Assoc. Prof. Ts. Dr. Mohd Fairus Mohd Yasin',
    title: 'Assoc. Prof. Ts. Dr.',
    position: 'Senior Lecturer',
    affiliation: 'Department of Thermofluids, Faculty of Mechanical Engineering, Universiti Teknologi Malaysia',
    email: 'mohdfairus@utm.my',
    degrees: 'Bachelor of Science, Mechanical Engineering, University of Wisconsin-Madison, United States · Philosophical Doctor (PhD), Engineering, University of Cambridge, United Kingdom',
    bio: 'Assoc. Prof. Dr. Ts Mohd Fairus Mohd Yasin is a senior lecturer in Department of Thermofluid, Faculty of Engineering, School of Mechanical Engineering. He received his Bachelor degree from University of Wisconsin, Madison, United States and completed his PhD from University of Cambridge, United Kingdom in 2014. He specialized in the reacting flow modelling using OpenFOAM and has published research papers in reputable journals and conferences. Dr. Fairus is also a reviewer for Applied Energy journal.',
    research: 'Flame synthesis; Nanomaterial Synthesis; Combustion; Computational Fluid Dynamics.',
    linkedin: 'https://linkedin.com/in/fairus-mohd-yasin-10565118',
    photo: './experts/fairus.png',
    scholarProfile: 'https://scholar.google.com/citations?user=Zf6uttQAAAAJ&hl=en',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/OQG5',
    orcid: 'https://orcid.org/0000-0003-0295-5639',
    utmDirectory: 'https://www.utm.my/directory/staff/mohdfairus',
    researchPage: 'research-fairus',
    publications: [
      'Bishal, I. R., Ibrahim, M. H., Hamzah, N., Yusop, M. Z. M., Abdullah, F. B., Indrayana, I. P. T., & Yasin, M. F. M. (2025). Feasibility analysis of carbon nanofiber synthesis and morphology control using a LPG premixed flame. Beilstein Journal of Nanotechnology, 16(1), 581-590.',
      'Ibrahim, M. H., Hamzah, N., Yusop, M. Z. M., Septiani, N. L. W., & Yasin, M. F. M. (2023). Control of morphology and crystallinity of CNTs in flame synthesis with one-dimensional reaction zone. Beilstein Journal of Nanotechnology, 14(1), 741-750.',
      'Rahman, M. N., Ujir, M. H., Wahid, M. A., & Yasin, M. F. M. (2023). A single-step chemistry mechanism for biogas supersonic combustion velocity with nitrogen dilution. Journal of Thermal Analysis and Calorimetry, 148(8), 3019-3033.',
      'Mong, G. R., Chong, C. T., Chong, W. W. F., Ng, J. H., Ong, H. C., Ashokkumar, V., .. & Yasin, M. F. M. (2022). Progress and challenges in sustainable pyrolysis technology: Reactors, feedstocks and products. Fuel, 324, 124777.',
      'Zainal, M. T., Hamzah, N., Abdul Wahid, M., Kamaruzaman, N., Chong, C. T., Ani, M. H., .. & Mohd Yasin, M. F. (2023). Zero-dimensional model for the prediction of carbon nanotube (CNT) growth region in heterogeneous methane-flame environment. Carbon Letters, 33(7), 2199-2210.',
      'Hamzah, N., Mohd Yasin, M. F., Zainal, M. T., Mohd Sies, M., Mohd Yusop, M. Z., Chong, C. T., .. & Rosmi Rosmi, M. S. (2023). Morphology and growth region analysis of carbon nanotubes growth in water-assisted flame synthesis. Combustion Science and Technology, 195(4), 860-877.',
      'Amusa, A. A., Johari, A., Katibi, K. K., Shitu, I. G., Adeleke, A. O., Yasin, M. F. M., & Zainal, M. T. (2025). Lignocellulosic biocomposite membranes for air filtration and environmental protection: a review. J. Renew. Mater, 13(2), 251-272.',
      'Ibrahim, M. H., Yasin, M. F. M., Pauzi, M. Z. A. M., Hamzah, N., Yusop, M. Z. M., Mukri, M. A. R., .. & Abidin, M. S. Z. (2024). Transient Size Analysis of Carbon Nanotube Synthesized in Diffusion Flame Environment.',
      'Ibrahim, M. H., Hamzah, N., Yusop, M. Z. M., & Yasin, M. F. M. (2024). Effects of local temperature on carbon nanotubes growth in premixed flame. Materials Today: Proceedings, 110, 163-168.',
    ],
  },
  {
    name: 'Assoc. Prof. Dr. Aminuddin Saat',
    title: 'Assoc. Prof. Dr.',
    position: 'Senior Lecturer',
    affiliation: 'Department of Thermofluids, Faculty of Mechanical Engineering, Universiti Teknologi Malaysia',
    email: 'aminudin@utm.my',
    degrees: 'BEng Mech, UTM · MSc Auto, Coventry · PhD Combustion, Leeds',
    bio: 'Assoc. Prof. Dr. Aminuddin is an active researcher focusing in combustion, flame dynamics, combustion engines and heat transfer. He has published numerous articles in respected journals and serves as a reviewer for academic publications. Currently, he is the Head of the Thermofluid Department at the Faculty of Mechanical Engineering, UTM. Dr. Aminuddin is a member of the Sustainable Energy and Reacting Flow Research Group, where his work focuses on advancing sustainable energy solutions.',
    research: 'Combustion; Heat transfer; Thermal system.',
    linkedin: 'https://linkedin.com/in/aminuddin-saat-b45246244',
    photo: './experts/aminuddin.png',
    scholarProfile: 'https://scholar.google.com/citations?user=1xkJiWEAAAAJ&hl=en',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/E2OY',
    orcid: 'https://orcid.org/0000-0002-2938-4138',
    utmDirectory: 'https://www.utm.my/directory/staff/aminudin',
    publications: [
      'Enhancement of Biogas Laminar Burning Velocity Using Nitrous Oxide and Hydrogen Enrichment, S Elhawary, A Saat, M Abdul Wahid, Combustion Science and Technology 196 (14), 2213-2233, 2024.',
      'Effect of nitrous oxide on laminar burning velocity, hydrodynamic, and diffusive–thermal instability of biogas combustion, S Elhawary, A Saat, MA Wahid, MZM Zain, Journal of Thermal Analysis and Calorimetry 148 (8), 3073-3088, 2023.',
    ],
  },
  {
    name: 'Dr. Natrah Kamaruzaman',
    title: 'Dr.',
    position: 'Senior Lecturer',
    affiliation: 'Department of Thermofluids, Faculty of Mechanical Engineering, Universiti Teknologi Malaysia',
    email: 'natrahk@utm.my',
    degrees: 'Engineering (Mechanical System), University of Ryukyus, Okinawa, Japan · Master of Engineering in Mechanical Engineering, Universiti Teknologi Malaysia, Malaysia · PhD Mech, UTM',
    bio: 'Dr. Natrah Kamaruzaman is a senior lecturer in Department of Thermofluid, Faculty of Engineering, School of Mechanical Engineering, She received her Bachelor degree from University of the Ryukyus, Okinawa, Japan, while obtained her Master and PhD Degrees both from Universiti Teknologi Malaysia.\n\nExpertise in research analysis, new concept development, simulation and validation. Broad knowledge in micro cooling, heat transfer, fluid dynamics and thermal engineering.',
    research: 'Heat transfer; Energy and Thermodynamics; Thermal system.',
    linkedin: 'https://linkedin.com/in/natrah-kamaruzaman-877518aa',
    photo: './experts/natrah.png',
    scholarProfile: 'https://scholar.google.com/citations?user=zpIsVusAAAAJ&hl=en',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/11Db',
    orcid: 'https://orcid.org/0000-0003-3368-9425',
    utmDirectory: 'https://www.utm.my/directory/staff/natrahk',
    publications: [
      'Salleh, M. F. M., Wahid, M. A., Mohammed, H. A., Kamaruzaman, N., Rozaiddin, U. I. M., & Ghazali, A. D. (2026). Experimental study on the propagation characteristics of the rotating detonation wave of a small-scale rotating detonation engine. Journal of Mechanical Engineering and Sciences, 11194–11208. https://doi.org/10.15282/jmes.20.2.2026.5.0872',
      'Imtiaz, N., Wahid, M. A., Kamaruzaman, N., Aleem, M., Sultan, M., & Ahmad, M. (2026). Experiments and CFD simulation of a novel mist based indirect evaporative cooling system for future sustainability. International Communications in Heat and Mass Transfer, 177, 111500. https://doi.org/10.1016/j.icheatmasstransfer.2026.111500',
      'Mimar, G. A., Kamaruzaman, N., & Alkhateeb, K. T. (2025). Surface wettability and boiling heat transfer enhancement in microchannels using graphene nanoplatelet and Multi-Walled carbon nanotube coatings. Frontiers in Heat and Mass Transfer, 23(6), 1933–1956. https://doi.org/10.32604/fhmt.2025.070118',
      'Sunhazim, N. S. a. M., Norhaidi, U. A., Kamaruzaman, N., & Abidin, U. (2024). Characterization of the porous medias’ fluid flow for self-powered micropump. Evergreen, 11(1), 394–401. https://doi.org/10.5109/7172302',
      'Suhaimi, M. I., Kamaruzaman, N., Wahid, M. A., & Sies, M. M. (2024). Heat Transfer Rate Intensification Using Kite Vortex Generator with Punched Hole. Proceedings of the World Congress on Mechanical, Chemical, and Material Engineering. https://doi.org/10.11159/htff24.276',
      'Alamin, E., Kamaruzaman, N., & Kamar, H. M. (2023). Building Envelopes Toward Energy-Savings in Hot and Humid Climates: A review. Strategic Planning for Energy and the Environment. https://doi.org/10.13052/spee1048-5236.4232',
      'Japar, W. M. a. A., Sidik, N. a. C., Saidur, R., Kamaruzaman, N., Asako, Y., Yusof, S. N. A., & Lani, M. N. (2022). Hybrid Microchannel Heat Sink with Sustainable Cooling Solutions: Numerical Model Validation. CFD Letters, 14(4), 91–117. https://doi.org/10.37934/cfdl.14.4.91117',
      'Asry, N. a. N. M., Sunhazim, N. S. a. M., Kamaruzaman, N., & Abidin, U. (2022). Characterization of a 3D printed Self-Powered micropump mould for microfluidics application. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 97(1), 127–135. https://doi.org/10.37934/arfmts.97.1.127135',
      'Zainus, W. M. F. W., & Kamaruzaman, N. (2022). Boiler Efficiency Analysis using direct and indirect method. Lecture Notes in Mechanical Engineering, 721–730. https://doi.org/10.1007/978-981-19-1457-7_55',
      'Shah, K. N. a. K. A., Yusop, M. Z. M., Rohani, J. M., Fadil, N. A., Hasan, M. F., Yasin, M. F. M., Kamaruzaman, N., Bakar, E. M. N. E. A., Samion, S., Yahya, M. Y., Manaf, N. A., Hartono, B., Tuyen, N. D., Masaki, T., Ahmad, A. S., & Ramli, A. (2021). Solar and biomass potential of renewable energy in selected ASEAN countries and Japan. Journal of Physics Conference Series, 2053(1), 012018. https://doi.org/10.1088/1742-6596/2053/1/012018',
      'Faizal, H. M., Nyakuma, B. B., Rahman, M. R. A., Rahman, M. M., Kamaruzaman, N. B., & Syahrullail, S. (2020). Comprehensive Review on High Hydrogen Permselectivity of Palladium based Membranes: Part II. Johnson Matthey Technology Review, 65(1), 77–86. https://doi.org/10.1595/205651321x16019176538189',
      'Kamaruzaman, N., Kok, Y. H., Manaf, N. A., Shah, K. N. a. K. A., Yusop, M. Z. M., Rohani, J. M., Fadil, N. A., Hasan, M. F., Yasin, M. F. M., & Kamaruzaman, N. (2021). Modelling and control analysis of bamboo-based gasification: Towards the modern renewable Energy. Chemical Engineering Transactions. https://doi.org/10.3303/cet2189038',
      'Zaini, N., Kamaruzaman, N., & Abidin, U. (2021). Magnetic Microbeads Trapping using Microfluidic and Permanent Magnet System. Evergreen, 8(1), 156–162. https://doi.org/10.5109/4372272',
      'Faizal, H. M., Nyakuma, B. B., Rahman, M. R. A., Rahman, M. M., Kamaruzaman, N. B., & Syahrullail, S. (2020a). Comprehensive Review on High Hydrogen Permselectivity of Palladium Based Membranes: Part I. Johnson Matthey Technology Review, 65(1), 64–76. https://doi.org/10.1595/205651320x15814149544965',
      'Kamaruzaman, N., Wisley, M. F., Abidin, U., Sies, M. M., & Ruslan, M. R. M. (2020). Effect of channel arrangement on the thermal hydraulic performance of multilayer microchannel arrays. CFD Letters, 12(8), 17–25. https://doi.org/10.37934/cfdl.12.8.1725',
      'Japar, W. M. a. A., Sidik, N. a. C., Saidur, R., Kamaruzaman, N., Asako, Y., & Yusof, S. N. A. (2020). The effect of triangular cavity shape on the hybrid microchannel heat sink performance. CFD Letters, 12(9), 1–14. https://doi.org/10.37934/cfdl.12.9.114',
      'Ghazali, A. D., Wahid, M. A., Mazlan, M. A., Saat, A., Yasin, M. F. M., Rahman, M., Natrah, K., Zain, Z. M., Ardani, I., & Kasani, A. (2019). Development of rotating supersonic combustion engine with swirling air-fuel injection. AIP Conference Proceedings, 2062, 020036. https://doi.org/10.1063/1.5086583',
      'Zarei, A., Mohd-Yusof, K., Kamaruzaman, M. N., Kamaruzaman, N., Hussin, W. N. B. W., & Sharifi, S. (2017). Mobile Multimedia Learning Acceptance for engineering courses Case study: Thermodynamics. 2017 7th World Engineering Education Forum (WEEF), 93, 658–663. https://doi.org/10.1109/weef.2017.8467099',
      'Ghani, I. A., Kamaruzaman, N., & Sidik, N. a. C. (2017). Heat transfer augmentation in a microchannel heat sink with sinusoidal cavities and rectangular ribs. International Journal of Heat and Mass Transfer, 108, 1969–1981. https://doi.org/10.1016/j.ijheatmasstransfer.2017.01.046',
      'Ghani, I. A., Sidik, N. a. C., & Kamaruzaman, N. (2016). Hydrothermal performance of microchannel heat sink: The effect of channel design. International Journal of Heat and Mass Transfer, 107, 21–44. https://doi.org/10.1016/j.ijheatmasstransfer.2016.11.031',
    ],
  },
  {
    name: 'Dr. Mohsin Mohd Sies',
    title: 'Dr.',
    position: 'Senior Lecturer',
    affiliation: 'Department of Energy Engineering, Faculty of Chemical Engineering and Energy Engineering, Universiti Teknologi Malaysia',
    email: 'mohsin@utm.my',
    degrees: 'BSc. Nuclear Engineering, Rensselaer Polytechnic Institute, USA · MS Mechanical Engineering, University of Michigan, Ann Arbor, USA · PhD Mechanical Engineering, Universiti Teknologi Malaysia, Malaysia',
    bio: 'Dr. Mohsin Mohd Sies is a Senior Lecturer at Universiti Teknologi Malaysia (UTM) and Coordinator of the Nuclear Engineering Program in the Faculty of Chemical and Energy Engineering. He holds a B.Sc. in Nuclear Engineering from Rensselaer Polytechnic Institute, USA, an M.Sc. in Mechanical Engineering from the University of Michigan, USA, and a Ph.D. in Mechanical Engineering from UTM.\n\nHis research interests span combustion, detonation and high-speed reacting flows, computational fluid dynamics, chemical kinetics, thermodynamics, thermal engineering, and nuclear energy. His research has included turbulent and flameless combustion, pulse and rotating detonation systems, alternative and biogas fuels, heat-transfer applications, and numerical modelling of reacting flows. He has authored and co-authored more than 50 research publications and has led or participated in university, national, and industry-funded research projects.\n\nHe is a member of UTM’s Sustainable Energy and Reacting Flow Research Group (SERF) and is actively involved in nuclear engineering education, research, and professional activities.',
    research: 'Biogas Combustion; CFD; Asymmetric Vortex Combustor; Thermal Hydraulics.',
    linkedin: 'https://linkedin.com/in/mohsin-mohd-sies-66986020a',
    photo: './experts/mohsin.png',
    scholarProfile: 'https://scholar.google.com/scholar?q=%22Mohsin+Mohd+Sies%22+UTM',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/ZQry',
    orcid: 'https://orcid.org/0000-0002-7678-9437',
    utmDirectory: 'https://www.utm.my/directory/staff/mohsin',
    publications: [
      'Hosseini, S. E., Barzegaravval, H., Wahid, M. A., Ganjehkaviri, A., & Sies, M. M. (2016). Thermodynamic assessment of integrated biogas-based micro-power generation system. Energy Conversion and Management, 128, 104–119.',
      'Akeiber, H. J., Wahid, M. A., Hussen, H. M., Mohammad, A. T., Abdullah, B. M., Altaie, A., Aftab, A., Alwan, R. A., & Sies, M. (2016). Prediction of convective heat transfer coefficient and temperature distribution of air-conditioned spaces using numerical simulation. Modern Applied Science, 10(8).',
      'Gholami, A., Wahid, M. A., Mohammed, H. A., Saat, A., Yasin, M. M., Sies, M., Kamaruzaman, N., & Rahman, M. M. (2016). Numerical evaluation of thermo-hydraulic performance in fin-and-tube compact heat exchangers with different tube cross-sections. Jurnal Teknologi, 78(8-4), 113–118.',
      'Gholami, A., Wahid, M. A., Mohammed, H. A., Saat, A., Fairus, M., Sies, M., & Abdul-Malek, Z. (2016). Investigation on heat transfer enhancement in a corrugated fin-and-tube compact heat exchanger. Jurnal Teknologi (Sciences and Engineering), 78(10-2), 1–6.',
      'Suhaimi, M. S., Saat, A., Wahid, M. A., & Sies, M. M. (2016). Flame propagation and burning rates of methane-air mixtures using schlieren photography. Jurnal Teknologi (Sciences & Engineering), 78(10-2), 21–27.',
      'Khaleghi, M., Wahid, M. A., Saat, A., Fairus, M., Sies, M., Kamaruzaman, N., Rahman, M. M., Amri, M. M., & Mohammed, H. (2016). Influence of modified air on combustion characteristics in meso-scale vortex combustor. J Teknol., 78(8).',
      'Saleh, M. A., Ramli, A. T., Hamzah, K. B., Zainal, J., Sies, M. M., Gabdo, H. T., & Garba, N. N. (2019). In situ measurement of terrestrial gamma dose rates in eastern region of Peninsular Malaysia and its relation to geological formation and soil types. Radiochimica Acta, 107(6), 503–516.',
      'Al Muallim, B., Wahid, M. A., Mohammed, H. A., Kamil, M., & Habibi, D. (2020). Thermal–hydraulic performance in a microchannel heat sink equipped with longitudinal vortex generators (LVGs) and nanofluid. Processes, 8(2), 231.',
      'Sies, M. M., & Wahid, M. A. (2020). Numerical investigation of the asymmetrical vortex combustor running on biogas. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 74(1), 1–18.',
      'Nadaraja, D., Kamaruzaman, N., Abidin, U., & Sies, M. M. (2019). Experimental study on the effect of multilayer microchannel arrangement to the thermal hydraulic performance of microchannel arrays. Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 57(1), 23–31.',
      'Kamaruzaman, N., Wisley, M. F., Abidin, U., Sies, M. M., & Ruslan, M. R. M. (2020). Effect of channel arrangement on the thermal hydraulic performance of multilayer microchannel arrays. CFD Letters, 12(8), 17–25.',
      'Li, L., Zainal, M. T., Yasin, M. F. M., Hamzah, N., Sies, M. M., Yazid, M., Amzin, S., & Supee, A. (2021). The influences of oxygen concentration and external heating on carbon nanotube growth in diffusion flame. CFD Lett, 13(12), 45–62.',
      'Jowsey, M. H. M., Kamaruzaman, N., & Sies, M. M. (2021). Heat and flow profile of nanofluid flow inside multilayer microchannel heat sink. Journal of Advanced Research in Micro and Nano Engineering, 4(1), 1–9.',
      'Rashid, N. K. A. M., Hamzah, K., Sies, M. M., Zainal, J., Sazali, M. A., Sarkawi, M. S., Ali, N. S.M., Jamaluddin, K., Mohamed, A. A., & Idris, F. M. (Eds.). (2021). International Nuclear Science, Technology and Engineering Conference 2021 (iNuSTEC2021).',
      'Alwan, R. A., Wahid, M. A., Sies, M. M., & Yasin, M. F. M. (2016). Effects of air entry of swirling flameless combustion in a low NOx burner. International Review of Mechanical Engineering, 10(5).',
      'Asmayou, A. H., Wahid, M. A., Abdulrahman, M. B., & Sies, M. M. (2023). Influence of equivalence ratio on emissions in meso-scale vortex combustor. Recent Advancements in Thermofluid Engineering, 2749(1), 070003. AIP Publishing LLC.',
      'Hui, T. Z., Ali, N. S. M., Minhat, M. S., Zainal, J., Sazali, M. A., Sarkawi, M. S., Jamaluddin, K., Basri, N. A., Sies, M. M., & Rashid, N. K. A.M. (2024). A control rod worth prediction using adaptive neuro-fuzzy inference system for pre-calibration method at TRIGA PUSPATI reactor. Annals of Nuclear Energy, 200, 110410.',
      'Bahri, N. S., Ali, N. S. M., Jamaluddin, K., Hamzah, K., Zainal, J., Sazali, M. A., Sarkawi, M. S., Basri, N. A., Sies, M. M., & Wahab, M. F. A. (2022). Prediction of total energy consumption in Malaysia using Adaptive Neuro-Fuzzy Inference System. Journal of Advanced Research in Applied Sciences and Engineering Technology.',
      'Salleh, M. F. M., Wahid, M. A., Saat, A., Kamaruzaman, N., Sies, M. M., & Abidin, U. (2017). Flow visualization of flat and curved trapezoidal winglet vortex generator in fin-and-tube channel in inline arrangement. International Review of Mechanical Engineering, 11(2), 101–107.',
    ],
  },
  {
    name: 'Ts. Dr. Mohd Zamri Mohd Yusop',
    title: 'Ts. Dr.',
    position: 'Senior Lecturer, Associate Research Fellow of AMTEC',
    affiliation: 'Faculty of Mechanical Engineering, Universiti Teknologi Malaysia — Advanced Membrane Research Centre (AMTEC)',
    email: 'zamriyusop@utm.my',
    degrees: 'Bachelor of Mechanical Engineering (Applied Physics), Nagoya Institute of Technology, Japan · Master of Engineering, Department of Frontier Materials, Nagoya Institute of Technology, Japan · Doctor of Engineering, Department of Frontier Materials, Nagoya Institute of Technology, Japan',
    bio: 'Ts. Dr. Mohd Zamri Bin Mohd Yusop obtained his Doctor of Engineering from the Nagoya Institute of Technology, Japan, in 2013. His doctoral research examined the structural and electrical properties of ion induced carbon nanofibers using in-situ transmission electron microscopy. He completed his Bachelor of Mechanical Engineering (Applied Physics) and his Master of Engineering at the same institution, and served as a postdoctoral fellow under the New Energy and Industrial Technology Development Organization (NEDO) programme in Japan. His current research covers the synthesis of graphene and carbon nanotubes and nanofibers from biomass and agricultural waste, surface modification by ion irradiation, field electron emission devices, and biodegradable zinc based alloys for biomedical applications. He is a certified microscopist for the atomic resolution analytical microscope (JEOL ARM 200F) and serves as a Associate Research Fellow and Head of the Strategic Relations Unit at the Advanced Membrane Technology Research Centre (AMTEC), Universiti Teknologi Malaysia. He is an active reviewer and editorial board member for several international journals, and his recent recognitions include the appointment as Exco member in Microscopy Society of Malaysia and appointment as a Young Scientists Network affiliate of the Academy of Sciences Malaysia.',
    research: 'Electron Microscopy (In-situ TEM and SEM); Carbon Nanomaterials: Graphene, Carbon Nanotubes and Nanofibers; Surface Modification by Ion Irradiation; Field Electron Emission; Biodegradable Metal Alloys and Metallurgy; Graphene-based Nanocomposites.',
    linkedin: null,
    photo: './experts/zamri.png',
    scholarProfile: 'https://scholar.google.com/citations?user=pqUVuMUAAAAJ&hl=en',
    utmScholar: 'https://utmscholar.utm.my/Scholar/ScholarInfoDetails/ZOpj',
    orcid: 'https://orcid.org/0000-0003-0897-2712',
    utmDirectory: 'https://www.utm.my/directory/staff/zamriyusop',
    researchPage: 'research-zamri',
    publications: [
      'Ahmad, S. Z. N., Wan Salleh, W. N., Ismail, A. F., Yusof, N., Mohd Yusop, M. Z., & Aziz, F. (2020). Adsorptive removal of heavy metal ions using graphene-based nanomaterials: Toxicity, roles of functional groups and mechanisms. Chemosphere, 248, 126008. https://doi.org/10.1016/j.chemosphere.2020.126008',
      'Hamzah, N., Mohd Yasin, M. F., Mohd Yusop, M. Z., Saat, A., & Mohd Subha, N. A. (2017). Rapid production of carbon nanotubes: A review on advancement in growth control and morphology manipulations of flame synthesis. Journal of Materials Chemistry A, 5(48), 25144-25170. https://doi.org/10.1039/c7ta08668g',
      'Ghosh, P., Zamri Yusop, M., Satoh, S., Subramanian, M., Hayashi, A., Hayashi, Y., & Tanemura, M. (2010). Transparent and flexible field electron emitters based on the conical nanocarbon structures. Journal of the American Chemical Society, 132(12), 4034-4035. https://doi.org/10.1021/ja909346e',
      'Ayub, M., Othman, M. H. D., Khan, I. U., Mohd Yusop, M. Z., & Kurniawan, T. A. (2021). Graphene-based nanomaterials as antimicrobial surface coatings: A parallel approach to restrain the expansion of COVID-19. Surfaces and Interfaces, 27, 101460. https://doi.org/10.1016/j.surfin.2021.101460',
      'Mohd Yusop, M. Z., Ghosh, P., Yaakob, Y., Kalita, G., Sasase, M., Hayashi, Y., & Tanemura, M. (2012). In situ TEM observation of Fe- included carbon nanofiber: Evolution of structural and electrical properties in field emission process. ACS Nano, 6(11), 9567-9573. https://doi.org/10.1021/nn302889e',
    ],
  },
];

export interface Publication {
  citation: string;
  authors: string[];
  year: number;
}

export const PUBLICATIONS: Publication[] = [
  { year: 2026, authors: ['Norazila', 'Fairus'], citation: 'Agonga, O. F., Othman, N., & Yasin, M. F. M. (2026). A hybrid CFD-neural network framework for the early prediction of longitudinal thermo-acoustic instabilities in hydrogen-fueled gas turbine combustors. Next Energy, 10, 100497.' },
  { year: 2026, authors: ['Norikhwan', 'Fairus', 'Zamri', 'Norazila'], citation: 'Moen, M. A. A., Yasin, M. F. M., Yusop, M. Z. M., Othman, N., Subha, N. A. M., Abdul, P. M., Samidin, S., & Hamzah, N. (2026). Thermochemical Control of Carbon Nanotube Growth in a Diffusion Flame Using a Quasi-Pyrolysis Chamber. Diamond and Related Materials, 166, 113777.' },
  { year: 2026, authors: ['Mazlan', 'Natrah'], citation: 'Imtiaz, N., Wahid, M. A., Kamaruzaman, N., Aleem, M., Sultan, M., & Ahmad, M. (2026). Experiments and CFD simulation of a novel mist based indirect evaporative cooling system. Int. Communications in Heat and Mass Transfer, 177, 111500.' },
  { year: 2026, authors: ['Mazlan', 'Natrah'], citation: 'Salleh, M. F. M., Wahid, M. A., Yusof, A. A. M., Rozaiddin, U. I. M., Kamaruzaman, N., Sharudin, H., & Kasim, H. A. (2026). Experimental Investigation on Performance Characteristics of a Small-Scale Rotating Detonation Engine. J. Mechanical Engineering, 23(1), 84-100.' },
  { year: 2025, authors: ['Norazila'], citation: 'Araibi, A. S., Trisasongko, A. P., Othman, N., & Jaafar, M. N. M. (2025). Mitigation of NOx and CO emissions from liquid fuel burner firing jatropha biodiesel blends. Jurnal Teknologi, 87(1), 1-10.' },
  { year: 2025, authors: ['Faizal', 'Fairus', 'Norazila'], citation: 'Dzolkepli, I. Z. S., Hasan, M. F., Mohd Yasin, M. F., Othman, N., Supee, A., & Sukiran, M. A. (2025). Solar-driven torrefaction for sustainable bioenergy production: A review. Biomass and Bioenergy, 195, 107685.' },
  { year: 2025, authors: ['Norazila'], citation: 'Nik Leh, N. S. H., Othman, N., & Md Lias, M. K. H. (2025). Ammonia-coal co-firing: A critical review of technical challenges and decarbonization pathways. The Engineer Story, 15, 13-16.' },
  { year: 2025, authors: ['Faizal'], citation: 'Elsehsah, K. A. A. A., Noorden, Z. A., Mat Saman, N., Ahmad, N. A., Hasan, M. F., & Mohd Ghazali, M. N. (2025). Enhancing graphene-based supercapacitors with plasma methods: A review. FlatChem, 50, 100832.' },
  { year: 2025, authors: ['Norikhwan', 'Fairus', 'Zamri'], citation: 'Bishal, I. R., Ibrahim, M. H., Hamzah, N., Yusop, M. Z. M., Abdullah, F., Indrayana, P. T., & Yasin, M. F. M. (2025). Feasibility analysis of carbon nanofiber synthesis and morphology control using LPG premixed flame. Beilstein J. Nanotechnology, 16, 581-590.' },
  { year: 2025, authors: ['Ibthisham'], citation: 'Sahhouk, M., Aziz, M. J., Ardani, M. I., Ibrahim, O., & Alanssari, A. (2025). An Experimental Investigation of Capacity Performance Evaluation in New and Second Life Lithium-Ion Batteries. ELEKTRIKA- J. Electrical Engineering, 24(1), 29-34.' },
  { year: 2025, authors: ['Mazlan', 'Ibthisham'], citation: 'Almtuly, O. S., Wahid, M. A., Hussen, H. M., Ardani, M. I., Wong, K. Y., & Hatif, I. H. (2025). Enhancing building cooling efficiency with water-active PCM panels and displacement ventilation. Energy and Buildings, 337.' },
  { year: 2025, authors: ['Mazlan', 'Ibthisham'], citation: 'Almtuly, O. S., Wahid, M. A., Ardani, M. I., Hussen, H. M., & AL-Dhief, F. T. (2025). A comprehensive review of integrating phase change materials with radiant cooling panel systems. Results in Engineering, 26.' },
  { year: 2025, authors: ['Mazlan', 'Fairus'], citation: 'Kusnadi, K., Wahid, M. A., Yasin, M. F. M., Andriani, D., Wresta, A., Santosa, A., et al. (2025). Design and Performance of Water Scrubber and Desulfurization System for CO2 and H2S Purification of Biogas. Int. J. Renewable Energy Research, 15(4), 743-752.' },
  { year: 2025, authors: ['Fairus'], citation: 'Amusa, A. A., Johari, A., Katibi, K. K., Shitu, I. G., Adeleke, A. O., Yasin, M. F. M., & Zainal, M. T. (2025). Lignocellulosic biocomposite membranes for air filtration and environmental protection. J. Renew. Mater, 13(2), 251-272.' },
  { year: 2024, authors: ['Norazila'], citation: 'Othman, M. H., Rahim, M. R., Jaafar, M. N. M., Said, M., Othman, N., Malik, M. S. A., & Azli, A. A. M. (2024). Study of combustion performance of syngas from biomass waste (wood waste) in a gas burner. J. Advanced Research in Fluid Mechanics and Thermal Sciences, 60(2), 247-257.' },
  { year: 2024, authors: ['Norazila', 'Mazlan'], citation: 'Ong, J. S. J., Malik, M. S. A., Othman, N., & Wahid, M. A. (2024). Soybean and waste cooking oil based feedstocks as a sustainable biofuel. Jurnal Mekanikal, 47(1), 39-50.' },
  { year: 2024, authors: ['Norazila', 'Mazlan'], citation: 'Rahim, M. R., Trisasongko, A. P., Wahid, M. A., Othman, N., Araibi, A. S., & Said, M. (2024). Gasification technology and its future: A review. ASEAN Engineering Journal, 14(1), 45-61.' },
  { year: 2024, authors: ['Faizal'], citation: 'Mohd Fuad, M. A. H., Hasan, M. F., Chong, W. W. F., Ani, F. N., & Ngadiman, N. H. A. (2024). A novel oxidative microwave torrefaction approach for producing empty fruit bunch-starch binder briquettes. Renewable Energy, 228, 120592.' },
  { year: 2024, authors: ['Faizal'], citation: 'Hasan, M. F., Abdul Rahman, M. R., Nyakuma, B. B., & Muhamad Said, M. F. (2024). Alternatives for inert torrefaction to produce high-quality solid fuel: Review of available techniques. Biomass and Bioenergy, 182, 107108.' },
  { year: 2024, authors: ['Faizal'], citation: 'Hasan, M. F., Nyakuma, B. B., Shawalluddin, M. N., & Abdul Rahman, M. R. (2024). Development of multilevel torrefaction reactor for biomass improvement. UTM Press.' },
  { year: 2024, authors: ['Aminuddin', 'Mazlan'], citation: 'Elhawary, S., Saat, A., & Abdul Wahid, M. (2024). Enhancement of Biogas Laminar Burning Velocity Using Nitrous Oxide and Hydrogen Enrichment. Combustion Science and Technology, 196(14), 2213-2233.' },
  { year: 2023, authors: ['Faizal'], citation: 'Selvam, D. S., Abdul Rahim, N. A., Saad, M. R., Syawal, S., Hasan, M. F., & Abdul Rahman, M. R. (2023). Numerical simulation of a modified trapped vortex combustor. J. Thermal Analysis and Calorimetry, 148, 3129-3135.' },
  { year: 2023, authors: ['Norikhwan', 'Fairus', 'Zamri'], citation: 'Ibrahim, M. H., Hamzah, N., Yusop, M. Z. M., Septiani, N. L. W., & Yasin, M. F. M. (2023). Control of morphology and crystallinity of CNTs in flame synthesis with one-dimensional reaction zone. Beilstein J. Nanotechnology, 14, 741-750.' },
  { year: 2023, authors: ['Norikhwan', 'Fairus', 'Zamri', 'Mohsin'], citation: 'Hamzah, N., Yasin, M. F. M., Zainal, M. T., Sies, M. M., Yusop, M. Z. M., & Chong, C. T. (2023). Morphology and Growth Region Analysis of Carbon Nanotubes Growth in Water-Assisted Flame Synthesis. Combustion Science and Technology, 195, 860-877.' },
  { year: 2023, authors: ['Fairus', 'Mazlan'], citation: 'Rahman, M. N., Ujir, M. H., Wahid, M. A., & Yasin, M. F. M. (2023). A single-step chemistry mechanism for biogas supersonic combustion velocity with nitrogen dilution. J. Thermal Analysis and Calorimetry, 148(8), 3019-3033.' },
  { year: 2023, authors: ['Norikhwan', 'Fairus', 'Mazlan', 'Natrah'], citation: 'Zainal, M. T., Hamzah, N., Wahid, M. A., Kamaruzaman, N., Chong, C. T., Ani, M. H., ... & Mohd Yasin, M. F. (2023). Zero-dimensional model for the prediction of carbon nanotube (CNT) growth region. Carbon Letters, 33(7), 2199-2210.' },
  { year: 2023, authors: ['Ibthisham'], citation: 'Sahhouk, M. A., Aziz, J. A., & Ardani, M. I. (2023). State of Charge Estimation of Second Life Batteries Using First Order Thevenin Model. 53-57. DOI:10.1109/CENCON58932.2023.10368848' },
  { year: 2023, authors: ['Aminuddin', 'Mazlan'], citation: 'Elhawary, S., Saat, A., Abdul Wahid, M., & Zain, M. Z. M. (2023). Effect of nitrous oxide on laminar burning velocity, hydrodynamic, and diffusive-thermal instability of biogas combustion. J. Thermal Analysis and Calorimetry, 148(8), 3073-3088.' },
  { year: 2022, authors: ['Faizal'], citation: 'Hasan, M. F., Omar, M. S., Sukiran, M. A., Nyakuma, B. B., & Muhamad Said, M. F. (2022). Torrefaction of fibrous empty fruit bunch under mild pressurization technique. Renewable Energy, 194, 349-358.' },
  { year: 2022, authors: ['Fairus'], citation: 'Mong, G. R., Chong, C. T., Chong, W. W. F., Ng, J. H., Ong, H. C., Ashokkumar, V., ... & Yasin, M. F. M. (2022). Progress and challenges in sustainable pyrolysis technology. Fuel, 324, 124777.' },
  { year: 2021, authors: ['Norazila', 'Mazlan'], citation: 'Othman, N., & Wahid, M. A. (Eds.). (2021). Aeronautical analysis via experimental and computational approaches. Penerbit UTM Press.' },
  { year: 2021, authors: ['Norazila', 'Mazlan'], citation: 'Othman, N., Wahid, M. A., & Mat, S. (2021). Torrefaction of palm kernel shell and petcoke blends for various mixing ratios and temperatures. J. Advanced Research in Fluid Mechanics and Thermal Sciences, 85(1), 1-10.' },
  { year: 2021, authors: ['Norazila', 'Mazlan'], citation: 'Shahrin, M. S. N., Othman, N., Nik Mohd, N. A. R., & Wahid, M. A. (2021). Numerical analysis of hydrogen peroxide monopropellant thruster. Int. J. Sustainable Aviation, 7(3), 249-263.' },
  { year: 2021, authors: ['Faizal', 'Norazila'], citation: 'Hasan, M. F., Nyakuma, B. B., Abdul Rahman, M. R., Othman, N., Ahmad, N., & Muhamad Said, M. F. (2021). Torrefaction of palm kernel shell and petcoke blends. Annales de Chimie: Science des Matériaux, 45(6), 477-484.' },
  { year: 2021, authors: ['Zamri'], citation: 'Ayub, M., Othman, M. H. D., Khan, I. U., Mohd Yusop, M. Z., & Kurniawan, T. A. (2021). Graphene-based nanomaterials as antimicrobial surface coatings. Surfaces and Interfaces, 27, 101460.' },
  { year: 2020, authors: ['Norikhwan', 'Fairus', 'Zamri', 'Faizal'], citation: 'Hamzah, N., Yasin, M. F. M., Yusop, M. Z. M., Haniff, M. A. Z. M., Hasan, M. F., Tamrin, K. F., & Subha, N. A. M. (2020). Effect of fuel and oxygen concentration toward catalyst encapsulation in water-assisted flame synthesis of carbon nanotubes. Combustion and Flame, 220, 272-287.' },
  { year: 2020, authors: ['Zamri'], citation: 'Ahmad, S. Z. N., Wan Salleh, W. N., Ismail, A. F., Yusof, N., Mohd Yusop, M. Z., & Aziz, F. (2020). Adsorptive removal of heavy metal ions using graphene-based nanomaterials. Chemosphere, 248, 126008.' },
  { year: 2018, authors: ['Ibthisham'], citation: 'Ardani, M. I., Patel, Y., Siddiq, A., Offer, G. J., & Martinez-Botas, R. F. (2018). Combined experimental and numerical evaluation of the differences between convective and conductive thermal control on the performance of a lithium ion cell. Energy, 144, 81-97.' },
  { year: 2017, authors: ['Norikhwan', 'Fairus', 'Zamri', 'Aminuddin'], citation: 'Hamzah, N., Yasin, M. F. M., Yusop, M. Z. M., Saat, A., & Subha, N. A. M. (2017). Rapid Production of Carbon Nanotubes: A Review on Advancement in Growth Control and Morphology Manipulations of Flame Synthesis. J. Materials Chemistry A, 5(48), 25144-25170.' },
  { year: 2012, authors: ['Zamri'], citation: 'Mohd Yusop, M. Z., Ghosh, P., Yaakob, Y., Kalita, G., Sasase, M., Hayashi, Y., & Tanemura, M. (2012). In situ TEM observation of Fe-included carbon nanofiber: Evolution of structural and electrical properties in field emission process. ACS Nano, 6(11), 9567-9573.' },
  { year: 2010, authors: ['Zamri'], citation: 'Ghosh, P., Yusop, M. Z., Satoh, S., Subramanian, M., Hayashi, A., Hayashi, Y., & Tanemura, M. (2010). Transparent and flexible field electron emitters based on the conical nanocarbon structures. J. American Chemical Society, 132(12), 4034-4035.' },
];

export const CURRENT_GRANTS = [
  { scheme: 'FRGS 2023', title: 'Synthesis of Yellow Grease Oil and Polypropylene Plastic Wastes to Novel Green Fuel Using Co-Pyrolysis Optimum Correlation', budget: 'RM 126,710', pi: 'Dr. Norazila Othman' },
  { scheme: 'UTMER 2023', title: 'Thermal Effects On Magnetic Bearings In Turbomachinery System', budget: 'RM 69,200', pi: 'Assoc. Prof. Dr. Aminuddin Saat' },
  { scheme: 'UTM-TDR 45.1', title: 'Development of Rotating Detonation Engine', budget: 'RM 80,000', pi: 'Prof Dr Mazlan Abdul Wahid' },
  { scheme: 'Biogas RDE', title: 'Continuous Rotating Detonation Engines Fueled by Biogas for Rural Area Power Generation', budget: 'RM 135,000', pi: 'Prof Dr Mazlan Abdul Wahid' },
  { scheme: 'CNT Growth', title: 'Understanding Effects of Mixture Fraction and Fuel Composition on Carbon Nanotube Growth', budget: 'RM 80,000', pi: 'Dr Mohd Fairus Mohd Yasin' },
  { scheme: 'CNT Hydrophilic', title: 'Synthesis of Hydrophilic Carbon Nanotube in Low Temperature Environment with Combustion-Assisted CVD', budget: 'RM 155,600', pi: 'Dr Mohd Fairus Mohd Yasin' },
  { scheme: 'MWCNT-30', title: 'Multi-Walled Carbon Nanotubes 30nm (MWCNT-30)', budget: 'RM 20,000', pi: 'Dr Mohd Fairus Mohd Yasin' },
  { scheme: 'EFB Briquettes', title: 'Investigation on Dual-Function Natural Binder Based Empty Fruit Bunch Briquettes Torrefied by Microwave Heating', budget: 'RM 30,000', pi: 'Dr Mohd Faizal Hassan' },
  { scheme: 'Li-Ion Battery', title: 'Multi-Dimensional Thermal Transport of a Lithium-Ion Battery Under Different Thermal Conditions', budget: 'RM 30,000', pi: 'Dr Mohd Ibthisham Ardani' },
  { scheme: 'Nanomaterial CVD', title: 'Investigation of Nanomaterial Growth on High-Mobility Substrate Using Chemical Vapor Deposition', budget: 'RM 140,000', pi: 'Dr Mohd Mohsin Mohd Sies' },
  { scheme: 'Biodiesel Burner', title: 'Optimization on Combustion Performance of Firing Biodiesel from Waste Cooking Oil in an Oil Burner', budget: 'RM 30,000', pi: 'Dr Norazila Othman' },
  { scheme: 'CNT Yarn', title: 'Synthesis of Carbon Nanotube Yarn in Quasi-Pyrolysis Environment', budget: 'RM 20,000', pi: 'Dr Norikhwan Hamzah' },
];

export const HISTORICAL_GRANTS = [
  { scheme: 'EScience / MOSTI 2013', title: 'Development of Novel Low NOx Flameless Combustion System Fueled by Biogas from Palm Oil Mill Effluent', period: 'June 2013 – May 2015', funder: 'MOSTI' },
  { scheme: 'RUG 2012', title: 'Development of Pulse Detonation Engine', period: 'Dec 2012 – Nov 2014', funder: 'UTM Research University Grant' },
  { scheme: 'PRGS 2012', title: 'Pulse Combustion Hot Water Boiler Prototype', period: 'Aug 2012 – Jul 2014', funder: 'Ministry of Higher Education' },
  { scheme: 'RUG 2011', title: 'Pulse Detonation Combustion for Technological Development of Green Engine', period: 'Apr 2011 – Mar 2013', funder: 'UTM Research University Grant' },
  { scheme: 'FRGS 2010', title: 'Theoretical and Experimental Investigation on Hydrogen-Enriched Gaseous Diffusion Flames', period: 'Apr 2010 – Mar 2012', funder: 'Ministry of Higher Education' },
  { scheme: 'EScience 2008', title: 'Pulse Detonation for Propulsion Purposes', period: 'Nov 2008 – Feb 2011', funder: 'MOSTI' },
  { scheme: 'FRGS 2006', title: 'Biofuel Pulse Combustion Characteristics', period: 'Nov 2006 – Oct 2008', funder: 'Ministry of Higher Education' },
  { scheme: 'EScience 2006', title: 'Portable Biofuel Pulse Combustion Dryer', period: 'Dec 2006 – Nov 2008', funder: 'MOSTI' },
  { scheme: 'RMC 2004', title: 'Studies on Effect of Swirl Intensities and Fuel Mixtures on Combustion and Flame Characteristics', period: 'Jun 2004 – Jun 2006', funder: 'UTM Research Management Centre' },
];

export const AWARDS_BY_YEAR = [
  {
    year: '2023',
    items: [
      'Dr. Natrah honored with the Excellent Service Award for the year 2022.',
      'Assoc. Prof. Dr. Aminuddin Saat — Anugerah Jasa Bakti achievement.',
      "Prof. Mazlan Abd Wahid and team appointed as training provider for 'Hydrogen Gas Turbine Technology Course' by ILSAS, TNB Integrated Learning Solution Sdn Bhd.",
      'Prof. Dr. Mazlan Abd Wahid appointed as Guest Professor at Jiangsu University.',
      'Prof. Dr. Mazlan Abd Wahid — Best Paper Award at the 17th Asian International Conference on Fluid Machinery (AICFM17), Zhenjiang, China.',
      "Muhammad Amirrul Amin Moen, Dr. Norikhwan Hamzah, Vincent Tan Yi De, Dr. Mohd Fairus Mohd Yasin — Best Paper Award, 22nd Asia Simulation Conference 2023, for 'Analysis of Fuel Concentration Effect Towards CNT Growth in Methane Diffusion Flames Using CFD Simulations'.",
      'Dr. Norikhwan Hamzah and team — Bronze Award at 25th Industrial Art & Technology Exhibition (INATEX 2023).',
    ],
  },
  {
    year: '2022',
    items: [
      'Prof. Mazlan Abd Wahid — Global Top 2% Scientist 2022 (joined 51 other UTM researchers).',
      "Dr. Mohammad Nurizat Rahman (alumnus) — 'The Most Promising Researcher' award at TNBR's Employee Excellence Award 2022.",
      'Dr. Norikhwan Hamzah — Best Paper Award at SIE Conference 2022.',
    ],
  },
  {
    year: '2021',
    items: [
      "Dr Norazila Othman & team — Gold at Asia International Innovation Exhibition (AIINEX) 2021 for 'Novel Swirl Fixed Based Gasifier'.",
      "Dr Norazila Othman & team — Special Award at AIINEX 2021 for 'Cfinder'.",
      "Dr Norazila Othman & team — Gold at AIINEX 2021 for 'Cfinder'.",
      "Dr Norazila Othman & team — Best Award at AIINEX 2021 for 'Novel Swirl Fixed Based Gasifier'.",
      "Dr Mohd Fairus Mohd Yasin & team — Silver at Malaysia Technology Expo 2021 (MTE) International Innovation Awards for 'Green Synthesis Solution for Carbon-Based Nanomaterial in Environment'.",
    ],
  },
  {
    year: '2020',
    items: [
      'Mohammad Nazri Mohd Jaafar & team — Science Award at SARES 2020 (International Sustainable Aviation and Energy Research Society).',
    ],
  },
  {
    year: '2019',
    items: [
      "Mohd Fairus Mohd Yasin & team — Best Presenter Award at 11th International Meeting on Advances in ThermoFluids (Kyushu University) for 'Detailed Chemistry Approach for Computational Study of Flame Synthesis'.",
    ],
  },
  {
    year: '2014',
    items: [
      "Silver Medal — Malaysia Technology Expo (MTE) 2014 for 'Low NOx Flameless Combustor Fueled by Biogas From Palm Oil Mill Effluent'.",
      "Bronze Medal — Malaysia Technology Expo (MTE) 2014 for 'Pulse Combustion Hot Water Boiler'.",
    ],
  },
  {
    year: '2009',
    items: ["Gold Medal — Malaysia Technology Expo (MTE) 2009 for 'Pulse Combustion Tray Dryer'."],
  },
  {
    year: '2008',
    items: ["Bronze Medal — Innovation and Technology Expo 2008 (INATEX) for 'Pulse Combustion Tray Dryer'."],
  },
];

export const LAB_FACILITIES = [
  {
    name: 'Quasi-Pyrolysis Chamber',
    subtitle: 'Flame Synthesis Setup',
    desc: 'Flame Synthesis of Carbon Nanotubes research is conducted in this test rig, equipped with up-to-date mass flow controllers for fuel and oxidizers, enabling more accurate and precise data collection.',
    img: './facilities/flame-synthesis-setup.jpg',
    fallback: './facilities/flame-synthesis-setup.jpg',
  },
  {
    name: 'Rotating Detonation Engine',
    subtitle: 'RDE Setup',
    desc: 'Located in a soundproof chamber at the back of the lab, two 46 mm × 46 mm engines are set up for experimenting on the fundamentals of Rotating Detonation Engines (RDEs) and thermal management respectively.',
    img: './facilities/rde-setup.jpg',
    fallback: './facilities/rde-setup.jpg',
  },
  {
    name: 'Flameless Combustion Chamber',
    subtitle: 'Combustion Setup',
    desc: 'Combustion chambers of various sizes are used to experiment on flameless combustion. Fuels under study include syngas and biogas.',
    img: './facilities/flameless-combustor-setup.jpg',
    fallback: './facilities/flameless-combustor-setup.jpg',
  },
];

export interface ResearchActivity {
  title: string;
  period: string;
  desc: string;
  category: 'Fuel Synthesis' | 'Biodiesel' | 'Biojet Fuel' | 'Gas Turbine' | 'Combustion' | 'Gasification' | 'Fuel Assessment' | 'Engine Testing';
  images: string[];
}

export const RESEARCH_ACTIVITIES: ResearchActivity[] = [
  {
    title: 'Co-Pyrolysis of Waste Plastics and Waste Cooking Oil',
    period: '2022 – Current',
    desc: 'Development of a cost-effective reactor designed to convert single-use plastic food containers and waste cooking oil into high-grade synthetic fuel. Through the co-pyrolysis synthesis process, the project aims to produce sustainable energy alternatives for large-scale power generation.',
    category: 'Fuel Synthesis',
    images: [ './research-activities/co-pyrolysis-1-fixed.jpg',  './research-activities/co-pyrolysis-2-fixed.jpg',  './research-activities/co-pyrolysis-3-fixed.jpg'],
  },
  {
    title: 'Biodiesel Production and Parameters Optimisation',
    period: '2017 – Current',
    desc: 'Conversion of various edible and non-edible feedstocks — such as palm, coconut, jatropha and waste cooking oil — into biodiesel via transesterification and esterification. The research integrates Response Surface Methodology (RSM) tools to optimise process parameters, ensuring maximum fuel yield and superior quality.',
    category: 'Biodiesel',
    images: [ './research-activities/biodiesel-1-fixed.jpg',  './research-activities/biodiesel-2.jpeg',  './research-activities/biodiesel-3.jpeg'],
  },
  {
    title: 'Production of Sustainable Biojet Fuel',
    period: '2018 – Current',
    desc: 'Synthesis of biojet fuel through the deoxygenation process using diverse feedstocks such as coconut and palm kernel oil. The study evaluates the feasibility of these bio-based alternatives for aviation applications, focusing on chemical stability and performance.',
    category: 'Biojet Fuel',
    images: [ './research-activities/biojet-1.jpeg',  './research-activities/biojet-2-fixed.jpg'],
  },
  {
    title: 'Micro Gas Turbine (MGT) System Performance',
    period: '2018 – Current',
    desc: 'Development and utilisation of various biodiesel blends to operate Micro Gas Turbine (MGT) systems. The primary goal is to establish a reliable and sustainable power generation solution tailored for rural and isolated areas where conventional grid access is limited.',
    category: 'Gas Turbine',
    images: ['./research-activities/mgt-1-fixed.jpg'],
  },
  {
    title: 'Combustion and Emission Analysis in Industrial Burners',
    period: '2016 – Current',
    desc: 'Comprehensive analysis of the combustion performance and emission profiles (NOx, CO, CO2, and SO2) of various biodiesel and biokerosene fuels. By benchmarking against conventional diesel and kerosene, the research evaluates the environmental impact and thermal efficiency of biofuels in industrial fuel burner systems.',
    category: 'Combustion',
    images: [ './research-activities/combustion-1.jpeg',  './research-activities/combustion-2.jpeg'],
  },
  {
    title: 'Syngas Production Utilizing Multi-System Gasification Technologies',
    period: '2016 – Current',
    desc: 'Development and performance evaluation of various gasifier systems — including updraft, downdraft, and fluidized bed gasifiers — for the production of high-quality syngas. The study explores the gasification of diverse biomass feedstocks such as palm kernel shells, empty fruit bunches (EFB), and rice husks, focusing on optimising system efficiency and syngas yield.',
    category: 'Gasification',
    images: [ './research-activities/syngas-1.jpeg',  './research-activities/syngas-2.jpg'],
  },
  {
    title: 'Properties and Stability Assessment of Palm Oil Methyl Ester (POME)',
    period: 'October 2025 – January 2026',
    desc: 'Industrial research project focusing on the comprehensive assessment of Palm Oil Methyl Ester (POME) properties, specifically evaluating acid value and sludge formation characteristics within biodiesel storage tanks. Conducted in compliance with ASTM D974 standards, the study identifies corrosivity risks and ensures long-term storage stability of bio-based fuels.',
    category: 'Fuel Assessment',
    images: [ './research-activities/pome-1.png',  './research-activities/pome-2.png'],
  },
  {
    title: 'Engine Performance and Durability Evaluation using Ethanol-Mixed Fuel',
    period: 'May 2025 – June 2025',
    desc: 'Industrial consultancy project involving the large-scale production and quality management of 2,300 litres of E20 bioethanol fuel. The research conducts comprehensive performance and durability evaluations on a Perodua Alza engine, including a rigorous endurance test of up to 150,000 cycles to ensure fuel consistency and engine reliability meeting stringent automotive industry standards.',
    category: 'Engine Testing',
    images: [ './research-activities/engine-1.jpeg',  './research-activities/engine-2.jpeg',  './research-activities/engine-3.jpeg'],
  },
];

export interface FaizalResearchActivity {
  title: string;
  desc: string;
  category: 'Densification' | 'Torrefaction' | 'Pretreatment';
  images: string[];
}

export const FAIZAL_RESEARCH_ACTIVITIES: FaizalResearchActivity[] = [
  {
    title: 'Densification',
    desc: 'Densification as a pretreatment process to convert loose biomass particles into a compacted form before torrefaction. This method reduces biomass volume, improves handling and storage, and increases the bulk density of the material. Since raw biomass usually has low density and irregular particle distribution, densification helps produce a more uniform feedstock for thermal treatment. The aim is to improve the physical properties of biomass and enhance its suitability for subsequent torrefaction and solid fuel application.',
    category: 'Densification',
    images: ['./faizal-research/densification.jpeg'],
  },
  {
    title: 'Washing Pretreatment',
    desc: 'Application of washing pretreatment to improve the fuel properties of biomass prior to torrefaction. Through this pretreatment, water-soluble inorganic compounds and impurities within the biomass can be reduced, thereby minimizing ash-related problems and improving the quality of the torrefied product. The aim is to evaluate how washing pretreatment affects the chemical and fuel properties of biomass and whether it can enhance the performance of torrefied biomass as a cleaner and higher-quality solid fuel.',
    category: 'Pretreatment',
    images: ['./faizal-research/washing-pretreatment.jpeg'],
  },
  {
    title: 'Inert Torrefaction',
    desc: 'Thermal upgrading of biomass through inert torrefaction using a vertical torrefaction reactor. During the process, biomass is heated under an oxygen-free environment with the aid of inert gas to prevent combustion and promote controlled thermal decomposition. The research aims to evaluate the effect of torrefaction conditions, such as temperature and residence time, on the performance of the torrefied biomass.',
    category: 'Torrefaction',
    images: ['./faizal-research/inert-torrefaction.jpeg'],
  },
  {
    title: 'Oxidative Torrefaction',
    desc: 'Application of oxidative torrefaction using a tubular torrefaction reactor for biomass fuel improvement. In this process, biomass is heated under a controlled oxidative environment without relying on inert gas, making it a more practical and cost-effective alternative to conventional inert torrefaction. The study investigates the influence of oxidative torrefaction conditions on biomass degradation behaviour, solid yield, energy properties and overall fuel quality of the torrefied product.',
    category: 'Torrefaction',
    images: ['./faizal-research/oxidative-torrefaction-1.png', './faizal-research/oxidative-torrefaction-2.png'],
  },
  {
    title: 'Torrefaction under Mild Compaction Technique',
    desc: 'Torrefaction under a mild compaction technique, where low compaction pressure is applied to biomass during the torrefaction process. The pressure is generated from the weight of a plunger placed on the biomass sample, allowing mild compression without using an external high-pressure system. Through this technique, the interparticle spaces within the biomass are reduced, thereby limiting oxygen penetration and minimizing undesired combustion during the torrefaction process.',
    category: 'Torrefaction',
    images: ['./faizal-research/mild-compaction-1.jpeg', './faizal-research/mild-compaction-2.jpeg'],
  },
  {
    title: 'Microwave Torrefaction',
    desc: 'Application of microwave torrefaction for the thermal upgrading of biomass into improved solid fuel. Through microwave-assisted heating, heat is generated directly within the biomass material, allowing faster heating and better energy transfer compared to conventional torrefaction methods. The study evaluates the effect of microwave torrefaction conditions on biomass yield, thermal behaviour and fuel properties.',
    category: 'Torrefaction',
    images: ['./faizal-research/microwave-torrefaction.jpeg'],
  },
  {
    title: 'Solar Torrefaction',
    desc: 'Development of a solar-driven torrefaction system for the thermal upgrading of biomass into improved solid fuel. Through the use of concentrated solar energy, the process aims to reduce dependence on conventional electrical or fossil-based heating sources while providing a more sustainable heating method for torrefaction. The study evaluates the performance of biomass during solar torrefaction by analyzing the effect of solar heating conditions on the quality, yield and fuel properties of the torrefied product.',
    category: 'Torrefaction',
    images: ['./faizal-research/solar-torrefaction.png'],
  },
];

export interface FairusResearchActivity {
  title: string;
  desc: string;
  category: 'Flame Synthesis' | 'Carbon Capture' | 'Pilot Rig' | 'Technology Roadmap' | 'Nanomaterial Synthesis' | 'Gas Conversion';
  images: string[];
}

export const FAIRUS_RESEARCH_ACTIVITIES: FairusResearchActivity[] = [
  {
    title: 'Development of Flame-Assisted Chemical Vapor Deposition (FCVD)',
    desc: 'The progression of flame synthesis at the HiREF laboratory, UTM Malaysia signifies 10 years of iterative research in flame-assisted chemical vapor deposition (FCVD), evolving from basic combustion investigations to a patented commercial synthesis platform (MY-208162-A). Preliminary investigations in 2015 confirmed the viability of carbon nanotube (CNT) development on nickel wires utilizing diffusion flames. Advancement by 2020 introduced a premixed flame system for enhanced thermal and chemical regulation. The incorporation of a fluidized bed in 2023 significantly enhanced scalability and precursor interaction, leading to the development of the 2024 version of FCVD with in situ collection. This technique now produces high-purity CNTs with diameters ranging from 10 to 30 nm and a crystallinity of 1.0, balancing cost-effective flame synthesis with refined performance so that manufacturers can meet both budget constraints and quality standards.',
    category: 'Flame Synthesis',
    images: ['./fairus-research/figure-1.png'],
  },
  {
    title: 'Sustainable Carbon Capture, Utilization and Storage (CCUS) for Thermal Plant with Carbon-Based Nanomaterials (CBN) Production',
    desc: 'The current pilot system employs a Flame Thermo-Catalytic (FTC) reactor capable of capturing carbon through methane pyrolysis, producing hydrogen and carbon nanomaterials. Under laboratory conditions, it has demonstrated a production capacity of approximately 150 mg/hour of CNT at a carbon capture efficiency of around 70%. To overcome residual CO and CO₂ emissions, a second Reverse Water-Gas Shift (RWGS) reactor operating at approximately 800°C is proposed to convert CO₂ and H₂ into CO and H₂O, completing a closed-loop carbon cycle. The integration targets an overall carbon conversion efficiency above 60% with energy requirements below 150 kWh per kilogram of CO₂ captured, achieving near carbon-neutral or carbon-negative operation while increasing nanomaterial yield and producing syngas streams for industrial use.',
    category: 'Carbon Capture',
    images: ['./fairus-research/figure-2.png'],
  },
  {
    title: 'Building and Testing the Pilot Rig',
    desc: 'Alongside the design work, the team has built and operates a working laboratory-scale version of the system. This pilot rig lets researchers test real system performance, fine-tune the controls, and measure exactly how much carbon nanomaterial is produced and converted under different operating conditions before the technology is scaled up for wider industrial use.',
    category: 'Pilot Rig',
    images: ['./fairus-research/figure-3.png'],
  },
  {
    title: 'Technological Road Plan',
    desc: 'This project builds on years of prior development, starting from proof-of-concept testing in 2018 through to pilot testing and early production. The current phase focuses on smart control systems and further efficiency gains, with the ultimate goal of continuous, large-scale production by 2028. Near-term targets include cutting the cost of capturing CO₂ by up to 80%, and improving carbon conversion efficiency by up to 70%.',
    category: 'Technology Roadmap',
    images: ['./fairus-research/figure-4.png'],
  },
  {
    title: 'Growing Carbon Nanotubes From Flame and Gas',
    desc: 'A key part of the research is understanding exactly how and where carbon nanotubes form during the capture process. Using small ceramic beads coated with a nickel catalyst, researchers pass a controlled flame or gas stream over the beads and observe where the nanotubes grow best. Two methods are compared: burning a gas mixture directly, and heating methane without a flame at all. The resulting samples are examined under powerful microscopes to check their quality and structure, helping the team identify the best conditions for producing high-quality nanomaterials consistently.',
    category: 'Nanomaterial Synthesis',
    images: ['./fairus-research/figure-5.png'],
  },
  {
    title: 'Studying Carbon Monoxide',
    desc: 'A related set of experiments studies how carbon monoxide, a useful industrial gas, can be generated and controlled as part of the same process. A specially built furnace system carefully heats a gas mixture in stages while sensors track temperature and gas samples are collected for analysis at each step. Insights from these tests feed back into improving the overall efficiency of the carbon capture and conversion system.',
    category: 'Gas Conversion',
    images: ['./fairus-research/figure-6.png'],
  },
];

export interface NorikhwanResearchActivity {
  title: string;
  desc: string;
  category: 'Ammonia Combustion' | 'Nanomaterial Synthesis';
  images: string[];
}

export const NORIKHWAN_RESEARCH_ACTIVITIES: NorikhwanResearchActivity[] = [
  {
    title: 'Integrated Ammonia Cracking and Combustion for Power Generation',
    desc: 'This research focuses on the development of an integrated ammonia cracking and combustion system for low-carbon and carbon-free power generation applications. The proposed system incorporates a dual-cracker configuration, consisting of a central ammonia cracking reactor and an annular pilot cracking reactor, to partially convert ammonia into a hydrogen-enriched ammonia mixture prior to combustion. Heat generated from the burner is utilised to thermally sustain the endothermic ammonia cracking process, thereby reducing dependence on an external heat source. Experimental and numerical investigations are conducted to evaluate ammonia conversion, reactor temperature distribution, burner–reactor thermal interaction, and combustion performance. The research aims to establish an efficient and compact thermochemical coupling approach for the practical utilisation of ammonia as a fuel in future combustion and power-generation systems.',
    category: 'Ammonia Combustion',
    images: ['./norikhwan-research/figure-1.png'],
  },
  {
    title: 'Flame-Based Carbon Nanotube and Nanomaterials Synthesis',
    desc: 'This research focuses on the development of a flame-based method for carbon nanotube (CNT) and other nanomaterials synthesis using a quasi-pyrolysis chamber integrated with a co-flow diffusion flame. The diffusion flame serves simultaneously as the heat source and precursor environment for CNT formation, while the quasi-pyrolysis chamber provides a controlled high-temperature region for hydrocarbon decomposition and nanomaterial growth. Experimental investigations are conducted by varying the chamber configuration, operating conditions, and the use of wire mesh at the chamber inlet, supported by flame imaging, temperature mapping, gas composition measurements, and CNT characterisation. CFD simulations of reacting flow are also employed to understand the thermal behaviour within the chamber. The research aims to establish the relationship between flame conditions, chamber environment, and CNT growth characteristics, providing a simpler and potentially more energy-efficient route for flame-based CNT and nanomaterials production.',
    category: 'Nanomaterial Synthesis',
    images: ['./norikhwan-research/figure-2.png'],
  },
];

export interface ZamriResearchActivity {
  title: string;
  desc: string;
  category: 'Electron Microscopy' | 'Graphene Synthesis';
  images: string[];
}

export const ZAMRI_RESEARCH_ACTIVITIES: ZamriResearchActivity[] = [
  {
    title: 'In-Situ Transmission Electron Microscopy (TEM) of Nanomaterials',
    desc: 'This research focuses on the direct observation of structural and electrical changes in carbon nanomaterials while they operate inside a transmission electron microscope. A nanomanipulator holder is used to apply an electrical bias to an individual carbon nanofiber or nanotube, so that its behaviour under field electron emission can be recorded in real time at the atomic scale. The work links the evolution of the nanostructure, such as graphitic ordering and tip shape, with the measured emission current. The aim of this research is to understand the fundamental mechanisms that control the stability and performance of carbon based emitters and to guide the design of more reliable nanoscale electron sources.',
    category: 'Electron Microscopy',
    images: ['./zamri-research/in-situ-tem.jpg'],
  },
  {
    title: 'Graphene Synthesis from Biomass and Agricultural Waste',
    desc: 'Carbonized palm kernel shell (PKS) is converted into graphene through mechanical exfoliation by ball milling, which separates its graphitic structure into thin layered sheets. The resulting material is characterised by high-resolution TEM, revealing the hexagonal carbon lattice with a C–C spacing of about 0.142 nm and an interlayer spacing of about 0.334 nm, typical of graphene.',
    category: 'Graphene Synthesis',
    images: ['./zamri-research/graphene-biomass.jpg'],
  },
];

export const LAB_SERVICES = [
  {
    name: 'CFD for Reacting and Non-Reacting Flow',
    desc: 'To understand and predict the flow field characteristics, CFD simulation is carried out on the subject of study. Simulations are performed on Ansys Fluent and OpenFOAM.',
    img: './facilities/cfd.jpg',
    fallback: './facilities/cfd.jpg',
  },
  {
    name: 'Combustion Testing of Natural Gas Composition',
    desc: 'Laminar flame characteristics are studied using high-speed Schlieren imaging of combustion taking place inside a 29-litre cylinder chamber with optical window access.',
    img: './facilities/flame-optics-setup.jpg',
    fallback: './facilities/flame-optics-setup.jpg',
  },
];

export type CollabCategory = 'Industry' | 'National' | 'International' | 'Academic' | 'Government';

export interface CollabEntry { abbr: string; name: string; logo: string; }

export const COLLABORATIONS: Record<CollabCategory, CollabEntry[]> = {
  Industry: [
    { abbr: 'PETRONAS', name: 'Petroliam Nasional Berhad', logo: './logos/petronas.png' },
    { abbr: 'TNB', name: 'Tenaga Nasional Berhad', logo: './logos/tnb.png' },
    { abbr: 'MISC', name: 'MISC Berhad', logo: './logos/misc.png' },
    { abbr: 'Sapura', name: 'Sapura Energy Berhad', logo: './logos/sapura.png' },
    { abbr: 'YTL', name: 'YTL Power International', logo: './logos/ytl.png' },
    { abbr: 'MAS', name: 'Malaysia Airlines', logo: './logos/mas.png' },
    { abbr: 'Shell', name: 'Shell Malaysia', logo: './logos/shell.png' },
    { abbr: 'RAPID', name: 'Pengerang Integrated Complex', logo: './logos/rapid.png' },
  ],
  National: [
    { abbr: 'MOSTI', name: 'Ministry of Science, Technology & Innovation', logo: './logos/mosti.png' },
    { abbr: 'MOHE', name: 'Ministry of Higher Education Malaysia', logo: './logos/mohe.png' },
    { abbr: 'MIGHT', name: 'Malaysia Industry-Government for High Technology', logo: './logos/might.png' },
    { abbr: 'UTM Holdings', name: 'UTM Holdings Sdn Bhd', logo: './logos/utm-holdings.png' },
    { abbr: 'IRDA', name: 'Iskandar Regional Development Authority', logo: './logos/irda.png' },
    { abbr: 'SIRIM', name: 'Standards & Industrial Research Institute', logo: './logos/sirim.png' },
    { abbr: 'TNBR', name: 'Tenaga Nasional Berhad Research', logo: './logos/tnbr.png' },
  ],
  International: [
    { abbr: 'Cambridge', name: 'University of Cambridge, UK', logo: './logos/cambridge.png' },
    { abbr: 'Leeds', name: 'University of Leeds, UK', logo: './logos/leeds.png' },
    { abbr: 'Cranfield', name: 'Cranfield University, UK', logo: './logos/cranfield.png' },
    { abbr: 'Wisconsin', name: 'University of Wisconsin-Madison, USA', logo: './logos/wisconsin.png' },
    { abbr: 'SUNY', name: 'State University of New York, USA', logo: './logos/suny.png' },
    { abbr: 'Tokyo Met', name: 'Tokyo Metropolitan University, Japan', logo: './logos/tokyo-met.png' },
    { abbr: 'Kyushu', name: 'Kyushu University, Japan', logo: './logos/kyushu.png' },
    { abbr: 'Jiangsu', name: 'Jiangsu University, China', logo: './logos/jiangsu.png' },
    { abbr: 'Ryukyus', name: 'University of the Ryukyus, Japan', logo: './logos/ryukyus.png' },
  ],
  Academic: [
    { abbr: 'UTM', name: 'Universiti Teknologi Malaysia', logo: './logos/utm.png' },
    { abbr: 'UM', name: 'Universiti Malaya', logo: './logos/um.png' },
    { abbr: 'UPM', name: 'Universiti Putra Malaysia', logo: './logos/upm.png' },
    { abbr: 'UiTM', name: 'Universiti Teknologi MARA', logo: './logos/uitm.png' },
    { abbr: 'UTHM', name: 'Universiti Tun Hussein Onn Malaysia', logo: './logos/uthm.png' },
    { abbr: 'IIUM', name: 'International Islamic University Malaysia', logo: './logos/iium.png' },
    { abbr: 'UTeM', name: 'Universiti Teknikal Malaysia Melaka', logo: './logos/utem.png' },
    { abbr: 'UniMAP', name: 'Universiti Malaysia Perlis', logo: './logos/unimap.png' },
  ],
  Government: [
    { abbr: 'JKR', name: 'Jabatan Kerja Raya Malaysia', logo: './logos/jkr.png' },
    { abbr: 'KPDN', name: 'Kementerian Perdagangan Dalam Negeri', logo: './logos/kpdn.png' },
    { abbr: 'MARA', name: 'Majlis Amanah Rakyat', logo: './logos/mara.png' },
    { abbr: 'MTDC', name: 'Malaysia Technology Development Corporation', logo: './logos/mtdc.png' },
    { abbr: 'EPU', name: 'Economic Planning Unit Malaysia', logo: './logos/epu.png' },
    { abbr: 'MIDA', name: 'Malaysian Investment Development Authority', logo: './logos/mida.png' },
  ],
};

export interface TrainingCourse {
  title: string;
  desc: string;
  duration: string;
  level: string;
}

export interface Trainer {
  name: string;
  title: string;
  degrees: string;
  bio: string;
  expertise: string[];
  photo: string;
  linkedin: string | null;
  courses: TrainingCourse[];
}

export const TRAINERS: Trainer[] = [
  {
    name: 'Assoc. Prof. Ir. Ts. Dr. Norazila Othman',
    title: 'Senior Lecturer · Department of Thermofluid, UTM',
    degrees: 'BEng Aero (UTM) · MEng Mech (UTM) · PhD Aero (Tokyo)',
    bio: "Senior lecturer at UTM's Faculty of Mechanical Engineering, Department of Thermofluid. She received her BSc in Mechanical Aeronautics from UTM (2009), MSc from UTM (2011), and PhD from Tokyo Metropolitan University (2016). Her work bridges fundamental combustion research and applied energy systems, with a focus on biodiesel, microgas turbines, and biomass gasification.",
    expertise: ['Biodiesel', 'Microgas Turbines', 'Biomass Gasification', 'Combustion Diagnostics', 'Sustainable Energy'],
    photo: './experts/norazila.png',
    linkedin: 'https://linkedin.com/in/ir-ts-dr-norazila-othman-357399158',
    courses: [
      {
        title: 'Biodiesel Combustion Fundamentals',
        desc: 'A practical course covering biodiesel production, fuel property characterization, and combustion performance evaluation in laboratory-scale burners and engines.',
        duration: '2 days',
        level: 'Intermediate',
      },
      {
        title: 'Microgas Turbine Technology',
        desc: 'Hands-on training on microgas turbine operation, performance analysis, and fuel flexibility for distributed power generation applications.',
        duration: '3 days',
        level: 'Advanced',
      },
      {
        title: 'Biomass Gasification for Sustainable Energy',
        desc: 'An intensive program on biomass feedstock characterization, gasifier design, syngas analysis, and integration with power generation systems.',
        duration: '2 days',
        level: 'Intermediate',
      },
      {
        title: 'Combustion Diagnostics & Measurement Techniques',
        desc: 'Training in optical and probe-based diagnostic methods for flame analysis, emission measurement, and combustion efficiency assessment.',
        duration: '3 days',
        level: 'Advanced',
      },
    ],
  },
  {
    name: 'Dr. Mohd Faizal Hasan',
    title: 'Research Fellow · HiREF, UTM',
    degrees: 'BEng Mech (Japan) · MEng Mech (UTM) · PhD Eng (Keio University, Japan)',
    bio: 'Obtained his PhD degree in Engineering from Keio University, Japan. His PhD research focused on Palladium/Argentum (Pd/Ag) purification membranes for fuel cell applications and methanol steam reforming for hydrogen production. His current research centers on densification, torrefaction, and gasification of biomass, with extensive laboratory experience in fuel characterization techniques.',
    expertise: ['Biomass Torrefaction', 'Biomass Gasification', 'Fuel Characterization', 'Hydrogen Production', 'Densification'],
    photo: './experts/faizal.png',
    linkedin: null,
    courses: [
      {
        title: 'Higher Heating Value (HHV) Analysis of Biomass',
        desc: 'A hands-on course on determining the higher heating value of raw and torrefied biomass samples using a bomb calorimeter. Covers sample preparation, sample weighing, equipment setup, and result interpretation to assess the energy potential of biomass fuels and the effectiveness of torrefaction treatment.',
        duration: '2 days',
        level: 'Intermediate',
      },
      {
        title: 'Proximate Analysis of Solid Fuels',
        desc: 'Practical training in proximate analysis using a high-temperature furnace to determine moisture content, volatile matter, ash content, and fixed carbon in biomass and torrefied biomass samples. Covers controlled heating procedures, furnace operation, desiccator cooling, sample weighing, and calculation of fuel properties.',
        duration: '2 days',
        level: 'Intermediate',
      },
    ],
  },
  {
    name: 'Ts. Dr. Mohd Zamri Mohd Yusop',
    title: 'Senior Lecturer · Associate Research Fellow of AMTEC, UTM',
    degrees: 'BEng Mech-Applied Physics (Nagoya Inst. of Tech.) · MEng Frontier Materials (Nagoya) · Dr. Eng Frontier Materials (Nagoya)',
    bio: 'Obtained his Doctor of Engineering from the Nagoya Institute of Technology, Japan, in 2013. His doctoral research examined the structural and electrical properties of ion-induced carbon nanofibers using in-situ transmission electron microscopy. He is a certified microscopist for the atomic resolution analytical microscope (JEOL ARM 200F) and serves as Associate Research Fellow and Head of the Strategic Relations Unit at AMTEC, UTM. His current research covers the synthesis of graphene, carbon nanotubes and nanofibers from biomass, surface modification by ion irradiation, field electron emission devices, and biodegradable zinc-based alloys for biomedical applications.',
    expertise: ['Electron Microscopy (TEM & SEM)', 'Carbon Nanomaterials', 'Raman Spectroscopy', 'Sample Preparation', '3D Surface Imaging'],
    photo: './experts/zamri.png',
    linkedin: null,
    courses: [
      {
        title: 'Transmission Electron Microscopy (TEM)',
        desc: 'Training on the operation of the transmission electron microscope, including the atomic resolution analytical microscope (JEOL ARM 200F), for the study of nanomaterials. Covers specimen loading, beam alignment, focusing and image capture, together with safe handling of the instrument. Participants develop the skills needed to obtain clear high-resolution images and interpret the crystal structure and morphology of carbon and metal nanomaterials.',
        duration: '3 days',
        level: 'Advanced',
      },
      {
        title: 'Scanning Electron Microscopy (SEM / FE-SEM)',
        desc: 'Training on the use of scanning electron microscopy and field emission SEM to examine the surface morphology of materials. Covers sample mounting, coating of non-conductive samples, imaging conditions and basic elemental analysis by energy dispersive X-ray spectroscopy. Participants build competency in surface characterization and relating observed morphology to the processing history of the material.',
        duration: '2 days',
        level: 'Intermediate',
      },
      {
        title: 'Raman Spectroscopy of Carbon Nanomaterials',
        desc: 'Training on the use of Raman spectroscopy to characterise the quality and structure of carbon nanomaterials such as graphene, carbon nanotubes and carbon nanofibers. Covers sample handling, laser selection, spectrum acquisition and interpretation of the characteristic D, G and 2D bands that indicate the degree of order, number of layers and level of defects.',
        duration: '2 days',
        level: 'Intermediate',
      },
      {
        title: 'TEM, SEM and OM Sample Preparation using Wet and Dry Methods',
        desc: 'Training on the preparation of specimens for transmission electron microscopy, scanning electron microscopy and optical microscopy using both wet and dry methods. The wet method involves grinding, polishing, cleaning and dispersion in a suitable liquid, while the dry method involves handling of powders and direct mounting without any liquid medium. Provides practical skills to prepare clean and representative specimens for reliable imaging and structural data.',
        duration: '2 days',
        level: 'Intermediate',
      },
      {
        title: 'Advanced Analysis of TEM Images and Diffraction Data using GMS Software',
        desc: 'Training on the analysis of transmission electron microscopy images and electron diffraction patterns using the Gatan Microscopy Suite (GMS / DigitalMicrograph) software. Covers measuring lattice spacing, indexing diffraction spots and rings, performing fast Fourier transform analysis, and calibrating and processing high-resolution images to confirm crystal structure and orientation directly from recorded data.',
        duration: '3 days',
        level: 'Advanced',
      },
      {
        title: 'Keyence Digital Microscope: Advanced 3D Imaging and Elemental Analysis',
        desc: 'Training on the use of the Keyence digital microscope for advanced surface observation, three-dimensional imaging and elemental analysis. Covers capturing images with high depth of field, reconstructing surfaces in 3D for measuring height, roughness, step and volume, and elemental analysis to identify the composition of selected regions on the surface.',
        duration: '2 days',
        level: 'Intermediate',
      },
    ],
  },
];
