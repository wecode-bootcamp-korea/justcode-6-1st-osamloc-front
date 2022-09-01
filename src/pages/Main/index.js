import React from 'react';

import './index.scss';

import BannerSection from './BannerSection/BannerSection';
import BestSection from './BestSection/BestSection';
import CardSection from './CardSection/CardSection';
import MainSlide from './MainSlide/MainSlide';
import Notice from './Notice/Notice';
import RecordSection from './RecordSection/RecordSection';
import SubscribeSection from './SubscribeSection/SubscribeSection';

function Main() {
  return (
      <div className="main">
        <MainSlide />
        <Notice />
        <BestSection />
        <CardSection />
        <SubscribeSection />
        <RecordSection />
        <BannerSection />
      </div>
  );
}

export default Main;
