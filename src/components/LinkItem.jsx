// LinkItem.jsx
const LinkItem = ({ index = 0, title = "hoge" }) => {
    function formatNumberToTwoDigits(n) {
        // 数値を2桁の文字列に変換
        return String(n).padStart(2, '0');
    }
    const showIndex = formatNumberToTwoDigits(index + 1);
    return (
        <div className="grid-item">
            {showIndex}_{title}
        </div>
    );
}

export default LinkItem;