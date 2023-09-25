"use client"
import React, { useContext, useState, useEffect }  from 'react'
import style from "./Game.module.scss"
import Start from '../Start/Start'
import { GameContext } from '@/context/GameContext'
import LevelOne from '../Levels/LevelOne/LevelOne'
import Cursor from '../Cursor/Cursor'
import LevelTwo from '../Levels/LevelTwo/LevelTwo'
import LevelThree from '../Levels/LevelThree/LevelThree'
import LevelFour from '../Levels/LevelFour/LevelFour'
import LevelFive from '../Levels/LevelFive/LevelFive'



export default function Game() {
  const{startGame, isLvlOne,isLvlTwo, isLvlThree, isLvlFour, isLvlFive, scream} = useContext(GameContext)
  
  // states for cursor and the logic for mouse position
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: any) => {
      console.log("Mouse move event triggered!");
      // Using requestAnimationFrame to ensure smoother updates
      window.requestAnimationFrame(() => {
        setMousePosition({ x: window.scrollX + e.clientX, y: window.scrollY + e.clientY });
      });
  };

  // handle scream
  useEffect(() => { 
    if(scream){
        const audio = new Audio('/assets/audio/screaming.mp3');
        audio.play();
    }
  }, [scream]);
  
  return (
    <div className={style.game} onMouseMove={handleMouseMove} style={{ backgroundImage: `url(/assets/images/scary.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {!startGame && <Start />}
      {startGame && !scream && <Cursor x={mousePosition.x} y={mousePosition.y} />}
      {isLvlOne && <LevelOne />}
      {isLvlTwo && <LevelTwo />}
      {isLvlThree && <LevelThree />}
      {isLvlFour && <LevelFour />}
      {isLvlFive && <LevelFive />} 
    </div>
  )
}
