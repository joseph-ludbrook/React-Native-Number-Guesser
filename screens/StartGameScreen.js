import {
	StyleSheet,
	TextInput,
	View,
	Alert,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import { useState } from 'react';
import MainButton from '../components/ui/MainButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import DescriptionText from '../components/ui/DescriptionText';

function StartGameScreen({ onConfirmNumber }) {
	const [enteredGuess, setEnteredGuess] = useState('');
	const { width, height } = useWindowDimensions(); // used to evaluate the sizes of the app dynamically
	//basically used to ensure the sizes are correct if the user rotates as using the app

	function numberInputHander(enteredNumber) {
		setEnteredGuess(enteredNumber);
	}

	function resetGuessHandler() {
		setEnteredGuess('');
	}

	function confirmInputHandler() {
		const lChosenNumber = parseInt(enteredGuess);
		console.log(lChosenNumber, enteredGuess);
		if (isNaN(lChosenNumber) || lChosenNumber <= 0 || lChosenNumber > 99) {
			Alert.alert(
				'Invalid Number',
				'Number must bne a number between 1 and 99',
				[{ test: 'Okay', style: 'destructive', onPress: resetGuessHandler }]
			);
			return;
		}
		onConfirmNumber(lChosenNumber);
	}
	const marginTopDistance = height < 250 ? 20 : 50;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView
				style={styles.screen}
				behavior="position">
				<View style={[styles.mainContainer, { marginTop: marginTopDistance }]}>
					<Title>Guess a number</Title>
					<Card>
						<DescriptionText>Enter a Number Please</DescriptionText>
						<TextInput
							style={styles.userGuessInput}
							maxLength={2}
							keyboardType="number-pad"
							autoCapitalize="none"
							autoCorrect={false}
							value={enteredGuess}
							onChangeText={numberInputHander}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<MainButton onPress={resetGuessHandler}>Reset</MainButton>
							</View>
							<View style={styles.buttonContainer}>
								<MainButton onPress={confirmInputHandler}>Confirm</MainButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		alignItems: 'center',
	},
	userGuessInput: {
		height: 50,
		width: 50,
		fontSize: 34,
		borderBottomColor: Colors.secondary1,
		borderBottomWidth: 2,
		color: Colors.secondary1,
		marginVertical: 10,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
});
