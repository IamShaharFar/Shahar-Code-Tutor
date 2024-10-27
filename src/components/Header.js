import React, { useState, useCallback, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { FaLaptopCode, FaBookOpen } from 'react-icons/fa'; // Import the icons
import '../App.css';

function Header() {
    const [expanded, setExpanded] = useState(false);
    const [offset, setOffset] = useState(-70); // Default offset for desktop
    const [animateButton, setAnimateButton] = useState(false);

    const handleToggle = useCallback(() => {
        setExpanded(!expanded);
    }, [expanded]);

    const handleClose = useCallback(() => {
        setExpanded(false);
    }, []);

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth < 768) {
                // For mobile devices, adjust the offset for the navbar height
                setOffset(-50);
            } else {
                // For tablets and desktops
                setOffset(-70);
            }
        };

        updateOffset(); // Set initial offset based on window width
        window.addEventListener('resize', updateOffset); // Update offset when window is resized

        return () => {
            window.removeEventListener('resize', updateOffset);
        };
    }, []);

    const handleLinkClick = useCallback((to) => {
        // Close the navbar with a delay, then scroll
        setExpanded(false);
        setTimeout(() => {
            document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Adjust the delay to match the collapse animation duration
    }, []);

    // Add animation to the button at random intervals between 1 and 2 seconds
    useEffect(() => {
        const randomInterval = Math.random() * 1000 + 1000; // Between 1000ms (1s) and 2000ms (2s)
        const timer = setTimeout(() => {
            setAnimateButton(true);
            setTimeout(() => setAnimateButton(false), 500); // Remove animation class after 500ms
        }, randomInterval);

        return () => clearTimeout(timer);
    }, [animateButton]);

    return (
        <>
            <Helmet>
                <meta name="description" content="לימודי מחשבים והנדסת תוכנה עם שחר - מורה פרטי לשיעורים פרטיים, לימוד בזום, והכנה למבחנים." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index, follow" />

                {/* Favicon for browser tab */}
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
                <link rel="manifest" href="/site.webmanifest" />

                {/* Open Graph tags for social media link previews */}
                <meta property="og:title" content="שחר - מורה פרטי למחשבים והנדסת תוכנה" />
                <meta property="og:description" content="לימודי מחשבים והנדסת תוכנה באווירה אישית - שיעורים פרטיים עם שחר." />
                <meta property="og:image" content="/android-chrome-512x512.png" />
                <meta property="og:url" content="https://shaharcode.co.il" />
                <meta property="og:type" content="website" />

                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="שחר - מורה פרטי למחשבים והנדסת תוכנה" />
                <meta name="twitter:description" content="לימודי מחשבים והנדסת תוכנה באווירה אישית - שיעורים פרטיים עם שחר." />
                <meta name="twitter:image" content="/android-chrome-512x512.png" />
            </Helmet>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded}>
                <Container>
                    <Navbar.Brand onClick={() => handleLinkClick('home')} className="brand cursor-pointer">
                        <FaLaptopCode className="brand-icon ms-2" /> {/* Added icon */}
                        <span className="brand-text">שחר - מורה פרטי</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center me-3">
                            <Nav.Link as="span" className="cursor-pointer" onClick={() => handleLinkClick('home')}>
                                בית
                            </Nav.Link>
                            <Nav.Link as="span" className="cursor-pointer" onClick={() => handleLinkClick('about')}>
                                קצת עליי
                            </Nav.Link>
                            <Nav.Link as="span" className="cursor-pointer" onClick={() => handleLinkClick('services')}>
                                שיעורים
                            </Nav.Link>
                            <Nav.Link as="span" className="cursor-pointer" onClick={() => handleLinkClick('testimonials')}>
                                המלצות
                            </Nav.Link>
                            <Nav.Link as="span" className="cursor-pointer" onClick={() => handleLinkClick('contact')}>
                                יצירת קשר
                            </Nav.Link>
                        </Nav>
                        <Button
                            variant="success"
                            className={`ms-3 mt-2 mt-lg-0 ${animateButton ? 'animate-call-to-action' : ''}`}
                            onClick={() => handleLinkClick('contact')}
                        >
                            <FaBookOpen className="ms-2" /> {/* Added icon */}
                            קבע שיעור ראשון
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
