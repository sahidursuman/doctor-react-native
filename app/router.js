/**
 * @providesModule router
 */

import { createRouter } from '@exponent/ex-navigation';
import BlockingModalActivity from 'BlockingModalActivity';
import BlockingModalDialog from 'BlockingModalDialog';
import Login from 'Login';
import ChangePassword from 'ChangePassword';
import SendOTP from 'SendOTP';
import Home from 'Home';
import AboutUs from 'AboutUs';
import ContactUs from 'ContactUs';
import Profile from 'Profile';

export default createRouter(() => ({
  modalActivity: () => BlockingModalActivity,
  modalDialog: () => BlockingModalDialog,
  login: () => Login,
  sendOTP: () => SendOTP,
  changePassword: () => ChangePassword,
  home: () => Home,
  about: () => AboutUs,
  contact: () => ContactUs,
  profile: () => Profile
}));
