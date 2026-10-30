import type { Page } from '../types';
import ResearcherActivityPage from './ResearcherActivityPage';
import { EXPERTS, RESEARCH_ACTIVITIES } from '../data';

interface Props { onNavigate: (p: Page) => void; }

const NORAZILA_PHOTO = EXPERTS.find(e => e.email === 'norazilao@utm.my')?.photo ?? '';

export default function NorazilaResearchPage({ onNavigate }: Props) {
  return (
    <ResearcherActivityPage
      onNavigate={onNavigate}
      pageTitle="Dr. Norazila's Research"
      breadcrumbs={[{ label: 'Home' }, { label: 'Facilities & Services' }, { label: "Dr. Norazila's Research" }]}
      researcherName="Assoc. Prof. Ir. Ts. Dr. Norazila Othman"
      researcherTitle="Senior Lecturer · Department of Thermofluid, UTM"
      researcherPhoto={NORAZILA_PHOTO}
      researcherIntro="A portfolio of active and recent research projects spanning sustainable fuel synthesis, biodiesel optimisation, gas turbine performance, combustion analysis, and engine durability testing."
      activities={RESEARCH_ACTIVITIES}
    />
  );
}
