/** @format */

import React, {Component} from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

export default class Camera extends Component {
  state = {
    avatarSource: null,
    videoSource: null,
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.selectVideoTapped = this.selectVideoTapped.bind(this);
  }
  
  selectPhotoTapped() {
    const options = {
      width: 300,
      height: 400,
      cropping: true
    };
    ImageCropPicker.openPicker(options).then(image => {
      onsole.log(JSON.stringify(image))
      this.setState({
        videoSource: video.uri,
      });
    });
  }

  selectVideoTapped() {
    ImageCropPicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(JSON.stringify(video))
      this.setState({
        videoSource: video.uri,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View
            style={[
              styles.avatar,
              styles.avatarContainer,
              { marginBottom: 20 },
            ]}
          >
            {this.state.avatarSource === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>

        {this.state.videoSource && (
          <Text style={{ margin: 8, textAlign: 'center' }}>
            {this.state.videoSource}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});