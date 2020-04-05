import React from 'react';
import { ImageBackground, Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from '../screens/SplashScreen'
import MainScreen from '../screens/MainScreen'
import ExpiringScreen from '../screens/ExpiringScreen'
import WishListScreen from '../screens/WishListScreen'

import { connect } from 'react-redux'
import styling from '../common/styling'
import { HomeInactive, HomeActive, ClockActive, ClockInactive, WishlistActive, WishlistInactive, Menu, CoverPink, Home, WishList, Expiry } from '../assets/icons'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const ExpiryStack = createStackNavigator();
const WishListStack = createStackNavigator();

const BottomNavigator = (props) => {
    const HomeStackScreen = ({ navigation }) => (
        < HomeStack.Navigator >
            {
                !props.tab ?
                    <>
                        <HomeStack.Screen name="SplashScreen" component={SplashScreen}
                            tabBarOptions={{ tabBarVisible: false }}
                            options={{
                                headerShown: false,
                            }} />
                    </> :
                    <>
                        <HomeStack.Screen name="Main" component={MainScreen}
                            options={
                                {
                                    title: 'Home',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                        fontSize: styling.standardHeaderSize,
                                        color: styling.headerTextColor,
                                    },
                                    headerTitleAlign: "center",
                                    headerStyle: {
                                        backgroundColor: styling.headerColor,
                                    },
                                    headerLeft: () => (
                                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {
                                            navigation.toggleDrawer();
                                        }} >
                                            <Image source={Menu} style={{ width: 25, height: 25 }} />
                                        </TouchableOpacity>
                                    )
                                }
                            } />
                    </>
            }
        </HomeStack.Navigator >
    )


    const ExpiryStackScreen = ({ navigation }) => (

        < ExpiryStack.Navigator >
            <ExpiryStack.Screen name="Expiring Soon" component={ExpiringScreen}
                options={
                    {
                        title: 'Expiring Soon',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: styling.standardHeaderSize,
                            color: styling.headerTextColor
                        },
                        headerTitleAlign: "center",
                        headerStyle: {
                            backgroundColor: styling.headerColor,
                        },
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {
                                navigation.toggleDrawer();
                            }} >
                                <Image source={Menu} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                        )
                    }
                } />
        </ExpiryStack.Navigator >
    )

    const WishListStackScreen = ({ navigation }) => (
        <WishListStack.Navigator>
            <WishListStack.Screen name="Wish List" component={WishListScreen}
                options={
                    {
                        title: 'Wish List',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: styling.standardHeaderSize,
                            color: styling.headerTextColor
                        },
                        headerTitleAlign: "center",
                        headerStyle: {
                            backgroundColor: styling.headerColor,
                        },
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {
                                navigation.toggleDrawer();
                            }} >
                                <Image source={Menu} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                        )
                    }
                } />
        </WishListStack.Navigator>
    )


    const HomeScreenTab = () => (
        <Tab.Navigator initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                backgroundColor: styling.tabBarBackgroundColor,
            }}
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? HomeActive
                                : HomeInactive;
                        } else if (route.name === 'Expiry') {
                            iconName = focused ? ClockActive : ClockInactive;
                        }
                        else if (route.name === 'Wish List') {
                            iconName = focused ? WishlistActive : WishlistInactive;
                        }

                        return <ImageBackground source={iconName} style={{ width: 25, height: 25 }} />;
                    }
                })
            } >
            <Tab.Screen name="Expiry" component={ExpiryStackScreen} />
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarVisible: props.tab }} />
            <Tab.Screen name="Wish List" component={WishListStackScreen} />
        </Tab.Navigator >
    )

    return (

        <NavigationContainer>
            <Drawer.Navigator

                drawerContent={({ navigation }) =>
                    <View style={{}}>
                        <View >
                            <View style={styles.sidebarImage} >
                                <Image source={CoverPink} style={{
                                    width: "100%",
                                    height: 200,
                                    borderWidth: 0.1,
                                    resizeMode: "cover"
                                }} />
                            </View>

                            <TouchableOpacity onPress={() => { navigation.navigate('Main') }} >
                                <View style={styles.buttonView}>
                                    <Image source={Home} style={{
                                        width: 25,
                                        height: 25,
                                        resizeMode: "contain"
                                    }} />
                                    <Text style={styles.buttonText}> HOME</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { navigation.navigate('Wish List') }} >
                                <View style={styles.buttonView}>
                                    <Image source={WishList} style={{
                                        width: 25,
                                        height: 25,
                                        resizeMode: "contain"
                                    }} />
                                    <Text style={styles.buttonText}> WISH LIST</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { navigation.navigate('Expiry') }} >
                                <View style={styles.buttonView}>
                                    <Image source={Expiry} style={{
                                        width: 25,
                                        height: 25,
                                        resizeMode: "contain"
                                    }} />
                                    <Text style={styles.buttonText}> EXPIRING SOON</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                drawerStyle={{
                    backgroundColor: "white",
                    color: "blue", flex: 1,
                    borderWidth: 0.1,
                    elevation: 10,
                    borderWidth: 0.1,
                }}>
                <Drawer.Screen name="Home" component={HomeScreenTab} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}
const styles = StyleSheet.create({
    sidebarImage: {
        alignContent: "center",
        alignItems: "center",
        borderRadius: 45,
        marginBottom: 50
    },
    buttonView: {
        padding: 15,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginBottom: 20,
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#EC6E92",
        padding: 5
    }
})

const mapStateToProps = ({ prodReducer }) => {
    return {
        tab: prodReducer.tabbar
    }
}

export default connect(mapStateToProps, null)(BottomNavigator)