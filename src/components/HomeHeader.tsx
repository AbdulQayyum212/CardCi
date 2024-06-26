// import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
// import { selectProfileData } from '@stores/slices/UserSlice';
// import { HomeDrawerScreenProps } from '@type/*';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Divider, Menu} from 'react-native-paper';
import tw from 'twrnc';
// import { useSelector } from 'react-redux';
export default function HomeHeader({
  heading,
  addTarget,
}: {
  heading: string;
  addTarget?: (ref: any, key: string) => void;
}) {
  const navigation = useNavigation();
  // const navigation = useNavigation<HomeDrawerScreenProps<'HomeScreen'>['navigation']>();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  // const user = useSelector(selectProfileData);
  return (
    <View style={style.header}>
      <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>
        {heading}
      </Text>
      <View style={{width: 20}} />
      {/* <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity
            onPress={navigation.toggleDrawer}
            style={tw`w-[20px] items-center justify-center rounded-[1.2]	 mr-2 h-[26px] `}>
            <Icon
              name={'bars'}
              size={25}
              // style={styles.dropdownButtonArrowStyle}
            />
          </TouchableOpacity> 
        </View>*/}

      <View style={{width: 20}} />
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: 'rgba(234, 247, 252, 1)',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
