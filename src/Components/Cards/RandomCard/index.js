import CardList from "../CardList";

export function GenRandom(props){
    let max = props.length
    let randomNum = function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const randomActivity = props[randomNum]

    return (
        <>
            <div>
            <CardList
                activity={randomActivity.activity}
                type={randomActivity.type}
                participants={randomActivity.participants}
                duration={randomActivity.duration}
                kidFriendly={randomActivity.kidFriendly}
                accessibility={randomActivity.accessibility}
                link={randomActivity.link}
                view={`/my-activities/view-activity/${randomActivity._id}`}
                edit={`/my-activities/edit-activity/${randomActivity._id}`}
                // delete={() => {
                // props.addToFavourite(randomActivity._id);
                // }}
            />
            </div>
        </>
    )
}