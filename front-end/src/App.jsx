import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';

// Placeholder Pages - We will implement these individually
// const Home = () => <div className="section container"><h1>Home Page</h1></div>;

import Causes from './pages/Causes';

// const Home = () => <div className="section container"><h1>Home Page</h1></div>;

import About from './pages/About';
import Programs from './pages/Programs';
import Impact from './pages/Impact';

// const Home = () => <div className="section container"><h1>Home Page</h1></div>;

// const About = () => <div className="section container"><h1>About Us</h1></div>;
// const Programs = () => <div className="section container"><h1>Our Programs</h1></div>;
// const Causes = () => <div className="section container"><h1>Causes</h1></div>;
// const Impact = () => <div className="section container"><h1>Impact & Stories</h1></div>;

import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

// const Volunteer = () => <div className="section container"><h1>Get Involved</h1></div>;
// const Donate = () => <div className="section container"><h1>Donate</h1></div>;
// const Contact = () => <div className="section container"><h1>Contact Us</h1></div>;

import Blog from './pages/Blog';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

// const Blog = () => <div className="section container"><h1>Blog & News</h1></div>;
// const Events = () => <div className="section container"><h1>Events</h1></div>;
// const Gallery = () => <div className="section container"><h1>Gallery</h1></div>;

import Team from './pages/Team';
import Partners from './pages/Partners';
import Testimonials from './pages/Testimonials';
import Financials from './pages/Financials';
import Resources from './pages/Resources';
import Horizons from './pages/Horizons';
import FAQ from './pages/FAQ';
import WomenSkillDev from './pages/WomenSkillDev';
import CourseDetails from './pages/CourseDetails';
import GeneralProgramDetails from './pages/GeneralProgramDetails';
import Registration from './pages/Registration';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Celebrations from './pages/Celebrations';
import Awards from './pages/Awards';
import CSR from './pages/CSR';
import Admin from './pages/Admin';
import ScholarshipPortal from './pages/ScholarshipPortal';

// const Team = () => <div className="section container"><h1>Team</h1></div>;
// const Partners = () => <div className="section container"><h1>Partners</h1></div>;
// const Testimonials = () => <div className="section container"><h1>Testimonials</h1></div>;
// const Financials = () => <div className="section container"><h1>Financial Transparency</h1></div>;
// const Resources = () => <div className="section container"><h1>Resources</h1></div>;


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
        <Route path="/causes" element={<PageTransition><Causes /></PageTransition>} />
        <Route path="/impact" element={<PageTransition><Impact /></PageTransition>} />
        <Route path="/volunteer" element={<PageTransition><Volunteer /></PageTransition>} />
        <Route path="/donate" element={<PageTransition><Donate /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
        <Route path="/partners" element={<PageTransition><Partners /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
        <Route path="/financials" element={<PageTransition><Financials /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/horizons" element={<PageTransition><Horizons /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/celebrations" element={<PageTransition><Celebrations /></PageTransition>} />
        <Route path="/awards" element={<PageTransition><Awards /></PageTransition>} />
        <Route path="/csr" element={<PageTransition><CSR /></PageTransition>} />
        <Route path="/programs/women-skill-dev" element={<PageTransition><WomenSkillDev /></PageTransition>} />
        <Route path="/programs/women-skill-dev/:courseId" element={<PageTransition><CourseDetails /></PageTransition>} />
        <Route path="/programs/:programId" element={<PageTransition><GeneralProgramDetails /></PageTransition>} />
        <Route path="/registration" element={<PageTransition><Registration /></PageTransition>} />
        <Route path="/scholarship" element={<PageTransition><ScholarshipPortal /></PageTransition>} />

        {/* Legal Pages */}
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><Cookies /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        {isHomePage && <NewsTicker />}
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
