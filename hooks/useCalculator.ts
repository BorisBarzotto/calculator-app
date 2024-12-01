import { useEffect, useRef, useState } from "react"

enum Operator {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = '*',
    DIVIDE = '/',
}

export const useCalculator = () => {
    const [ formula, setFormula ] = useState<string>('0')
    const [ number, setNumber ] = useState<string>('0')
    const [ prevNumber, setPrevNumber ] = useState<string>('0')
    const lastOperation = useRef<Operator>()

    useEffect(() => {
        if (number === 'c') {
            setNumber('0')
            setPrevNumber('0')
            setFormula('0')
        } else if (number === '+/-') {
            setNumber((Number(number) * -1).toString())
        } else if (number === 'del') {
            if (number.length === 1) {
                setNumber('0')
            } else {
                setNumber(number.slice(0, -1))
            }
        }
    }, [number])

    const buildNumber = (num: string) => {
        console.log(num)
        if (num.includes('.') && number.includes('.')) return
        if (num === '.' && number === '0') {
            setNumber('0.')
        } else if (num === '.' && number === '0.') {
            return
        } else if (num === '.' && number === '') {
            setNumber('0.')
        } else if (num === '.' && number !== '') {
            setNumber(number + num)
        } else if (number === '0') {
            setNumber(num)
        } else {
            setNumber(number + num)
        }
    }

    return {
        formula,
        number,
        prevNumber,
        buildNumber
    }
}