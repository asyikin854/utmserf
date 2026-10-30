import { Award, MapPin, Mail } from 'lucide-react';

export default function SiteFooter() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <div className="flex justify-center sm:justify-start items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                <Award size={15} className="text-white" />
              </div>
              <p className="text-white font-bold text-base">Office Hours</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Monday to Friday: 9am – 5pm<br />
              Saturday and Sunday: Closed<br />
              Public Holiday: Closed
            </p>
          </div>
          <div>
            <div className="flex justify-center sm:justify-start items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                <MapPin size={15} className="text-white" />
              </div>
              <p className="text-white font-bold text-base">Location</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              SERF, Block E06, School of Mechanical Engineering<br />
              Faculty of Engineering,<br />
              Universiti Teknologi Malaysia<br />
              81310 Skudai Johor
            </p>
          </div>
          <div>
            <div className="flex justify-center sm:justify-start items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                <Mail size={15} className="text-white" />
              </div>
              <p className="text-white font-bold text-base">Contact Us</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Email: hirefofficial@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SERF – Universiti Teknologi Malaysia. All rights reserved.
        </div>
      </div>
    </div>
  );
}
