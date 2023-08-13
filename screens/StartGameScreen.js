import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import MainButton from '../components/MainButton';

function StartGameScreen() {
	return (
		<View style={styles.userInputContainer}>
			<TextInput />
			<MainButton>Reset</MainButton>
			<MainButton>Confirm</MainButton>
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	userInputContainer: {
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: '#631574',
		borderRadius: 10,
		elevation: 8, // elevation used to add shadow on android
		shadowColor: 'black', // shadow used to add shadow on IOS
		shadowOffset: { width: 2, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
