import { Image, View, Text, ImageBackground, } from 'react-native'
import { styles } from './styles'
import { useState } from "react"
export function Slide2() {
    const [page, setPage] = useState(0)
    const slide1 = require("../../assets/logo.png");
    return (
        <View style={styles.container}>
                
                <View style={styles.box3}>
                    <Image style={styles.img} source={slide1} />
                    <Text style={styles.text}>o mercado em segundos</Text>
                </View>
            

            <View style={styles.grand}>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.text}>o em segundos</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>seu radar</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.text}>seus lucros</Text>
                    </View>
                </View>
            </View>
        </View>
    )

}