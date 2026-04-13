import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <img src="/images/assets/logo_v2.jpg" alt="Subikshaa Trust Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <Link to="/about">About</Link>
                    <Link to="/causes">Causes</Link>
                    <Link to="/programs" className="nav-item-programs">Programs</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/csr" className="nav-item-csr">CSR</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/scholarship" className="nav-item-scholarship" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Scholarship</Link>
                </div>

                <div className="nav-actions desktop-only">
                    <Link to="/volunteer" className="btn btn-outline">Volunteer</Link>
                    <Link to="/donate" className="btn btn-primary">Contribute</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link to="/causes" onClick={() => setIsOpen(false)}>Causes</Link>
                        <Link to="/programs" onClick={() => setIsOpen(false)}>Programs</Link>
                        <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
                        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                        <Link to="/csr" onClick={() => setIsOpen(false)}>CSR</Link>
                        <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        <div className="mobile-actions">
                            <Link to="/scholarship" className="btn btn-outline" onClick={() => setIsOpen(false)} style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>Scholarship Portal</Link>
                            <Link to="/volunteer" className="btn btn-outline" onClick={() => setIsOpen(false)}>Volunteer</Link>
                            <Link to="/donate" className="btn btn-primary" onClick={() => setIsOpen(false)}>Contribute</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
