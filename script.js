//This counter calls up the question that's appearing.
var questionCounter=0;

//code for Timer:
timeLeft=45
$timerDiv=$('#timer')
var timer = setInterval(countdown, 1000);
function countdown(){
  if(timeLeft<0){
    clearTimeout()
    //do something else (game over lol)
    console.log('time has reached zero')
  }else{
    $timerDiv.html(timeLeft)
    timeLeft--;
  }
}
//inspiration for count down
// http://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward


//array for questions

//blank will be defined in a function
blank=" 'this will be defined in a function' "
//the following is the array for level 1
var lvl1Questions = [
{english: "The girl is strong!",
 question: "La " + '<span class="replaceHere"><button>blank</button></span>' + " estas forta!",
answers:[
{text: "bebo",
boolean: false},
{text: "domo",
boolean: false},
{text: "knabino",
boolean: true},
{text: "filina",
boolean: false},
{text: "beba",
boolean: false},
{text: "ŝafo",
boolean: false}
]
},

{english: "The boy is fast!",
 question: "La" + '<span class="replaceHere"><button>blank</button></span>'  + "estas rapida!",
answers:[
{text: "ĵaluza",
boolean: false},
{text: "rapido",
boolean: false},
{text: "bela",
boolean: false},
{text: "beba",
boolean: false},
{text: "rapida",
boolean: false},
{text: "kuniklo",
boolean: true}
]
}
]

var makeNewQuestionAppear = function(questionNum){
for(i = questionNum; i < lvl1Questions.length; i++){
  var english=lvl1Questions[i].english
$('#english').html(english)

var esperanto=lvl1Questions[i].question
$('#esperanto').html(esperanto)

$('#userInput').append('<ul id=ulAnswers>')
  for (j=0;j<lvl1Questions[i].answers.length;j++){
    //the following are the contents of the internal for loop

     var answer= lvl1Questions[i].answers[j].text
     var correctness=lvl1Questions[i].answers[j].boolean
     $('#ulAnswers').append('<li><button class="' + correctness+'">'+ answer+'</button></li>')
     if($('li').size()==6){
      return
     }

    } // end of internal for loop, answers display
    }//end of for loop (iteration through question array)
  }//end of makeNewQuestionAppear

makeNewQuestionAppear(questionCounter)





  var addEventListeners = function(){
  //thanks to: https://api.jquery.com/hasclass/
  // http://api.jquery.com/is/
        $('button').click(function(event)
        {
          var $target=$(event.target)
          if ( $target.hasClass('true')){
           $timerDiv.html(timeLeft +=8)
           $('.replaceHere').replaceWith(($target))
           questionCounter++;
           console.log("Yay true!")
          $('#userInput').children('ul').remove()
          makeNewQuestionAppear(questionCounter)
          addEventListeners();
            } else{console.log('false!!!')

              //error div should appear
          }
        }) //end of button listener

  } //end of addEventListeners()

  $(document).ready(function(){
    addEventListeners();
  })
