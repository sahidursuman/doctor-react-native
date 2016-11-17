/**
 * @providesModule Login
 */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native';
import TextInput from 'MaterialTextInput';
import { NavigationStyles } from '@exponent/ex-navigation';
import { connect } from 'react-redux';
import AppBar from 'AppBar';
import actions from 'actions';
import colors from 'colors';

const styles = StyleSheet.create({
  full: {
    flex: 1
  },
  loginContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    fontSize: 16,
    color: colors.black
  },
  welocomeMessage: {
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 36,
    color: colors.mediumGrey
  },
  loginMessage: {
    marginBottom: 40,
    fontSize: 14,
    lineHeight: 21
  },
  loginButton: {
    marginTop: 25,
    backgroundColor: colors.turquoise,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'sans-serif-medium',
    color: colors.white,
    fontSize: 16,
    marginTop: 16,
    marginBottom: 16
  },
  passwordActionsRow: {
    flexDirection: 'row',
    marginTop: 25
  },
  passwordActionsContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  passwordActionText: {
    color: colors.turquoise,
    fontSize: 14,
    textAlign: 'center'
  },
  verticalDivider: {
    backgroundColor: colors.turquoise,
    width: 1,
    height: 35
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: '',
      password: null
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.full}>
          <AppBar title="Login" />
            <View style={styles.loginContainer}>
              <Text style={[ styles.text, styles.welocomeMessage ]}>
                Welcome back!
              </Text>
              <Text style={[ styles.text, styles.loginMessage ]}>
                Login to continue to 1mg Doctors
              </Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="phone-pad"
                label="Phone Number"
                highlightColor={colors.turquoise}
                labelColor={colors.mediumGrey}
                selectionColor={colors.turquoise}
              />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                secureTextEntry
                showUnmask
                highlightColor={colors.turquoise}
                labelColor={colors.mediumGrey}
                selectionColor={colors.turquoise}
              />
              <TouchableOpacity
                activeOpacity={1}
                style={styles.loginButton}
              >
                <Text style={styles.loginText}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <View style={styles.passwordActionsRow}>
                <View style={styles.passwordActionsContainer}>
                  <TouchableOpacity>
                    <Text style={[styles.text, styles.passwordActionText ]}>
                      Create New Password
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.passwordActionsContainer}>
                  <TouchableOpacity>
                    <Text style={[styles.text, styles.passwordActionText ]}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Login.route = {
  styles: {
    ...NavigationStyles.SlideHorizontal,
    gestures: null
  }
};

export default connect(null)(Login);