// If the object exists already, we�ll use it, otherwise we�ll use a new object
var GodDangZombies = GodDangZombies || {};

// Initiate a new game and set the size of the entire windows
// Phaser.AUTO means that whether the game will be rendered on a CANVAS element or using WebGL will depend on the browser
GodDangZombies.game = new Phaser.Game(1024, 768, Phaser.AUTO, '', null, false, false);

GodDangZombies.game.state.add('Boot', GodDangZombies.Boot);
GodDangZombies.game.state.add('Preloader', GodDangZombies.Preloader);
GodDangZombies.game.state.add('MainMenu', GodDangZombies.MainMenu);
GodDangZombies.game.state.add('Game', GodDangZombies.Game);

GodDangZombies.game.state.start('Boot');
