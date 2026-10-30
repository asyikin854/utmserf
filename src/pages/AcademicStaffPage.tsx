import { ExternalLink, Mail } from 'lucide-react';
import type { Page } from '../types';
import PageLayout from '../components/PageLayout';
import { ACADEMIC_STAFF } from '../data';

interface Props { onNavigate: (p: Page) => void; }

function StaffTable({ title, rows }: { title: string; rows: typeof ACADEMIC_STAFF.fellows }) {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-bold text-orange-500 mb-4 pb-2 border-b border-orange-100">{title}</h3>
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-5 py-3.5 text-gray-500 font-semibold text-xs tracking-wide uppercase">Name</th>
              <th className="text-left px-5 py-3.5 text-gray-500 font-semibold text-xs tracking-wide uppercase">Role</th>
              <th className="text-left px-5 py-3.5 text-gray-500 font-semibold text-xs tracking-wide uppercase">Email</th>
              <th className="text-left px-5 py-3.5 text-gray-500 font-semibold text-xs tracking-wide uppercase">Research Record</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {rows.map((s, i) => (
              <tr key={i} className="bg-white hover:bg-orange-50/30 transition-colors">
                <td className="px-5 py-4 font-semibold text-gray-900">{s.name}</td>
                <td className="px-5 py-4 text-gray-500">{s.role}</td>
                <td className="px-5 py-4">
                  <a href={`mailto:${s.email}`} className="flex items-center gap-1.5 text-orange-500 hover:text-orange-600 transition-colors">
                    <Mail size={13} /> {s.email}
                  </a>
                </td>
                <td className="px-5 py-4">
                  <a
                    href={`https://utmscholar.utm.my/Scholar/ScholarInfoDetails/${s.profileId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-orange-500 transition-colors text-xs font-medium"
                  >
                    UTM Scholar <ExternalLink size={11} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AcademicStaffPage({ onNavigate }: Props) {
  return (
    <PageLayout
      title="Organization Structure — Academic Staff"
      breadcrumbs={[{ label: 'Home' }, { label: 'About Us' }, { label: 'Organization Structure' }, { label: 'Academic Staff' }]}
      onNavigate={onNavigate}
    >
      <div className="mb-8">
        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Team</span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Academic Staff</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
          HiREF is led by a team of highly qualified academics from the Department of Thermofluid, School of Mechanical Engineering, Universiti Teknologi Malaysia.
        </p>
      </div>

      <StaffTable title="Research Fellows" rows={ACADEMIC_STAFF.fellows} />
      <StaffTable title="Associate Research Fellows" rows={ACADEMIC_STAFF.associates} />
    </PageLayout>
  );
}
