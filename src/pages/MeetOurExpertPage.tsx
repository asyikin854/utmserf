import { Linkedin, Mail, GraduationCap, ExternalLink, BookOpen, FlaskConical } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { EXPERTS } from '../data';

interface Props { onNavigate: (p: Page) => void; }

export default function MeetOurExpertPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="Meet Our Expert"
      breadcrumbs={[{ label: 'Home' }, { label: 'Our Expert' }, { label: 'Meet Our Expert' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-8">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Researchers</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Expert Profiles</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          Our team comprises internationally trained researchers with doctoral degrees from world-leading universities in the UK, USA, Japan, and Malaysia.
        </p>
      </div>

      <div className="space-y-6">
        {[...EXPERTS].sort((a, b) =>
          a.name.replace(a.title, '').trim().localeCompare(b.name.replace(b.title, '').trim())
        ).map((expert, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-[260px_1fr]">
              {/* Photo */}
              <div className="bg-gradient-to-br from-orange-50 to-gray-50 flex items-center justify-center p-6 min-h-[280px]">
                <img
                  src={expert.photo}
                  alt={expert.name}
                  className="w-full max-w-[220px] h-auto object-contain"
                  onError={e => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=300';
                    e.currentTarget.className = 'w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow';
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8">
                {/* Name + Links */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-black text-gray-900">{expert.name.replace(expert.title, '').trim()}</h3>
                    <p className="text-orange-500 text-xs font-semibold mt-0.5">{expert.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{expert.affiliation}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {expert.linkedin && (
                      <a
                        href={expert.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#0077B5] flex items-center justify-center hover:bg-[#005f91] transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Linkedin size={14} className="text-white" />
                      </a>
                    )}
                    {expert.scholarProfile && (
                      <a
                        href={expert.scholarProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                        title="Google Scholar Profile"
                      >
                        <GraduationCap size={14} className="text-white" />
                      </a>
                    )}
                    {expert.utmScholar && (
                      <a
                        href={expert.utmScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#5c001f] flex items-center justify-center hover:bg-[#7a0029] transition-colors"
                        title="UTM Scholar Profile"
                      >
                        <BookOpen size={14} className="text-white" />
                      </a>
                    )}
                    {expert.utmDirectory && (
                      <a
                        href={expert.utmDirectory}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors"
                        title="UTM Staff Directory"
                      >
                        <ExternalLink size={14} className="text-white" />
                      </a>
                    )}
                    {expert.orcid && (
                      <a
                        href={expert.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#A6CE39] flex items-center justify-center hover:bg-[#8fb82f] transition-colors"
                        title="ORCID Profile"
                      >
                        <img src="./assets/images/images.png" alt="ORCID" className="w-5 h-5 rounded-full" />
                      </a>
                    )}
                    <a
                      href={`mailto:${expert.email}`}
                      className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      title="Email"
                    >
                      <Mail size={14} className="text-gray-600" />
                    </a>
                  </div>
                </div>

                {/* Degrees */}
                <div className="flex items-start gap-2 mb-3">
                  <GraduationCap size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-gray-500 text-xs leading-relaxed">{expert.degrees}</p>
                </div>

                {/* Bio */}
                <div className="mb-3">
                  <span className="text-gray-900 text-xs font-bold uppercase tracking-wide">Biography</span>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1 whitespace-pre-line">{expert.bio}</p>
                </div>

                {/* Research Focus */}
                <div className="bg-orange-50 rounded-lg px-4 py-3">
                  <span className="text-orange-600 text-xs font-bold uppercase tracking-wide">Research Focus</span>
                  <p className="text-gray-700 text-sm leading-relaxed mt-1">{expert.research}</p>
                </div>

                {/* Link to publications */}
                {expert.publications.length > 0 && (
                  <button
                    onClick={() => onNavigate('publication')}
                    className="mt-3 flex items-center gap-2 text-orange-500 text-xs font-bold hover:text-orange-600 transition-colors"
                  >
                    <BookOpen size={14} />
                    View {expert.publications.length} publication{expert.publications.length !== 1 ? 's' : ''} in the Publication page
                  </button>
                )}

                {/* Link to research activities */}
                {expert.researchPage && (
                  <button
                    onClick={() => onNavigate(expert.researchPage!)}
                    className="mt-2 flex items-center gap-2 text-orange-500 text-xs font-bold hover:text-orange-600 transition-colors"
                  >
                    <FlaskConical size={14} />
                    View Research Activities
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
