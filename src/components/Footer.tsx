import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full mt-auto py-12 flex flex-col items-center border-t border-[var(--border-color)]">
            <div className="w-full max-w-4xl px-4 flex flex-col md:flex-row items-center justify-between mb-8">
                <Link to="/" className="text-3xl font-black font-sans tracking-tight flex items-baseline whitespace-nowrap mb-6 md:mb-0">
                    WM Khan<span className="text-[#F15A29] text-3xl leading-[0]">.</span>
                </Link>
                <a
                    href="mailto:contact@wajahatmkhan.com"
                    className="bg-[#E5E5E5]/60 hover:bg-[#E5E5E5] dark:bg-[var(--card-color)] dark:hover:bg-[var(--border-color)] text-[var(--text-color)] text-sm font-bold px-6 py-2 rounded-full transition-colors"
                >
                    contact@wajahatmkhan.com
                </a>
            </div>
            <p className="text-[11px] font-medium text-[var(--text-muted-color)] pt-6 border-t border-[var(--border-color)] w-full text-center">
                Copyright © {new Date().getFullYear()} WM Khan. All Rights Reserved.
            </p>
        </footer>
    );
};
