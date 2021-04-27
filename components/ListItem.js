import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		height: 50,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	text: {
		fontSize: 18,
	}
})
