"use client"

import "../globals.css";
import Header from "../components/Header";
import CanvasComponent from "../components/CanvasComponent"
import { Valley } from "../components/models/Valley";

const Page = () => {
    return (
        <>
            <Header />
            <div id="canvas-container" style={{ width: "100vw", height: "90vh" }}>
                <CanvasComponent>
                    <Valley />
                </CanvasComponent>
            </div>
        </>
    );
}

export default Page;