let mySprite: Sprite = null
controller.moveSprite(mySprite, 100, 100)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . a a . . . . . . . . . 
    . . . a a a a a a . . . . . . . 
    . . . 3 3 3 3 3 3 . . . . . . . 
    . . . 3 f 3 3 f 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 . . . . . . . 
    . . . 3 3 f f 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 . . . . . . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . . 3 . . 3 . . . . . . . 
    . . . . 3 3 . . 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
animation.stopAnimation(animation.AnimationTypes.All, mySprite)
