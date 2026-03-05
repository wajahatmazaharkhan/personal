import React from 'react';

export const Engagement: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            <h1 className="text-4xl font-black mb-12">Public Engagement</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: 'Keynote on Inclusive Policy Design', type: 'Public Speaking', date: 'Oct 2024' },
                    { title: 'Panel: Data & Democracy', type: 'Conference', date: 'Aug 2024' },
                    { title: 'Workshop on Qualitative Methods', type: 'Workshop', date: 'May 2024' },
                    { title: 'Guest Lecture Series', type: 'Education', date: 'Jan 2024' },
                ].map((item, i) => (
                    <div key={i} className="group overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-color)] hover:shadow-xl transition-all">
                        <div className="h-48 bg-[var(--border-color)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="px-3 py-1 bg-[var(--color-primary)] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                                    {item.type}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-sm font-semibold text-[var(--text-muted-color)]">{item.date}</span>
                            <h3 className="text-xl font-bold mt-2 group-hover:text-[var(--color-primary)] transition-colors">{item.title}</h3>
                            <button className="mt-6 text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest flex items-center hover:underline">
                                View Details
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
