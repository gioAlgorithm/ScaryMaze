"use client"
import React from 'react'
import style from "./Start.module.scss"
import { PiWarningBold } from "react-icons/pi";
import { Nosifer } from 'next/font/google'
import { useContext } from 'react';
import { GameContext } from '@/context/GameContext';

const inter = Nosifer({ 
    weight: '400',
    subsets: ['latin']
})

export default function Start() {

    const {setIsLvlOne, setStartGame} = useContext(GameContext)

    const handleStart = ()=>{
        setStartGame(true)
        setIsLvlOne(true)
    }
    return (
        <div className={style.startContainer}>
            <div className={style.innerStart}>
                <div className={style.warning}>
                    <div className={style.warningSign}>
                        <PiWarningBold />
                        <h1>WARNING: Scary Content</h1>
                    </div>
                    <p>The &apos;Scary Maze Game&apos; contains intense and frightening content. Not suitable for individuals with heart conditions or those easily scared.</p>
                </div>

                <h1 className={inter.className}>SCARY MAZE</h1>
                <p>Guide the red point through the maze, but don&apos;t touch the walls!</p>
                <h5>Turn up your sound!</h5>

                <button onClick={handleStart}>Play</button>
            </div>
        </div>
    )
}
