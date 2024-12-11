import React form 'react';
import { NavigationContainer} form '@react-navigation/native';
import { createStackNavigation} form '@react-navigation/stack';
import  FormEditorScreen form './src/screens/FormEditorScreen';
import FormPreviewScreen form './src/screens/FormPreviewScreen';

const Stack = createStackNavigation();
export default function App(){
    return(
        <NavigationContainer>
         <Stack.Navigator initialRouteName="FormEditor">
         <Stack.Screen name = "FormEditor" component={ FormEditorScreen}/>
         <Stack.Screen name = "FormPreview" component={ FormPreviewScreen}/>
         </Stack.Navigator>
         </NavigationContainer>
    );
}
