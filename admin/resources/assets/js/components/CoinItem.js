import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberFormat from 'react-number-format';
import { Router, Route, Link, browserHistory } from 'react-router';

/* An example React component */
class CoinItem  extends Component {

    constructor(props){
        super(props);
        this.state = {
            change_1h : "red",
            change_24h : "red",
            change_7d : "red",
        }
    }

    componentDidMount(){
        if(this.props.data.percent_change_1h > 0) this.setState({change_1h : "green"});
        if(this.props.data.percent_change_24h > 0) this.setState({change_24h : "green"});
        if(this.props.data.percent_change_7d > 0) this.setState({change_7d : "green"});
    }

    render() {

        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */

            <tr key={this.props.data.id}>
                <td>{this.props.data.rank}</td>
                <td><img width="15px" src={this.props.image} />  <Link to={"/coin/"+this.props.data.id}><b>{this.props.data.name}</b></Link></td>
                <td>{this.props.data.symbol}</td>
                <td><NumberFormat value={this.props.data.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={3}/></td>
                <td style={{color:this.state.change_1h}}>{this.props.data.percent_change_1h}%</td>
                <td style={{color:this.state.change_24h}}>{this.props.data.percent_change_24h}%</td>
                <td style={{color:this.state.change_7d}}>{this.props.data.percent_change_7d}%</td>
                <td ><NumberFormat value={this.props.data.market_cap_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={0} /></td>
            </tr>  
        );
    }
}
 
export default CoinItem;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
// if (document.getElementById('root')) {
//     ReactDOM.render(<Main />, document.getElementById('root'));
// }