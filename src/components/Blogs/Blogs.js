import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-20'>
            <div className='lg:w-4/6 w-[95%] shadow-xl p-3 mx-auto bg-blue-500 rounded-lg mb-5'>
                <h1 className='text-3xl font-mono font-bold'>What is context API and its purpose?</h1>
                <p className='text-xl'>
                    The Context API is a React Structure and by using it we can pass data too any child component without prop-drilling.In a typical react Application we pass data from a parent component to a child component via props.
                    In a complex react application where we need to pass data to the nested components, this props drilling becomes very cumbersome so to overcome this problem react introduced an API called context API and by using it we can pass data to the nested components without the trouble of props drilling.
                </p>
            </div>
            <div className='lg:w-4/6 w-[95%] shadow-xl p-3 mx-auto bg-blue-500 rounded-lg mb-5'>
                <h1 className='text-3xl font-mono font-bold'>What is semantic HTML elements?</h1>
                <p className='text-xl'>Semantic HTML is a kind of HTML that focuses on labeling code in a way that is useful and relevant to both the developer and the browser.
                for example a &lt;div&gt; tells nothing about the content it contains whereas &lt;header&gt; tells us that it contains the heading of the webpage. 
                Semantic tags are easy to read and they provide greater accessibility.Search engines, screen readers and other technologies can easily understand the context of the website which improves user experience very much.
                Some Semantic elements: &lt;article&gt; , &lt;main&gt; , &lt;header&gt; , &lt;footer&gt; , &lt;section&gt; , &lt;aside&gt; , &lt;nav&gt;, &lt;summary&gt; etc.
                </p>
            </div>
            <div className='lg:w-4/6 w-[95%] shadow-xl p-3 mx-auto bg-blue-500 rounded-lg'>
                <h1 className='text-3xl font-mono font-bold'>What are the differences among inline,inline-block and block elements?</h1>
                <p className='text-xl'>There are many differences among inline,inline-block and block elements.Some differences are shown below:</p>
                <ul className='list-decimal list-inside text-lg'>
                   <li>Block elements starts on a new line but inline and inline-block elements don't start on a new line.</li> 
                   <li>Block Elements generally occupies the full width of the parent container but inline and inline-block elements occupies just the required width with respect to the content inside them.</li>
                   <li>We can set height and width in block and inline-block elements but we can't set height and width in inline elements.</li>
                   <li>Margin can be set in all sides of block and inline-block elements but inline elements don't allow margin-top and margin-bottom.</li>
                   <li>&lt;div&gt;,&lt;h1&gt; to &lt;h6&gt;,&lt;p&gt;,&lt;li&gt;,&lt;section&gt; etc are block elements.&lt;button&gt;,&lt;input&gt;,&lt;select&gt;,&lt;textarea&gt; etc are inline-block elements.&lt;span&gt;,&lt;img&gt;,&lt;a&gt;,&lt;i&gt;,&lt;small&gt; etc are inline elements.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;