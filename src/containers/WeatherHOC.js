import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getWeatherReport } from 'store/Weather';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getWeatherReport,
    },
    dispatch,
  );
};
const mapStateToProps = (state, props) => {
  const selectedUnit = state.settings.tempUnit;
  const storedWeatherData = state.weather;
  return {
    selectedUnit,
    storedWeatherData,
  };
};

// Render prop component to render the component depending on the state
class WeatherHOC extends PureComponent {
  state = { content: null, selectedUnit: this.props.selectedUnit };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedUnit !== prevState.selectedUnit) {
      return { selectedUnit: nextProps.selectedUnit };
    } else return null;
  }

  fetchWeather = async () => {
    const {
      onLoading,
      onLoadComplete,
      onError,
      getWeatherReport,
      selectedUnit,
      url,
      provider,
    } = this.props;
    try {
      this.setState({ content: onLoading() });
      const weatherInformation = await getWeatherReport(url, provider);
      this.setState({
        content: onLoadComplete(weatherInformation, selectedUnit),
      });
    } catch (e) {
      this.setState({ content: onError(e.message) });
    }
  };

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedUnit !== prevProps.selectedUnit) {
      const {
        storedWeatherData,
        provider,
        onLoadComplete,
        selectedUnit,
      } = this.props;
      this.setState({
        ...this.state,
        content: onLoadComplete(storedWeatherData[provider].data, selectedUnit),
      });
    }
  }

  render() {
    return this.state.content;
  }
}

WeatherHOC.propTypes = {
  url: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  onLoading: PropTypes.func.isRequired,
  onLoadComplete: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherHOC);
