import React, { useState } from 'react';

const Postform = () => {

    const[post, setPosts] = useState({
        title: (''), 
        body:  ('')
    })

    function handleChange (event) { 
        setPosts({ ...post, [event.target.name]:  event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(post)
        })
        .then((response) => response.json())
        .then((data) => {
            setPosts(data)
            console.log(data)
        })
        
    }


    return (
        <div>
            <h1>Add Post</h1>       
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label> <br />
                    <input type="text" name='title'value={post.title} onChange={handleChange}/>
                </div>
                <br />
                <div>
                    <label htmlFor="">Body: </label> <br />
                    <textarea name='body' value={post.body} onChange={handleChange} />
                </div>
                <br />
                <button type='submit'> Submit </button>
            </form>     
        </div>
    );
};

export default Postform;