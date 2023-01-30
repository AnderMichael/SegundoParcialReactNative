import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../theme/global';

interface SectionProps {
  titleSection: string;
  flexSection?: number;
  children?: any;
}
export const Section = ({
  titleSection,
  flexSection = 1,
  children,
}: SectionProps) => {
  return (
    <View
      style={{
        ...globalStyles.container,
        paddingTop: 10,
        flex: flexSection,
        alignItems: 'flex-start'
      }}>
      <View style={globalStyles.subContainer}>
        <View style={styles.titleSet}>
          <Text style={styles.title}>{titleSection}</Text>
        </View>
        <View style={styles.seeAllSet}>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  //Views
  titleSet: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  seeAllSet: {
    paddingTop: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAllText: {
    fontSize: 12,
    color: 'blue',
  },
});
