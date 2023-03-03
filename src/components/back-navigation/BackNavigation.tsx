import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useInsetsAsMargin } from '../../screens/home/hooks';
import { backNavigationStyles } from './BackNavigation.styles';
import { ArrowLeft } from '../../assets/icons/arrow-left';
import Text from '../text/Text';
import theme from '../../theme/theme';

export interface BackNavigationProps {
	title?: string;
}

const BackNavigation = ({ title }: BackNavigationProps) => {
	const insets = useInsetsAsMargin();
	return (
		<View
			style={[
				backNavigationStyles.container,
				insets.omit('marginBottom')
			]}
		>
			<ArrowLeft stroke={theme.colors.baseLightLight100} />
			<Text style={backNavigationStyles.title}>{title}</Text>
			<View />
		</View>
	);
};

export default BackNavigation;

const styles = StyleSheet.create({});
