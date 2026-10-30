import { useState, useEffect } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MessageFromHeadPage from './pages/MessageFromHeadPage';
import BackgroundVisionMissionPage from './pages/BackgroundVisionMissionPage';
import AcademicStaffPage from './pages/AcademicStaffPage';
import MeetOurExpertPage from './pages/MeetOurExpertPage';
import GrantsPage from './pages/GrantsPage';
import HonorAwardsPage from './pages/HonorAwardsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import NorazilaResearchPage from './pages/NorazilaResearchPage';
import FaizalResearchPage from './pages/FaizalResearchPage';
import ZamriResearchPage from './pages/ZamriResearchPage';
import FairusResearchPage from './pages/FairusResearchPage';
import NorikhwanResearchPage from './pages/NorikhwanResearchPage';
import NewsPage from './pages/NewsPage';
import ServicesPage from './pages/ServicesPage';
import VacancyPage from './pages/VacancyPage';
import TrainingPage from './pages/TrainingPage';
import PublicationPage from './pages/PublicationPage';
import ExpertiseShowcasePage from './pages/ExpertiseShowcasePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const props = { onNavigate: handleNavigate };

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header scrolled={scrolled} currentPage={currentPage} onNavigate={handleNavigate} />

      <main className={currentPage !== 'home' ? 'pt-20 sm:pt-24 lg:pt-28' : ''}>
        {currentPage === 'home' && <HomePage {...props} />}
        {currentPage === 'message-from-head' && <MessageFromHeadPage {...props} />}
        {currentPage === 'background-vision-mission' && <BackgroundVisionMissionPage {...props} />}
        {currentPage === 'academic-staff' && <AcademicStaffPage {...props} />}
        {currentPage === 'meet-our-expert' && <MeetOurExpertPage {...props} />}
        {currentPage === 'grants' && <GrantsPage {...props} />}
        {currentPage === 'honor-awards' && <HonorAwardsPage {...props} />}
        {currentPage === 'facilities' && <FacilitiesPage {...props} />}
        {currentPage === 'research-norazila' && <NorazilaResearchPage {...props} />}
        {currentPage === 'research-faizal' && <FaizalResearchPage {...props} />}
        {currentPage === 'research-zamri' && <ZamriResearchPage {...props} />}
        {currentPage === 'research-fairus' && <FairusResearchPage {...props} />}
        {currentPage === 'research-norikhwan' && <NorikhwanResearchPage {...props} />}
        {currentPage === 'news' && <NewsPage {...props} />}
        {currentPage === 'services' && <ServicesPage {...props} />}
        {currentPage === 'vacancy' && <VacancyPage {...props} />}
        {currentPage === 'training' && <TrainingPage {...props} />}
        {currentPage === 'publication' && <PublicationPage {...props} />}
        {currentPage === 'expertise-showcase' && <ExpertiseShowcasePage {...props} />}
      </main>
    </div>
  );
}
