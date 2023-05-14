import { useEffect, useState } from 'react';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import SubscribeForm from '../components/SubscribeForm.js';
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
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="yojqyHBKGLOMJXGFnwWwP3IIWL7E8Ohv"
        ></script>
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <img className={styles.avatar} src="/tonydinh.png" />
          <h1 className={styles.title}>Tony Dinh</h1>
          <p>Welcome to my corner of the internet!</p>
        </section>
        <div style={{ marginBottom: 30 }}>
          {[
            {
              link: 'https://news.tonydinh.com',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>💌</span>
                  Monthly Newsletter (My Story)
                </span>
              ),
            },
            {
              link: 'https://typingmind.com',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>🧠</span> Typing Mind
                  (Better UI for ChatGPT)
                </span>
              ),
            },
            {
              link: 'https://devutils.app',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>🧰</span> Developer Toolbox
                  (macOS app)
                </span>
              ),
            },
            {
              link: 'https://blackmagic.so',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>✨</span> Black Magic
                  (Twitter SaaS)
                </span>
              ),
            },
            {
              link: 'https://xnapper.com',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>📸</span> Beautiful
                  screenshots (macOS app)
                </span>
              ),
            },
            {
              link: 'https://tdinh.notion.site/Tony-s-Notes-d1db498a88a9454abcc014fdd7a73f0c',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>✏️</span> Micro-blog (FAQs,
                  Notes)
                </span>
              ),
            },
            {
              link: 'https://twitter.com/tdinh_me',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>❤️</span> Find me on Twitter
                </span>
              ),
            },
          ].map((item) => (
            <a className={styles.bio_link} key={item.link} href={item.link}>
              {item.title}
            </a>
          ))}
        </div>
        <div className={styles.sections}>
          <section>
            <h2>About Me</h2>
            <ul className={styles.list}>
              <li>
                <span style={{ marginRight: '10px' }}>🧑</span>
                29 years old
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
                  <span style={{ marginRight: '10px' }}>🧠</span>
                  <a href="https://www.typingmind.com">TypingMind.com</a>
                </div>
                <div className={styles.subtitle}>A better UI for ChatGPT!</div>
              </li>
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
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>📸</span>
                  <a href="https://xnapper.com">Xnapper</a>
                </div>
                <div className={styles.subtitle}>Released recently!</div>
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
            <h2>Social Media</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🐦</span>
                  <a href="https://twitter.com/tdinh_me">Twitter</a>
                </div>
                <div className={styles.subtitle}>{props.tweets}</div>
              </li>
              {/*
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>⌨️</span>
                  <a href="https://twitch.tv/tonyisstreaming">Twitch.tv</a>
                </div>
                <div className={styles.subtitle}>Stream on weekends</div>
              </li>
              */}
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🖼️</span>
                  <a href="https://instagram.com/tdinh_me">Instagram</a>
                </div>
                <div className={styles.subtitle}>Infrequent travel pics</div>
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
          </section>
          <section>
            <h2>Writings</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💌</span>
                  <a href="https://news.tonydinh.com">Newsletter</a>
                </div>
                <div className={styles.subtitle}>{props.newsletter}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>✏️</span>
                  <a href="https://tdinh.notion.site/Tony-s-Notes-d1db498a88a9454abcc014fdd7a73f0c">
                    Public Notes
                  </a>
                </div>
                <div className={styles.subtitle}>Notes, tips, and FAQs</div>
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
                <div className={styles.subtitle}>Products created: 3</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🔨</span>
                  <a href="https://www.indiehackers.com/tonydinh">
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
          <SubscribeForm />
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
      <style jsx global>{`
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
  try {
    const parser = new Parser();
    const [devutils, blackmagic, newsletter, youtube, tweets] =
      await Promise.all([
        parser.parseURL('https://devutils.app/changelog.rss'),
        null, // parser.parseURL('https://newsletter.blackmagic.so/?format=rss'),
        parser.parseURL('https://news.tonydinh.com/feed'),
        parser.parseURL(
          'https://www.youtube.com/feeds/videos.xml?channel_id=UCYOiXua3ot8x7D9uF7ipUPg'
        ),
        fetch(
          'https://api.blackmagic.so/get_tweets_last_24hrs?id=331379561'
        ).then((r) => r.json()),
      ]);

    return {
      props: {
        devutils: `Last version: ${fromNow(
          new Date(devutils.items[0].isoDate)
        )}`,
        blackmagic: `Last update: last week`,
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
          // ...blackmagic.items.map((item) => ({
          //   ...item,
          //   source: `BlackMagic.so Product Updates`,
          //   color: '#333333',
          // })),
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
          (a, b) =>
            new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
        ),
      },
    };
  } catch (e) {
    console.error(e);
  }
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
