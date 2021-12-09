import { useEffect, useState } from 'react';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import RevueForm from '../components/RevueForm.js';
import Parser from 'rss-parser';

export default function Home(props) {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    setShowTip(true);
  }, []);

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
              <li>
                <span style={{ marginRight: '10px' }}>🧑</span>
                28 years old
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>🇻🇳</span>
                From Vietnam
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>👨‍💻</span>
                Software Developer
              </li>

              <li>
                <span style={{ marginRight: '10px' }}>🔨</span>
                Full-time Indie Hacker
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>😻</span>
                Cats > Dogs
              </li>
            </ul>
          </section>
          <section>
            <h2>My Products</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🧰</span>
                  <a href="https://devutils.app">DevUtils.app</a>
                </div>
                <div className={styles.subtitle}>{props.devutils}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🎩</span>
                  <a href="https://blackmagic.so">BlackMagic.so</a>
                </div>
                <div className={styles.subtitle}>{props.blackmagic}</div>
              </li>
            </ul>
            <h2>Writings</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💌</span>
                  <a href="https://newsletter.tonydinh.com">Newsletter</a>
                </div>
                <div className={styles.subtitle}>{props.newsletter}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>✏️</span>
                  <a href="https://tonydinh.com/notes">Public Notes</a>
                </div>
                <div className={styles.subtitle}>Notes, tips, and FAQs</div>
              </li>
            </ul>
          </section>
          <section>
            <h2>Social Media</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🐦</span>
                  <a href="https://twitter.com/tdinh_me">Twitter</a>
                </div>
                <div className={styles.subtitle}>{props.tweets}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🎥</span>
                  <a href="https://www.youtube.com/tonydinh">YouTube</a>
                </div>
                <div className={styles.subtitle}>{props.youtube}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💼</span>
                  <a href="https://www.linkedin.com/in/tdinh-me/">LinkedIn</a>
                </div>
                <div className={styles.subtitle}>I post once a week</div>
              </li>
            </ul>
            <h2>Code</h2>
            <ul className={styles.list}>
              <li>
                <span style={{ marginRight: '10px' }}>⌨️</span>
                <a href="https://github.com/trungdq88">GitHub</a>
                <div className={styles.subtitle}>Last commit: Today</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🎆</span>
                  <a href="https://dinhquangtrung.net/">Fun Stuff</a>
                </div>
                <div className={styles.subtitle}>Click for surprise</div>
              </li>
            </ul>
          </section>
          <section>
            <h2>Other Places</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>😺</span>
                  <a href="https://www.producthunt.com/@trungdq88">
                    Product Hunt
                  </a>
                </div>
                <div className={styles.subtitle}>Products launched: 5</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💵</span>
                  <a href="https://tonydinh.gumroad.com/">Gumroad</a>
                </div>
                <div className={styles.subtitle}>Products created: 1</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🖼️</span>
                  <a href="https://opensea.io/tdinh_me">OpenSea.io</a>
                </div>
                <div className={styles.subtitle}>Minted: 2 items</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🔨</span>
                  <a href="https://www.indiehackers.com/tonidie">
                    Indie Hackers
                  </a>
                </div>
                <div className={styles.subtitle}>Mostly lurking 😅</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💰</span>
                  <a href="https://paypal.me/trungdq88">PayPal</a>
                </div>
                <div className={styles.subtitle}>Thanks for your tip!</div>
              </li>
            </ul>
          </section>
        </div>

        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <RevueForm />
        </div>

        <h2>Latest Updates 👇</h2>
        <div className={styles['issue-container']}>
          {props.latest.map((issue, i) => (
            <a key={i} href={issue.link} className={styles['issue-line']}>
              <div className={styles['issue-header']}>
                <div
                  style={{ backgroundColor: issue.color }}
                  className={styles['issue-source']}
                >
                  {issue.source}
                </div>
                <div className={styles['issue-date']}>
                  {moment(issue.isoDate).fromNow()}
                </div>
              </div>
              <div className={styles['issue-title']}>{issue.title}</div>
              <div className={styles['issue-snippet']}>
                {(issue.contentSnippet || '').substring(0, 100)}
                {(issue.contentSnippet || '').length > 100 ? '...' : ''}
              </div>
            </a>
          ))}
        </div>
      </main>

      {showTip ? (
        <ReactTooltip
          multiline={true}
          overridePosition={({ left, top }, _e, _t, node) => {
            return {
              top,
              left: typeof node === 'string' ? left : Math.max(left, 0),
            };
          }}
        />
      ) : null}

      <style global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        @media (prefers-color-scheme: dark) {
          html,
          body {
            color-scheme: dark;
            background: #141414;
            color: white;
          }
        }
      `}</style>
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
    parser.parseURL('https://newsletter.tonydinh.com/?format=rss'),
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
      latest: [
        ...devutils.items.map((item) => ({
          ...item,
          source: 'DevUtils Product Updates',
          color: '#5ba533',
        })),
        ...blackmagic.items.map((item) => ({
          ...item,
          source: `BlackMagic.so Product Updates`,
          color: '#333333',
        })),
        ...newsletter.items.map((item) => ({
          ...item,
          source: `Tony Dinh's Newsletter`,
          color: '#5383ec',
        })),
        ...youtube.items.map((item) => ({
          ...item,
          source: `Tony Dinh's Youtube Channel`,
          color: '#ea3323',
        })),
      ].sort(
        (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
      ),
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
