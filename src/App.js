import React, { Suspense } from 'react';
import './App.css';
import ProfileConteiner from './progect/ProfileConteiner';
import NavBar from './progect/NavBar';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import UsersConteiner from './Users/UsersConteiner';
import HeaderContainer from './progect/HeaderContainer';
import Login from './login/login';
import { initializedApp } from './app-reducer'
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Users/common/preloader/Preloader';
import store from './redux-store';

const DialogContainer = React.lazy(() => import("./DialogContainer"))

class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp()
  }

  render() {
    if (this.props.initialized) {
      return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/dialog' render={() =>{ return( <Suspense fallback={<div>Loading...</div>}> <DialogContainer /></Suspense>)}} />
            <Route path='/profile/:userId?' render={() => <ProfileConteiner />} />
            <Route path='/users' render={() => <UsersConteiner />} />
            <Route path='/news' render={() => <ProfileConteiner />} />
            <Route path='/music' render={() => <ProfileConteiner />} />
            <Route path='/settings' render={() => <ProfileConteiner />} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>

      );
    }
    return <Preloader />

  }
}
let mapStateToProps = (state) => ({
  initialized: state.appPage.initialized
})
let AppContainer = compose(withRouter(connect(mapStateToProps, { initializedApp })(App)))


let AppMain = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default AppMain