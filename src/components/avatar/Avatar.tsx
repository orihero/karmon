import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { avatarStyles } from './Avatar.styles';

export interface AvatarProps {
	url?: string;
}

const Avatar = ({ url: uri = 'https://i.pravatar.cc/300' }: AvatarProps) => {
	return (
		<View style={avatarStyles.avatarContainer}>
			<Image style={avatarStyles.avatar} source={{ uri }} />
		</View>
	);
};

export default Avatar;
