import React from 'react';
import '../Styles/Main.css';
import '../Styles/Center.css';


import { array } from './Main-data';

export default function Main() {   
    return (
        <div className='Content'>
            <div className='Main'>
                <div className='Main-content'>
                    {array.map((value, key) => {
                        return (<div className='Main-text' onClick={(e) => {
                                const d = document;
                                const query = d.querySelector('.Main-text:nth-child(2)');
                                
                                if(query.firstChild == e.target)
                                    query.classList.toggle('active');
                                    
                            }
                        }>
                            <h1 key={key}>
                                {value.title}
                            </h1>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}
