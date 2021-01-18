import React from 'react'
import Main from './Main';

import { head } from './Headbar-data';


import '../Styles/Headbar.css';
import '../Styles/Center.css';
export default function Headbar() {
    return (
        <div className='Content'>
            <div className='Headbar'>
                <ul>
                    {head.map((value, key) => {
                        return(
                            <li key={key}
                            onClick={(e) => {
                                    window.location.pathname = value.href
                                    }
                                }>
                                <div id='icon'>
                                    {value.icon}
                                </div>
                                    
                                <div id='title'>
                                    {value.title}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
