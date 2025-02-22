namespace SpriteKind {
    export const Gold_Feather = SpriteKind.create()
    export const Silver_Feather = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Silver_Feather, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gold_Feather, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    sprites.destroy(otherSprite)
})
let feather: Sprite = null
let feather_2: Sprite = null
scene.setBackgroundImage(assets.image`muotin range`)
let mySprite = sprites.create(assets.image`bird`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`flying bird`,
100,
true
)
controller.moveSprite(mySprite, 100, 100)
game.onUpdateInterval(randint(5000, 10000), function () {
    for (let index = 0; index < 1; index++) {
        feather_2 = sprites.create(assets.image`black bride0`, SpriteKind.Silver_Feather)
        feather_2.setVelocity(8, 16)
        feather_2.setPosition(randint(0, scene.screenWidth()), 0)
        animation.runImageAnimation(
        feather_2,
        assets.animation`moving feather0`,
        500,
        true
        )
    }
})
game.onUpdateInterval(randint(10000, 20000), function () {
    for (let index = 0; index < 1; index++) {
        feather = sprites.create(assets.image`black bride`, SpriteKind.Gold_Feather)
        feather.setVelocity(8, 16)
        feather.setPosition(randint(0, scene.screenWidth()), 0)
        animation.runImageAnimation(
        feather,
        assets.animation`moving feather`,
        500,
        true
        )
    }
})
