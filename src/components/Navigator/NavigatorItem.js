import React from 'react'
import { Link } from 'react-router-dom'
import './NavigatorItem.css'
export default function NavigatorItem(props) {
    const { link, title } = props.item

    return (
        <div className='NavigatorItem'>
            <Link to={link}>{title}</Link>
        </div>
    )
}
