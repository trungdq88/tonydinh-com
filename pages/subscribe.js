import SubscribeForm from '../components/SubscribeForm.js';

export default function Subscribe() {
  return (
    <>
      <div className="block"></div>
      <div className="subform">
        <SubscribeForm />
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        .subform {
          position: absolute;
          left: 0;
          top: 10px;
          right: 0;
          z-index: 3;
        }

        .block {
          height: 100vh;
          width: 100wv;
          position: relative;
        }
        .block::after {
          background: repeating-linear-gradient(
            45deg,
            #fff,
            #fff 10px,
            #3c7ab8 0,
            #3c7ab8 20px,
            #fff 0,
            #fff 30px,
            #cb2c4b 0,
            #cb2c4b 40px
          );
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          content: '';
          z-index: 0;
        }
        .block::before {
          background-color: #fff;
          position: absolute;
          top: 10px;
          left: 10px;
          height: calc(100% - 20px);
          width: calc(100% - 20px);
          content: '';
          z-index: 1;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
}
