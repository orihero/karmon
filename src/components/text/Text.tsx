import React from 'react';
import { StyleSheet, Text as RnText, TextProps } from 'react-native';
import theme from '../../theme/theme';

const Text = (props: TextProps) => {
	let styles = props.style;
	//@ts-ignore
	styles = { ...styles, ...theme.textVariants.defaultRegularFileMetadata };
	return <RnText {...props}>{props.children}</RnText>;
};

export default Text;

const styles = StyleSheet.create({});
