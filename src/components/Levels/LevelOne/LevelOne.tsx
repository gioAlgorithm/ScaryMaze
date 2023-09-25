"use client"
import React from 'react'
import { useContext } from 'react';
import { GameContext } from '@/context/GameContext';
import style from "./LevelOne.module.scss"

export default function LevelOne(){
    const {handleObstacleTouch, setIsLvlOne, setIsLvlTwo} = useContext(GameContext)

    const handleObstacleEnter = () => {
        console.log("Obstacle enter event triggered!");
        handleObstacleTouch();
    };

    const winLevelOne = () =>{
        setIsLvlOne(false)
        setIsLvlTwo(true)
    }

    return(
        <div className={style.lvlOne}>
            <div className={style.borderWallWidth1} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.borderWallWidth2} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.borderWallHeight1} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.borderWallHeight2} onMouseEnter={handleObstacleEnter}></div>

            <div className={style.obstacle1} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle2} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle3} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle4} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle5} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle6} onMouseEnter={handleObstacleEnter}></div>
            <h1 className={style.lvlName}>Level 1</h1>

            <span className={style.win} onMouseEnter={winLevelOne}></span>
        </div>
    )
} 
