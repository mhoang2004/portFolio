https://www.youtube.com/watch?v=oXaMki9PfLs
============INTRO==========

#Sass is a css preprocessor
* why sass: 
    + reduces repetition of CSS and saves time
    + when stylesheets getting larger, more complex and harder for maintain (sass can solve)
    + sass can use some features: variables, nested rules, mixins, import, inheritance, built-in func,..
=> A way that's easier for dev to code 

* But that code has to be converted to css to make sense to browser (browser can't undestand sass code)
    => need sass pre-processor to convert sass to css

* It also support inline comments //comment


* There are two syntaxes:
    + the original is `.sass`
    Ex: 
    html 
        box-sizing: border-box
        font-size: 100%
    
    + the second is `.scss`
    html {
        box-sizing: border-box;
        font-size: 100%;
    }

======Sass installation====
nodejs then npm install sass


======Sass variables========
* with sass, we can store variables, like:
    strings,
    colors,
    nulls

* sass uses the $ symbol to declare variables
    $variablename: value;

    $myFont: Helvetica, sans-serif;
    $myColor: red;
    $myFontSize: 15px;

    body {
        font-family: $myFont;
        font-size: $myFontSize;
        color: $myColor;
    }

* sass scope

    $myColor: red;
    h1 {
        $myColor: green;
        color: $myColor; //green
    }

    p {
        color: $myColor; //red
    }

* using sass !global
!global indicates that a variable is global, which means that it is accessible on all levels

    $myColor: red;
    h1 {
        $myColor: green !global;
        color: $myColor; //green
    }

    p {
        color: $myColor; //green
    }

=========Sass Nested Rules and Properties==========
* sass nested rules
    .scss                                                               .css
    nav {                                           |                   nav ul {
        ul {                                        |                       margin: 0;
            margin: 0;                              |                       padding: 0;
            padding: 0;                             |                       list-style: none;
            list-style: none;                       |                   }
        }                                           |                   
        li {                                        |                   nav li {
            display: inline-block;                  |                       display: inline-block;
        }                                           |                   }
    }                                               |


* sass Nested Properties
    .scss
    font: {                                                                                                      
        family: Helvetica, sans-serif;              
        size: 18px;
        weight: bold;
    }

    text: {
        align: center;
        transform: lowercase;
        overflow: hidden;
    }
    
    .css 
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;

    text-align: center;
    text-transform: lowercase;
    text-overflow: hidden;

===========@import===========

