import styles from './News.module.css';
import Marquee from 'react-fast-marquee';
import React from 'react';
import { useStore } from '../../hooks/useStore';

const News = () => {
  const { news, newsMarqueeIsEnabled } = useStore();

  const newsMarqueeIsVisible = newsMarqueeIsEnabled ? 'block' : 'none';

  return (
    <div
      className={styles.root}
      style={{ display: newsMarqueeIsVisible }}
    >
      <Marquee
        gradient={false}
        speed={5}
        play={newsMarqueeIsEnabled}
      >
        {news?.map((item) => (
          <div
            className={styles.newsItem}
            key={item.title}
          >
            {item.title}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default News;
