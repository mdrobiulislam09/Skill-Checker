import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
                <h1>What is the purpose of react router?</h1>
                <p>React Router is a standard library for routing in React.
                    It enables the navigation among views of various components 
                    in a React Application, allows changing the browser URL,
                    and keeps the UI in sync with the URL.
                    Let us create a simple application to React
                    to understand how the React Router works.
                    The application will contain three components: home component,
                    about a component, and contact component.
                </p>
                <h1>How does context api work?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables 
                    that can be passed around. This is the alternative to "prop drilling" or moving props
                    from grandparent to child to parent, and so on. Context is also touted as an easier,
                    lighter approach to state management using Redux.
                </p>
           
            
                <h1>About React useRef Hook.</h1>
                <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                   You might be familiar with refs primarily as a way to access the DOM. If you pass a ref
                   object to React with div ref=myRe , React will set its .current property to the
                   corresponding DOM node whenever that node changes. This works because useRef() creates
                   a plain JavaScript object.
                </p>
        </div>
    );
};

export default Blog;