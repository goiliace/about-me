import React from "react";
import './index.css'
import About from "./components/about/About";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Experience } from "./components/experience/Experience";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { ChatWidget } from "./components/chat-widget/ChatWidget";
const App = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Nav />
                <ChatWidget/>
                <About />
                <Experience />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </>
    )
};

export default App;
