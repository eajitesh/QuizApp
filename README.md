The sole purpose of this app is to allow users to create quick quizzes comprising of objective questions without getting bothered about HTML aspect. In its current version, objective questions with just one answers is supported. In future versions, there will be support for multiple currect answers out of given options. 

It uses the AngularJS extensively to achieve the above objective. Following are key directives that are used to create the quiz:

<ul>
    <li>iquiz</li>
    <li>iquestion</li>
    <li>iscorecard</li>
</ul>

Following represents the details on above directive:

<h3>Directive: iquiz</h3>

Directive iquiz is used to present summary information about the quiz. It consists of "iquiz" as element tag name and "summary" as attribute. The code looks like following:

&lt;iquiz summary=""&gt;&lt;/iquiz&gt;


<h3>Directive: iquestion</h3>

Directive iquestion is used to list down question and answer options along with correct option. It consists of "iquestion" as element tag name and "text" as attribute. The code looks like following:

&lt;iquestion text=""&gt;&lt;/iquiz&gt;

The question and answer options along with correct answer would be assigned to "text" attribute with following convention:

<ul>
<li>Question and answer options are seperated by identifier, <strong>"::"</strong></li>
<li>Multiple answer options are seperated by identifier, <strong>";"</strong></li>
<li>Correct answer needs to be preceded by identifier, <strong>"__"</strong></li>
</ul>

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

&lt;iquestion text="In which year, did the first world war start?::1912;1913;__1914;1915"&gt;&lt;/iquestion&gt;

<h3>Directive: iscorecard</h3>

Directive iscorecard is used to display the scores and correct answers. It just consists of "iscorecard" as element tag name. The code looks like following:

&lt;iscorecard&gt;&lt;/iscorecard&gt;




