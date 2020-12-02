import React from 'react';
import Navigation from '../../components/Navigation/Navigation'
import DomainInfo from '../../components/DomainInfo/DomainInfo'
import cancel from '../../images/cancel.png'
import './SavedDomains.scss'

class SavedDomains extends React.Component {
    state = {
        domains: []
    }

    componentDidMount(){
        this.updateComponent()
    }

    updateComponent = ()=>{
        let array = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        while (i--){
            array.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        this.setState({
            domains: array
        })
    }

    deleteButton = (key)=>{
        localStorage.removeItem(key);  
        this.updateComponent()     
    }

    render(){
        return(
            <>
            <Navigation history={this.props.history} savedDomains/>
            {
                this.state.domains.map(domain=>{
                    return (
                    <div key={domain.domain}>
                        <div className='delete'>
                            <img onClick={()=>this.deleteButton(domain.domain)} src={cancel}/> 
                        </div>
                        <div style={{marginTop: '5%'}}>
                            <DomainInfo domain={domain.domain} create_date={domain.create_date} country={domain.country} A={domain.A} NS={domain.NS} CNAME={domain.NS}/>
                        </div>
                    </div>
                    )
                })
            }
            </>
        );
    }
}

export default SavedDomains;