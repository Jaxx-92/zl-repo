import { h } from 'preact';
import {
  Box,
  Heading,
  Grommet,
  Tabs,
  Tab,
} from 'grommet';
import { useState } from 'preact/hooks';
import { merge } from 'lodash-es';

import Header from 'Components/Header';

import grommetTheme from '../../grommetTheme';
import Profile from '../profile';
import EmailSection from './MyAccount/EmailSection';
import PasswordSection from './MyAccount/PasswordSection';
import SubscriptionSection from './SubscriptionSection';

import style from './style.scss';

const tabsTheme = {
  tab: {
    active: { color: '#507EDE' },
    hover: { color: '#757575' },
    color: '#757575',
    disabled: { color: '#507EDE' },
    border: {
      color: 'transparent',
      active: { color: '#507EDE' },
      hover: { color: '#757575' },
    },
  },
};

const Account = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <>
      <Header />
      <Box flex="grow" height="100%" pad={{ top: '60px' } }>
        <Grommet theme={merge(tabsTheme, grommetTheme)} full>
          <Tabs
            activeIndex={activeIndex}
            onActive={setActiveIndex}
            flex="grow"
            fill
            className={style.tabs}
          >
            <Tab title="My Character">
              <Box fill border={{color: '#DFDFDF', size: '1px', side: 'top'}}>
                <Profile />
              </Box>
            </Tab>
            <Tab title="Account Info" flex="grow">
              <Box fill border={{color: '#DFDFDF', size: '1px', side: 'top'}}>
                <Box
                  pad={{vertical: '20px', top: '20px', bottom: '40px'}}
                  width={{max: '885px'}}
                  margin="auto"
                  fill
                >
                  <Heading fill textAlign="center" level="2">Account Information</Heading>
                  <EmailSection />
                  <Box pad="20px" />
                  <PasswordSection />
                </Box>
              </Box>
            </Tab>
            <Tab title="Manage Subscription">
              <SubscriptionSection />
            </Tab>
          </Tabs>
        </Grommet>
      </Box>
    </>
  );
};

export default Account;
