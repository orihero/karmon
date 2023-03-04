import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const dropdownStyles = StyleSheet.create({
	container: {
		borderRadius: 40,
		borderWidth: 1,
		borderColor: theme.colors.baseLightLight60,
		paddingHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	placeholder: {
		color: theme.colors.baseLightLight20,
		...theme.textVariants.bodyBody1,
		marginHorizontal: 8
	},
	text: {
		marginHorizontal: 8,
		...theme.textVariants.bodyBody1,
		color: theme.colors.baseDarkDark50
	},
	modalContainer: {
		backgroundColor: theme.colors.baseLightLight100,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		paddingVertical: 24,
		paddingHorizontal: 16
	},
	modal: {
		justifyContent: 'flex-end',
		margin: 0
	},
	modalItem: {
		...theme.textVariants.bodyBody1,
		margin: 8
	},
	modalItemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	defaultContainer: {
		borderRadius: 16,
		height: 56
	}
});
