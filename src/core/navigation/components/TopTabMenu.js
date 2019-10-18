import * as React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
//import Article from './Shared/Article';
//import Albums from './Shared/Albums';
//import Chat from './Shared/Chat';
//import Contacts from './Shared/Contacts';
import NewsView from 'src/components/screens/NewsView';
//type State = NavigationState<{
//  key: string;
//  title: string;
//}>;

const FirstRoute = () => (
  <NewsView category={'&categories='} style={[styles.scene, { backgroundColor: '#5fd160' }]}>

  </NewsView>
  //<View style={[styles.scene, { backgroundColor: '#3a4475' }]} >
      
  //</View>
);
const SecondRoute = () => (
  <NewsView category={'&categories=13'} style={[styles.scene, { backgroundColor: '#5fd160' }]} />
);
const ThirdRoute = () => (
    <NewsView category={'&categories=9'} style={[styles.scene, { backgroundColor: '#3a4475' }]} />
  );
const FourthRoute = () => (
    <NewsView category={'&categories=16'} style={[styles.scene, { backgroundColor: '#5fd160' }]} />
  );
const FifthRoute = () => (
  <NewsView category={'&categories=2'} style={[styles.scene, { backgroundColor: '#3a4475' }]} />
);
const SixthRoute = () => (
  <NewsView category={'&categories=10'} style={[styles.scene, { backgroundColor: '#5fd160' }]} />
);
const SeventhRoute = () => (
    <NewsView category={'&categories=3'} style={[styles.scene, { backgroundColor: '#3a4475' }]} />
  );
const EigthRoute = () => (
    <NewsView category={'&categories=11'} style={[styles.scene, { backgroundColor: '#5fd160' }]} />
  );
  const NinthRoute = () => (
    <NewsView category={'&categories=12'} style={[styles.scene, { backgroundColor: '#3a4475' }]} />
  );

export default class ScrollableTabBarExample extends React.Component{ //<
//  {},
//  State
//> {
  static title = 'Scrollable tab bar';
  static backgroundColor = '#3f51b5';
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'All' },
      { key: 'second', title: 'Biotech' },
      { key: 'third', title: 'Cannabis' },
      { key: 'fourth', title: 'Commodities' },
      { key: 'fifth', title: 'Energy' },
      { key: 'sixth', title: 'Mining' },
      { key: 'seventh', title: 'Oil & Gas' },
      { key: 'eight', title: 'Precious Metals' },
      { key: 'nine', title: 'Technology' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  /*renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };*/

  /*handleIndexChange = (index: number) =>
    this.setState({
      index,
    });*/

  renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  renderScene = SceneMap({
    first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          fourth: FourthRoute,
          fifth: FifthRoute,
          sixth: SixthRoute,
          seventh: SeventhRoute,
          eight: EigthRoute,
          nine: NinthRoute
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#3a4475',
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1
  },
  tab: {
    width: 150,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
    textAlign: 'center',
    margin: 2,
  },
});