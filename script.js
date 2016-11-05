
//This counter calls up the question that's appearing.
var questionCounter=0;

//code for Timer:
timeLeft=45
$timerDiv=$('#timer')
constantVar="komencu"
var countdown =function(){



  if(timeLeft<0){
     $('.container').hide()
     $('#userInput').children('ul').remove()
     $('#ending').show()
    console.log('time has reached zero')
  }

  else if (constantVar=="komencu"){
   setInterval(function(){ timeLeft--;
    $timerDiv.html(timeLeft)
      console.log("read me")}, 1000)
  }

}
countdown()
//inspiration for count down
// http://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward


//array for questions

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
          console.log('the time left are: ' +  timeLeft)
          //find me
          //clearInterval was here
          $('#userInput').hide()
          $('.replaceHere').replaceWith(($target))
          //"replacement" moves the correct answer's button into the Upper Area
          $('#userInput').children('ul').remove()


           if(lvl1Questions.length==(questionCounter+1)){
                  console.log("this is the end")
                  $('#victory').show()

                }else{   $('#inbetweenQuestions').show()
                }
            }

          else if ($target.hasClass('questionToggler')) {
          questionCounter++;
          $('#inbetweenQuestions').hide()
          $('#userInput').show()
          makeNewQuestionAppear(questionCounter)
          console.log('why')
          //find me
          //setInterval was set here

          addEventListeners();
            }

          else if ($target.hasClass('beginGame')) {
          $('#beginning').hide()
          $('#ending').hide()
          $('.container').show()
          //find me
          //setInterval was set here
            }



            else{
              console.log('false!!!')
              //the esle statement means that a false answer was chosen.
              //#ending is
            $('.container').hide()
            $('#userInput').children('ul').remove()
            $('#ending').show()

          }
        }) //end of button listener

  } //end of addEventListeners()

  $(document).ready(function(){
    addEventListeners();
  })
