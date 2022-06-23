import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Service />
            <Projects />
            <Blog />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;