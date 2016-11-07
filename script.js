//code for Timer:
timeLeft = 31
$timerDiv = $('#timer')
    //paused time when game first loads.
var isPaused = true;

//inspiration for count down
//http://stackoverflow.com/questions/21277900/javascript-pausing-setinterval
var countdown = window.setInterval(
    function() {
        if (!isPaused) {
            timeLeft--;
            $timerDiv.html(timeLeft);
        }

        if (timeLeft <= 0) {
            isPaused = true
            $('.gameContainer').hide()
            $('#userInput').children('ul').remove()
            $('#ending').show()
        };


    }, 1000)




//this counter calls up the question that's appearing.
var questionCounter = 0;
//array for questions
//the following is the array for level 1
var lvl1Questions = [

    {
        english: "The boy was with me.",
        question: "La knabo" + '<span class="replaceHere"><button>blank</button></span>' + "kun vi.",
        answers: [{
            text: "ĵurnalismo",
            boolean: false
        }, {
            text: "estas",
            boolean: false
        }, {
            text: "ŝatos",
            boolean: false
        }, {
            text: "estis",
            boolean: true
        }, {
            text: "dika",
            boolean: false
        }, {
            text: "nepo",
            boolean: false
        }]
    },


    {
        english: "The boy is fast!",
        question: "La" + '<span class="replaceHere"><button>blank</button></span>' + "estas rapida!",
        answers: [{
            text: "ĵaluza",
            boolean: false
        }, {
            text: "rapido",
            boolean: false
        }, {
            text: "bela",
            boolean: false
        }, {
            text: "beba",
            boolean: false
        }, {
            text: "knabo",
            boolean: true
        }, {
            text: "kuniklo",
            boolean: false
        }]
    },


    {
        english: "Tomorrow will be beautiful!",
        question: "Morgaŭ" + '<span class="replaceHere"><button>blank</button></span>' + " bela!",
     answers: [{
            text: "estas",
            boolean: false
        }, {
            text: "estu",
            boolean: false
        }, {
            text: "estiga",
            boolean: false
        }, {
            text: "estus",
            boolean: false
        }, {
            text: "estinteco",
            boolean: true
        }, {
            text: "estos",
            boolean: false
        }]
    },
    {
        english: "I will be there tomorrow!",
        question: "Mi estos tie" + '<span class="replaceHere"><button>blank</button></span>' ,
     answers: [{
            text: "akvo",
            boolean: false
        }, {
            text: "morgaŭ",
            boolean: false
        }, {
            text: "hundo",
            boolean: false
        }, {
            text: "vino",
            boolean: false
        }, {
            text: "ĉevala",
            boolean: true
        }, {
            text: "bela",
            boolean: false
        }]
    },
    {
        english: "The girl is with the cat",
        question: "La knabino estas kun la " + '<span class="replaceHere"><button>blank</button></span>' ,
     answers: [{
            text: "hundo",
            boolean: false
        }, {
            text: "koko",
            boolean: false
        }, {
            text: "serpento",
            boolean: false
        }, {
            text: "kato",
            boolean: false
        }, {
            text: "viro",
            boolean: true
        }, {
            text: "virino",
            boolean: false
        }]
    },



]


// {english: "The girl is strong!",
//  question: "La " + '<span class="replaceHere"><button>blank</button></span>' + " estas forta!",
// answers:[
// {text: "bebo",
// boolean: false},
// {text: "domo",
// boolean: false},
// {text: "knabino",
// boolean: true},
// {text: "filina",
// boolean: false},
// {text: "beba",
// boolean: false},
// {text: "ŝafo",
// boolean: false}
// ]
// },

// {english: "The boy is fast!",
//  question: "La" + '<span class="replaceHere"><button>blank</button></span>'  + "estas rapida!",
// answers:[
// {text: "ĵaluza",
// boolean: false},
// {text: "rapido",
// boolean: false},
// {text: "bela",
// boolean: false},
// {text: "beba",
// boolean: false},
// {text: "knabo",
// boolean: true},
// {text: "kuniklo",
// boolean: false}
// ]
// }
// ]

