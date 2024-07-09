"use client"

import "../globals.css";
import Header from "../components/Header";
import CanvasComponent from "../components/CanvasComponent"
import { StoneValley } from "../components/models/StoneValley";

const Page = () => {
    return (
        <>
            <Header />
            <div id="canvas-container" style={{ width: "100vw", height: "90vh" }}>
                <CanvasComponent>
                    <StoneValley />
                </CanvasComponent>
            </div>
        </>
    );
}

export default Page;