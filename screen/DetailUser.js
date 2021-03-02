import React, {useEffect, useState} from 'react'
import {View, Text,ScrollView,TextInput, Button, StyleSheet } from 'react-native'
import firebase from '../database/firebase'

function DetailUser(props) {
     
    const initialState = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }

    const [user, setUser] = useState(initialState)

    const getUserById = async (id) => {
        const dbref = firebase.db.collection('users').doc(id)
        const doc = await dbref.get()
        const user = doc.data()
        setUser({
            ...user,
            id: doc.id
        })
    }
    
    useEffect(()=>{
        getUserById(props.route.params.userId)
    },[])

    const handleChangeText = (name, value)=>{
        setUser({...user, [name]: value})
    }
    const updateUser = async ()=>{
        const dbref = firebase.db.collection('users').doc(user.id);
        await dbref.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        }) 
        setUser(initialState)
        props.navigation.navigate('userList')
    }

    const deleteUser = async() => {
        const dbref = firebase.db.collection('users').doc(props.route.params.userId);
        await dbref.delete()
        props.navigation.navigate('userList') 
    } 

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                  placeholder="Name User"
                  value = {user.name}
                  onChangeText={(value)=> handleChangeText('name', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                  placeholder="Email User"
                  value = {user.email}
                  onChangeText={(value)=> handleChangeText('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                  placeholder="Phone User"
                  value = {user.phone}
                  onChangeText={(value)=> handleChangeText('phone', value)}
                />
            </View>
            <View >
                <Button color="#19AC52" title="updateUser" onPress={()=> updateUser() }/>                
            </View>
            <View >
                <Button color='#E37399' title="deleteUser" onPress={()=> deleteUser()}/>                
            </View>
            
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default DetailUser;