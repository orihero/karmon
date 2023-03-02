import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const avatarStyles = StyleSheet.create({
	avatar: {
		width: 32,
		height: 32,
		borderRadius: 32
	},
	avatarContainer: {
		padding: 3,
		borderRadius: 32,
		borderWidth: 2,
		borderColor: theme.colors.violetViolet100
	}
});
