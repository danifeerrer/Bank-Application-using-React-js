// src/components/Credits.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credits extends Component {
  // Create the list of Credit items
	creditsView = () => {
    const credits = this.props.credits;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <ol key={credit.id}>{credit.amount} {credit.description} {date}</ol>
    }) 
  }

  // Render the list of Credit items and a form to input new Credit item
  render() {
    return (
      <div>
        <h1>Credits</h1>
        <hr/>
        {this.creditsView()}
        <br/>
        <form onSubmit={this.props.updateCredit}> 
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

export default Credits;
