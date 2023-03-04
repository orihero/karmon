import React from 'react';
import { TextInput, View } from 'react-native';
import theme from '../../theme/theme';
import { defaultInputStyles } from './DefaultInput.styles';

export interface DefaultInputProps {
	placeholder?: string;
	value?: string;
	onChangeText?: (text: string) => void;
}

const DefaultInput = ({
	placeholder = 'Input ...',
	onChangeText,
	value
}: DefaultInputProps) => {
	return (
		<View style={defaultInputStyles.container}>
			<TextInput
				style={defaultInputStyles.input}
				placeholderTextColor={theme.colors.baseLightLight20}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

export default DefaultInput;
