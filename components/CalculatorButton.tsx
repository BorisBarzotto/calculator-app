import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    color?: string,
    blackText?: boolean,
    doubleSized?: boolean,
    onPress: () => void
}
const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    doubleSized = false,
    onPress }: Props) => {
    return (
        <Pressable style={({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: doubleSized ? 150 : 70
        })}
            onPress={() => {
                Haptics.selectionAsync()
                onPress()
            }}>
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? Colors.darkGray : Colors.textPrimary,
            }}>{label}</Text>
        </Pressable>
    )
}

export default CalculatorButton