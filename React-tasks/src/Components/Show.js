import React from 'react'
import { head } from './Headbar-data';
import Main from './Main';
import Steps from './Steps';

import '../Styles/Center.css';

export default function Show() {
    {
        const wPath = window.location.pathname;
        if(wPath === '/' + head[0].href) 
            return (
                <Main />
            )
        
        if(wPath === '/' + head[1].href)
            return (
                <h1 className='Main h1'>Форму не сделал на реакте</h1>
            )
            
        if(wPath === '/' + head[2].href)
            return (
                <Steps />
            )
        
        return <h1 className='Main h1'>Hello</h1>
    } 

}
