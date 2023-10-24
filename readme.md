# TIC TAC TOE GAME

## This is a game made in Reactjs. It is the famous Tic Tac Toe game that you usually play on paper with a pen or pencil.

The game can be played by two players in the browser. The first player is player X and the second player is player O. The game automatically detects when a player has won the
the game. 

## This is a game has the following components:

- The Board component which is the parent component.
- The Square component is a child component. It comunicates with the parent components with props (receives information from the parent) and with functions defined in the parent component to receive information from the child components (the function is sent as prop to the child component).
- The game has five files:
    - index.html: used to render the app component.
    - style.css: styles used tin the app component and index.html.
    - winner.js: is used to set the wining combinations and to check if there is a winner any time during the game.
    - app.jsx: is the main component (the parent component)
    - readme.md

## features to implement in the future:

- Reset the game with the click of a button.
- Store stats about the game, for example times Player X and Player O has won the game.
- Refactor the game to separate the components into different files
- other validations: don't allow changes in the board after a player has won, don't allow to click on a square that's already used, etc.


     

