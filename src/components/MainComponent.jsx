import { useState, useEffect } from 'react';
import GridContain from './GridContain';

const MainComponent = () => {
    const [bookmarks, setBookmarks] = useState([]);
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
            <main className="main-content">
                <GridContain bookmarks={bookmarks} />
            </main>
        </>
    )
}

export default MainComponent;
