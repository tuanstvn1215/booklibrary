import React from 'react'
import config from '../../config'
import './Navigator.css'
import NavigatorItem from './NavigatorItem'
export default function Navigator(props) {
    const navigatorItem = [
        { title: 'TRANG CHỦ', link: config.link.home },
        { title: 'SÁCH', link: config.link.book },
        { title: 'VỀ CHÚNG TÔI', link: config.link.about },

        { title: 'LIÊN HỆ', link: config.link.contact },
    ]

    return (
        <div className='Navigator'>
            {navigatorItem.map((item, index) => (
                <NavigatorItem item={item} key={index} />
            ))}
        </div>
    )
}
