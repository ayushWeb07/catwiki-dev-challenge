import "./Footer.css"
import logo from "../assets/CatwikiLogo.svg"
import { useNavigate } from "react-router-dom"

export default function Footer() {

    const navigate = useNavigate()

    return (
        <footer>
            <img src="https://ik.imagekit.io/ayush2007/CatwikiLogo_1xFOmptbhE.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672113267883" onClick={() => navigate("/")} />
            <h2>Coded by Ayush</h2>
        </footer>
    )
}
