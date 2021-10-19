import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import RevueForm from '../components/RevueForm.js';

export default function Home() {
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
                🧰 <a href="https://devutils.app">DevUtils.app</a>
              </li>
              <li>
                🎩 <a href="https://blackmagic.so">BlackMagic.so</a>
              </li>
              <li>
                💌 <a href="https://news.tonydinh.com">Newsletter</a>
              </li>
              <li>
                🎆 <a href="https://dinhquangtrung.net/">Fun Stuff</a>
              </li>
            </ul>
          </section>
          <section>
            <h2>Social Media</h2>
            <ul className={styles.list}>
              <li>
                🐦 <a href="https://twitter.com/tdinh_me">Twitter</a>
              </li>
              <li>
                🎥 <a href="https://www.youtube.com/tonydinh">YouTube</a>
              </li>
              <li>
                👨‍💻 <a href="https://github.com/trungdq88">GitHub</a>
              </li>
              <li>
                💼 <a href="https://www.linkedin.com/in/tdinh-me/">LinkedIn</a>
              </li>
            </ul>
          </section>
          <section>
            <h2>Other Places</h2>
            <ul className={styles.list}>
              <li>
                😺{' '}
                <a href="https://www.producthunt.com/@trungdq88">
                  Product Hunt
                </a>
              </li>
              <li>
                💵 <a href="https://tdinh.gumroad.com/">Gumroad</a>
              </li>
              <li>
                🖼️ <a href="https://opensea.io/tdinh_me">OpenSea.io</a>
              </li>
              <li>
                🔨{' '}
                <a href="https://www.indiehackers.com/tonidie">Indie Hackers</a>
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
