import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const balanceInputStyles = StyleSheet.create({
	input: {
		...theme.textVariants.bodyBody1,
		fontSize: 64,
		marginVertical: 12,
		color: theme.colors.baseLightLight80
	},
	container: {
		flexDirection: 'row'
	},
	text: {
		fontSize: 64,
		color: theme.colors.baseLightLight80,
		textAlignVertical: 'bottom'
	}
});
