import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import RevueForm from '../components/RevueForm.js';
import Parser from 'rss-parser';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tony Dinh</title>
        <meta
          name="description"
          content="Welcome to my corner of the internet"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <img className={styles.avatar} src="/tonydinh.png" />
          <h1 className={styles.title}>Tony Dinh</h1>
          <p>Welcome to my corner of the internet!</p>
        </section>
        <div className={styles.sections}>
          <section>
            <h2>About Me</h2>
            <ul className={styles.list}>
              <li>👴 28 years old</li>
              <li>🇻🇳 From Vietnam</li>
              <li>👨‍💻 Software Developer</li>

              <li>🔨 Full-time Indie Hacker</li>
              <li>😻 Cats > Dogs</li>
            </ul>
          </section>
          <section>
            <h2>My Products</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  🧰 <a href="https://devutils.app">DevUtils.app</a>
                </div>
                <div className={styles.subtitle}>{props.devutils}</div>
              </li>
              <li>
                <div>
                  🎩 <a href="https://blackmagic.so">BlackMagic.so</a>
                </div>
                <div className={styles.subtitle}>{props.blackmagic}</div>
              </li>
              <li>
                <div>
                  💌 <a href="https://news.tonydinh.com">Newsletter</a>
                </div>
                <div className={styles.subtitle}>{props.newsletter}</div>
              </li>
              <li>
                <div>
                  🎆 <a href="https://dinhquangtrung.net/">Fun Stuff</a>
                </div>
                <div className={styles.subtitle}>Click for surprise</div>
              </li>
            </ul>
          </section>
          <section>
            <h2>Social Media</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  🐦 <a href="https://twitter.com/tdinh_me">Twitter</a>
                </div>
                <div className={styles.subtitle}>{props.tweets}</div>
              </li>
              <li>
                <div>
                  🎥 <a href="https://www.youtube.com/tonydinh">YouTube</a>
                </div>
                <div className={styles.subtitle}>{props.youtube}</div>
              </li>
              <li>
                👨‍💻 <a href="https://github.com/trungdq88">GitHub</a>
                <div className={styles.subtitle}>Last commit: Today</div>
              </li>
              <li>
                <div>
                  💼{' '}
                  <a href="https://www.linkedin.com/in/tdinh-me/">LinkedIn</a>
                </div>
                <div className={styles.subtitle}>I post once a week</div>
              </li>
            </ul>
          </section>
          <section>
            <h2>Other Places</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  😺{' '}
                  <a href="https://www.producthunt.com/@trungdq88">
                    Product Hunt
                  </a>
                </div>
                <div className={styles.subtitle}>Products launched: 5</div>
              </li>
              <li>
                <div>
                  💵 <a href="https://tdinh.gumroad.com/">Gumroad</a>
                </div>
                <div className={styles.subtitle}>Products created: 1</div>
              </li>
              <li>
                <div>
                  🖼️ <a href="https://opensea.io/tdinh_me">OpenSea.io</a>
                </div>
                <div className={styles.subtitle}>Minted: 2 items</div>
              </li>
              <li>
                <div>
                  🔨{' '}
                  <a href="https://www.indiehackers.com/tonidie">
                    Indie Hackers
                  </a>
                </div>
                <div className={styles.subtitle}>Mostly lurking</div>
              </li>
            </ul>
          </section>
        </div>

        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <RevueForm />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const parser = new Parser();
  const [
    devutils,
    blackmagic,
    newsletter,
    youtube,
    tweets,
  ] = await Promise.all([
    parser.parseURL('https://devutils.app/changelog.rss'),
    parser.parseURL('https://newsletter.blackmagic.so/?format=rss'),
    parser.parseURL('https://newsletter.tdinh.me/?format=rss'),
    parser.parseURL(
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCYOiXua3ot8x7D9uF7ipUPg'
    ),
    fetch(
      'https://api.blackmagic.so/get_tweets_last_24hrs?id=331379561'
    ).then((r) => r.json()),
  ]);

  return {
    props: {
      devutils: `Last version: ${fromNow(new Date(devutils.items[0].isoDate))}`,
      blackmagic: `Last update: ${fromNow(
        new Date(blackmagic.items[0].isoDate)
      )}`,
      newsletter: `Last issue: ${fromNow(
        new Date(newsletter.items[0].isoDate)
      )}`,
      youtube: `Last video: ${fromNow(new Date(youtube.items[0].isoDate))}`,
      tweets: `${tweets.count} tweets last 48hrs`,
    },
  };
}

function fromNow(
  date,
  nowDate = Date.now(),
  rft = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })
) {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;
  const intervals = [
    { ge: YEAR, divisor: YEAR, unit: 'year' },
    { ge: MONTH, divisor: MONTH, unit: 'month' },
    { ge: WEEK, divisor: WEEK, unit: 'week' },
    { ge: DAY, divisor: DAY, unit: 'day' },
    { ge: HOUR, divisor: HOUR, unit: 'hour' },
    { ge: MINUTE, divisor: MINUTE, unit: 'minute' },
    { ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
    { ge: 0, divisor: 1, text: 'just now' },
  ];
  const now =
    typeof nowDate === 'object'
      ? nowDate.getTime()
      : new Date(nowDate).getTime();
  const diff =
    now - (typeof date === 'object' ? date : new Date(date)).getTime();
  const diffAbs = Math.abs(diff);
  for (const interval of intervals) {
    if (diffAbs >= interval.ge) {
      const x = Math.round(Math.abs(diff) / interval.divisor);
      const isFuture = diff < 0;
      return interval.unit
        ? rft.format(isFuture ? x : -x, interval.unit)
        : interval.text;
    }
  }
}
