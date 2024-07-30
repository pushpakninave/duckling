const truncateTag = (text, maxLength) => {
    if (text.length <= maxLength) return true;
    return false;
};
function Tags({ tagInfo }) {
    return (
        <div className="text-white/100 flex flex-row justify-end cursor-pointer">
            {tagInfo.slice(0, 3).map((tag, index) => (
                truncateTag(tag.slug || tag.topic.name, 9) && (
                    <p key={index} className="text-xs/5 px-2 mx-1 bg-accent/60 border-accent rounded-xl ">
                        {tag.slug || tag.topic.name}
                    </p>
                )
            ))}
            {tagInfo.length > 3 && (
                <p className="text-xs/5 px-2 mx-2 bg-accent/50 border-accent rounded-xl ">
                    more..
                </p>
            )}
        </div>
    );
}

export default Tags;