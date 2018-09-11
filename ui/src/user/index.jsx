import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RouteOrRedirect from '../common/components/RouteOrRedirect';
import LoginPage from './containers/LoginPage';
import ProfilePage from './containers/ProfilePage';
import PrivateRoute from '../common/PrivateRoute';
import LocalLoginPage from './containers/LocalLoginPage';

class User extends Component {
  render() {
    const { loggedIn, previousUrl } = this.props;
    return (
      <div className="w-100">
        <RouteOrRedirect
          exact
          path="/user/login"
          condition={!loggedIn}
          component={LoginPage}
          redirectTo={previousUrl}
        />
        {process.env.NODE_ENV === 'development' && (
          <RouteOrRedirect
            exact
            path="/user/login/local"
            condition={!loggedIn}
            component={LocalLoginPage}
            redirectTo={previousUrl}
          />
        )}
        <PrivateRoute exact path="/user/profile" component={ProfilePage} />
      </div>
    );
  }
}

User.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  previousUrl: PropTypes.string.isRequired,
};

const stateToProps = state => ({
  loggedIn: state.user.get('loggedIn'),
  previousUrl: state.router.location.previousUrl,
});

export default connect(stateToProps)(User);
