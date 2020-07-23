import React from 'react';
import { useMedia } from 'react-media';
import { MEDIA_QUERIES } from 'constants/mediaQueries';
import DesktopNews from './Desktop';
import MobileNews from './Mobile';

const News = () => {
  const matches = useMedia({ queries: MEDIA_QUERIES });
  return (
    <>
      {matches.large && <DesktopNews />}
      {matches.small && <MobileNews />}
    </>
  );
};

export default News;
