import { Button, StyleSheet, Text, View } from 'react-native';

export default function BaiTap() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Top Left</Text>
      </View>
      <View style={styles.Button}> 
        <View style={styles.ButtomLeft}>
          <Text style={styles.text}>Buttom Left</Text>
        </View>
        <View style={styles.ButtomRight}>
        <View style={styles.ButtomTop}>
          <Text style={styles.text}>Right Top</Text>
        </View>
        <View style={styles.ButtomRightBottom}>
          <Text style={styles.text}>Right Bottom </Text>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square:{
    flex:1,
    backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
     fontSize:20,
     color:'blue',
     fontWeight:'bold'
  },
  Button:{
    flex:1,
    flexDirection:'row'
  },
  ButtomLeft:{
    flex:1,
    backgroundColor:'#00FF00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtomRight:{
    flex:1,
    backgroundColor:'#FF00FF',
    textAlign:'right'
  },
  ButtomTop:{
    flex:2,
    backgroundColor:'#FF69B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtomRightBottom:{
    flex:1,
    backgroundColor:'#40E0D0',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
