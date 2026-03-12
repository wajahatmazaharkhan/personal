import React from 'react';
import { fullResearchInterests as interests } from '../data/research';

export const Research: React.FC = () => {

    return (
        <div id="research" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            <h1 className="text-4xl font-black mb-12 text-center">Research Interests</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {interests.map((item, i) => (
                    <div key={i} className="bg-[var(--card-color)] border border-[var(--border-color)] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6">
                            <item.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-[var(--text-muted-color)] leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
