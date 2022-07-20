import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { data } = this.props;
    const { name, year, country, destination } = data;

    return (
      <div data-testid="mission-card">
        <p>{ name }</p>
        <p>{ year }</p>
        <p>{ country }</p>
        <p>{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionCard;
