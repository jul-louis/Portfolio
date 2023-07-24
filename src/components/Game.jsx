// import React, { useEffect, useRef, useState } from 'react';

// const getRandomDirection = () => {
//   const directions = ['up', 'down', 'left', 'right'];
//   return directions[Math.floor(Math.random() * directions.length)];
// };

// const Game = () => {
//   const canvasRef = useRef(null);
//   const [npcMessage, setNpcMessage] = useState('');
//   const [gameOver, setGameOver] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [slayMode, setSlayMode] = useState(false);
//   const [slayCountdown, setSlayCountdown] = useState(300);
//   const [dumbLittleCooldown, setDumbLittleCooldown] = useState(0);
//   const [canvasWidth, setCanvasWidth] = useState(800);
//   const [canvasHeight, setCanvasHeight] = useState(600);
//   const playerSize = 32;
//   const messageBoxHeight = 80;
//   let playerX = Math.floor((canvasWidth / playerSize) / 2);
//   let playerY = Math.floor((canvasHeight - messageBoxHeight) / playerSize / 2);
//   let npcs = [
//     { x: 3, y: 12, message: 'Hello, adventurer!' },
//     { x: 7, y: 5, message: 'Welcome to the game!' },
//     { x: 2, y: 18, message: 'I have a quest for you!' },
//     { x: 9, y: 4, message: 'Beware of the monsters ahead!' },
//   ];

//   let objects = [
//     { x: 4, y: 3, color: 'yellow' },
//     { x: 16, y: 7, color: 'orange' },
//     { x: 1, y: 9, color: 'purple' },
//     { x: 10, y: 6, color: 'pink' },
//   ];

//   let monsters = [
//     { x: 0, y: 0, color: 'red', fleeing: false },
//     { x: 28, y: 0, color: 'green', fleeing: false },
//   ];

//   let dumblittles = [
//     { x: 0, y: 0, color: 'brown', direction: getRandomDirection() },
//     { x: 0, y: 0, color: 'gray', direction: getRandomDirection() },
//   ];

//   const handleKeyDown = (e) => {
//     if (gameOver || !gameStarted) return; // Ignore key events if game is over or not started

//     let newPlayerX = playerX;
//     let newPlayerY = playerY;

//     if (e.key === 'w' || e.key === 'W') {
//       newPlayerY--;
//     } else if (e.key === 's' || e.key === 'S') {
//       newPlayerY++;
//     } else if (e.key === 'a' || e.key === 'A') {
//       newPlayerX--;
//     } else if (e.key === 'd' || e.key === 'D') {
//       newPlayerX++;
//     }

//     // Boundary checks
//     if (
//       newPlayerX >= 0 &&
//       newPlayerX < canvasWidth / playerSize &&
//       newPlayerY >= 0 &&
//       newPlayerY < (canvasHeight - messageBoxHeight) / playerSize
//     ) {
//       playerX = newPlayerX;
//       playerY = newPlayerY;
//     }
//   };

//   const checkCollision = (npc) => {
//     return playerX === npc.x && playerY === npc.y;
//   };

//   const moveMonsters = () => {
//     monsters.forEach((monster) => {
//       // Simple monster behavior: Chase the player
//       if (!monster.fleeing) {
//         if (monster.x < playerX) {
//           monster.x++;
//         } else if (monster.x > playerX) {
//           monster.x--;
//         }

//         if (monster.y < playerY) {
//           monster.y++;
//         } else if (monster.y > playerY) {
//           monster.y--;
//         }
//       } else if (monster.fleeing) {
//         // Fleeing behavior: Move in the opposite direction of the player
//         if (monster.x < playerX) {
//           monster.x--;
//         } else if (monster.x > playerX) {
//           monster.x++;
//         }

//         if (monster.y < playerY) {
//           monster.y--;
//         } else if (monster.y > playerY) {
//           monster.y++;
//         }
//       }
//     });
//   };

//   const moveDumblittles = () => {
//     dumblittles.forEach((dumblittle) => {
//       if (Math.random() < 0.25) {
//         // Randomly change direction
//         dumblittle.direction = getRandomDirection();
//       }

//       // Move in the current direction
//       if (dumblittle.direction === 'up') {
//         dumblittle.y--;
//       } else if (dumblittle.direction === 'down') {
//         dumblittle.y++;
//       } else if (dumblittle.direction === 'left') {
//         dumblittle.x--;
//       } else if (dumblittle.direction === 'right') {
//         dumblittle.x++;
//       }

