import React from 'react';
import './Navigation.scss'

function Navigation(props){
    
    const changeRoute = url =>{
        props.history.push(url);
    };

    return(
        <div className='navDesktop'>
            {props.about ? <p className='active'>About</p> :
            <p onClick={()=> changeRoute('/about')}>
                About
            </p>
            }
            {
            props.home ? <p className='active'>Home</p> : 
            <p onClick={()=> changeRoute('/')}>
                Home
            </p> 
            }
            {props.savedDomains ? <p className='active'>Saved Domains</p> :
            <p onClick={()=> changeRoute('/saveddomains')}>
                Saved Domains
            </p>
            }
        </div>
    );
}

export default Navigation;