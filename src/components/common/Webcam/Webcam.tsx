
import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Webcam from 'react-webcam';
import styles from './Webcam.module.scss';

const videoConstraints = {
  minWidth: 320,
  heigth: 360,
  facingMode: 'user',
};
type InputRefType = () => React.MutableRefObject<TextInputRefType | null>;
type TextInputRefType = Webcam;
const useInputRef: InputRefType = () => useRef(null);

const WebcamUser = () => {
  const [isCaptureEnable, setCaptureEnable] = useState(false);
  const webcamRef = useInputRef();

  return (
    <>
      {isCaptureEnable || (
        <Button
          onClick={() => setCaptureEnable(true)}
          style={{
            backgroundColor: '#EE9B01',
            border: '2px solid #68904D',
            margin: 5,
          }}
        >
          Show favorite user
        </Button>
      )}
      {isCaptureEnable && (
        <div className={styles.webcam}>
          <p>We don't save any data from your webcam</p>
          <div className={styles.webcamConteiner}>
            <Webcam
              audio={false}
              width={230}
              height={175}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <Button
            onClick={() => setCaptureEnable(false)}
            style={{
              backgroundColor: '#EE9B01',
              border: '2px solid #68904D',
              marginTop: 5,
            }}
          >
            Close
          </Button>
        </div>
      )}
    </>
  );
};

export default WebcamUser;
