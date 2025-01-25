import { Button, Image, Text, View } from "react-native";
import photoProfile from "../../../assets/perfil.jpg"
import { styles } from "./style"
import AntDesign from '@expo/vector-icons/AntDesign';

const skills = [
    { name: 'React', stars: 5 },
    { name: 'React Native', stars: 4 },
    { name: 'Node', stars: 4 },

];

export function Skills() {
    return (
        <View style={styles.Container}>

            <Image source={photoProfile} style={{ width: 150, height: 150, borderRadius: 100 }} />
            <Text style={[styles.textColor, styles.h1]}>Minhas Skills</Text>


            <View style={styles.listSkills}>
                {skills.map((skill, index) => (
                    <View key={index} style={styles.mapList} >
                        <Text style={styles.textSkills}>{skill.name}:</Text>
                        {Array.from({ length: skill.stars }).map((_, starIndex) => (
                            <AntDesign key={starIndex} name="star" size={20} color="yellow" />
                        ))}
                    </View>
                ))}
            </View>


            <View style={styles.button}>
                <Button title="Fale comigo" />
            </View>



        </View>
    )
}