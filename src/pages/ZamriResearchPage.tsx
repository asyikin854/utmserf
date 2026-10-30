import type { Page } from '../types';
import ResearcherActivityPage from './ResearcherActivityPage';
import { EXPERTS, ZAMRI_RESEARCH_ACTIVITIES } from '../data';

interface Props { onNavigate: (p: Page) => void; }

const ZAMRI_PHOTO = EXPERTS.find(e => e.email === 'zamriyusop@utm.my')?.photo ?? '';

export default function ZamriResearchPage({ onNavigate }: Props) {
  return (
    <ResearcherActivityPage
      onNavigate={onNavigate}
      pageTitle="Dr. Zamri's Research"
      breadcrumbs={[{ label: 'Home' }, { label: 'R&D' }, { label: "Dr. Zamri's Research" }]}
      researcherName="Ts. Dr. Mohd Zamri Mohd Yusop"
      researcherTitle="Senior Lecturer · Associate Research Fellow of AMTEC, UTM"
      researcherPhoto={ZAMRI_PHOTO}
      researcherIntro="Research on carbon nanomaterials, combining in-situ transmission electron microscopy of carbon nanofibers and nanotubes under field electron emission with the synthesis of graphene from biomass and agricultural waste."
      activities={ZAMRI_RESEARCH_ACTIVITIES}
    />
  );
}
