import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage';
import ShopPage from '../src/pages/shop/shoppage';
import SignInAndSignUp from '../src/pages/signin-and-signup/signin-and-signup';
import CheckoutPage from './pages/checkout/checkoutpage';

import Header from '../src/components/header/header';

import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from '../src/redux/user/user.selector';
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';



import { GlobalStyle } from './global.styles';






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
      // addCollectionAndDocuments ('collections',collectionsArray.map(({title,items})=>({title,items})));


    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>


      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser
  // collectionsArray:selectCollectionsForPreview

});

const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
