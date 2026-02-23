1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1.Ans: getElementById return only one element with a unique id. It is the faster of all. getElementsByClassName on the other hand returns a html collection with matching class like the first one it takes only one class but return all elements containing same class. querySelector and querySelectorAll are same with only one difference querySelector returns the first matched  element but the querySelectorAll return all the NodeList of Elements with the matching query. The query is css selector like it can have tag name class name or the id name. we can make advance search mixing them together.

2. How do you create and insert a new element into the DOM?

2.Ans: There are many ways to create and insert a new element into the DOM. I will list some of them you can copy an element or use 

    const newEle =  document.createElement("elementType");

this will create new element of your liking. After that you can add id, clsslist, innert text or other element to that new element. 
    you can use newEle.classList.add("p-4") to add padding to the element and other things as well and  vice versa. 
 to add the new element to the DOM you need to first select where you want to add the new element then you have to write like this

    chosenParent.append(newElement);

this will append or you can say insert the new element into the DOM. there are many other methods too to insert into the DOM such as prepend(),appendchild(), insertBefore() etc

3. What is Event Bubbling? And how does it work?

3.Ans: After an event is triggered first the triggered element gets the event then it travel upward to its parent. This upward propagation is called bubbling. It starts triggered element and go up towards the parent to grand parent till it hits the root. we can add an event listener to understand it more clearly. lets assume a list item is clicked with a event listener on the parent ul or ol we can get the target as the event will bubble up toward the parents. 

4. What is Event Delegation in JavaScript? Why is it useful?

4.Ans: The Event Delegation in JavaScript is a technique to utilize the event bubbling functionality and grant us the power to capture an event within a parent element for every child element.Through this we can add only one event listener to the parent rather than having event listener to every child element. This leads to faster execution, cleaner code , less memory utilization and scalability. for example assume we have a html content like this

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
if one list is click and we want to get that event we could use event listener to every list item but in event delegation we can use only one listener to the parent ul and get the target and use it efficiently. 

5. What is the difference between preventDefault() and stopPropagation() methods?

5.Ans: preventDefault() is a method used to prevent the default action for an event. For example on a form there is s submit button if this button is pressed page tries to submit and reload but if it is used with eventListener and default behavior is stopped and one can customize and redirect that event to do anything they want. 
on the other hand stopPropagation() method is used to prevent the bubbling effect. If it used in a event inside a listener the parent won't be able to notified about the event that happened to the child element. That way and event won't trigger at other elements as well. It will stop at the originated spot.