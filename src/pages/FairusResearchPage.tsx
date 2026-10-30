import type { Page } from '../types';
import ResearcherActivityPage from './ResearcherActivityPage';
import { EXPERTS, FAIRUS_RESEARCH_ACTIVITIES } from '../data';

interface Props { onNavigate: (p: Page) => void; }

const FAIRUS_PHOTO = EXPERTS.find(e => e.email === 'mohdfairus@utm.my')?.photo ?? '';

export default function FairusResearchPage({ onNavigate }: Props) {
  return (
    <ResearcherActivityPage
      onNavigate={onNavigate}
      pageTitle="Dr. Fairus's Research"
      breadcrumbs={[{ label: 'Home' }, { label: 'R&D' }, { label: "Dr. Fairus's Research" }]}
      researcherName="Assoc. Prof. Ts. Dr. Mohd Fairus Mohd Yasin"
      researcherTitle="Senior Lecturer · Department of Thermofluids, UTM"
      researcherPhoto={FAIRUS_PHOTO}
      researcherIntro="Ten years of flame synthesis research at HiREF, from flame-assisted chemical vapor deposition of carbon nanotubes to a sustainable carbon capture, utilization and storage (CCUS) system that converts thermal plant emissions into carbon-based nanomaterials. Product achievements: Silver Medal INATEX 2020 & 2021, Silver Medal MTE 2023, Bronze Medal INATEX 2023 and Gold Medal iDrive 2025."
      activities={FAIRUS_RESEARCH_ACTIVITIES}
    />
  );
}
