export default function RevueForm() {
  return (
    <div className="subscribe-email" id="revue-embed">
      <div className="color-primary">
        Get notified when I release new stuff! 👇
      </div>
      <form
        className="subscription-form"
        action="https://newsletter.tdinh.me/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div style={{ width: '100%' }} className="revue-form-group">
          <input
            className="revue-form-field"
            placeholder="Your email"
            type="email"
            name="member[email]"
            id="member_email"
          />
        </div>
        <div className="revue-form-actions">
          <input
            style={{ textAlign: 'center', width: 'auto' }}
            type="submit"
            name="member[subscribe]"
            className="button"
            value="Subscribe"
            id="member_submit"
          />
        </div>
      </form>

      <style jsx>{`
        .subscribe-email {
          max-width: 600px;
        }
        #member_email {
          border: 1px solid #ccc;
          height: 100%;
          font-size: 13px;
          border-radius: 4px;
        }
        .subscription-form {
          display: flex;
          justify-content: center;
          align-items: stretch;
          margin: 10px 0;
        }
        #member_submit {
          appearance: none;
          font-weight: 600;
          font-size: 13px;
          height: 33px;
          margin: 0 0 0 10px;
          display: inline-block;
          padding-left: 10px;
          padding-right: 10px;
        }
        input {
          padding: 0.5em;
          width: 100%;
        }
        label {
          margin: 5px 10px;
        }
        .revue-form-footer {
          font-size: 12px;
        }
        .button {
          border: 0;
          background: #2196f3;
          padding-right: 10px;
          color: white;
          border-radius: 7px;
        }
      `}</style>
    </div>
  );
}
