var game = null;

function init() {
	game = new Phaser.Game(318, 225, Phaser.CANVAS, '', null, false, false);

	game.state.add("MainGame", MainGame);

	game.state.start("MainGame");
}

var MainGame = function () {

}

MainGame.prototype = {

	init: function(){

	},

	preload: function(){
		game.load.spritesheet("Player(Front)", "img/Player(Front)-Sheet.png", 25, 25);
		game.load.spritesheet("Player(Back)", "img/Player(Back)-Sheet.png", 25, 25);
		game.load.spritesheet("Player(Right)", "img/Player(Right)-Sheet.png", 25, 25);
		game.load.spritesheet("Player(Left)", "img/Player(Left)-Sheet.png", 25, 25);
	},

	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally=true;

		this.player=game.add.sprite(0,0,"Player(Back)");

		this.player.animations.add("walk1", [0,1,2]);
		this.player.animations.play("walk1", 5, true);

		forward=game.input.keyboard.addKey(Phaser.Keyboard.W);
		back=game.input.keyboard.addKey(Phaser.Keyboard.S);
		right=game.input.keyboard.addKey(Phaser.Keyboard.D);
		left=game.input.keyboard.addKey(Phaser.Keyboard.A);

	},

	update: function(){

		if(forward.isDown){

			if(this.player.y > 0){
				this.player.y=this.player.y - 1;
			}
					
		}

		if(back.isDown){

			if(this.player.y < 200){
				this.player.y=this.player.y + 1;
			}

		}

		if(right.isDown){

			if(this.player.x < 300){
				this.player.x=this.player.x + 1;
			}	

		}

		if(left.isDown){

			if(this.player.x > -7){
				this.player.x=this.player.x - 1;
			}

		}

	},

};