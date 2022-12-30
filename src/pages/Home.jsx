import "./Home.css"
import { AiOutlineSearch, AiOutlineCaretRight } from "react-icons/ai"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Home() {

    const [catsArray, setCatsArray] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [breedId, setBreedId] = useState('')

    useEffect(() => {

        const getCats = async () => {

            await axios.get("https://api.thecatapi.com/v1/breeds?limit=4").then((res) => {
                console.log(res?.data)
                setCatsArray(res?.data)
            })

        }

        getCats()

    }, [])

    useEffect(() => {

        console.log(searchInput.split(" "))
        if (searchInput.split(" ").length === 1) {
            setBreedId(searchInput.substring(0, 4))
        } else {
            setBreedId(`${searchInput.split(" ")[0].charAt(0)}${searchInput.split(" ")[1].substring(0, 3)}`)
        }

        console.log(breedId)

    }, [searchInput])

    const navigate = useNavigate()


    const navigateToSingleBreed = (name) => {
        if (name.split(" ").length === 1) {
            setBreedId(name.substring(0, 4))
        } else {
            setBreedId(`${name.split(" ")[0].charAt(0)}${name.split(" ")[1].substring(0, 3)}`)
        }

        breedId && navigate(`/breed/${breedId?.toLowerCase()}`)

    }


    return (

        <div className="home">

            <div className="home_hero">

                <div className="home_hero_column1">
                    <h2>Get to know more about your cat breed</h2>
                    <div className="home_hero_input">
                        <input type="text" placeholder="Search breed" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                        <AiOutlineSearch onClick={() => {
                            if (breedId) {
                                navigate(`/breed/${breedId.toLowerCase()}`)
                            } else {
                                alert("Breed name can't be empty!")
                            }
                        }} />
                    </div>
                </div>

                <div className="home_hero_column2"></div>

            </div>

            <div className="home_search">
                <h2>Most Searched Breeds</h2>

                <div className="home_search_title">
                    <h1>66+ Breeds For You to Discover</h1>
                    <h2 onClick={() => navigate("/breeds")} >SEE MORE  <AiOutlineCaretRight /></h2>
                </div>

                <div className="home_search_cats">
                    {catsArray.length > 0 && catsArray.map((cat) => {
                        return <div className="home_search_cats_box" onClick={() => navigateToSingleBreed(cat?.name)} >

                            <img src={`https://cdn2.thecatapi.com/images/${cat?.reference_image_id}.jpg`} />
                            <h2>{cat?.name}</h2>

                        </div>
                    })}
                </div>

            </div>

            <div className="home_cta">

                <div className="home_cta_column1">
                    <h1>Why should you have a cat?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex in sint autem accusantium quam quidem voluptatibus et iste dolor.</p>
                </div>

                <div className="home_cta_column2">
                    <div className="home_cta_column2_box1">
                        <img src="https://ik.imagekit.io/ayush2007/image_2_Ov4bZPghw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672113295900" className="home_cta_column2_box1_image1" />
                        <img src="https://ik.imagekit.io/ayush2007/image_1_BMkrKhuISD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672113295988" className="home_cta_column2_box1_image2" />
                    </div>
                    <div className="home_cta_column2_box2">
                        <img src="https://ik.imagekit.io/ayush2007/image_3_QOOW1dWmaH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672113295762" />
                    </div>
                </div>

            </div>

        </div>

    )
}
