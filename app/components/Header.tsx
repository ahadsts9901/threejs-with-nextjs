"use client"
import "../globals.css"
import { useRouter } from "next/navigation"

const Header = () => {

    const router = useRouter()

    return (
        <>
            <div className="header">
                <p onClick={() => router.push("/jet")}>Jet</p>
            </div>
        </>
    )
}

export default Header