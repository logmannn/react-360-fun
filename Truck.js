import React from 'react';
import { AppRegistry, View, asset, AmbientLight, PointLight } from 'react-360';
import Entity from 'Entity';
 
export default class Truck extends React.Component {
  state = {
    translateX: 0,
    rotateY: 0
  };
 
  componentDidMount() {
    setTimeout(() => { 
      this.interval = setInterval(() => { 
 
        // After 15 sec, rotate truck and drive off!
        if(this.state.rotateY < 120){
          this.setState({rotateY: this.state.rotateY + 1});
          this.setState({translateX: this.state.translateX + 0.01});
        } else{
          this.setState({translateX: this.state.translateX + 0.1});
        }
 
      }, 0);
    }, 0);
  };
 
  componentWillUnmount() {
    clearInterval(this.interval);
  };
 
  render() {
    return (
      <View>
        <AmbientLight intensity={ 1 } />
        <PointLight style={{color: 'white', transform: [{translate: [0, 1, 2]}]}} />
        <Entity
          source={{
            obj: asset('Teapot2.obj'),
            mtl: asset('Teapot2.mtl')
          }}
          lit={true}
          style={{
            transform: [
              {translateX: this.state.translateX},
              {rotateY: this.state.rotateY},
              {scale: 2}
            ],
          }}
        />
      </View>
    );
  };
};
 
AppRegistry.registerComponent('Truck', () => Truck);