/**
 * @providesModule router
 */

import { createRouter } from '@exponent/ex-navigation';
import BlockingModal from 'BlockingModal';
import Login from 'Login';
import SendOTP from 'SendOTP';
import Home from 'Home';
import AboutUs from 'AboutUs';
import ContactUs from 'ContactUs';

export default createRouter(() => ({
  modal: () => BlockingModal,
  login: () => Login,
  sendOTP: () => SendOTP,
  home: () => Home,
  about: () => AboutUs,
  contact: () => ContactUs
}));
