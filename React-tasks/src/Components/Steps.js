import React from 'react'
import '../Styles/Main.css';
import '../Styles/Center.css';
import '../Styles/Step.css';

export default function Steps() {

    return (
        <div className='Content'>
            <div className='Main Main_step'>
                {
                    Array.from({length: 3}).map((_, keys) => {           
                        return(
                            <div className='Main_block'>
                                <h1 key={keys}>Шаг {keys + 1}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
