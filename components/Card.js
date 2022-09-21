import React from 'react'

export default function Card(props) {
    const { title, location, googleMapsUrl, 
        startDate, endDate, description, imageUrl } = props
        
    return (
        <div className="card">
            <div className="card-image">
                <img src={imageUrl} />
            </div>
            <div className="card-body">
                <p className="card-location">
                    <i className="fa-solid fa-location-dot"></i> {location}
                </p>
                <a className="card-map-url" href={googleMapsUrl}>View on Google Maps</a>
                <h1 className="card-title">{title}</h1>
                <p className="card-dates">{startDate} - {endDate}</p>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}
