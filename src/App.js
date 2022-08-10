/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
================================================== */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'; 

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: '',
        memberSince: '8/3/2022',
      },
      creditsList: [],
      debitsList: [],
    }
  }

  async componentDidMount() {
    let linkToCreditAPI = 'https://moj-api.herokuapp.com/credits'; 
    let linkToDebitAPI = 'https://moj-api.herokuapp.com/debits'; 
    let creditsAmount = 0;
    let debitsAmount = 0; 
  
    try {
      let responseCredit = await axios.get(linkToCreditAPI);
      this.setState({creditsList: responseCredit.data});
      for (let i=0; i < this.state.creditsList.length; i++) {
        creditsAmount += this.state.creditsList[i].amount;
      }
      let responseDebit = await axios.get(linkToDebitAPI);
      this.setState({debitsList: responseDebit.data});
      for (let j=0; j < this.state.debitsList.length; j++) {
        debitsAmount += this.state.debitsList[j].amount;
      }
    } 
    catch (error) {
      if (error.responseCredit) {
        console.log(error.responseCredit.data);  
        console.log(error.responseCredit.status); 
      }    
      if (error.responseDebit) {
        console.log(error.responseDebit.data);  
        console.log(error.responseDebit.status); 
      }    
    }
    let balance = creditsAmount - debitsAmount;
    this.setState({accountBalance: balance.toFixed(2)});
  }  
  
  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser});
  }

  addDebit = (userInput) => {
    let newDebit = Object.assign({},userInput)
    let debits = this.state.debitsList;
    debits.push(newDebit);
    this.setState({debitsList: debits});
    let newBalance = Number(this.state.accountBalance) - Number(newDebit.amount);
    this.setState({accountBalance: newBalance.toFixed(2)});
  }

  updateDebit = (e) => {
    e.preventDefault();
    let today = new Date().toISOString();
    let newDebit = {
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: today,
      id: today
    }
    this.addDebit(newDebit);
  }

  
  addCredit = (userInput) => {
    let newCredit = Object.assign({}, userInput);
    let credits = this.state.creditsList;
    credits.push(newCredit);
    this.setState({creditsList: credits});
    let newBalance = Number(this.state.accountBalance) + Number(newCredit.amount);
    this.setState({accountBalance: newBalance.toFixed(2)});
  }
  updateCredit = (e) => {
    e.preventDefault();
    let today = new Date().toISOString();
    let newCredit = {
      amount: e.target.amount.value,
      description: e.target.description.value, 
      date: today,
      id: today
    }
    this.addCredit(newCredit);
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);  // Pass props to "LogIn" component
    const DebitComponent = () => (<Debits debits={this.state.debitsList} addDebit={this.addDebit} updateDebit={this.updateDebit}
    accountBalance={this.state.accountBalance}/>);
    const CreditComponent = () => (<Credits credits={this.state.creditsList} updateCredit={this.updateCredit}
    addCredit={this.addCredit} accountBalance={this.state.accountBalance}/>);
    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/my-react-app">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditComponent}/>
          <Route exact path="/debits" render={DebitComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;