//       // Boundary checks for Dumblittle
//       if (dumblittle.x < 0) {
//         dumblittle.x = 0;
//       } else if (dumblittle.x >= canvasWidth / playerSize) {
//         dumblittle.x = Math.floor(canvasWidth / playerSize) - 1;
//       }

//       if (dumblittle.y < 0) {
//         dumblittle.y = 0;
//       } else if (dumblittle.y >= (canvasHeight - messageBoxHeight) / playerSize) {
//         dumblittle.y = Math.floor((canvasHeight - messageBoxHeight) / playerSize) - 1;
//       }
//     });
//   };

//   const slayMonsters = () => {
//     if (slayCountdown > 0) {
//       setSlayCountdown(slayCountdown - 1);
//     } else {
//       // Slay all monsters and start fleeing
//       monsters.forEach((monster) => {
//         monster.fleeing = true;
//       });
//       setSlayMode(false);
//     }
//   };

//   const slayDumblittles = () => {
//     if (dumbLittleCooldown === 0) {
//       dumblittles = [];
//       setDumbLittleCooldown(6);
//     }
//   };

//   const restartGame = () => {
//     setGameOver(false);
//     setGameStarted(false);
//     setSlayMode(false);
//     setSlayCountdown(100);
//     setDumbLittleCooldown(0);
//     playerX = Math.floor((canvasWidth / playerSize) / 2);
//     playerY = Math.floor((canvasHeight - messageBoxHeight) / playerSize / 2);
//     setNpcMessage('');
//   };

//   const handleResize = () => {
//     const { innerWidth, innerHeight } = window;
//     setCanvasWidth(innerWidth * 0.8);
//     setCanvasHeight(innerHeight * 0.8);
//   };

