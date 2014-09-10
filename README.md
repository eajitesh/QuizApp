The sole purpose of this app is to allow users to create quick quizzes comprising of multiple-choice objective questions without getting bothered about HTML aspect. **The current version supports objective questions with just one answer**. In future versions, there will be support for multiple correct answers out of given options. 

It uses the **<a href="http://www.angularjs.org" target="__blank">AngularJS</a>** extensively to achieve the above objective. Following are key directives that are used to create the quiz:
* iquiz
* iquestion
* iscorecard

Following represents the details on above directives:

### Directive: iquiz

Directive iquiz is used to present summary information about the quiz. It consists of "iquiz" as element tag name and "summary" as attribute. The code looks like following:

`<iquiz summary=""></iquiz>`


### <h3>Directive: iquestion</h3>

Directive iquestion is used to list down question and answer options along with correct option. It consists of "iquestion" as element tag name and "text" as attribute. The code looks like following:

`<iquestion text=""></iquestion>`

The question and answer options along with correct answer would be assigned to "text" attribute with following convention:

* Question and answer options are seperated by identifier, **"::"**
* Multiple answer options are seperated by identifier, **";"**
* Correct answer needs to be preceded by identifier, **"__"**


Take a look at an example below. Following is how the question would be displayed on the web page:

<div>In which year, did the first world war start?</div>
<input type="radio" name="year" value="1912"/>1912
<br/>
<input type="radio" name="year" value="1913"/>1913
<br/>
<input type="radio" name="year" value="1914"/>1914
<br/>
<input type="radio" name="year" value="1915"/>1915
<br/>

With iquestion directive, the above could be written in the following manner, and AngularJS does the rest. Pay the attention of usage of identifiers such as "::" (question and answers seperator), ";" (answer options), "__" (for right answer)

`<iquestion text="In which year, did the first world war start?::1912;1913;__1914;1915"></iquestion>`

### Directive: iscorecard

Directive iscorecard is used to display the scores and correct answers. It just consists of "iscorecard" as element tag name. The code looks like following:

`<iscorecard></iscorecard>`

### Installation Instructions

* Download the zip file, unzip it.
* Following are different files that could be found within the root/src folder:
  * quizapp-v0.2.js: This file consists of actual AngularJS code including directives
  * ui-bootstrap-tpls-0.9.0.min.js: This is included as dependency of QuizApp to style the templates using Bootstrap library. 
  * templates/quiz.html: This file is a template to display iquiz directive.
  * templates/question.html: This file is a template to display iquestion directive.
  * templates/scorecard.html: This file is a template to display scorecard.
* Rename the "src" folder as "quizapp" within your project and get started.
* Include following angularjs script files. You may want to load the files from <a href="https://developers.google.com/speed/libraries/devguide#angularjs" target="_blank">Google Hosted Libraries</a>.
  * angular.min.js
  * angular-sanitize.min.js
* Include bootstrap CSS library. This would make sure that the templates display neat looking HTML blocks. You may change classes in the template files to display the template differently. You may want to use <a href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" target="_blank">Bootstrap CDN link</a> in your page.
* Include following CSS and script files within your HTML <Head> section. Script files can as well be added within BODY section for performance reasons.
   * `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">`
   * `<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>`
   * `<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular-sanitize.min.js"></script>`
   * `<script src="quizapp/quizapp-v0.2.js"></script>`. The assumption is that you have copied the downloaded file within **quizapp** folder as instructed above.
   * `<script src="quizapp/ui-bootstrap-tpls-0.9.0.min.js"></script>`. The assumption is that you have copied the downloaded file within **quizapp** folder as instructed above.
* In the page, you want to use the module, define the angular app with QuizApp as dependency. The code would look like following:
  `angular.module( "HelloApp", ["QuizApp"] );`
* Once done with above, you are all set to use following three directives:
  * iquiz
  * iquestion
  * iscorecard

### QuickStart

* The samplequiz.html presents sample code in line with instructions written above. It needs a webserver to run.
* Copy the samplequiz.html and src folder content on a location, say, quizdemo, on your webserver.
* Access samplequiz.html in a browser.

