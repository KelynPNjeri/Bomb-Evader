import Phaser from 'phaser';

export default {
    type: Phaser.WEBGL,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: window.innerWidth},
            debug: false
        },
    },
};