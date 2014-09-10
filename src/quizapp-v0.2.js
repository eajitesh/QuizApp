var quizApp = angular.module("QuizApp", [ 'ngSanitize', 'ui.bootstrap' ]);

quizApp.service("QuizService", function() {
  return new Quiz();
});

function Quiz() {
  this.score = 0;
	this.showScore = false;
	this.totalQuestions = 0;
	this.counter = 1;
	this.totalQuestions = 0;
	this.questionsAttempted = 0;
	this.correctAnswers = 0;
	this.displayAnswers = false;

	this.plusScore = function(value) {
		this.score += value;
		this.correctAnswers++;
	};
	this.minusScore = function(value) {
		this.score -= value;
		this.correctAnswers--;
	};
	this.displayScore = function() {
		this.showScore = true;
	};
	this.getCounter = function() {
		return this.counter++;
	};
	this.updateTotalQuestionsCount = function() {
		this.totalQuestions++;
	};
	this.updateQuestionsAttemptedCount = function() {
		this.questionsAttempted++;
	};
	this.updateCorrectQuestionsCount = function() {
		this.correctAnswers++;
	};
}

var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

quizApp.directive("iquiz", function() {
	return {
		restrict : 'E',
		scope : {
			summary : '@'
		},
		controller : function($scope) {
		},
		templateUrl : currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + 'templates/quiz.html'
	};
});

quizApp.directive("iscorecard", [ 'QuizService', function( QuizService ) {
	return {
		restrict : 'E',
		scope : {},
		controller : function($scope) {
			$scope.totalQuestions =  QuizService.totalQuestions;
			$scope.questionsAttempted =  QuizService.questionsAttempted;
			$scope.correctAnswers =  QuizService.correctAnswers;
			$scope.score =  QuizService.score;
			$scope.showscores = "";

			$scope.showAnswers = function() {
				 QuizService.displayAnswers = true;
			}

			$scope.showScores = function() {
				$scope.showscores = true;
			}
		},
		link : function(scope, element, attrs) {
			scope.$watch(function() {
				return  QuizService.questionsAttempted;
			}, function() {
				scope.questionsAttempted =  QuizService.questionsAttempted;
			});
			scope.$watch(function() {
				return  QuizService.score;
			}, function() {
				scope.score =  QuizService.score;
			});
			scope.$watch(function() {
				return  QuizService.score;
			}, function() {
				scope.correctAnswers =  QuizService.correctAnswers;
			});
		},
		templateUrl : currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + 'templates/scorecard.html'
	};
}]);

quizApp.directive("iquestion", [ 'QuizService', function( QuizService ) {
	return {
		restrict : 'E',
		scope : {
			text : '@',
		},
		controller : function($scope) {

			$scope.evalScore = function(id, value) {
				var rightAnswerFound = false, foundIndex = 0, i = 0, arrIndex;
				angular.forEach($scope.qna, function(qna) {
					if (qna.id === id) {
						arrIndex = i;
						angular.forEach(qna.options, function(option) {
							if (option.text === value
									&& option.correct === true) {
								rightAnswerFound = true;
							}
						});
					}
					i++;
				});
				if (rightAnswerFound === true) {
					QuizService.plusScore(1);
					$scope.qna[arrIndex].answeredCorrectly = true;
				} else {
					if ($scope.qna[arrIndex].answeredCorrectly === true) {
						QuizService.minusScore(1);
						$scope.qna[arrIndex].answeredCorrectly = false;
					}
				}
				if ($scope.qna[arrIndex].attempted === false) {
					$scope.qna[arrIndex].attempted = true;
					QuizService.updateQuestionsAttemptedCount();
				}
			};

		},
		link : function(scope, element, attrs) {
			// Update parent scope details
			//
			QuizService.updateTotalQuestionsCount();
			//
			//
			var text = scope.text;
			scope.qna = [];
			var qnaObj = new Object();
			qnaObj.id = QuizService.getCounter();
			qnaObj.tag = "q_" + qnaObj.id;
			qnaObj.answeredCorrectly = false;
			qnaObj.attempted = false;
			//
			// Processing the question and answer text
			//
			var qnaArr = text.split("::");
			qnaObj.question = "<b>Q: " + qnaArr[0] + "</b>";
			var ansArr = qnaArr[1].split(";");
			qnaObj.options = [];
			qnaObj.answers = [];
			for (i = 0; i < ansArr.length; i++) {
				var option = {
					"text" : ansArr[i],
					"correct" : false,
					"style" : ""
				};
				var optionText = option.text;
				if (optionText.indexOf("__") === 0) {
					option.text = optionText.substring(2, optionText.length);
					option.correct = true;
				}
				qnaObj.options.push(option);
			}
			scope.qna.push(qnaObj);
			
			scope.$watch(function() {
				return QuizService.displayAnswers;
			}, function() {
				angular.forEach(scope.qna, function(qna) {
					var i = 0;
					angular.forEach(qna.options, function(option) {
						if (option.correct === true
								&& QuizService.displayAnswers === true) {
							qna.options[i].style = "background-color:#ffff00";
						}
						i++;
					});
				});
			});

		},
		templateUrl : currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + 'templates/question.html'
	};
}]);
