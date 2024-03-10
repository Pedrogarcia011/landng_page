import React from "react";
import "./styles.css";
import Footer from "./Componentes/footer/Footer"
import Header from "./Componentes/Header"
import Card from "./Componentes/Card"
import ContactContainer from "./Componentes/ContactContainer"

export default function App() {
    return (
        <div id='body'>
            <Header />

            <Card
                className='section'
                title='About the Company'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
            <ContactContainer />
            <Footer />
        </div>
    );
}














