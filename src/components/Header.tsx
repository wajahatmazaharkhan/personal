import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Research', path: '#research' },
    { name: 'Experience', path: '#experience' },
    { name: 'Engagement', path: '#engagement' },
    { name: 'Contact', path: '#contact' },
];

export const Header: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <header className="w-full max-w-6xl bg-[var(--bg-color)]/90 backdrop-blur-md border border-[var(--border-color)] rounded-[32px] shadow-sm px-6 lg:px-10 py-3 flex items-center justify-between transition-colors duration-300">

                {/* Logo */}
                <Link to="/" className="text-xl md:text-2xl font-bold font-sans tracking-tight flex items-baseline whitespace-nowrap">
                    WM Khan<span className="text-[#F15A29] text-3xl leading-[0]">.</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex flex-1 justify-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className={`text-[15px] font-medium transition-colors hover:text-[#F15A29] ${link.name === 'Home' ? 'text-[#F15A29]' : 'text-[var(--text-color)]'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-end">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2.5 rounded-full bg-[var(--card-color)] hover:bg-[var(--border-color)] text-[var(--text-color)] transition-colors border border-[var(--border-color)]"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>

            </header>
        </div>
    );
};
