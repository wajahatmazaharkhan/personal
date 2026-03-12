import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/navigation';

export const Header: React.FC = () => {
    const [isDark, setIsDark] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }

        // Intersection Observer for highlighting nav links
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of the viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections that have IDs matching our nav links
        navLinks.forEach((link) => {
            const id = link.path.replace('#', '');
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        // Also handle the initial hash if present
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) setActiveSection(hash);
            else setActiveSection('home');
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Run once on mount

        return () => {
            observer.disconnect();
            window.removeEventListener('hashchange', handleHashChange);
        };
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
                    {navLinks.map((link) => {
                        const sectionId = link.path.replace('#', '');
                        const isActive = activeSection === sectionId || (activeSection === '' && link.name === 'Home');

                        return (
                            <a
                                key={link.name}
                                href={link.path}
                                className={`text-[15px] font-medium transition-colors hover:text-[#F15A29] ${isActive ? 'text-[#F15A29]' : 'text-[var(--text-color)]'
                                    }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
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
