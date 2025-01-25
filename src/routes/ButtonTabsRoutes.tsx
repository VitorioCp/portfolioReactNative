import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Hero } from "../screens/Hero"
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Skills } from "../screens/Skills";
const { Screen, Navigator } = createBottomTabNavigator()


export const ButtonTabsRoutes = () => {
    return (
        <Navigator>
            <Screen name="Home" component={Hero} options={{
                tabBarIcon: () => (
                    <Entypo name="home" size={24} color="black" />
                )
            }} />

            <Screen name="Skills" component={Skills} options={{
                tabBarIcon: () => (<AntDesign name="codesquareo" size={24} color="black" />)
            }} />
        </Navigator>
    )
}