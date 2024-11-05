const input = require("input")

const game = [
  [1, 2, 3],
  [4, 5, 6],
  [7, "x", 9],
];

const indekslar = [
    0,
    [0,0],
    [0,1],
    [0,2],
    [1,0],
    [1,1],
    [1,2],
    [2,0],
    [2,1],
    [2,2]
]


const printGame = (game) => {
  let text = "";
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (i == 0 && j == 0) {
        text += "-------------\n";
      }

      if (j == 0) {
        text += "| " + game[i][j] + " | ";
      } else if (j == 2) {
        text += " | " + game[i][j] + " |\n";
      } else {
        text += game[i][j];
      }
    }
    text += "-------------\n";
  }

  console.log(text);
};


function tekshirish(game){
    // Qatorlarni tekshirish
    if(game[0][0] == game[0][1] && game[0][1] == game[0][2]){
        return (game[0][0] == "x" ? {end: true, winner: "x"}:{end: true, winner: "o"})
    }
    else if(game[1][0] == game[1][1] && game[1][1] == game[1][2]){
        return (game[1][0] == "x" ? {end: true, winner: "x"}:{end: true, winner: "o"})
    }
    else if(game[2][0] == game[2][1] && game[2][1] == game[2][2]){
        return (game[2][0] == "x" ? {end: true, winner: "x"}:{end: true, winner: "o"})
    }

    // Ustunlarni tekshirish
    if(game[0][0] == game[1][0] && game[1][0] == game[2][0]){
        return (game[0][0] == "x" ? {end: true, winner: "x"}:{end: true, winner: "o"})
    }
    else if(game[0][1] == game[1][1] && game[1][1] == game[2][1]){
        return (game[0][1] == "x" ? {end: true, winner: "x"}:{end: true, winner: "o"})
    }
    else if(game[0][2] == game[1][2] && game[1][2] == game[2][2]){
        return (game[0][2] == "x" ? {end: true, winner: "x"}:{end: true, winner: "o"})
    }

    // diagonallarni tekshirish
    if(game[0][0] == game[1][1] && game[1][1] == game[2][2]){
        return (game[1][1] == "x" ? {end: true, winner: "x"}:{end: true, winner: "o"})
    }
    else if(game[0][2] == game[1][1] && game[1][1] == game[2][0]){
        return (game[1][1] == "x" ? {end: true, winner: "x"}:{end: true, winner: "o"})
    }

    let durrang = false;
    for(let i = 0; i < game.length; i++){
        for(let j = 0; j < game[i].length; j++){
            // if(Number.isNaN())
        }
    }

    return {
        end: false
    }

}


async function main() {
    try {
        
        let oyinchi = Math.floor(Math.random()*2) === 0 ? "x":"o";

        console.log(`O'yinni ${oyinchi} o'yinchi boshlab beradi.`);
        

        while(true){

            printGame(game);
            console.log()

            const tanlov = game.join(",").split(",").map(x=>Number(x)).filter(Number);

            const select = tanlov.map(x=>{
                return {
                    name: x.toString(),
                    value: x
                }
            });

            
            const raqam = await input.select(`${oyinchi} raqam tanlang: `, select);

            game[indekslar[raqam][0]][indekslar[raqam][1]] = oyinchi;



            const javob = tekshirish(game);

            printGame(game);

            if(javob.end){
                return console.log(`${javob?.winner} g'alaba qozondi!`)
            }

            oyinchi = oyinchi == "x" ? "o":"x";
            
        }

        console.log(game.join(",").split(",").map(x=>Number(x)).filter(Number))

    } catch (error) {
        console.log(error);
    }
}


main();