var makeNewQuestionAppear = function(questionNum) {
        for (i = questionNum; i < lvl1Questions.length; i++) {
            var english = lvl1Questions[i].english
            $('#english').html(english)

            var esperanto = lvl1Questions[i].question
            $('#esperanto').html(esperanto)

            $('#userInput').append('<ul id=ulAnswers>')
            for (j = 0; j < lvl1Questions[i].answers.length; j++) {
                //the following are the contents of the internal for loop

                var answer = lvl1Questions[i].answers[j].text
                var correctness = lvl1Questions[i].answers[j].boolean
                $('#ulAnswers').append('<li><button class="' + correctness + ' booleanChecker' + '">' + answer + '</button></li>')
                if ($('#ulAnswers').children().size() == 6) {
                    return
                }
            } // end of internal for loop, answers display
        } //end of for loop (iteration through question array)

    } //end of makeNewQuestionAppear

makeNewQuestionAppear(questionCounter)




var addEventListeners = function() {
        //I have a bunch of buttons and this was the easiest way for me to put them all in one place.
        //Could be better organized, will do it later if I have time.
        $('button').click(function(event) {
                var $target = $(event.target)
                if ($target.hasClass('questionToggler')) {
                    questionCounter++;
                    $('#inbetweenQuestions').hide()
                    $('#userInput').show()
                    makeNewQuestionAppear(questionCounter)
                    isPaused = false
                        //find me
                        //setInterval was set here
                    addEventListeners();
                } else if ($target.hasClass('beginGame')) {
                    $('#lvl1').hide(1000)
                    $('.gameContainer').show()
                    isPaused = false
                    console.log("leaving instructions")
                } else if ($target.hasClass('enterLevel1')) {
                    $('#beginning').hide()
                    $('#lvl1').show()
                    isPaused = true
                    console.log("begin brotha")
                } else if ($target.hasClass('pronounciationButton')) {
                    $('#pronounciationWrapper').show()
                    isPaused = true
                        //find me
                        //setInterval was set here
                } else if ($target.hasClass('learnMore')) {
                    window.open('https://tatoeba.org/eng/sentences/search?from=epo&to=eng&query=' + $('.learnMore').text())
                } else if ($target.hasClass('uniqueConsonantsToggler')) {
                    $('#uniqueConsonantsTable').show()
                    $('#diphthongsTable').hide()
                    $('#samePronounciationTable').hide()
                    $('#vowelsTable').hide()
                    console.log("unique consonants")
                } else if ($target.hasClass('vowelsToggler')) {
                    $('#vowelsTable').css('display', 'table')
                    $('#diphthongsTable').hide()
                    $('#uniqueConsonantsTable').hide()
                    $('#samePronounciationTable').hide()
                    console.log("vowels should appear")
                } else if ($target.hasClass('diphthongsToggler')) {
                    $('#diphthongsTable').css('display', 'table')
                    $('#vowelsTable').hide()
                    $('#uniqueConsonantsTable').hide()
                    $('#samePronounciationTable').hide()
                    console.log("diphthongs should appear")
                } else if ($target.hasClass('samePronounciationToggler')) {
                    $('#samePronounciationTable').css('display', 'table')
                    $('#diphthongsTable').hide()
                    $('#vowelsTable').hide()
                    $('#uniqueConsonantsTable').hide()
                    console.log("samesies should appear")
                }
            }) //end of button listener



        //important gameContainer actions:
        $('.booleanChecker').click(function(event) {
                var $target = $(event.target)
                if ($target.hasClass('true')) {
                    $timerDiv.html(timeLeft += 8)
                    $('#progressInner').css('width', '50%')
                    console.log('the time left are: ' + timeLeft)
                        //find me
                        //clearInterval was here
                    $('#userInput').hide()
                    $('.replaceHere').replaceWith(($target).removeClass("true").addClass('learnMore '))
                        //"replacement" moves the correct answer's button into the Upper Area
                    $('#userInput').children('ul').remove()
                    isPaused = true
                } else if ($target.hasClass('false')) {
                    //the esle statement means that a false answer was chosen.
                    $('.gameContainer').hide()
                    $('#userInput').children('ul').remove()
                    $('#ending').show()
                    isPaused = true
                    console.log("timer is paused")
                }
                //checking whether the game is over:
                if (lvl1Questions.length == (questionCounter + 1)) {
                    console.log("this is the end")
                    $('#victory').show()

                } else {
                    $('#inbetweenQuestions').show()

                }

            }) //end of booleanChecker



        //the following closes a pop-up <div>
        $('.close').click(function(event) {
                var $target = $(event.target)
                if ($target.hasClass('close')) {
                    $('#pronounciationWrapper').css('display', 'none')
                    console.log("hide this")
                }
            }) //end of close listener

    } //end of addEventListeners()

$(document).ready(function() {
    addEventListeners();
})
