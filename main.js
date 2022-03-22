var reorderHomepage = setInterval(function() {
    var gameContainers = document.getElementsByClassName("game-home-page-container")[0]
    if (gameContainers != undefined && gameContainers.children.length > 3) {
        gameContainers = document.getElementsByClassName("game-home-page-container")[0].children

        gameContainers[0].style.visibility = "hidden"
        gameContainers[0].style.position = "absolute"
        gameContainers[1].style.visibility = "hidden"
        gameContainers[1].style.position = "absolute"

        clearInterval(reorderHomepage)
    }
}, 100)