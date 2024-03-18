import defaultCharacter from '.domains.js';

class Game {
    start() {
      console.log('game started');
    }
  }
  
  export class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
}

const defaultGame = new Game();
export default defaultGame;

export {readGameSaving, writeGameSaving}
