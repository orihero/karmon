import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const backNavigationStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20
	},
	title: {
		...theme.textVariants.titleTitle3,
		color: theme.colors.baseLightLight100
	}
});
