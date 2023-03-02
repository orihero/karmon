import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const dropdownStyles = StyleSheet.create({
	container: {
		borderRadius: 40,
		borderWidth: 1,
		borderColor: theme.colors.baseLightLight60,
		padding: 10,
		paddingHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		marginLeft: 8
	},
	modalContainer: {
		padding: 20,
		backgroundColor: theme.colors.baseLightLight100,
		borderRadius: 8
	}
});
