import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from '../src/pages/shop/shoppage';
import Header from '../src/components/header/header';
import SignInAndSignUp from '../src/pages/signin-and-signup/signin-and-signup';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';









class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){

    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      // this.setState({currentUser:user});
      // createUserProfileDocument(user);

      if(userAuth) {
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          // console.log(snapShot);
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()

            }
          },()=>{console.log(this.state)});

        })
      }

      this.setState({currentUser:userAuth});

      
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />

        </Switch>


      </div>
    );
  }
}
export default App;
