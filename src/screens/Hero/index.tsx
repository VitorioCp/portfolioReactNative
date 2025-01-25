import "./style.tsx"
import { styles } from "./style"
import { Button, Image, Linking, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import photoProfile from "../../../assets/perfil.jpg"

const links = [
    { id: 1, label: 'GitHub', url: 'https://github.com/vitoriocp' },
    { id: 2, label: 'Linkedin', url: 'https://www.linkedin.com/in/vitorio-correa/' },
    { id: 3, label: 'WhatsApp', url: 'https://wa.me/5521969896963' },


]


export function Hero() {
    const openLink = (url: string) => {
        Linking.openURL(url).catch((err) => {
            console.log('Erro ao abrir o link', err)
        });
    }

    return (
        <View style={styles.Container}>


            <Image source={photoProfile} style={{ width: 150, height: 150, borderRadius: 100 }} />
            <Text style={[styles.textColor, styles.h1]}>Vitório Correa</Text>
            <Text style={[styles.textColor, styles.h2]}>Desenvolvedor Front End</Text>


            <View style={styles.listUrl}>
                {links.map((link) => (
                    <Button key={link.id} onPress={() => openLink(link.url)} title={link.label} />
                ))}
            </View>

            <StatusBar style="auto" />

        </View>
    )
}