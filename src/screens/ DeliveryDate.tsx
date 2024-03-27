import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Input from '../components/Input';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Calendar} from 'react-native-calendars';
const DeliveryDate = () => {
  const navigation = useNavigation();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date of event');
  return (
    <SafeAreaView
      style={[
        tw`flex-1 justify-between`,
        {backgroundColor: 'rgba(234, 247, 252, 1)'},
      ]}>
      <ScrollView>
        <View style={tw`flex-1 items-center  w-full justify-center px-5 `}>
          <Image
            style={{
              marginTop: 50,
              width: 100,
              height: 100,
              marginBottom: 10,
              // marginLeft: 20,
            }}
            resizeMode="contain"
            source={require('../../assets/cardci-Logo.png')}
          />
          <Text style={tw`text-[8] text-black font-bold text-center`}>
            Choose Your Delivery date!
          </Text>

          <View style={tw`p-[20] w-[100%] `}>
            <View
              style={tw`bg-white border-4 w-{100%} rounded-3xl p-3 flex-row items-center justify-between `}>
              <Text style={tw`text-black font-bold`}>{selectedDate}</Text>
              <TouchableOpacity
                onPress={() => {
                  setCalendarOpen(!calendarOpen);
                  setSelectedDate('Date of event');
                }}>
                <Icon name="calendar-clear" color={'black'} size={25} />
              </TouchableOpacity>
            </View>
          </View>
          {calendarOpen && (
            <Calendar
              style={{
                borderWidth: 4,
                marginBottom: 20,
                //   borderColor: 'gray',
                //   height: 250,
                //   marginBottom: 20,
                //   overflow: 'hidden',
              }}
              onDayPress={day => {
                setSelectedDate(day.dateString);
                setCalendarOpen(false);
              }}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedDotColor: 'orange',
                },
              }}
            />
          )}
        </View>
      </ScrollView>
      <View style={tw`flex-row items-center justify-between px-2 mb-4`}>
        <Btn
          left
          onPress={() => navigation.goBack()}
          title="Back"
          style={{
            width: '45%',
            borderColor: 'grey',
          }}
        />
        <Btn
          // stylebtn={{width: '60%',background:'red'}}
          right
          title="Continue"
          onPress={() => navigation.navigate('YourCard')}
          style={{
            width: '45%',
            borderColor: 'grey',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryDate;
