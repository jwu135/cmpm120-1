//Game over State
//Player can retry the game by pressing space bar
GameOver.prototype = {
	preload: function(){
		game.stage.backgroundColor = "#facade";

	},
	create: function(){
		var menuText = game.add.text(16, 16, 'Test Stage Over, Good job!', {fontSize: '32px', fill: '#000'});
	},
	update: function(){
		score = 0;
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Play');
		}
	}

}