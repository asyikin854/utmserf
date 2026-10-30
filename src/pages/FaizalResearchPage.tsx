import type { Page } from '../types';
import ResearcherActivityPage from './ResearcherActivityPage';
import { EXPERTS, FAIZAL_RESEARCH_ACTIVITIES } from '../data';

interface Props { onNavigate: (p: Page) => void; }

const FAIZAL_PHOTO = EXPERTS.find(e => e.email === 'mfaizal@utm.my')?.photo ?? '';

export default function FaizalResearchPage({ onNavigate }: Props) {
  return (
    <ResearcherActivityPage
      onNavigate={onNavigate}
      pageTitle="Dr. Faizal's Research"
      breadcrumbs={[{ label: 'Home' }, { label: 'Facilities & Services' }, { label: "Dr. Faizal's Research" }]}
      researcherName="Dr. Mohd Faizal Hasan"
      researcherTitle="Research Fellow · HiREF, UTM"
      researcherPhoto={FAIZAL_PHOTO}
      researcherIntro="Research focused on biomass upgrading through densification, pretreatment, and various torrefaction technologies — including inert, oxidative, mild compaction, microwave, and solar-driven approaches — to produce cleaner and higher-quality solid fuels."
      activities={FAIZAL_RESEARCH_ACTIVITIES}
    />
  );
}
