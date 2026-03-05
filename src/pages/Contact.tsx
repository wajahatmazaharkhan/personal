import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in text-center">
            <h1 className="text-4xl font-black mb-6">Get in Touch</h1>
            <p className="text-lg text-[var(--text-muted-color)] mb-12">
                Interested in collaborating, speaking engagements, or exploring policy research together? Feel free to reach out.
            </p>

            <div className="bg-[var(--card-color)] border border-[var(--border-color)] p-8 md:p-12 rounded-3xl max-w-2xl mx-auto shadow-xl">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center">
                        <Mail className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold">Email Me</h2>
                    <a href="mailto:hello@wmkhan.com" className="text-xl md:text-3xl font-black text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors">
                        hello@wmkhan.com
                    </a>

                    <div className="flex items-center text-[var(--text-muted-color)] mt-8 pt-8 border-t border-[var(--border-color)] w-full justify-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Based in London, UK</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
