import { useNavigate } from "react-router-dom"
import "./Header.css"

export default function Header() {

    const navigate = useNavigate()

    return (
        <header>
            <img onClick={() => navigate("/")} src="https://ik.imagekit.io/ayush2007/CatwikiLogo_1xFOmptbhE.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672113267883" />
        </header>
    )
}
