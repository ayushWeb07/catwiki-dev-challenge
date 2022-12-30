import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./SingleBreed.css"
import axios from "axios"

export default function SingleBreed() {

    const [breed, setBreed] = useState(null)
    const [breedImages, setBreedImages] = useState([])
    const { breedId } = useParams()
    let statsArr = ['a', 'a', 'a', 'a', 'a']

    useEffect(() => {

        const getBreed = async () => {
            await axios.get(`https://api.thecatapi.com/v1/breeds/${breedId}`).then((res) => {
                console.log(res?.data)
                setBreed(res?.data)
            })
        }

        breedId && getBreed()

    }, [breedId])


    useEffect(() => {

        const getBreedImages = async () => {
            await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=100`).then((res) => {
                console.log(res?.data)
                setBreedImages(res?.data)
            })
        }

        breedId && getBreedImages()

    }, [breedId])

    const navigate = useNavigate()

    return (
        <>

            {breed !== null && Object?.keys(breed)?.length !== 0 ? <>
                <div className="breed_hero">
                    <img src={breedImages[0]?.url} />

                    <div className="breed_hero_content">

                        <h1>{breed?.name}</h1>

                        <p>{breed?.description}</p>

                        <h2><span>Temperament:</span> {breed?.temperament}</h2>

                        <h2><span>Origin:</span> {breed?.origin}</h2>

                        <h2><span>Life span:</span> {breed?.life_span}</h2>

                        <h2><span>Adaptability:</span> <div className="breed_stars">
                            {statsArr.map((stat, i) => {
                                if (i < breed?.adaptability) {
                                    return <div className="breed_star" style={{ backgroundColor: "#544439" }} />
                                } else {
                                    return <div className="breed_star" />
                                }
                            })}
                        </div></h2>

                        <h2><span>Affection level:</span> <div className="breed_stars">
                            {statsArr.map((stat, i) => {
                                if (i < breed?.affection_level) {
                                    return <div className="breed_star" style={{ backgroundColor: "#544439" }} />
                                } else {
                                    return <div className="breed_star" />
                                }
                            })}
                        </div></h2>

                        <h2><span>Child friendly:</span> <div className="breed_stars">
                            {statsArr.map((stat, i) => {
                                if (i < breed?.child_friendly) {
                                    return <div className="breed_star" style={{ backgroundColor: "#544439" }} />
                                } else {
                                    return <div className="breed_star" />
                                }
                            })}
                        </div></h2>

                        <h2><span>Grooming:</span> <div className="breed_stars">
                            {statsArr.map((stat, i) => {
                                if (i < breed?.grooming) {
                                    return <div className="breed_star" style={{ backgroundColor: "#544439" }} />
                                } else {
                                    return <div className="breed_star" />
                                }
                            })}
                        </div></h2>

                        <h2><span>Intelligence:</span> <div className="breed_stars">
                            {statsArr.map((stat, i) => {
                                if (i < breed?.intelligence) {
                                    return <div className="breed_star" style={{ backgroundColor: "#544439" }} />
                                } else {
                                    return <div className="breed_star" />
                                }
                            })}
                        </div></h2>


                        <h2><span>Health issues:</span> <div className="breed_stars">
                            {statsArr.map((stat, i) => {
                                if (i < breed?.health_issues) {
                                    return <div className="breed_star" style={{ backgroundColor: "#544439" }} />
                                } else {
                                    return <div className="breed_star" />
                                }
                            })}
                        </div></h2>

                        <h2><span>Social needs:</span> <div className="breed_stars">
                            {statsArr.map((stat, i) => {
                                if (i < breed?.social_needs) {
                                    return <div className="breed_star" style={{ backgroundColor: "#544439" }} />
                                } else {
                                    return <div className="breed_star" />
                                }
                            })}
                        </div></h2>

                        <h2><span>Stranger friendly:</span> <div className="breed_stars">
                            {statsArr.map((stat, i) => {
                                if (i < breed?.stranger_friendly) {
                                    return <div className="breed_star" style={{ backgroundColor: "#544439" }} />
                                } else {
                                    return <div className="breed_star" />
                                }
                            })}
                        </div></h2>

                    </div>

                </div>

                <div className="breed_photos">
                    <h2>Other photos</h2>
                    <div className="breed_photos_section">
                        {breedImages?.length > 0 ? breedImages.map((image) => {
                            return <img src={image?.url} />
                        }) : <p>No images to show</p>}
                    </div>
                </div>
            </> : <p style={{ padding: "10% 5%", color: "#291507", fontSize: "18px", fontWeight: "500" }} >No search breed like that. View the <span style={{ cursor: "pointer", borderBottom: "3px solid #291507" }} onClick={() => navigate("/breeds")} >available breeds!</span></p>}

        </>
    )
}
