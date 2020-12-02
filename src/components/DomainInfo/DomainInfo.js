import React from 'react';
import './DomainInfo.scss';

function DomainInfo (props) {
    return(
        <div className="info">
            <p>Domain: {props.domain}</p>
            <p>create_date: {props.create_date ? props.create_date : "No Date"}</p>
            <p>country: {props.country ? props.country : "No country"}</p>
            <p>A: {props.A ? props.A : "No A"}</p>
            <p>NS: {props.NS ? props.NS : "No NS"}</p>
            <p>CNAME: {props.CNAME ? props.CNAME : "No CNAME"}</p>
        </div>
    )
}

export default DomainInfo;