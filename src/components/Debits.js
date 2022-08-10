/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Debits extends Component {
	debitsView = () => {
    const debits = this.props.debits;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <ol key={debit.id}>{debit.amount} {debit.description} {date}</ol>
    }) 
  }

  render() {
    return (
      <div>
        <h1>Debits</h1>
        <hr/>
        {this.debitsView()}
        <br/>
        <form onSubmit={this.props.updateDebit}> 
          <label htmlFor="description">Description:</label>
          <input type="text" placeholder='Enter a description' name="description" />
          <label htmlFor="amount">Amount:</label>
          <input type="number" placeholder='Enter an amount'step="0.1" name="amount" />
          <button type="submit">Submit</button>
        </form>
        <h2><AccountBalance accountBalance={this.props.accountBalance}/></h2>
        <hr/>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Debits;