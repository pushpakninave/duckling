const truncateTag = (text, maxLength) => {
    if (text.length <= maxLength) return true;
    return false;
};
function Tags({ tagInfo }) {
    return (
        <div className="text-white/100 flex flex-row justify-end cursor-pointer mt-5">
            {tagInfo.slice(0, 3).map((tag, index) => (
                truncateTag(tag.slug, 9) && (
                    <p key={index} className="text-xs/5 px-2 mx-1 bg-accent/60 border-accent rounded-xl ">
                        {tag.slug}
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