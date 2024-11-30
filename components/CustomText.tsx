import { View, Text, type TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

interface CustomTextProps extends TextProps {
    variant?: "h1" | "h2"
}

export default function CustomText({ children, variant = "h1", ...rest }: CustomTextProps) {

    return (
        <Text style={[
            { color: "white", fontFamily: "SpaceMono" },
            variant === "h1" && globalStyles.mainResult,
            variant === "h2" && globalStyles.secondaryResult
        ]} adjustsFontSizeToFit {...rest}>
            {children}
        </Text>
    )
}