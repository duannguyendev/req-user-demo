import React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Button
} from 'react-native'

import Api from '../network/api';
import UserItem from './user_item.js';
import {customWidth} from '../customUI/size';



export default class Users extends React.Component {
  // users array 
   users = [];
   // total pages
   totalPages = 0;

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  async componentDidMount() {
    //default load data of first page
    this.requestUsersOfPage(1);
  }


  render() {
    const {page} = this.state;
    const users = this.users;
    const totalPages = this.totalPages;

    return (
        <View style={styles.container}>
        <>
            <FlatList
              bounces={false}
              data={users}
              renderItem={this.renderUser}
              keyExtractor={item => item.id.toString()}
            />
            <View style={styles.footer}>
              <Button
                disabled={page <= 1}
                onPress={this.loadPrevPage}
                title="Prev">
              </Button>
              <View style={styles.line} />
              <Button
                disabled={page >= totalPages}
                onPress={this.loadNextPage}
                title="Next">
              </Button>
            </View>
          </>
      </View>
    )
  }

  onUserPress = user => {
    console.log('onUserPress :' + user.email);
  };

  renderUser = ({item}) => {
    return <UserItem   item={item} onUserPress={this.onUserPress}/>;
  };

  loadNextPage = () => {
    const {page} = this.state;
    const nextPage = page + 1;
    this.requestUsersOfPage(nextPage);
  };

  loadPrevPage = () => {
    const {page} = this.state;
    const previousPage = page - 1;
    this.requestUsersOfPage(previousPage);
  };

 async requestUsersOfPage(page) {
   //request data
    const response = await Api.getUsers({page: page,per_page: 4});
    //TODO: handle response: validate data
    //get data from response 
    this.totalPages = response.total_pages;
    this.users = response.data;

    //reload data
    this.setState({page: response.page});
  };

}



const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: customWidth(15),
    backgroundColor: '#469AD4',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  line: {
    width: 1,
    backgroundColor: 'white',
  },
})
