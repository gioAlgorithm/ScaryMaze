"use client"
import React, { useContext } from "react"
import style from "./LevelThree.module.scss"
import { GameContext } from "@/context/GameContext";



export default function LevelThree(){
    const {handleObstacleTouch, setIsLvlThree, setIsLvlFour} = useContext(GameContext)

    const handleObstacleEnter = () => {
        console.log("Obstacle enter event triggered!");
        handleObstacleTouch();
    };

    const winLevelThree = () =>{
        setIsLvlThree(false)
        setIsLvlFour(true)
    }

    return(
        <div className={style.lvlThree}>
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
            <div className={style.obstacle7} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle8} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle9} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle10} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle11} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle12} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle13} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle14} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle15} onMouseEnter={handleObstacleEnter}></div>

            <h1 className={style.lvlName}>Level 3</h1>

            <span className={style.win} onMouseEnter={winLevelThree} ></span>
        </div>
    )
} 