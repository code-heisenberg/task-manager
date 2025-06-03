import React, { useState, useEffect} from "react";
import axios from "axios"; // Importing axios for making HTTP requests

const ExternalData = () => {
    const [posts, setPosts] = useState([]); // State to hold the fetched posts

    // This component is a placeholder for external data integration.
    //Get data from https://jsonplaceholder.typicode.com/posts?_limit=5 URL and keep it in a state and render it in a list.
    // You can use fetch or axios to get the data and use useEffect to manage the lifecycle of the component.
    // Example of fetching data from an external API
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //       .then(response => response.json())
    //       .then(data => setPosts(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);

    // Axios can also be used for fetching data
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>External Data</h1>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    }
export default ExternalData;