import React from "react";
import {View, Image, StyleSheet, Dimensions} from "react-native";
import CapriolaText from "../ui/CapriolaText";
import colors from "../../assets/colours";

const {width, height} = Dimensions.get("window");
//768 x 1024
const cardSize = width >= 768 ? 250 : 150;
export default WordCard = ({text, imageUrl, isClickable, rotate}) =>
<View style={[styles.cardSpacing, isClickable && styles.dashedBorder]}>
	<View style={styles.card}>
		<Image style={styles.image} source={imageUrl}/>
		{text && <CapriolaText style={styles.text}>{text}</CapriolaText>}
	</View>
</View>;

const styles = StyleSheet.create({
	dashedBorder: {
		padding: 10,
		borderStyle: "dashed",
		borderWidth: 3,
		borderRadius: 20,
		borderColor: colors.tulipTree,
	},

	cardSpacing: {
		margin: 10
	},

	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 10,
		height: cardSize,
		width: cardSize,
	},

	image: {
		flex: 1,
		width: undefined,
		height: undefined,
		resizeMode: 'contain'
	},

	text: {
		margin: 10,
		fontSize: 20,
		color: '#212223',
		textAlign: "center"
	}
});