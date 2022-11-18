import React from 'react';
import '../../assets/css/cari.css';
import '../../assets/css/styles.css';
import { Footer, FilterCars, Header2 } from '../../components';

function CarsFilter() {
  return (
    <div>
      <div>
        <Header2 />
      </div>
      <div>
        <FilterCars />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CarsFilter;
