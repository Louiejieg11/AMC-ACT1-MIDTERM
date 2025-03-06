import React,{useState} from 'react'
import { Text, 
         StyleSheet,
         ScrollView,
         View,
         Switch,
         Button,
         Alert,
         TouchableOpacity,
         ImageBackground } from 'react-native';

const MyChoices = () => {
 
  const [selectedChoices, setSelectedChoices] = useState({})

  const toggleSwitch = (choice1, choice2) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [choice1]: !prev[choice1],
      [choice2]: prev[choice1],
    }));
  };

const coffeePairs = [
  ["Superman", "Batman"],
  ["Goku", "Lebron"],
  ["Naruto", "Jc"],
  ["Deadpool", "Flash"],
  ["Spiderman", "Ironman"],

  
]
const handleSubmit = () => {
  const selected = Object.keys(selectedChoices).filter((key) => selectedChoices[key] )
  const message = selected.length > 0 
  ? selected.map((choice, index) => `${index + 1}. ${choice}`).join('\n') : 'No items selected';
  Alert.alert('Your choices ', message)
}

    return(
      <ImageBackground source={{uri :"https://th.bing.com/th/id/OIP.InHajgGFn9W_jsV35kf1_QHaNK?w=1080&h=1920&rs=1&pid=ImgDetMain"}} style={style.imageBackground}>
        <ScrollView style={style.continer}>
          <Text style={style.headerText}>Select Your Super Hero</Text>
          {coffeePairs.map(([choice1, choice2]) => (
            <View style={style.selectContainer}>
            <Text style={style.textDesign}>{choice1}</Text>
            <Switch
               value={selectedChoices[choice1] || false}
                onValueChange={() => toggleSwitch(choice1, choice2)}
            />
            <Text style={style.textDesign}>{choice2}</Text>
            </View>

          ))}
          <TouchableOpacity onPress={handleSubmit} style={style.btn}>
          <Text style={{textAlign: 'center', color: "white"}}>Submit Choices</Text>
          </TouchableOpacity>
        </ScrollView>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
  headerText: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
      color: '#ffff',
      textTransform: 'uppercase'
      
  },
  imageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  continer: {
      padding: 30,
      justifyContent: "center",
      alignContent: 'center',
     
  },
  selectContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    gap: 30,
    alignContent: 'center',
    justifyContent: "center",

  },
  btn: {
    backgroundColor: "#4CC9FE",
    padding: 10,
    borderRadius: 10
  },
   textDesign: {
     fontSize: 18,
     fontWeight: "bold",
     color: "#ffff"
   }
})

export default MyChoices;

