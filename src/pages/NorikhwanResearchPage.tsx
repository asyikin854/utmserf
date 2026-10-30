import type { Page } from '../types';
import ResearcherActivityPage from './ResearcherActivityPage';
import { EXPERTS, NORIKHWAN_RESEARCH_ACTIVITIES } from '../data';

interface Props { onNavigate: (p: Page) => void; }

const NORIKHWAN_PHOTO = EXPERTS.find(e => e.email === 'norikhwan@utm.my')?.photo ?? '';

export default function NorikhwanResearchPage({ onNavigate }: Props) {
  return (
    <ResearcherActivityPage
      onNavigate={onNavigate}
      pageTitle="Dr. Norikhwan's Research"
      breadcrumbs={[{ label: 'Home' }, { label: 'R&D' }, { label: "Dr. Norikhwan's Research" }]}
      researcherName="Ir. Dr. Norikhwan Hamzah"
      researcherTitle="Senior Lecturer · Department of Thermofluids, UTM"
      researcherPhoto={NORIKHWAN_PHOTO}
      researcherIntro="Research on ammonia as a carbon-free fuel through integrated ammonia cracking and combustion for power generation, and on flame-based synthesis of carbon nanotubes and other nanomaterials using a quasi-pyrolysis chamber."
      activities={NORIKHWAN_RESEARCH_ACTIVITIES}
    />
  );
}
