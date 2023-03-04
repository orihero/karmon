import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import Text from '../text/Text';
import { defaultButtonStyles } from './DefaultButton.styles';
import animation from '../../assets/animations/loading.json';

export interface DefaultButtonProps {
	style?: StyleProp<ViewStyle>;
	onPress?: () => void;
	text?: string;
	loading?: boolean;
}

const DefaultButton = ({
	style,
	loading,
	onPress,
	text
}: DefaultButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[defaultButtonStyles.container, style]}
		>
			{loading ? (
				<AnimatedLottieView source={animation} />
			) : (
				<Text style={defaultButtonStyles.text}>{text}</Text>
			)}
		</TouchableOpacity>
	);
};

export default DefaultButton;
