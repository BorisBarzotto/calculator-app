import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: Colors.background,
        flex: 1
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 48,
        textAlign: 'right',
        marginRight: 20,
    },
    secondaryResult: {
        color: Colors.textSecondary,
        fontSize: 24,
        textAlign: 'right',
        marginRight: 20,
    },
})