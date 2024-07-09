"use client"

import "../globals.css"
import { useRouter } from "next/navigation"

const Header = () => {

    const router = useRouter()

    return (
        <>
            <div className="header">
                <p onClick={() => router.push("/jet")}>Jet</p>
                <p onClick={() => router.push("/stone-valley")}>Stones</p>
                <p onClick={() => router.push("/monster")}>Monster</p>
                <p onClick={() => router.push("/valley")}>Valley</p>
            </div>
        </>
    )
}

export default Header