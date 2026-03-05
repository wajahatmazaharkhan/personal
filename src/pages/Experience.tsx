import React from 'react';

export const Experience: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            <div className="flex items-center justify-between mb-12">
                <h1 className="text-4xl font-black">Experience</h1>
                <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm">
                    Download CV
                </button>
            </div>

            <div className="space-y-6">
                {[
                    { role: 'Senior Policy Researcher', org: 'Institute for Governance', period: '2023 - Present', tags: ['Research', 'Policy'] },
                    { role: 'Data Analyst Fellow', org: 'Global Development Bank', period: '2021 - 2023', tags: ['Data', 'Economics'] },
                    { role: 'Research Assistant', org: 'University Research Center', period: '2019 - 2021', tags: ['Academic'] },
                ].map((exp, i) => (
                    <div key={i} className="bg-[var(--card-color)] border border-[var(--border-color)] p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[var(--color-primary)] transition-colors cursor-pointer group">
                        <div>
                            <h3 className="text-xl font-bold group-hover:text-[var(--color-primary)] transition-colors">{exp.role}</h3>
                            <p className="text-[var(--text-muted-color)] mt-1">{exp.org} • <span className="text-sm border border-[var(--border-color)] px-2 py-0.5 rounded ml-2">{exp.period}</span></p>
                        </div>
                        <div className="flex gap-2">
                            {exp.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--color-primary)] rounded-full text-xs font-semibold uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
