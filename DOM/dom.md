***What is the DOM?***
The Document Object Model, abbreviated DOM, is a powerful tree-like structure that allows programmers to conceptualize hierarchy and access the elements on a web page.

The DOM is one of the better-named acronyms in the field of Web Development. In fact, a useful way to understand what DOM does is by breaking down the acronym but out of order:

The DOM is a logical tree-like Model that organizes a web page’s HTML Document as an Object.
Note: There are other types of documents, such as XML and SVG, that are also modeled as DOM structures.

The DOM is a language-agnostic structure implemented by browsers to allow for web scripting languages, like JavaScript, to access, modify, and update the structure of an HTML web page in an organized way.

For this reason, we like to think of the DOM as the link between an HTML web page and scripting languages.

Nodes and Elements in the DOM
A node is the equivalent of each family member in a family tree. A node is an intersecting point in a tree that also contains data.

There are nine different types of node objects in the DOM tree. In our diagram, the node objects with the sharp-edge rectangles are of the type Element, while the rounded edge rectangles are of type Text, because they represent the text inside the HTML paragraph elements.

When trying to modify a web page, the script will mostly interact with the DOM nodes of type element. Elements are the building units of HTML web pages, they contain everything between an opening tag and a closing tag. If the tag is a self-closing tag, then that is the element itself.

**REVIEW**

The DOM is a structural model of a web page that allows for scripting languages to access that page.
The system of organization in the DOM mimics the nesting structure of an HTML document.
Elements nested within another are referred to as the children of that element. The element they are nested within is called the parent element of those elements.
The DOM also allows access to the regular attributes of an HTML element such as its style, id, etc.

***KEY POINTS***
The document keyword grants access to the root of the DOM in JavaScript
The DOM Interface allows you to select a specific element with CSS selectors by using the .querySelector() method
You can also access an element directly by its ID with .getElementById()
The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively
You can create, append, and remove elements by using the .createElement(),.appendChild() and .removeChild() methods respectively
The .onclick property can add interactivity to a DOM element based on a click event