import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const defaultInputStyles = StyleSheet.create({
	container: {
		borderRadius: 16,
		borderWidth: 1,
		borderColor: theme.colors.baseLightLight60,
		padding: 16,
		paddingHorizontal: 16,
		marginVertical: 8
	},
	input: {
		...theme.textVariants.bodyBody3,
		color: theme.colors.baseDarkDark50,
		paddingHorizontal: 8
	}
});
