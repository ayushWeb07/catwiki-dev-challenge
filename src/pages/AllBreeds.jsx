import axios from "axios"
import { useEffect, useState, } from "react"
import "./AllBreeds.css"
import { useNavigate, Link } from "react-router-dom"


export default function AllBreeds() {

    const [breedId, setBreedId] = useState('')
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        const getAllBreeds = async () => {
            await axios.get("https://api.thecatapi.com/v1/breeds?limit=1000").then((res) => {
                console.log(res?.data)
                setBreeds(res?.data)
            })
        }
        getAllBreeds()
    }, [])


    const checkForImage = (breed) => {
        if (breed?.name === "Bengal") {
            return `https://cdn2.thecatapi.com/images/O3btzLlsO.png`
        }

        else if (breed?.name === "Devon Rex") {
            return `https://cdn2.thecatapi.com/images/4RzEwvyzz.png`
        }

        else if (breed?.name === "Korat") {
            return `https://cdn2.thecatapi.com/images/DbwiefiaY.png`
        }

        else if (breed?.name === "Malayan") {
            return `https://ik.imagekit.io/ayush2007/image_SM3SNfGAn.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672074114463`
        }

        else if (breed?.name === "European Burmese") {
            return `https://ik.imagekit.io/ayush2007/image_SM3SNfGAn.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672074114463`
        }

        else {
            return `https://cdn2.thecatapi.com/images/${breed?.reference_image_id}.jpg`
        }
    }

    const navigate = useNavigate()


    const navigateToSingleBreed = (name) => {

        if (name === "Dragon Li") {
            navigate('/breed/lihu')
        } else if (name === "Burmese") {
            navigate('/breed/bure')
        } else if (name === "Burmilla") {
            navigate('/breed/buri')
        } else if (name === "British Longhair") {
            navigate('/breed/bslo')
        } else if (name === "Colorpoint Shorthair") {
            navigate('/breed/csho')
        } else if (name === "Khao Manee") {
            navigate('/breed/khao')
        } else if (name === "Norwegian Forest Cat") {
            navigate('/breed/norw')
        }



        else {
            if (name.split(" ").length === 1) {
                setBreedId(name.substring(0, 4))
            } else {
                setBreedId(`${name.split(" ")[0].charAt(0)}${name.split(" ")[1].substring(0, 3)}`)
            }

            breedId && navigate(`/breed/${breedId?.toLowerCase()}`)
        }

    }



    return (
        <>
            {breeds.length > 0 && <div className="all_breeds" >

                <h1>Most searched breeds-</h1>

                <div className="all_breeds_section">

                    {breeds.length > 0 && breeds.map((breed, i) => {

                        return <div key={i} className="all_breads_section_breed">

                            <img src={checkForImage(breed)} onClick={() => navigateToSingleBreed(breed?.name)} />


                            <div className="all_breads_section_breed_content">
                                <h2 onClick={() => navigateToSingleBreed(breed?.name)} >{i + 1}. {breed?.name}</h2>
                                <p>{breed?.description}</p>

                            </div>

                        </div>

                    })}

                </div>

            </div>}
        </>
    )
}
