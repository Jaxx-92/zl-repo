import { connect } from 'react-redux';
import classnames from 'classnames';

import CustomCursor from '../../CustomCursor';
import CameraPin from '../../StreamControls/CameraPin/cursor.png';

import { DEFAULT_CURSOR_DELAY } from '../../CustomCursor/constants';

import style from './style.scss';

const Click = ({
  animal,
  color,
  x,
  y,
  cursorDelay = DEFAULT_CURSOR_DELAY,
  type,
  path,
  userId,
  currentUserId,
}) => {
  const isUserAction = userId === currentUserId;
  if (type === 'click') {
    return (
      <span
        className={style.Cursor}
        style={{
          top: `${y * 100}%`,
          left: `${x * 100}%`,
          transitionDuration: `${cursorDelay / 1000}s`,
        }}
      >
        <CustomCursor color={color} animal={animal} showClickEffect />
      </span>
    );
  }

  if (type === 'emoji') {
    return (
      <img
        src={`https://brizi-sandbox-bucket.s3.amazonaws.com${path}`}
        style={{ top: `${y}%`, left: `${x}%` }}
        draggable="false"
        alt="emoji"
        className={style.emoji}
      />
    )
  }

  if (type === 'cursorPin') {
    return (
      <div
        className={style.cursorPin}
        style={{ top: `${y * 100}%`, left: `${x * 100}%` }}
      >
        <div style={{ position: 'relative'}} />
        <img
          src={CameraPin}
          draggable="false"
          alt="emoji"
          className={classnames(style.cameraPin, { [style.hidden]: !isUserAction })}
        />
        <div className={isUserAction ? style.clickIndicatorPin : style.clickIndicatorPinOtherUser}>
          <div className={style.pulseIndicator} />
        </div>
      </div>
    )
  }

  return null;
};

export default connect(({ user: { viewer: { userId }}}) => ({ currentUserId: userId }))(Click);
