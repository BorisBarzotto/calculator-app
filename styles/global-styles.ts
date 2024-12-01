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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        height: 70,
        width: 70,
        marginHorizontal: 5,
    },
    buttonText: {
        color: Colors.textPrimary,
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        fontWeight: 300,
        fontFamily: 'SpaceMono'
    }
})