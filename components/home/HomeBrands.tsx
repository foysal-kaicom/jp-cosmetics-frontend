import React from 'react';
import WebPageWrapper from '../WebPageWrapper';

const HomeBrands = () => {
  return (
    <WebPageWrapper>
      <div className="grid grid-cols-6">
      {/* Loop 6 times to match v-for="value in 6" */}
      {[...Array(6)].map((_, index) => (
        <div key={index}>
          <img
            // In Next.js, 'public' is the root. 
            // Assuming you want the same /assets structure as before:
            src="/assets/img/brands/brand-3_170X128@2x.avif"
            alt=""
            className="w-full object-scale-down scroll-fade-up"
          />
        </div>
      ))}
    </div>
    </WebPageWrapper>
  );
};

export default HomeBrands;