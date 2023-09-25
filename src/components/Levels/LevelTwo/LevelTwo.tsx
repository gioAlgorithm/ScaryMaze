"use client"
import React, { useContext } from "react"
import style from "./LevelTwo.module.scss"
import { GameContext } from "@/context/GameContext";

export default function LevelTwo(){
    const {handleObstacleTouch, setIsLvlTwo, setIsLvlThree} = useContext(GameContext)
    const handleObstacleEnter = () => {
        console.log("Obstacle enter event triggered!");
        handleObstacleTouch();
    };

    const winLevelTwo = () =>{
        setIsLvlTwo(false)
        setIsLvlThree(true)
    }
    return(
        <div className={style.lvlTwo}>
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
            <h1 className={style.lvlName}>Level 2</h1>

            <span className={style.win} onMouseEnter={winLevelTwo}> </span>
        </div>
    )
}