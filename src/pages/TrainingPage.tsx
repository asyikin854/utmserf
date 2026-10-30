import { GraduationCap, Clock, BarChart3, Linkedin, Award, BookOpen } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { TRAINERS } from '../data';

interface Props { onNavigate: (p: Page) => void; }

export default function TrainingPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="Training Programs"
      breadcrumbs={[{ label: 'Home' }, { label: 'Training' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-10">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Professional Development</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Trainers &amp; Training Courses</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          HiREF offers specialized training programs led by our expert researchers. Each course combines theoretical foundations with hands-on laboratory practice, designed for engineers, researchers, and industry professionals working in thermofluid and combustion fields.
        </p>
      </div>

      <div className="space-y-12">
        {TRAINERS.map((trainer, i) => (
          <div key={i}>
            {/* Trainer profile card */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div className="grid md:grid-cols-[260px_1fr]">
                <div className="bg-gradient-to-br from-orange-50 to-gray-50 flex items-center justify-center p-6 min-h-[280px]">
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="w-full max-w-[220px] h-auto object-contain"
                    onError={(e) => { e.currentTarget.src = './MAWfrontnobg_half.png'; }}
                  />
                </div>
                <div className="p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1">{trainer.name}</h3>
                      <p className="text-orange-600 text-sm font-semibold mb-2">{trainer.title}</p>
                      <p className="text-gray-400 text-xs font-medium">{trainer.degrees}</p>
                    </div>
                    {trainer.linkedin && (
                      <a
                        href={trainer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-500 hover:text-white flex items-center justify-center transition-colors"
                        aria-label={`${trainer.name} LinkedIn`}
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-5">{trainer.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.expertise.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full">
                        <Award size={11} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Training courses under this trainer */}
            <div className="mt-6 rounded-2xl bg-orange-50/60 border border-orange-100 p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2 pl-1">
                  <BookOpen size={18} className="text-orange-500" />
                  <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-orange-800">Training Courses</h4>
                </div>
                <span className="text-xs font-bold text-orange-600 bg-white border border-orange-100 rounded-full px-3 py-1 whitespace-nowrap">
                  {trainer.courses.length} {trainer.courses.length === 1 ? 'course' : 'courses'}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {trainer.courses.map((course, ci) => (
                  <div key={ci} className="group bg-white border border-orange-100 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xs font-black shadow-sm">
                        {ci + 1}
                      </span>
                      <h5 className="font-bold text-gray-900 text-[15px] leading-snug">{course.title}</h5>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{course.desc}</p>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <span className="inline-flex items-center gap-1.5 text-gray-500">
                        <Clock size={12} className="text-orange-400" /> {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500">
                        <BarChart3 size={12} className="text-orange-400" /> {course.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="font-black text-lg mb-2">Interested in a Training Program?</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-xl">
              Contact us to enroll in a scheduled course, request a customized training program for your organization, or inquire about group rates and academic partnerships.
            </p>
            <a
              href="mailto:hirefofficial@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Contact HiREF
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
