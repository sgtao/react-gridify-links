import { useState, useEffect } from 'react';

const MainComponent = () => {
    let [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/bookmarks.json');
                const data = await response.json();
                console.log(data);
                setBookmarks(data.bookmarks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>gridify-links</h1>
            <ul>
                {bookmarks.map((bookmark, index) => (
                    <li key={(index + 1)}>{index + 1}_{bookmark.title}</li>
                ))}
            </ul>
        </>
    )
}

export default MainComponent;
