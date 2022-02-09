import { useState } from 'react';

const isValid = (email) => email && email.indexOf('@') > -1;

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(
    <div>
      I write once a month ❤️{' '}
      <a
        href="https://newsletter.tonydinh.com/?utm_source=embed"
        target="_blank"
      >
        (See previous issues)
      </a>
    </div>
  );

  const submit = async () => {
    setLoading(true);
    setMessage('Please wait...');
    try {
      await fetch('https://sub.toniflare.workers.dev', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      setMessage(
        <span>🎉 Done! Check your inbox for a confirmation email!</span>
      );
    } catch (e) {
      setMessage(
        <span>
          Something went wrong, please try again or subscribe directly from{' '}
          <a target="_blank" href="https://newsletter.tonydinh.com">
            newsletter.tonydinh.com
          </a>
          . Sorry! 😢
        </span>
      );
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="title">Get notified when I release new stuff! 👇</div>
      <div className="form">
        <input
          disabled={loading}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          onKeyDown={(e) => e.keyCode === 13 && submit()}
        />
        <button onClick={submit} disabled={loading || !isValid(email)}>
          Subscribe
        </button>
      </div>
      {message ? <div className="message">{message}</div> : null}
      <style jsx>
        {`
          input {
            padding: 0.5em;
            border: 1px solid #ccc;
            height: 100%;
            font-size: 16px;
            border-radius: 4px;
          }

          button {
            border: 0;
            background: #2196f3;
            padding-right: 10px;
            color: white;
            border-radius: 7px;
            appearance: none;
            font-weight: 600;
            font-size: 14px;
            display: inline-block;
            padding-left: 10px;
            padding-right: 10px;
          }

          .form {
            display: flex;
            justify-content: center;
            align-items: stretch;
            gap: 10px;
          }

          button:disabled {
            opacity: 0.7;
          }

          .title {
            margin: 10px;
          }

          .message {
            font-size: 13px;
            margin: 5px;
          }

          .container {
            max-width: 400px;
            text-align: center;
            margin: 10px auto;
          }
        `}
      </style>
    </div>
  );
}
