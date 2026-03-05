import React from 'react';

export const About: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            <h1 className="text-4xl font-black mb-8 border-b border-[var(--border-color)] pb-4">About Me</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-muted-color)] whitespace-pre-line">
                <p className="mb-6">
                    I am a public policy researcher dedicated to unraveling the complex dynamics of gender,
                    social exclusion, and institutional design. My approach combines rigorous quantitative
                    analysis with deep qualitative insights to uncover not just what is happening, but why.
                </p>
                <p className="mb-6">
                    Throughout my career, I have collaborated with leading organizations and governments
                    to translate empirical findings into actionable policy recommendations. I believe that
                    effective policy must be grounded in the lived experiences of marginalized communities.
                </p>
            </div>
        </div>
    );
};
