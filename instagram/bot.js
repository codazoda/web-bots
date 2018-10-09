function getHeartElement() {
    var knownHeartElementNames = ["coreSpriteHeartOpen", "coreSpriteLikeHeartOpen"];
    var i = 0;
    // Loop through the known heart elements until one works
    for (i = 0; i < knownHeartElementNames.length; i++) {
        var heartElement = document.querySelector("." + knownHeartElementNames[i]);
        if (heartElement != undefined) {
            break;
        }
    }
    return heartElement;
}

function doLike() {
    var likeMax = 100;
    var likeElement = getHeartElement();
    var nextElement = document.querySelector(".coreSpriteRightPaginationArrow");
    likeCount++;
    var nextTime = Math.random() * (14000 - 4000) + 4000;
    if (likeElement.innerHTML.match("Unlike") == null) {
        likeElement.click();
        console.log(likeCount + " - liked");
    } else {
        console.log(likeCount + " - skipped");
    }
    setTimeout(function() {nextElement.click();}, 1000);
    if (likeCount < likeMax) {
        setTimeout(doLike, nextTime);
    } else {
        console.log("Nice! Time for a break.");
    }
}

var likeCount = 0;
doLike();