# Episode 3 - Laying the foundation

## Theory

### 1. What is JSX?
JSX is a syntax extension of JS. JSX stands for JavaScript XML.
It is an HTML like syntax which is used to create react elements. 

### 2. Superpowers of JSX
JSX allows to write markup, script and style inisde it.
JSX can be easily integrated with React to create super reusable components.
JSX can help to render components server side thus improving SEO.
 
### 3. Role of type attribute in <script> tag, what options can i use there.
The role of type attribute in <script> tag is to tell the browser how to interpret the contents inside the script tag.
The most common/ default type attribute is type="text/javascript". We can also use type="module" in script tag to indicate 
that the script is a javascript module.
  
### 4. {TitleComponent} vs <TitleComponent /> vs <TitleComponent><TitleComponent/> in JSX?
{TitleComponent} is a variable containing the react element.
<TitleComponent /> and <TitleComponent><TitleComponent/> - both syntax are same and valid. 
They both represent a React functional component.
