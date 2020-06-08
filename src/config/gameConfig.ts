import * as Phaser from "phaser";
import { MainScene } from "../scenes/MainScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: MainScene,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    parent: 'game',
    backgroundColor: '#000000',
};