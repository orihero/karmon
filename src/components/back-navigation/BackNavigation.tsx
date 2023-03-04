import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useInsetsAsMargin } from '../../screens/home/hooks';
import { backNavigationStyles } from './BackNavigation.styles';
import { ArrowLeft } from '../../assets/icons/arrow-left';
import Text from '../text/Text';
import theme from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

export interface BackNavigationProps {
	title?: string;
}

const BackNavigation = ({ title }: BackNavigationProps) => {
	const insets = useInsetsAsMargin();
	const navigation = useNavigation();
	const onBackPress = () => {
		navigation.goBack();
	};
	return (
		<View
			style={[
				backNavigationStyles.container,
				insets.omit('marginBottom')
			]}
		>
			<TouchableOpacity onPress={onBackPress}>
				<ArrowLeft stroke={theme.colors.baseLightLight100} />
			</TouchableOpacity>
			<Text style={backNavigationStyles.title}>{title}</Text>
			<View />
		</View>
	);
};

export default BackNavigation;

const styles = StyleSheet.create({});
