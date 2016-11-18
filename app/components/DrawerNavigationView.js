/**
 * @providesModule DrawerNavigationView
 */

import React, { PropTypes } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Linking,
  Platform
} from 'react-native';
import colors from 'colors';
import { connect } from 'react-redux';
import actions from 'actions';


// {
//   "specialities": [
//     {
//       "second_opinion_id": 4,
//       "status": "deleted",
//       "name": "Skin Specialist",
//       "new_queries_count": 0
//     },
//     {
//       "second_opinion_id": 6,
//       "status": "deleted",
//       "name": "General Physician",
//       "new_queries_count": 0
//     }
//   ],
//   "total_count": 2,
//   "doctor_info": {
//     "name": "Dr. Demo Account",
//     "profile_pic": null,
//     "email": null,
//     "speciality": "Dermatology"
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  infoContainer: {
    height: 172,
    backgroundColor: colors.gunmetal
  },
  profilePic: {
    marginTop: 40,
    marginLeft: 16,
    marginBottom: 11,
    height: 64,
    width: 64,
    borderRadius: 32
  },
  text: {
    marginLeft: 16,
    color: colors.black,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    fontSize: 14,
    lineHeight: 21
  },
  navigationContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: colors.white,
  },
  button: {
    height: 48,
    justifyContent: 'center'
  },
  divider: {
    height: 1,
    backgroundColor: colors.grey
  },
  whiteText: {
    color: colors.white
  },
  darkGreyText: {
    color: colors.darkGrey
  },
  turquoiseText: {
    color: colors.turquoise
  },
  boldText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'sans-serif-medium'
  }
})

function DrawerNavigationView({ close, user, dispatch }) {
  const Touchable = ({ close = () => {}, onPress = () => {}, children }) => {
    if (Platform.OS === 'ios' || Platform.Version < 21) {
      return (
        <TouchableOpacity onPress={() => {
          close();
          onPress();
        }}>
          <View style={styles.button}>
            {children}
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableNativeFeedback
        onPress={() => {
          close();
          onPress();
        }}
        background={TouchableNativeFeedback.Ripple(colors.darkGrey, false)}
      >
        <View style={styles.button}>
          {children}
        </View>
      </TouchableNativeFeedback>
    )
  }

  const toButtons = ({ text, onPress }, index) =>
    <Touchable
      key={index}
      close={close}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Touchable>;

  const handleContact = (dispatch, user) => {
    const url = `mailto:contact@1mgdoctors.com?subject=1mgDoctors ${Platform.OS}: Query ${user.name}`;
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        dispatch(actions.GO_TO_ROUTE('contact'));
      } else {
        Linking.openURL(url);
      }
    });
  };

  const itemGroupOne = [
    {
      text: 'Spam',
    },
    {
      text: 'Change Password',
    }
  ];

  const itemGroupTwo = [
    {
      text: 'About Us',
      onPress: () => dispatch(actions.GO_TO_ROUTE('about'))
    },
    {
      text: 'Contact Us',
      onPress: () => handleContact(dispatch, user)
    }
  ];

  const itemGroupThree = [
    {
      text: 'Sign Out',
      onPress: () => dispatch(actions.SIGN_OUT)
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={() => {
          dispatch(actions.GO_TO_ROUTE('profile'));
          close();
        }}>
          <Image
            source={user.profile_pic || require('../assets/drawable-xxhdpi/blank_avatar.png')}
            style={styles.profilePic}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.text, styles.boldText, styles.whiteText
          ]}
        >
          {user.name}
        </Text>
        <Text
          style={[
            styles.text, styles.whiteText
          ]}
        >
          {user.phone_number}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.navigationContainer}>
        <View style={styles.button}>
          <Text
            style={[
              styles.text, styles.darkGreyText
            ]}
          >
            SPECIALITY
          </Text>
        </View>
        <Touchable>
          <Text
            style={[
              styles.text, styles.turquoiseText, styles.boldText
            ]}
          >
            Skin Specialist
          </Text>
        </Touchable>
        <Touchable>
          <Text
            style={[
              styles.text, styles.boldText
            ]}
          >
            General Physician
          </Text>
        </Touchable>
        <View style={styles.divider} />
        { itemGroupOne.map(toButtons) }
        <View style={styles.divider} />
        { itemGroupTwo.map(toButtons) }
        <View style={styles.divider} />
        { itemGroupThree.map(toButtons) }
      </ScrollView>
    </View>
  );
}

export default connect(({ user }) => ({ user }))(DrawerNavigationView);
