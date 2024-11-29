'use client'
// refrencing to gloabal phasor
import { useEffect,useRef } from 'react';
import GameScene from './gameScene.js';

const gameScene= new GameScene();


const Gamefun = () => {
  const gameRef = useRef(null)

  useEffect(() => {
    if (gameRef.current) {
      const config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        parent: gameRef.current,
        physics: {
          default: 'matter',
          matter: {
            debug: true
          },
        },
        scene: GameScene,
        backgroundColor: 0xffffff,
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH
        },
        callbacks: {
          preBoot: (game) => {
            console.log('Phaser is about to boot')
          },
          postBoot: (game) => {
            console.log('Phaser has finished booting')
          }
        }
      }

      const game = new Phaser.Game(config)

      return () => {
        game.destroy(true)
      }
    }
  }, [])

  return <div ref={gameRef}  />
}

export default Gamefun;

