import './style.css';
import Phaser from 'phaser';
import config from './config/config';
import Main from './scenes/main';
import LeaderBoard from './scenes/leaderboard';

class Game extends Phaser.Game {
  constructor(config) {
    super(config);
    this.scene.add('Main', Main);
    this.scene.add('LeaderBoard', LeaderBoard);

    this.scene.start('Main');
  }
}

window.game = new Game(config);