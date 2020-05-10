class Form{
    constructor(){
    
    }
    display(){
        var title = createElement("h2")
        title.html("Survey")
        title.position(230,0)        
        var emailInput = createInput("")
        emailInput.position(130,60)
        var emailInputText = createElement("h4")
        emailInputText.html("E-mail")
        emailInputText.position(80,40)
        var nameInput = createInput("")
        nameInput.position(130,90)
        var nameInputText = createElement("h4")
        nameInputText.html("Name")
        nameInputText.position(80,70)
        var response0Question = createElement("h4")
        response0Question.html("Do you need more friends?")
        response0Question.position(80,100)
        var response0Option1 = createButton("Yes")
        response0Option1.position(130,140);
        response0Option1.mousePressed(function (){
            response0Option1.hide();
            response0Option2.hide();
            var pressedResponse0Option1 = createElement("h4")
            pressedResponse0Option1.html("Yes")
            pressedResponse0Option1.position(140,120)
            response0.push("yes")
        })
        var response0Option2 = createButton("No")
        response0Option2.position(180,140)
        response0Option2.mousePressed(function (){
            response0Option2.hide();
            response0Option1.hide();
            var pressedResponse0Option2 = createElement("h4")
            pressedResponse0Option2.html("No")
            pressedResponse0Option2.position(190,120)
            response0.push("no")
        })
        var response1Question = createElement("h4")
        response1Question.html("Do you often feel bored?")
        response1Question.position(80,150);
        var response1Option1 = createButton("Yes")
        response1Option1.position(130,190);
        response1Option1.mousePressed(function (){
            response1Option1.hide();
            response1Option2.hide();
            var pressedResponse1Option1 = createElement("h4")
            pressedResponse1Option1.html("Yes")
            pressedResponse1Option1.position(140,170)
            response1.push("yes")
        })
        var response1Option2 = createButton("No")
        response1Option2.position(180,190)
        response1Option2.mousePressed(function (){
            response1Option2.hide();
            response1Option1.hide();
            var pressedResponse1Option2 = createElement("h4")
            pressedResponse1Option2.html("No")
            pressedResponse1Option2.position(190,170)
            response1.push("no")
        })
        var button = createButton("Finish")
        button.position(450,480)
        button.mousePressed(function (){
           votersemail.push(emailInput.value())
           votersname.push(nameInput.value())
           title.hide();
           nameInput.hide();
           emailInput.hide();
           response1Question.hide();
           response0Question.hide();
           response1Option1.hide();
           response1Option2.hide();
           response0Option1.hide();
           response0Option2.hide();
        });
    }
    emailUpdate(){
        db.ref("votersemail").set({
            Email:votersemail
        })
    }
    nameUpdate(){
        db.ref("votersname").set({
            Name:votersname
        })
    }
    response0Update(){
        db.ref("response0").set({
            Response0:response0
        })
    }
    response1Update(){
        db.ref("response1").set({
            Response1:response1
        })
    }
}