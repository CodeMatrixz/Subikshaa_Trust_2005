import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => document.body.classList.remove('menu-open');
    }, [isOpen]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Causes', path: '/causes' },
        { name: 'Programs', path: '/programs' },
        { name: 'Events', path: '/events' },
        { name: 'Scholarship', path: '/scholarship' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <img src="/images/assets/logo_v2.jpg" alt="Subikshaa Trust Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path}>{link.name}</Link>
                    ))}
                </div>

                <div className="nav-actions desktop-only">
                    <Link to="/volunteer" className="btn btn-outline">Volunteer</Link>
                    <Link to="/donate" className="btn btn-primary">Contribute</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Premium Full Screen Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className="mobile-menu-overlay"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <div className="mobile-menu-links">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link to={link.path} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div 
                                className="mobile-menu-actions"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link to="/volunteer" className="btn btn-outline" onClick={() => setIsOpen(false)}>
                                    Volunteer
                                </Link>
                                <Link to="/donate" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                                    Contribute
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
