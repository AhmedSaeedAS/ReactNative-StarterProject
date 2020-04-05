import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native'
import { Splash } from '../assets/icons/index'
import { tabbar } from '../redux/actions/products';
import { connect } from 'react-redux'
const SplashScreen = (props) => {
    useEffect(() => {
        getResponseFromServer()
    }, []);

    const getResponseFromServer = async () => {
        setTimeout(() => { props.Tab(true) }, 3000)
    }
    return (
        <ImageBackground source={Splash} style={{ width: "100%", height: "100%", resizeMode: "cover", zIndex: 100 }} />
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        Tab: (item) => dispatch(tabbar(item))
    }
}

export default connect(null, mapDispatchToProps)(SplashScreen)