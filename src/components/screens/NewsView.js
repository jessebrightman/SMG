import React, { Component } from 'react';
import {
    View, TextInput, TouchableOpacity,
    ScrollView, StyleSheet, Text, Dimensions, AsyncStorage, FlatList, Image, ActivityIndicator
} from 'react-native';
import {
    ActivityAuthoring,
    ImageOverlay,
    textStyle,
  } from '@src/components/common';
import { ArticleTips, ArticleTipsProps,} from '../articles/articleTips.component';
import {
  ArticleActivityBar,
  
} from '@src/components/articles';

import { Container, Header, Body, Title, Content, Card, CardItem, Button, Left } from 'native-base';
import Moment from 'moment';
//import HTML from 'react-native-render-html';

export default class NewsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posts: [],
      category: props.category,
    };
  }

  componentDidMount() {
        fetch('https://dev.smartmoneygains.com/wp-json/wp/v2/posts?_embed' + this.state.category)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            posts: responseJson,
          })
        })
        .catch((error) => {
          console.error(error);
        }); 
  }
  
  render() {
    const { style, article, ...restProps } = this.props;

    if (this.state.isLoading == true) {
      return(
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
          <ActivityIndicator size="large" color="#1C97F7" />
        </View>
      )
    }
    else{
    Moment.locale('en');    
    return (
      <Container>
        <Content>
        {this.state.posts.map((item, index) => (
          <Card style={{flex: 0}} key = {item.id}>
            <CardItem>
              <Left>
                <Body>
                  <Text style = {{ fontSize: 24, fontWeight:'bold' }}>{item.title.rendered}</Text>
                  <Text note>Published on: {Moment(item.date).format('d MMM Y')}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              {item._embedded['wp:featuredmedia'].filter( element => element.id == item.featured_media).map((subitem, index) => (
                  <Image source={{uri: subitem.media_details.sizes.medium.source_url}} style={{height: 200, width: 100, flex: 1}} key = {item.id}/>
                  ))}
            </CardItem>
            <CardItem>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Author:</Text>
                  {item._embedded.author.filter( element => element.id ==item.author).map((subitem, index) => (
                  <Text key = {item.id}>{subitem.name}</Text>
                  ))}
                </Button>
              </Left>
            </CardItem>
          </Card>
        ))}
        </Content>
      </Container>
      /*<View>
      {this.state.posts.map((item, index) => (         
      <TouchableOpacity
        activeOpacity={0.95}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.image}
          source={item._embedded['wp:featuredmedia'].filter( element => element.id == item.featured_media).map((subitem, index) => (
            <Image source={{uri: subitem.media_details.sizes.medium.source_url}} style={{height: 200, width: 100, flex: 1}} key = {item.id}/>
            ))}>
          <Text
            style={themedStyle.titleLabel}
            category='h4'>
            {item.title.rendered}
          </Text>
          <ArticleTips
            style={themedStyle.tipsContainer}
            //icon={BulbIconFill}
            >
            
          </ArticleTips>
        </ImageOverlay>
        <ArticleActivityBar
          style={themedStyle.activityContainer}
          //comments={article.comments ? article.comments.length : 0}
          //likes={article.likes}
          onCommentPress={this.onCommentsButtonPress}
          onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring
            //photo={article.author.photo.imageSource}
            name={item._embedded.author.filter( element => element.id ==item.author).map((subitem, index) => (
                <Text key = {item.id}>{subitem.name}</Text>
                ))}
            date={item.date}
          />
        </ArticleActivityBar>
      </TouchableOpacity>
       ))}
       </View>*/
    )
  }
  }
    /*getPosts() {
        return fetch(
          "https://instamobile.io/wp-json/wp/v2/posts?page=" + this.state.page
        )
        .then(response => response.json())
        .then(responseJson => {
          this.setState(prevState => ({
            posts: [...prevState.posts, ...responseJson],
            isLoading: false
          }));
        })
        .catch(error => {
          console.error(error);
        });
     }

    render() {
    return (
        <FlatList
        data={this.state.posts}
        renderItem={({ item }) => (
            <News
            navigation={this.props.navigation}
            title={item.title.rendered}
            image={item.acf.author_photo}
            day={item.date}
            data={item}
            />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={1}
        />
    );
    }*/
}

const themedStyle = StyleSheet.create({
    container: {
        borderRadius: 12,
        overflow: 'hidden',
      },
      activityContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
      },
      tipsContainer: {
        marginTop: 16,
      },
      image: {
        minHeight: 220,
        paddingHorizontal: 16,
        paddingVertical: 24,
      },
      titleLabel: {
        maxWidth: 192,
        color: 'white',
      },
});

