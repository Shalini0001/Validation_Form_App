import React, { useState } from 'react';
import axios from 'axios';
import { TouchableOpacity, View, Text, TextInput, Alert } from 'react-native';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');


  const Save = () => {
    if (name == '' || email == '' || contact == '' || address == '') {
      Alert.alert('Please fill required field')
    } else if (contact.length < 10) {
      return Alert.alert("please fill valid contact no.")
    } else {
      console.log(name);
      console.log(email);
      console.log(address);
      console.log(contact);
      setName('');
      setEmail('');
      setContact('');
      setAddress('');
      Alert.alert('Successfully submit')
    }
  }
  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: '10%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity>
          <View style={{ backgroundColor: '#FEA35B', padding: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add Data</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ShowData()}>
          <View style={{ backgroundColor: '#BFBFBE', padding: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Show Data</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: '20%', margin: '2%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text style={{ fontSize: 20 }} >Name:</Text>
          <TextInput style={{ borderBottomWidth: 1, width: '50%', borderColor: 'black' }} onChangeText={(name) => setName(name)}></TextInput>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '3%' }}>
          <Text style={{ fontSize: 20 }} >Email:</Text>
          <TextInput style={{ borderBottomWidth: 1, width: '50%', borderColor: 'black' }} onChangeText={(email) => setEmail(email)}></TextInput>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '3%' }}>
          <Text style={{ fontSize: 20 }} >Contact:</Text>
          <TextInput style={{ borderBottomWidth: 1, width: '50%', borderColor: 'black' }} keyboardType={'number-pad'} onChangeText={(contact) => setContact(contact)}></TextInput>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '3%' }}>
          <Text style={{ fontSize: 20 }} >Address:</Text>
          <TextInput style={{ borderBottomWidth: 1, width: '50%', borderColor: 'black' }} maxLength={50} multiline={true} onChangeText={(address) => setAddress(address)}></TextInput>
        </View>
      </View>
      <View style={{
        marginTop: '20%', justifyContent: 'center', marginLeft: '30%', marginRight: '30%', padding: 10,
        backgroundColor: '#FEA35B', borderRadius: 7, alignItems: 'center'
      }}>
        <TouchableOpacity onPress={() => Save()}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default App;