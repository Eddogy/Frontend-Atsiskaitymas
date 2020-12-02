import React from 'react';
import Navigation from '../../components/Navigation/Navigation'
import './About.scss'


class About extends React.Component {
    render(){ 
        return(
            <> 
                <Navigation history={this.props.history} about/>
                <div className='about'>
                    <h1 className='text'>Work done by Edgaras Mitkus, student of Kaunas Information Technology School</h1>
                </div>
            </>
        )
    }
}

export default About;