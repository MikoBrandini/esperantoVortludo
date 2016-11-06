
//this counter calls up the question that's appearing.
var questionCounter=0;
//code for Timer:
timeLeft= 31
$timerDiv=$('#timer')
var isPaused=true;
//paused time when game first loads.

//inspiration for count down
//http://stackoverflow.com/questions/21277900/javascript-pausing-setinterval
var countdown = window.setInterval(
  function(){
    if(!isPaused) {
      timeLeft--;
      $timerDiv.html(timeLeft);
      }

        if (timeLeft <= 0){
         isPaused=true
         $('.container').hide()
         $('#userInput').children('ul').remove()
         $('#ending').show()
           };


      },1000)

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
{text: "knabo",
boolean: true},
{text: "kuniklo",
boolean: false}
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
      return}

    } // end of internal for loop, answers display
    }//end of for loop (iteration through question array)
  }//end of makeNewQuestionAppear

makeNewQuestionAppear(questionCounter)





  var addEventListeners = function(){
        $('button').click(function(event)
        {
          var $target=$(event.target)
          if ( $target.hasClass('true')){
          $timerDiv.html(timeLeft +=8)
          $('#progressInner').css('width', '50%')
          console.log('the time left are: ' +  timeLeft)
          //find me
          //clearInterval was here
          $('#userInput').hide()
          $('.replaceHere').replaceWith(($target).removeClass( "true" ).addClass('learnMore '))
          //"replacement" moves the correct answer's button into the Upper Area
          $('#userInput').children('ul').remove()
          isPaused=true
                //internal if....else
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
          isPaused=false
          //find me
          //setInterval was set here
          addEventListeners();
            }
          else if ($target.hasClass('beginGame')) {
          $('#beginning').hide(1000)
          $('.container').show()
          isPaused=false
          //find me
          //setInterval was set here
            }
          else if ($target.hasClass('learnMore')){
            window.open('https://tatoeba.org/eng/sentences/search?from=epo&to=eng&query='+ $('.learnMore').text())
          }
          else{
              //the esle statement means that a false answer was chosen.
            $('.container').hide()
            $('#userInput').children('ul').remove()
            $('#ending').show()
             isPaused=true
            console.log("timer is paused")
          }
        }) //end of button listener

  } //end of addEventListeners()

  $(document).ready(function(){
    addEventListeners();
  })
