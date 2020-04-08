    "Firing" Events
After a specific event fires on a specific element in the document object model (or DOM), an event handler function can be created to run as a response. 
Let’s compare this to something more familiar: a cuckoo clock is an example of programming with events! When the clock hands strike a new hour, the cuckoo bird responds with a whistle for each hour. For example, the cuckoo bird will whistle twice when the clock strikes 2 o’clock.
As you can see in the diagram, the clock striking an hour is the specific event that causes a specific response from the cuckoo bird. Event handler functions wait for their specific events to fire like the cuckoo bird in the clock awaiting the next hour. These functions can be used to change a DOM element’s color, text and much more!
Most events in the browser take place without being noticed — the events are undetected because there is no event handler associated with the event to execute an action. Event handlers are crucial for creating interactive websites with JavaScript.
=========================================================
      REMOVING EVENT HANDLERS
The .removeEventListener() method is used to reverse the .addEventListener() method. This method stops the code from “listening” for an event to fire when it no longer needs to. .removeEventListener also passes two arguments:
1. The event type as a string
2. The event handler function
Because this method unregisters event handlers, it needs to identify which function to remove from the event. The event handler function passed to the .removeEventListener() method must be the same function of the corresponding .addEventListener().
=========================================================
     Event Object Properties
JavaScript stores events as event objects with their related data and functionality as properties and methods. There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:
1. the .target property to access the element that triggered the event.
2. the .type property to access the name of the event.
3. the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.
=========================================================
     Event Types
Beyond the click event, there are all types of DOM events that can fire in a browser! It’s important to know most events in the DOM take place without being noticed because there are no event handlers connected to them.
It’s also important to know some registered events don’t depend on user interactions to fire. For instance, the load event fires after website files completely load in the browser.
Browsers can fire many other events without a user — you can check out a list of events on the MDN Events Reference page.
Many events need user interaction with the DOM to fire. One user interaction event you’ve become familiar with is the click event. A click event fires when the user presses and releases a mouse button on an element in the DOM.
=========================================================
JavaScript engines register events as objects with properties and methods associated with them.
Event handlers are registered as properties of their event object.
Event object properties like .target, .type, and .timeStamp are used to provide information about the event.
The .addEventListener() method can be used to add multiple event handler functions to a single event.
The .removeEventListener() method stops specific event handlers from “listening” for specific events firing.

