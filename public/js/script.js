$(document).ready(()=>{
    
    /*
        n is the level of game
        n=1, easy- 3 colors
        n=2, medium- 6 colors
        n=3, hard- 9 colors
        for n=1, no. of clicks=2,
        for n=2, no. of clicks=3,
        for n=3, no. of clicks=4
    */
   

    $('#level1').click(()=>{
        startgame(1)
    })
    $('#level2').click(()=>{
        startgame(2)
    })
    $('#level3').click(()=>{
        startgame(3)
    })

    

    function startgame(n){
        $('#welcome-screen').hide()
        $('#game-screen').show()
        let innergs=$('#inner-game-screen')
        let i
        innergs.empty()

        let colors=generatecolor(n)
        let chosencolor=[]
        chosencolor=colors[Math.floor(3*n*Math.random())]

        $('.choosecolor').text(`RGB(${chosencolor[0]},${chosencolor[1]},${chosencolor[2]})`)

        const allowedclicks=n+1;
        let usedclicks=0;


        //internal functions inside function startgame


        function checkresult(arg){
            if(!arg.target.className.includes('color-box'))return
            usedclicks++
            let color_rgb_value_str=$(arg.target).css('background-color')
            let color_rgb_value_arr=color_rgb_value_str.substring(4,color_rgb_value_str.length-1).split(',')
            let color_rgb_value_numarray=[]
            color_rgb_value_arr.forEach((element,index) => {
                color_rgb_value_numarray[index]=parseInt(element)
            });
            console.log(color_rgb_value_numarray)
            if(chosencolor[0]===color_rgb_value_numarray[0]&&chosencolor[1]===color_rgb_value_numarray[1]&&chosencolor[2]===color_rgb_value_numarray[2]){
                window.alert("Congratulations!! You Won!")
                window.location.reload(true)
                return usedclicks
            }
            if(usedclicks==allowedclicks){
                window.alert("Sorry! All your chances are over.\nTry Again.")
                window.location.reload(true)
                return usedclicks
            }
            window.alert("Oops! Wrong Answer\nYou still have "+(allowedclicks-usedclicks)+" chances left")
        }
         

        /*
            loop for creating divs of colors-
                3- for easy
                6- for medium
                9- for hard
        */
        for(i=0;i<3*n;i++){
            $('#inner-game-screen').append(
                $(`<div class='box-cont col-4 rounded my-4' id='p${i}'></div>`)
                    .append(
                        $(`<div class='color-box rounded' id='c${i}'></div>`)
                        .click(function(arg){
                            //console.log(arg.target.class)
                            checkresult(arg)
                        })
                    )
            )
        }
        for(i=0;i<3*n;i++){
            $(`#c${i}`).css('background-color','rgb('+colors[i][0]+','+colors[i][1]+','+colors[i][2]+')')
        }



    }

    
    

    /*
        this function is used for generating colors on the divs
        generate 3 colors for easy(n=1)
        generate 6 colors for easy(n=2)
        generate 9 colors for easy(n=3)

    */

    //each call generates color according to argument given
    function generatecolor(num){
        let noofcolors=3*num;
        let j;
        let colors=[];
        for(j=0;j<noofcolors;j++){
            colors[j]=randomrgb()
        }
        console.log(colors)
        return colors
    }

    //returns random values of rgb for each function call
    function randomrgb(){
        return[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)] 
    }

})