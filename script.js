playgame = () => {
    const play1 = Math.floor(Math.random()*6) + 1;
    const dicegame = `images/${play1}.png`;
    document.getElementById("check1").setAttribute("src",dicegame);

    const play2 = Math.floor(Math.random()*6) + 1;
    const dicegame2 = `images/${play2}.png`;
    document.getElementById("check6").setAttribute("src",dicegame2);

    if (play1 > play2 ) {
        document.querySelector("h1").innerHTML = "Player 1 won";
    }else if(play1 < play2 ){
        document.querySelector("h1").innerHTML = "Player 2 won";
    }else{
        document.querySelector("h1").innerHTML = "Match Draw";
    }
};