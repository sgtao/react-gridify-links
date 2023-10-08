// LinkItem.jsx
import { useRef, useState } from "react";

const LinkItem = ({ index, setExpanded, title, url }) => {
    const gridItemRef = useRef(null);
    const [itemActive, setItemActive] = useState(false);
    function formatNumberToTwoDigits(n) {
        // 数値を2桁の文字列に変換
        return String(n).padStart(2, '0');
    }
    const handleClick = () => {
        const item = gridItemRef.current;
        if (!itemActive) {
            item.classList.add("active");
            setExpanded(true);
        } else {
            item.classList.remove("active");
            setExpanded(false);
        }
        setItemActive(prev => ~prev);
    }

    const showIndex = formatNumberToTwoDigits(index + 1);
    return (
        <div className="grid-item" ref={gridItemRef} onClick={handleClick}>
            <p>{showIndex}_{title}</p>
            {!!itemActive && (
                <ul>
                    <li>
                        <a href={url} target="_blank" rel="noopener noreferrer">リンク</a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default LinkItem;