import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import data from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {data.map((item) => <MissionCard key={ item.name } data={ item } />)}
      </div>
    );
  }
}

export default Missions;
