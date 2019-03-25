/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/*
* Created by 小陌 on 2019/01/07.
* */

import React from 'react';
import {Image} from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import StackViewStyleInterpolator from "./node_modules/react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";
import HomeIndexScreen from './src/page/HOME/Index/index'


const tabNavigator = createBottomTabNavigator({
  HomeIndex: {
    screen: HomeIndexScreen,
    navigationOptions:{
      tabBarLabel:'首页',
      tabBarIcon:({tintColor}) => {
        if (tintColor == '#333333'){
          return  <Image style={{width:24,height:24}}
                         source={require('./images/musicLogo.png')}/>
        }else {
          return  <Image style={{width:24,height:24}}
                         source={require('./src/images/Index2S.png')}/>
        }
      }
    }
  },
  HomeInformationScreen:{
    screen:HomeInformationScreen,
    navigationOptions:{
      tabBarLabel:'资讯',
      tabBarIcon:({tintColor}) => {
        if (tintColor == '#333333'){
          return  <Image style={{width:24,height:24}}
                         source={require('./src/images/information2.png')}/>
        }else {
          return  <Image style={{width:24,height:24}}
                         source={require('./src/images/information2S.png')}/>
        }
      }
    }
  },
  HomeMember:{
    screen:HomeMenberScreen,
    navigationOptions:{
      tabBarLabel:'个人中心',
      tabBarIcon:({tintColor}) => {
        if (tintColor == '#333333'){
          return  <Image style={{width:24,height:24}}
                         source={require('./src/images/my2.png')}/>
        }else {
          return  <Image style={{width:24,height:24}}
                         source={require('./src/images/my2S.png')}/>
        }
      }
    }
  }
}, {
  initialRouteName: 'HomeIndex',//默认tab
  tabBarPosition: 'bottom',//tabBar位置
  backBehavior: 'none',
  swipeEnabled: false,//不可滑动
  animationEnabled: false,//切换页面时候没有滑动效果
  tabBarOptions: {
    activeTintColor: '#608ffa',
    inactiveTintColor: '#333333',
    showIcon: true,
    indicatorStyle: {
      height: 0
    },
    style: {
      backgroundColor: '#fff', // TabBar 背景色
      paddingBottom: 0,
    },
    labelStyle: {
      fontSize: 12,
      marginTop: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    tabStyle: {
      height: 50
    }
  }
});

const App = createStackNavigator({


},{
  initialRouteName:'Welcome',
  mode:'card',
  headerMode:'none',
  transitionConfig:()=>({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  })
});

export default createAppContainer(App)



