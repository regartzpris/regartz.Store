import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import ShopPage from '../src/pages/shop/shoppage';
import Header from '../src/components/header/header';
import SignInAndSignUp from '../src/pages/signin-and-signup/signin-and-signup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';










class App extends React.Component {



  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser:user});
      // createUserProfileDocument(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()

          })


        })
      }

      setCurrentUser(userAuth);


    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />

        </Switch>


      </div>
    );
  }
}



const mapStateToProps = ({ user }) => ({

  currentUser: user.currentUser

});

const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
