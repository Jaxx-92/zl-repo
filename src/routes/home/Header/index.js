import { h } from 'preact';
import { Box, Header } from 'grommet';
import { faSignInAlt, faSignOut } from '@fortawesome/pro-solid-svg-icons';

import NavItem from 'Components/NavBar/NavItem';
import Invite from 'Components/NavBar/Invite';
import ZoolifeLogo from 'Components/ZoolifeLogo';
import BurgerMenu from 'Components/BurgerMenu';
import { LandingSecondary } from 'Components/Buttons';

import { goToLogin, goToSignup } from '../helpers';

import style from './style.scss';

const HeaderComponent = () => (
  <Header className={style.header} gap="none">
    <div className={style.logo}>
      <ZoolifeLogo landing />
    </div>

    <div className={style.navBar}>
      <Invite text="Invite Friends" />
      <NavItem text="Log In" onClick={goToLogin} icon={faSignInAlt} />
      <LandingSecondary onClick={goToSignup} className={style.signUpButton}>
        Sign Up
      </LandingSecondary>
    </div>

    <BurgerMenu className={style.menu}>
      <Invite text="Invite Friends" />
      <NavItem onClick={goToLogin} text="Log In" url="/login" icon={faSignOut} />
      <Box margin={{ left: '15px' }}>
        <LandingSecondary onClick={goToSignup} className={style.signUpButton}>
          Sign Up
        </LandingSecondary>
      </Box>
    </BurgerMenu>
  </Header>
);

export default HeaderComponent;
