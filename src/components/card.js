import React from "react"
import Image from "./image"
import { Link } from "gatsby"



const Card = ({carYear, carBrand, carModel}) => (
    <Link to="/pdp">
        <div style={cardStyle}>
            <div style={{maxWidth:`300px`}}>
                <Image />
            </div>
            {carYear},{carBrand}, {carModel}
        </div>

    </Link>
)

const cardStyle = {
    background: "#fff",
    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.18)",
    width: "100%",
    height: 240
}

export default Card