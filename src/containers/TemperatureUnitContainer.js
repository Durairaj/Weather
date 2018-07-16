import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTempUnit } from 'store/Settings';
import UnitDropDown from 'components/UnitDropdown';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeTempUnit,
    },
    dispatch,
  );
};

const mapStateToProps = (state, props) => {
  const initialUnitSelection = state.settings.tempUnit;
  return {
    initialUnitSelection,
  };
};

class TemperatureUnitContainer extends Component {
  render() {
    const { initialUnitSelection, changeTempUnit } = this.props;
    return (
      <UnitDropDown
        defaultUnit={initialUnitSelection}
        handleUnitChange={changeTempUnit}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemperatureUnitContainer);
