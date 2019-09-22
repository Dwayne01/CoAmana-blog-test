import React from 'react';
import moment from 'moment'
export default class Header extends React.Component {

    render() {
        return (
           <div className="header">
               <h2 align="center" className="headerTitle">{this.props.body ? this.props.body.title.rendered : "Epower Blog"}</h2>
               {this.props.body && <p align="center" className="date">PUBLISHED ON {moment(this.props.body.date).format('MMMM DD, YYYY').toUpperCase()}</p>}
           </div> 
        );
    }
}