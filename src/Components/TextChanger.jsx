import React from 'react'
import { useState, useEffect } from 'react'
const TextChanger = () => {

    const texts = ["Hi, I'm Aditi",
        "Hey, what's up",
        "I'm dope"
    ];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(0);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));
            if (isForward) {
                setEndValue((prev) => prev + 1);
            } else {
                setEndValue((prev) => prev - 1);
            }
            if (endValue >= texts[index].length + 10) {
                setIsForward(false);
            }
            if (endValue < 2.1 && !isForward) {
                setIsForward(true);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [endValue, isForward, index]);

    return (
        <div className='transition ease duration-300'>
            {currentText}
        </div>
    )
}

export default TextChanger