//   const startGame = () => {
//     setGameStarted(true);
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     const drawPlayer = () => {
//       context.fillStyle = 'blue';
//       context.fillRect(playerX * playerSize, playerY * playerSize, playerSize, playerSize);
//     };

//     const drawNpcs = () => {
//       context.fillStyle = 'red';
//       npcs.forEach((npc) => {
//         context.fillRect(npc.x * playerSize, npc.y * playerSize, playerSize, playerSize);
//       });
//     };

//     const drawObjects = () => {
//       context.fillStyle = 'orange';
//       objects.forEach((object) => {
//         context.fillRect(object.x * playerSize, object.y * playerSize, playerSize, playerSize);
//       });
//     };

//     const drawMonsters = () => {
//       context.fillStyle = 'gray';
//       monsters.forEach((monster) => {
//         context.fillRect(monster.x * playerSize, monster.y * playerSize, playerSize, playerSize);
//       });
//     };

//     const drawDumblittles = () => {
//       context.fillStyle = 'brown';
//       dumblittles.forEach((dumblittle) => {
//         context.fillRect(dumblittle.x * playerSize, dumblittle.y * playerSize, playerSize, playerSize);
//       });
//     };

//     const drawMap = () => {
//       context.fillStyle = 'green';
//       context.fillRect(0, 0, canvas.width, canvasHeight - messageBoxHeight);
//     };

//     const drawMessageBox = (npcMessage) => {
//       context.fillStyle = 'black';
//       context.fillRect(0, canvasHeight - messageBoxHeight, canvasWidth, messageBoxHeight);
//       context.fillStyle = 'white';
//       context.font = '20px serif';
//       context.fillText(npcMessage, 10, canvasHeight - 20);
//     };

//     const handleGameLoop = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       drawMap();
//       drawNpcs();
//       drawObjects();
//       drawMonsters();
//       drawDumblittles();
//       drawPlayer();

//       if (!gameStarted) {
//         drawMessageBox('Press Start to begin the game.');
//         return;
//       }

//       if (gameOver) {
//         drawMessageBox('Game Over! Press Restart to play again.');
//         return;
//       }

//       if (slayMode) {
//         slayMonsters();
//         slayDumblittles();
//       }

//       npcs.forEach((npc) => {
//         if (checkCollision(npc)) {
//           setNpcMessage(npc.message);
//           drawMessageBox(npc.message);
//           console.log(npc.message);
//         }
//       });

//       moveMonsters();
//       moveDumblittles();

//       monsters.forEach((monster) => {
//         if (checkCollision(monster) && slayMode) {
//           // Slay the monster if in slay mode
//           const index = monsters.indexOf(monster);
//           monsters.splice(index, 1);
//           if (monsters.length === 0) {
//             setGameOver(true);
//           }
//         } else if (checkCollision(monster) && !monster.fleeing) {
//           // Game over if player collides with a monster in normal mode
//           setGameOver(true);
//         }
//       });

//       // Cooldown for Dumb Littles disappearance
//       if (dumbLittleCooldown > 0) {
//         setDumbLittleCooldown(dumbLittleCooldown - 1);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('resize', handleResize);
//     const gameLoopInterval = setInterval(handleGameLoop, 200);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('resize', handleResize);
//       clearInterval(gameLoopInterval);
//     };
//   }, [gameOver, gameStarted, slayMode, slayCountdown, dumbLittleCooldown]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div>
//         <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
//         {/* {!gameStarted && (
//           <button className='fixed' style={{ marginTop: '16px' }} onClick={startGame}>
//             Start
//           </button>
//         )}
//         {gameOver && (
//           <button style={{ marginTop: '16px' }} onClick={restartGame}>
//             Restart
//           </button>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default Game;

import React, { useEffect, useRef, useState } from 'react';

const Game = () => {
  const canvasRef = useRef(null);
  const [npcMessage, setNpcMessage] = useState('');
  const canvasWidth = 800;
  const canvasHeight = 600;
  const playerSize = 32;
  const messageBoxHeight = 80;
  let playerX = Math.floor((canvasWidth / playerSize) / 2);
  let playerY = Math.floor((canvasHeight - messageBoxHeight) / playerSize / 2);
  let npcs = [
    { x: 3, y: 12, message: 'Hello, adventurer!' },
    { x: 7, y: 5, message: 'Welcome to the my site!' },
    { x: 12, y: 8, message: 'I have a quest for you!' },
    { x: 9, y: 4, message: 'Beware of the monsters ahead!' },
    { x: 20, y: 11, message: 'Still in development tho!' },
  ];

  let objects = [
    { x: 4, y: 3, color: 'yellow' },
    { x: 16, y: 7, color: 'orange' },
    { x: 1, y: 9, color: 'purple' },
    { x: 17, y: 13, color: 'pink' },
  ];

  const handleKeyDown = (e) => {
    let newPlayerX = playerX;
    let newPlayerY = playerY;

    if (e.key === 'w' || e.key === 'W') {
      newPlayerY--;
    } else if (e.key === 's' || e.key === 'S') {
      newPlayerY++;
    } else if (e.key === 'a' || e.key === 'A') {
      newPlayerX--;
    } else if (e.key === 'd' || e.key === 'D') {
      newPlayerX++;
    }

    // Boundary checks
    if (
      newPlayerX >= 0 &&
      newPlayerX < canvasWidth / playerSize &&
      newPlayerY >= 0 &&
      newPlayerY < (canvasHeight - messageBoxHeight) / playerSize
    ) {
      playerX = newPlayerX;
      playerY = newPlayerY;
    }
  };

  const checkCollision = (npc) => {
    return playerX === npc.x && playerY === npc.y;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawPlayer = () => {
      context.fillStyle = 'blue';
      context.fillRect(playerX * playerSize, playerY * playerSize, playerSize, playerSize);
    };

    const drawNpcs = () => {
      context.fillStyle = 'red';
      npcs.forEach((npc) => {
        context.fillRect(npc.x * playerSize, npc.y * playerSize, playerSize, playerSize);
      });
    };

    const drawObjects = () => {
      objects.forEach((object) => {
        context.fillStyle = object.color;
        context.fillRect(object.x * playerSize, object.y * playerSize, playerSize, playerSize);
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.strokeRect(object.x * playerSize, object.y * playerSize, playerSize, playerSize);
      });
    };

    const drawMap = () => {
      context.fillStyle = 'green';
      context.fillRect(0, 0, canvas.width, canvasHeight - messageBoxHeight);
    };

    const drawMessageBox = (npcMessage) => {
      context.fillStyle = 'black';
      context.fillRect(0, canvasHeight - messageBoxHeight, canvasWidth, messageBoxHeight);
      context.fillStyle = 'white';
      context.font = '20px serif';
      context.fillText(npcMessage, 10, canvasHeight - 20);
    };

    const handleGameLoop = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawMap();
      drawNpcs();
      drawObjects();
      drawPlayer();
      setNpcMessage('');

      npcs.forEach((npc) => {
        if (checkCollision(npc)) {
          setNpcMessage(npc.message);
          drawMessageBox(npc.message);
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    const gameLoopInterval = setInterval(handleGameLoop, 100);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(gameLoopInterval);
    };
  }, []);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default Game;

