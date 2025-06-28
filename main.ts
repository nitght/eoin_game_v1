namespace SpriteKind {
    export const Gold_Feather = SpriteKind.create()
    export const Silver_Feather = SpriteKind.create()
    export const diamond_feather = SpriteKind.create()
    export const Cursed_feather = SpriteKind.create()
    export const heart = SpriteKind.create()
    export const ename2 = SpriteKind.create()
    export const ename3 = SpriteKind.create()
    export const enamy = SpriteKind.create()
    export const ename4 = SpriteKind.create()
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
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ename2, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.diamond_feather, function (sprite, otherSprite) {
    info.changeScoreBy(10000)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enamy, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Silver_Feather, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gold_Feather, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    sprites.destroy(otherSprite)
})
info.onScore(5000, function () {
    effects.confetti.startScreenEffect()
    scene.setBackgroundImage(assets.image`muotin range1`)
})
info.onScore(20000, function () {
    effects.confetti.startScreenEffect()
    scene.setBackgroundImage(assets.image`muotin range`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cursed_feather, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let feather4: Sprite = null
let ename_5: Sprite = null
let Featther3: Sprite = null
let ename2: Sprite = null
let ename_4: Sprite = null
let ename3: Sprite = null
let feather: Sprite = null
let projectile: Sprite = null
let heart: Sprite = null
let ename: Sprite = null
let feather_2: Sprite = null
scene.setBackgroundImage(assets.image`muotin range0`)
info.setLife(9)
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
game.onUpdateInterval(randint(5000, 10000), function () {
    for (let index = 0; index < 1; index++) {
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
            `, SpriteKind.ename2)
        ename.setVelocity(20, 40)
        ename.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
game.onUpdateInterval(randint(20000, 30000), function () {
    for (let index = 0; index < 1; index++) {
        heart = sprites.create(assets.image`bird1`, SpriteKind.heart)
        heart.setVelocity(20, 40)
        heart.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
forever(function () {
    for (let value of sprites.allOfKind(projectile.kind())) {
        if (value.y > 10 + scene.screenHeight()) {
            sprites.destroy(value)
        }
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
game.onUpdateInterval(randint(7000, 14000), function () {
    for (let index = 0; index < 1; index++) {
        ename3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d d d d . . d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d f d d d d f d d d . . 
            . . d d d f d d d d f d d d d . 
            . d d d 6 d 6 d d 6 d 6 d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d f f d d d d d d . 
            . d d d d d f d d f d d d d . . 
            . . . . . d d d d d d d d . . . 
            . . . . . . d d . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ename3)
        ename3.setVelocity(0, 0)
        ename3.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
game.onUpdateInterval(500, function () {
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    projectile.setPosition(ename3.x, ename3.y)
    projectile.setVelocity(0, 50)
})
game.onUpdateInterval(randint(14000, 24000), function () {
    for (let index = 0; index < 1; index++) {
        ename_4 = sprites.create(img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ..111.......................................................
            ..1111...........................................111.111111.
            ..111111122222222222222222222222222222222222222211111111f111
            .1111111114444444444444444444444444444444444444411f111111111
            111f11111115555555555555555555555555555555555555111111f1111.
            1111111f11177777777777777777777777777777777777771111fff1111.
            111f11111119999999999999999999999999999999999999111111111...
            ..11ff111888888888888888888888888888888888888888888811111...
            ....11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11.....
            ............................................................
            ............................................................
            `, SpriteKind.ename4)
    }
})
game.onUpdateInterval(randint(25000, 35000), function () {
    for (let index = 0; index < 1; index++) {
        ename2 = sprites.create(img`
            ................................
            ................................
            ................................
            ....eeeeee......................
            ..eeeeeeeee.....................
            .eeeeeeeeeee....................
            eeeeeeeeeeeee.......111111......
            eeeeeeeeeeeeee.....1111111......
            eeeeeeeeeeeeeee...11111f1155....
            eeeeeeeeeeeeeeeeee11111111555...
            .eeeeeeeeeeeeeeeeee1111111..5...
            ...eeeee...eeeeeeeee11111.......
            ..........eeeeeeeeeee111........
            .........eeeeeeeeeeeee1.........
            ........eeeeeeeeeeeeee..........
            .......eeeeeeeeeeeeee...........
            ......eeeeeeeeeeeeee............
            .....eeeeeeeeeeeee..............
            ....eeeeeeeeeeeee...............
            ...eeeeeeeeeeeee................
            ..eeeeeeeeeeeee.................
            .eeeeeeeeeeee5..................
            .eeeeeeeeeee555.................
            ...eeeeee....555555.............
            ..............555..5............
            ...............555.5............
            ................5.5f............
            ................5.5.............
            ..............f5..f.............
            ................................
            ................................
            ................................
            `, SpriteKind.ename2)
        ename2.setVelocity(50, 100)
        ename2.setPosition(randint(0, scene.screenWidth()), 0)
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
game.onUpdateInterval(randint(50000, 90000), function () {
    for (let index = 0; index < 1; index++) {
        ename_5 = sprites.create(img`
            ........................
            ........................
            ........................
            ...........eeeee.eeeee..
            ..........eedddeeedddee.
            ..........eddddddddddde.
            ..........eddfdddddfdde.
            ..........eddfdddddfdde.
            ..........edddd555dddde.
            .eeeeee...eeddd555dddee.
            eeeeeeeee..eeeee5eeeee..
            eeeeeeeeeee..eeeeeee....
            eeeeeeeeeeeeeeeeeeee....
            .eeeeeeeeeeeeeeeeeee....
            ........eeeeeeeeeee.....
            .........eeeeeeeee......
            ........eeeeeeeee.......
            ........eeeeeee.........
            ........5..5............
            .....555...5............
            ......55..555...........
            .....5.5.5.5.5..........
            ........................
            ........................
            `, SpriteKind.enamy)
        ename_5.follow(mySprite, 60)
        ename_5.setPosition(randint(0, scene.screenWidth()), 0)
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
