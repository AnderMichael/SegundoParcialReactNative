import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../theme/global';
import {SearchBar} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleEmoji from 'simple-react-native-emoji';

interface GreetingUserProps {
  nameUser: string;
}

export const GreetingUser = ({nameUser}: GreetingUserProps) => {
  return (
    <View
      style={{
        ...globalStyles.container,
        backgroundColor: '#0ca2ab',
        borderRadius:25,
        marginBottom: 15,
        paddingTop: 15,
        flex: 3,
      }}>
      <View style={globalStyles.subContainer}>
        <View style={styles.greetingSet}>
          <Text style={styles.greeting}>
            Hi, {nameUser} {<SimpleEmoji shortName="wave" />}
          </Text>
          <Text style={styles.subGreeting}>Let's start learning!</Text>
        </View>
        <View style={styles.iconsSet}>
          <FilledIcon nameIcon="cart-sharp" />
          <FilledIcon nameIcon="notifications-sharp" />
        </View>
      </View>
      <View style={globalStyles.subContainer}>
        <SearchBar
          placeholder="Search for anything"
          platform="android"
          containerStyle={{
            width: '100%',
            height: '70%',
            borderRadius: 15,
            justifyContent: 'center',
            zIndex: 3,
            paddingHorizontal: 20,
          }}
        />
      </View>
    </View>
  );
};

interface FilledIconProps {
  nameIcon: string;
}

const FilledIcon = ({nameIcon}: FilledIconProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.filledIcon}>
        <Icon name={nameIcon} size={25} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  //Text
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  subGreeting: {
    fontSize: 18,
    color: 'white',
  },

  //Views
  greetingSet: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  iconsSet: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  filledIcon: {
    backgroundColor: '#058792',
    marginLeft: 10,
    marginTop: 7,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
