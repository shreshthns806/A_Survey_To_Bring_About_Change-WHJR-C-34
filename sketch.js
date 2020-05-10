var db,gameState=0,playerCount,form,player,game,votersemail=[],votersname=[],response0=[],response1=[];
function setup(){
    createCanvas(500,500);
    db=firebase.database();
    form =  new Form();
    form.display()

}

function draw(){
console.log(votersemail)
console.log(response0)
form.emailUpdate()
form.nameUpdate();
form.response0Update();
}

