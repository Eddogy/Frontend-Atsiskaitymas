import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner' 
import './HomePage.scss'
import Navigation from '../../components/Navigation/Navigation'
import DomainInfo from '../../components/DomainInfo/DomainInfo'
import axios from 'axios'

class Home extends React.Component {
    state = { 
        text: '',
        loading: false,
        error: '',
        domain_info: 0
    };

    handleInput = (event)=>{
        this.setState({
            text: event.target.value
        })
    };

    handleSaveButton = ()=>{
        localStorage.setItem(this.state.domain_info.domain,JSON.stringify(this.state.domain_info))
        this.props.history.push('/saveddomains')
    };

    handleSearchButton = () =>{
        this.setState({loading: true,error:false});
        axios.get('https://api.domainsdb.info/v1/domains/search?domain='+this.state.text)
        .then(response=>{
            let temp = false;
            response.data.domains.map(domain=>{
                if(domain.domain===this.state.text){
                    this.setState({
                        domain_info: domain,
                        loading: false
                    })
                   return temp = true;
                }
            });
            //console.log(response.data.domains[0])
            if (temp === false ){
                this.setState({
                    domain_info: response.data.domains[0],
                    loading: false
                })
            }
        })
        .catch(err=>{
            console.log(err)
            this.setState({
                loading: false,
                error: err
            })
        })
    }

    render(){
        return(
            <>
            <Navigation history={this.props.history} home/>
            <div className='home'>
                <Form>
                    <Form.Group>
                        <Form.Control onChange={this.handleInput} value={this.state.text} type="text" placeholder="Enter a domain. For example kitm.lt"/>
                    </Form.Group>
                </Form>
            </div>
            
           {this.state.loading ?<div className='button'>
                <Spinner animation="border" role="status"/>
            </div> :
                      <div className='button'>
                <Button onClick={this.handleSearchButton}>Search Domain</Button>
            </div>
            }
            {
                this.state.domain_info ? 
                <div style={{marginTop: '5%'}}>
                    <DomainInfo domain={this.state.domain_info.domain} create_date={this.state.domain_info.create_date ? this.state.domain_info.create_date.split('T')[0] : 0} country={this.state.domain_info.country} A={this.state.domain_info.A} NS={this.state.domain_info.NS} CNAME={this.state.domain_info.CNAME} />
                    <div className='button' style={{marginTop: '5%'}}>
                        <Button onClick={this.handleSaveButton}>Save Domain!</Button>
                    </div>
                </div>
                : null 
            } 
            {
                this.state.error ?
                <p style={{textAlign: 'center'}}>Sorry we can't find your domain :(</p> :
                null
            }
            </>
        );
    }

};

export default Home;