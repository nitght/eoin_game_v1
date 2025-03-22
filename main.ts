namespace SpriteKind {
    export const Gold_Feather = SpriteKind.create()
    export const Silver_Feather = SpriteKind.create()
    export const diamond_feather = SpriteKind.create()
    export const Cursed_feather = SpriteKind.create()
    export const heart = SpriteKind.create()
}
info.onScore(100000, function () {
    effects.starField.startScreenEffect()
    scene.setBackgroundImage(assets.image`clouds0`)
})
info.onScore(50000, function () {
    effects.clouds.startScreenEffect()
    scene.setBackgroundImage(assets.image`clouds`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heart, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.diamond_feather, function (sprite, otherSprite) {
    info.changeScoreBy(10000)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Silver_Feather, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gold_Feather, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    sprites.destroy(otherSprite)
})
info.onScore(5000, function () {
    effects.confetti.startScreenEffect()
    scene.setBackgroundImage(assets.image`muotin range1`)
    ename = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . f 1 f f . . . . . . 
        . . . . . . f 2 2 f . . . . . . 
        . . . . . . f f 1 f . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
})
info.onScore(20000, function () {
    effects.confetti.startScreenEffect()
    scene.setBackgroundImage(assets.image`muotin range`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cursed_feather, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let feather4: Sprite = null
let Featther3: Sprite = null
let feather: Sprite = null
let heart: Sprite = null
let feather_2: Sprite = null
let ename: Sprite = null
scene.setBackgroundImage(assets.image`muotin range0`)
info.setLife(6)
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
game.onUpdateInterval(randint(200000, 300000), function () {
    for (let index = 0; index < 1; index++) {
        heart = sprites.create(assets.image`bird1`, SpriteKind.heart)
        heart.setVelocity(20, 40)
        heart.setPosition(randint(0, scene.screenWidth()), 0)
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
game.onUpdateInterval(randint(100000, 100000), function () {
    for (let index = 0; index < 1; index++) {
        Featther3 = sprites.create(assets.image`black bride1`, SpriteKind.diamond_feather)
        Featther3.setVelocity(20, 40)
        Featther3.setPosition(randint(0, scene.screenWidth()), 0)
        animation.runImageAnimation(
        Featther3,
        assets.animation`moving feather1`,
        500,
        true
        )
    }
})
game.onUpdateInterval(randint(100000, 150000), function () {
    for (let index = 0; index < 1; index++) {
        feather4 = sprites.create(assets.image`black bride2`, SpriteKind.Cursed_feather)
        feather4.follow(mySprite, 40)
        feather4.setPosition(randint(0, scene.screenWidth()), 0)
        animation.runImageAnimation(
        feather4,
        assets.animation`moving feather2`,
        500,
        true
        )
    }
})
