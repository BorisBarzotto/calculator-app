import { Text, View } from 'react-native'
import { globalStyles } from '@/styles/global-styles';
import CustomText from '@/components/CustomText';
import CalculatorButton from '@/components/CalculatorButton';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';

const CalculatorApp = () => {

    const { formula, number, prevNumber, buildNumber} = useCalculator()
    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <CustomText variant="h1">{formula}</CustomText>
                <CustomText variant='h2'>50</CustomText>
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton blackText color={Colors.lightGray} label="C" onPress={()=>buildNumber("c")}/>
                <CalculatorButton blackText color={Colors.lightGray} label="+/-" onPress={()=>buildNumber("+/-")}/>
                <CalculatorButton blackText color={Colors.lightGray} label="del" onPress={()=>buildNumber("del")}/>
                <CalculatorButton color={Colors.orange} label="/" onPress={()=>console.log("/")}/>
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label="7" onPress={()=>buildNumber("7")}/>
                <CalculatorButton label="8" onPress={()=>buildNumber("8")}/>
                <CalculatorButton label="9" onPress={()=>buildNumber("9")}/>
                <CalculatorButton color={Colors.orange} label="x" onPress={()=>console.log("x")}/>
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label="4" onPress={()=>buildNumber("4")}/>
                <CalculatorButton label="5" onPress={()=>buildNumber("5")}/>
                <CalculatorButton label="6" onPress={()=>buildNumber("6")}/>
                <CalculatorButton color={Colors.orange} label="-" onPress={()=>console.log("-")}/>
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label="1" onPress={()=>buildNumber("1")}/>
                <CalculatorButton label="2" onPress={()=>buildNumber("2")}/>
                <CalculatorButton label="3" onPress={()=>buildNumber("3")}/>
                <CalculatorButton color={Colors.orange} label="+" onPress={()=>console.log("+")}/>
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label="0" doubleSized onPress={()=>buildNumber("0")}/>
                <CalculatorButton label="." onPress={()=>buildNumber(".")}/>
                <CalculatorButton color={Colors.orange} label="=" onPress={()=>console.log("=")}/>
            </View>
        </View>
    )
}

export default CalculatorApp;
