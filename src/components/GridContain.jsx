import { useState, useRef, useEffect } from 'react';
import LinkItem from './LinkItem';

const GridContain = ({ bookmarks = [] }) => {
    const [expanded, setExpanded] = useState(false);
    const gridContentRef = useRef(null);
    useEffect(() => {
        const gridContent = gridContentRef.current;
        if (expanded) {
            gridContent.classList.add("expanded");
        } else {
            gridContent.classList.remove("expanded");
        }
    }, [expanded]);
    return (
        <div className="grid-container" ref={gridContentRef} >
            {bookmarks.map((bookmark, index) => (
                <LinkItem key={(index)}
                    index={index}
                    setExpanded={setExpanded}
                    {...bookmark}
                />
            ))}
        </div>
    );
}

export default GridContain;