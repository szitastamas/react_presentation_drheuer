import React from 'react'

const AboutItem = ({ item }) => {
    return (
        <li className="collection-item">
            <span className={`title ${item.color}-text`}>
                <strong>{item.title.toUpperCase()}</strong>
            </span>
            <p>{item.description}</p>
        </li>
    )
}

export default AboutItem;

