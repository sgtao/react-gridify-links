// import { useState } from 'react';
import LinkItem from './LinkItem';

const GridContain = ({ bookmarks = [] })=> {

    return (
        <div className="grid-container">
            {bookmarks.map((bookmark, index) => (
                <LinkItem key={(index)} index={index} {...bookmark} />
            ))}
        </div>
    );
}

export default GridContain;