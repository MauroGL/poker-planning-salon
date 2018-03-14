/* eslint-disable no-console */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions.
import { navigateTo, updateUserName } from '../../actions/index';

// Components.
import StandardInput from '../../components/StandardInput/StandardInput';

// Styles.
import './start.scss';
import DefaultButton from '../../components/DefaultButton/DefaultButton';

class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bgimg w3-green w3-display-container w3-text-white w3-center">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          Logo
        </div>
        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">{'Poker Planning Salon'}</h1>
          <hr className="w3-border-grey hr-large" />
          <label className="w3-large">{'First, Enter you name:'}</label>
          <StandardInput
            onChange={this.props.typing.updateUserName}
            userName={this.props.userName}
          />
          {(this.props.userName && this.props.userName.length > 2) ?
            <DefaultButton
              onClick={() => {
                this.props.navigation.navigateTo('home');
              }}
            >
              {'Click to begin!'}
            </DefaultButton> :
            null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: (state.userName !== null) ? state.userName : state.defaultUserName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigation: {
      navigateTo: (path) => dispatch(navigateTo(path))
    },
    typing: {
      updateUserName: (userName) => dispatch(updateUserName(userName))
    }
  };
};

Start.propTypes = {
  navigation: PropTypes.shape({
    navigateTo: PropTypes.func
  }),
  typing: PropTypes.shape({
    updateUserName: PropTypes.func
  }),
  userName: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
