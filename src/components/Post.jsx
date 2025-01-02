import classes from "./Post.module.css";

const names = ["Luis", "Laura", "Vitali", "Paola", "Spiderman"]

function Post() {
    var chosenName = Math.random();
    if(chosenName >= 0 && chosenName <= 0.2) chosenName = names[0];
    else if(chosenName > 0.2 && chosenName <= 0.4) chosenName = names[1];
    else if(chosenName > 0.4 && chosenName <= 0.6) chosenName = names[2];
    else if(chosenName > 0.6 && chosenName <= 0.8) chosenName = names[3];
    else chosenName = names[4];

    return(
        <div className={classes.bodyPost}>
            <p className={classes.author}>{chosenName}</p>
            <p className={classes.text}>Hello {chosenName}! Welcome to your post.</p>
        </div>
    );
}

export default Post;