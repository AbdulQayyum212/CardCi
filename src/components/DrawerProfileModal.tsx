import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';

const DrawerProfileModal = () => {
  // const user = useSelector(selectProfileData);
  const [modalVisible, setModalVisible] = useState(false);
  // const navigation = useNavigation();
  return (
    <>
      {/* {user && ( */}
      <Pressable style={tw`w-full py-5`} onPress={() => setModalVisible(true)}>
        <View
          style={{
            marginLeft: 20,
            marginVertical: 40,
          }}>
          <Image
            source={require('../../assets/cardci-Logo.png')}
            style={{height: 70, width: 70, borderRadius: 20}}
          />
          <Text
            style={{
              // color: colors.blue,
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 10,
            }}>
            {'user?.last_name'}
          </Text>
        </View>
      </Pressable>
      {/* )} */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={[
            tw`flex-1 justify-center items-center`,
            {backgroundColor: 'rgba(0,0,0,0.8)'},
          ]}>
          <View
            style={[tw`py-20 w-75 bg-white justify-center items-center gap-4`]}>
            <TouchableOpacity
              style={tw`absolute top-1 right-2 p-2 z-10`}
              onPress={() => setModalVisible(false)}>
              {/* <MaterialCommunityIcons name="close-circle" size={30} /> */}
            </TouchableOpacity>
            {/* content */}
            <View style={tw`gap-2 w-[80%] overflow-hidden`}>
              <Text style={tw`font-bold text-4`}>{'user?.last_name'}</Text>
              <Text>{'user?.email'}</Text>
              <Text>Account #00000{2}</Text>
              <Text>{'user?.last_name'}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  // navigation.navigate('Profile');
                }}
                style={tw` justify-center items-center h-8 rounded-lg`}>
                <Text style={tw`text-white`}>Manage Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default React.memo(DrawerProfileModal);

// const styles = StyleSheet.create({
//   profile_small_text: tw`text-[${colors.gray}]`,
// });
