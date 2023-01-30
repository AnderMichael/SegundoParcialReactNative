import {View, ScrollView, StyleSheet} from 'react-native';
import {Section} from './Section';
import SimpleEmoji from 'simple-react-native-emoji';
import {Text} from '@rneui/base';

export const Categories = () => {
  return (
    <Section titleSection="Categories" flexSection={3}>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <View style={{justifyContent: 'space-around'}}>
          <ChipCategoriesContainer>
            <ChipCategories title="Art" emojiName="frame_with_picture" />
            <ChipCategories title="Coding" emojiName="computer" />
            <ChipCategories title="Design" emojiName="art" />
            <ChipCategories title="Health" emojiName="male-doctor" />
            <ChipCategories title="Photography" emojiName="camera" />
          </ChipCategoriesContainer>
          <ChipCategoriesContainer>
            <ChipCategories title="Business" emojiName="computer" />
            <ChipCategories title="Marketing" emojiName="frame_with_picture" />
            <ChipCategories title="Lifestyle" emojiName="art" />
            <ChipCategories title="Cooking" emojiName="cookie" />
            <ChipCategories title="Cinema" emojiName="camera" />
          </ChipCategoriesContainer>
        </View>
      </ScrollView>
    </Section>
  );
};

interface ChipCategoriesProps {
  title: string;
  emojiName: string;
}

const ChipCategories = ({title, emojiName}: ChipCategoriesProps) => {
  return (
    <Text style={styles.chipCategories}>
      {<SimpleEmoji shortName={emojiName} />} {title}
    </Text>
  );
};

interface ChipCategoriesContainerProps {
  children: any;
}

const ChipCategoriesContainer = ({children}: ChipCategoriesContainerProps) => {
  return <View style={styles.chipCategoriesContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
    flexDirection: 'row',
    },
  chipCategories: {
    backgroundColor: 'white',
    height: 35,
    fontSize: 15,
    marginHorizontal: 7,
    paddingVertical: 5,
    paddingHorizontal: 17,
    textAlignVertical: 'center',
    borderRadius: 20,
  },
  chipCategoriesContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});
