"use client"
import React, { useContext, useEffect, useRef } from "react";
import style from "./LevelFour.module.scss"
import { GameContext } from "@/context/GameContext";

export default function LevelFour() {
    const { handleObstacleTouch, setIsLvlFour, setIsLvlFive } = useContext(GameContext);

    // creating refs to detect collision between mouse and moving div
    const xRef = useRef(0);
    const yRef = useRef(0);

    const handleObstacleEnter = () => {
        console.log("Obstacle enter event triggered!");
        handleObstacleTouch();
    };

    const winLevelFour = () => {
        setIsLvlFour(false);
        setIsLvlFive(true);
    };

    // logic for collision
    const handleMouseCollision = (e: any) => {
        xRef.current = e.pageX;
        yRef.current = e.pageY;
    };

    const checkCollision = () => {
        const movingDivs = document.querySelectorAll("#moving-div");

        movingDivs.forEach((movingDiv) => {
        const divReact = movingDiv.getBoundingClientRect();

        const x = xRef.current;
        const y = yRef.current;

        if (x >= divReact.left && x <= divReact.right && y >= divReact.top && y <= divReact.bottom) {
            console.log("Collision with moving div!");
            handleObstacleEnter();
        }
        });
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseCollision);

        const intervalId = setInterval(checkCollision, 50);

        return () => {
        document.removeEventListener("mousemove", handleMouseCollision);
        clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={style.lvlFour}>
        
            <div className={style.borderWallWidth1} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.borderWallWidth2} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.borderWallHeight1} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.borderWallHeight2} onMouseEnter={handleObstacleEnter}></div>

            <div className={style.obstacle1} onMouseEnter={handleObstacleEnter}></div>
            <div className={style.obstacle2} onMouseEnter={handleObstacleEnter}></div>

            <div className={style.movingDiv1} id="moving-div" onMouseEnter={handleObstacleEnter}></div>
            <div className={style.movingDiv2} id="moving-div" onMouseEnter={handleObstacleEnter}></div>
            <div className={style.movingDiv3} id="moving-div" onMouseEnter={handleObstacleEnter}></div>
            <div className={style.movingDiv4} id="moving-div" onMouseEnter={handleObstacleEnter}></div>
            <div className={style.movingDiv5} id="moving-div" onMouseEnter={handleObstacleEnter}></div>
            <div className={style.movingDiv6} id="moving-div" onMouseEnter={handleObstacleEnter}></div>

            <h1 className={style.lvlName}>Level 4</h1>
            <span className={style.win} onMouseEnter={winLevelFour}></span>

        </div>
    );
}