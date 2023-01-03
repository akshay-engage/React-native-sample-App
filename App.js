/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WebEngage from 'react-native-webengage';
import WebEngageInline from './WebEngageInline';


const App: () => Node = () => {
  var webengage = new WebEngage();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    webengage.push.onClick(function (notificationData) {
      console.log("App- effect without dependency")
      console.log("MyLogs App: push-notiifcation clicked with deeplink: " + notificationData["deeplink"]);
      console.log("MyLogs App: push-notiifcation clicked with payload: " + JSON.stringify(notificationData["userData"]));
    });
  })

  useEffect(() => {

    webengage.push.onClick(function (notificationData) {
      console.log("App- effect with empty dependency")

      console.log("App: push-notiifcation clicked with deeplink: " + notificationData["deeplink"]);

    });

  }, []);

  useEffect(() => {
    console.log("Akshay - []")
  }, []);

  useEffect(() => {
    console.log("Akshay - no dependency")
  });

  const mutateState = () => {
    setFlag(!flag);
    let date4 = new Date(1995, 11, 17);


    // webengage.user.setAttribute("zzzdate4", date4.toISOString());
    webengage.track("testEvent", {
      "deliveryDate": date4,
      "isoDate": date4.toISOString(),
      "complexDate": {
        "delivery1-Obj": date4, // isoString()
        "delivery1-ISO": date4.toISOString() // isoString()
      }
    });



    // webengage.user.setAttribute("zzzdate", "2015-11-09T10:01:11.000Z");
    // let date = new Date();
    //December 17, 1995 06:59:00
    // let date1 = new Date("December 17, 1995 03:24:00"); //December 17, 1995 03:24:00
    // let date2 = new Date("1995-12-17T03:24:00");
    // let date3 = new Date(1995, 11, 17); // the month is 0-indexed
    // let date4 = new Date(1995, 11, 17, 3, 24, 0);
    // let date5 = new Date(628021800000); // passing epoch timestamp

    // for(let i = 0; i< 5;i++) {
    //   const val = `date${i}`;
    //   console.log("Date-> "+ `date${i}`)
    // }

    // console.log("Date1-> "+ "   " + date1)
    // console.log("Date-> "+  "   " + date2.toISOString())
    // console.log("Date-> "+ "   " + date3.toISOString())
    // console.log("Date-> "+  "   " + date4.toISOString())
    // console.log("Date-> " + "   " + date5.toISOString())


    // webengage.user.setAttribute("zzzdate1", date1);
    // webengage.user.setAttribute("zzzdate2", date2.toISOString());
    // webengage.user.setAttribute("zzzdate3", date3.toISOString());
    // webengage.user.setAttribute("zzzdate4", date4.toISOString());
    // webengage.user.setAttribute("zzzdate5", date5.toISOString());
    // webengage.user.setAttribute("zzzdate6", date.toISOString());



  }

  const userName = "liquideIos";
  // webengage.user.login(userName);
  //  2015-11-09T10:01:11.000Z
  return (
    <SafeAreaView>
      <View style={styles.first}>
        <Text style={styles.sectionTitle}> Welcome To React Native Sample App</Text>
        <Button title='Press!' onPress={mutateState} />
        <Text> {flag ? "True" : "false"} </Text>
        {userName && <Text> Welcome {userName}!</Text>}
      </View>
      <View style={styles.second}>
        <WebEngageInline
        id="webEngaege"
        width="100%"
        height="100%"
        />
        {/* WebEngage data rendering */}
      </View>
      <View style={styles.third}>
        <Text style={styles.sectionTitle}> Welcome To React Native Sample App</Text>
        <Button title='Press!' onPress={mutateState} />
        <Text> {flag ? "True" : "false"} </Text>
        {userName && <Text> Welcome {userName}!</Text>}
      </View>
    </SafeAreaView>
  )
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  first: {
    margin: 10,
     marginBottom: 40,
     borderWidth: 1,
     padding: 10,
  },
  second: {
    height: windowHeight/2,
    width: windowWidth,
    marginBottom: 40,
    borderWidth: 1,
    padding: 10,
    // margin: 10,
  },
  third: {
    margin: 10,
     marginBottom: 40,
     borderWidth: 1,
     padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

