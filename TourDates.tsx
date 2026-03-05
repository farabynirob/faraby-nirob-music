import { SITE_CONFIG } from '../constants';
import { ExternalLink } from 'lucide-react';

export const TourDates = () => {
  return (
    <section id="tour" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-4">Tour Dates</h2>
        <p className="text-white/40">Catch me live in your city.</p>
      </div>

      <div className="space-y-4">
        {SITE_CONFIG.tourDates.length > 0 ? (
          SITE_CONFIG.tourDates.map((tour) => (
            <div
              key={tour.id}
              className="flex flex-col md:flex-row items-center justify-between p-6 glass-card hover:bg-white/5 transition-colors group"
            >
              <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0 text-center md:text-left">
                <div className="text-2xl font-display font-bold text-white/80 w-24">
                  {tour.date}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{tour.venue}</h3>
                  <p className="text-white/40">{tour.location}</p>
                </div>
              </div>

              <div className="mt-6 md:mt-0">
                <a
                  href={tour.link}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center space-x-2 ${
                    tour.status === 'Tickets' 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  <span>{tour.status}</span>
                  {tour.status === 'Tickets' && <ExternalLink size={14} />}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 glass-card border-dashed">
            <p className="text-white/60 text-lg italic">
              I am currently not available for any tours. Stay tuned for future updates!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
