import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { ArrowDown } from '../../assets/icons/arrow-down';
import { ArrowRight } from '../../assets/icons/arrow-right';
import Text from '../text/Text';
import { dropdownStyles } from './Dropdown.styles';

export interface DropdownItemProps {
	label: string;
	value: string;
}

export interface DropdownProps {
	items?: DropdownItemProps[];
	onValueChange?: (item: DropdownItemProps) => void;
	value?: DropdownItemProps;
}

const Dropdown = ({ items, value }: DropdownProps) => {
	const [modalVisible, setModalVisible] = useState(false);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<>
			<TouchableOpacity
				onPress={openModal}
				style={dropdownStyles.container}
			>
				<ArrowDown />
				<Text style={dropdownStyles.text}>{value?.value}</Text>
			</TouchableOpacity>
			<Modal
				onBackButtonPress={closeModal}
				onBackdropPress={closeModal}
				onDismiss={closeModal}
				isVisible={modalVisible}
				style={dropdownStyles.modal}
			>
				<View style={dropdownStyles.modalContainer}>
					{items?.map((e) => {
						return (
							<View
								key={e.value}
								style={dropdownStyles.modalItemContainer}
							>
								<Text style={dropdownStyles.modalItem}>
									{e.label}
								</Text>
								<ArrowRight />
							</View>
						);
					})}
				</View>
			</Modal>
		</>
	);
};

export default Dropdown;
