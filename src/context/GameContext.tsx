"use client"
import React, { createContext, useState} from "react";

interface ContextProviderProps{
    children: React.ReactNode
}

interface ContextType{
    startGame: boolean
    setStartGame: React.Dispatch<React.SetStateAction<boolean>>
    isLvlOne: boolean
    setIsLvlOne: React.Dispatch<React.SetStateAction<boolean>>
    isLvlTwo: boolean
    setIsLvlTwo: React.Dispatch<React.SetStateAction<boolean>>
    isLvlThree: boolean
    setIsLvlThree: React.Dispatch<React.SetStateAction<boolean>>
    isLvlFour: boolean
    setIsLvlFour: React.Dispatch<React.SetStateAction<boolean>>
    isLvlFive: boolean
    setIsLvlFive: React.Dispatch<React.SetStateAction<boolean>>
    scream: boolean
    setScream: React.Dispatch<React.SetStateAction<boolean>>
    handleObstacleTouch: () => void
}

export const GameContext = createContext<ContextType>({
    startGame: false,
    setStartGame: () => {},
    isLvlOne: false,
    setIsLvlOne: () => {},
    isLvlTwo: false,
    setIsLvlTwo: () => {},
    isLvlThree: false,
    setIsLvlThree: () => {},
    isLvlFour: false,
    setIsLvlFour: () => {},
    isLvlFive: false,
    setIsLvlFive: () => {},
    scream: false,
    setScream: () => {},
    handleObstacleTouch: () => {},
})

export const GameProvider = ({children}: ContextProviderProps) => {
    
    // creating states to manipulate level display
    const [startGame, setStartGame] = useState(false)
    const [isLvlOne, setIsLvlOne] = useState(false)
    const [isLvlTwo, setIsLvlTwo] = useState(false)
    const [isLvlThree, setIsLvlThree] = useState(false)
    const [isLvlFour, setIsLvlFour] = useState(false)
    const [isLvlFive, setIsLvlFive] = useState(false)
    const [scream, setScream] = useState(false)
    

    //  when mouse enters the obstacle div 
    const handleObstacleTouch = () => {
        setStartGame(false);
        setIsLvlOne(false);
        setIsLvlTwo(false)
        setIsLvlThree(false)
        setIsLvlFour(false)
        setIsLvlFive(false)
    };

    return(
        <GameContext.Provider
            value={{
                startGame, setStartGame,isLvlOne, setIsLvlOne,isLvlTwo,setIsLvlTwo,isLvlThree, setIsLvlThree,
                isLvlFour, setIsLvlFour,isLvlFive, setIsLvlFive, scream, setScream,
                handleObstacleTouch
            }}
        >
            {children}
        </GameContext.Provider>
    )
}