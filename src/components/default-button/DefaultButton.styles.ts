import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const defaultButtonStyles = StyleSheet.create({
	container: {
		borderRadius: 16,
		backgroundColor: theme.colors.violetViolet100,
		justifyContent: 'center',
		alignItems: 'center',
		height: 56
	},
	text: {
		...theme.textVariants.titleTitle3,
		color: theme.colors.baseLightLight80
	}
});
