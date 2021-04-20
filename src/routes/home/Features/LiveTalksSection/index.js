import { route } from 'preact-router';
import { LandingSecondary } from 'Components/Buttons';

import style from "../style.scss";

const LiveTalksSection = () => (
  <div className={style.bottom}>
    <div className={style.left}>
      <video muted autoPlay loop playsInline controls={false}>
        <source src="https://zl-brizi-tv.s3.ca-central-1.amazonaws.com/assets/landing/s4_host.webm" type="video/webm" />
        <source src="https://zl-brizi-tv.s3.ca-central-1.amazonaws.com/assets/landing/s4_host.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className={style.right}>
      <div className={style.description}>
        <h2> Take part in engaging conversations with the experts</h2>
        <p>
          Join daily keeper talks and interactive Q&amp;As with animal experts and naturalists.
        </p>
        <LandingSecondary onClick={() => route('/signup')}>Join a Live Q&amp;A</LandingSecondary>
      </div>
    </div>
  </div>
);

export default LiveTalksSection;
