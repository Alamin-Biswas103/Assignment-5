
## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**getElementById** - it is used to select or to find id from html file specifically from DOM  . it provides only one output. ID's are unique so it return only one output. Gennerally id stays one time in an html file. if there have same named id more than one time getElementById select only the first one. event can set direcly on it. 
short note:
selection - document.getElementById("id name");

**getElementByClassName** - it is used to select all the classes with the same name in a file . It returns an HTMLCollection like an array but not exactly the array but using Array.from(htmlCollectionname) array can be made easily. Events can not be set directly over this.
short note:
selection-document.getElementByClassName("class name");
it is dynamic as it updates automatically if DOM changes


**querySelector** - this can select id or class or element . it gives single output / only one output .This selector is more flexible than id selector or class selector . Noted: before giving name of id or class we have to use sign(#,.). Events can be set over it directly.

**quarySelectorAll** - this is the plural version of querySelector . This selector almost same as query selector . the different are this one select all the element matching with name and return a nodelist which is not array but something like array. Evenst can not be set over it directly.




2. How do you **create and insert a new element into the DOM**?
two step to do this
1. creating - let newElement = document.createElement("element name");
2. inserting - parent select by id or quary selector or any other way then **.appendchild(newElement/created element)**


3. What is **Event Bubbling** and how does it work?
Event Bubbling is the natural behavior of Js in which js works first on it target element then it flow to the parent then body then root . ..
In easy words , event bubbling is the default behavior of JS to flow to the over/ancesters . There have way to stop it such as event.stopPropagation();

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event delegation is a technique by JS in which attaching events to many individuals children is avoided and event is attached to the parent . It works perfectly according to the concept  of Event Bubbling . the usefulness of Event Delegation are fresh code , works perfectly , if new element is added by js dinamically that also works perfectly.





5. What is the difference between **preventDefault() and stopPropagation()** methods?


**preventDefault** - this is used to stop the default behavior of browser set up by some elements such as form,link type tag(anchor tag)

**stopPropagation()** - 
this stop the default behavior of flow to the ancesters. the events are generally flow to the root and same events works for target element, it parent and body and other ancestors and stopPrapagation() has a power to prevent this behavior. 
--- 

