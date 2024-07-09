"use client"

import "../globals.css";
import Header from "../components/Header";
import CanvasComponent from "../components/CanvasComponent"
import { FighterJet } from "../components/models/FighterJet";

const Page = () => {
    return (
        <>
            <Header />
            <div id="canvas-container" style={{ width: "100vw", height: "90vh" }}>
                <CanvasComponent>
                    <FighterJet />
                </CanvasComponent>
            </div>
        </>
    );
}

export default Page;