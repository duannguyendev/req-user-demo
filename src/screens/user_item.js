import React, {Component, ReactNode} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {customWidth} from '../customUI/size';

export default class UserItem extends Component {
  onUserPress = () => {
    const {item, onUserPress} = this.props;
    onUserPress(item);
  };

  render(): ReactNode {
    const {item} = this.props;
    return (
      <TouchableOpacity onPress={this.onUserPress} style={styles.container}>
        <Image
          source={{uri: item.avatar}}
          resizeMode="stretch"
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.name}>
            {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: customWidth(302),
    alignSelf: 'center',
    marginVertical: customWidth(4),
    backgroundColor: 'gray',
    borderRadius: customWidth(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: customWidth(64),
    height: customWidth(64),
    marginRight: customWidth(8),
    borderRadius :customWidth(32)
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: customWidth(4),
  },
  name: {
    fontWeight: '500',
    color: '#444444',
    fontSize: customWidth(14),
  },
  email: {
    fontStyle: 'italic',
    marginTop: customWidth(4),
    color: '#444444',
    fontSize: customWidth(14),
  },
});
