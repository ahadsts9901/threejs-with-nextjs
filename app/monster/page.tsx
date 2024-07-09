"use client"

import "../globals.css";
import Header from "../components/Header";
import CanvasComponent from "../components/CanvasComponent"
import { Monster } from "../components/models/Monster";

const Page = () => {
    return (
        <>
            <Header />
            <div id="canvas-container" style={{ width: "100vw", height: "90vh" }}>
                <CanvasComponent>
                    <Monster />
                </CanvasComponent>
            </div>
        </>
    );
}

export default Page;