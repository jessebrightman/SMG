import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Article } from '@src/core/model';
import { articles } from '@src/core/data/article';
import { News } from './news.component';
import  TabViewExample  from 'src/core/navigation/components/TopTabMenu';

interface State {
  articles: Article[];
}

export class NewsContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    articles: articles,
  };

  private onItemPress = (article: Article) => {

  };

  private onItemLikePress = (article: Article) => {

  };

  private onItemCommentPress = (article: Article) => {

  };

  public render(): React.ReactNode {
    return (
      /*<News
        articles={articles}
        onItemPress={this.onItemPress}
        onItemLikePress={this.onItemLikePress}
        onItemCommentPress={this.onItemCommentPress}
      />*/

      <TabViewExample articles={articles}
      onItemPress={this.onItemPress}
      onItemLikePress={this.onItemLikePress}
      onItemCommentPress={this.onItemCommentPress}></TabViewExample>
    );
  }
}
