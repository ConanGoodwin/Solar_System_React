import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import dataPlanet from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {dataPlanet.map((item) => <PlanetCard planetName={item.name} planetImage={item.image} />)}
      </div>
    );
  }
}

export default SolarSystem;
