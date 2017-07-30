var game = null;

function init() {
	game = new Phaser.Game(400, 300, Phaser.CANVAS, '', null, false, false);

	game.state.add("MainGame", MainGame);

	game.state.start("MainGame");
}

var MainGame = function () {

}

MainGame.prototype = {

	init: function(){

	},

	preload: function(){
		//Background
		game.load.image("Back", "img/Back.png");
		//PlayerAll
		game.load.spritesheet("Player(Back)", "img/Player/All/Walk/Player(Back)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(Front)", "img/Player/All/Walk/Player(Front)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(Left)", "img/Player/All/Walk/Player(Left)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(Right)", "img/Player/All/Walk/Player(Right)-Sheet.png", 30, 30);

		//PlayerNone
		game.load.spritesheet("Player(BackNone)", "img/Player/None/Player(BackNone)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(FrontNone)", "img/Player/None/Player(FrontNone)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(LeftNone)", "img/Player/None/Player(LeftNone)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(RightNone)", "img/Player/None/Player(RightNone)-Sheet.png", 30, 30);
	},

	create: function(){
		game.add.tileSprite(0, 0, 1920, 1920, "Back");
		game.world.setBounds(0, 0, 1920, 1920);
		//game.physics.startSystem(Phaser.Physics.P2JS);

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally=true;

		game.stage.backgroundColor = "#4488AA";

		this.player=game.add.sprite(game.world.centerX,game.world.centerY,"Player(Back)");

		//game.physics.p2.enable(this.player);

		this.player.animations.add("walk", [0,1,2,0]);
		this.player.animations.play("walk", 5, true);

		game.camera.follow(this.player);

		forward=game.input.keyboard.addKey(Phaser.Keyboard.W);
		back=game.input.keyboard.addKey(Phaser.Keyboard.S);
		right=game.input.keyboard.addKey(Phaser.Keyboard.D);
		left=game.input.keyboard.addKey(Phaser.Keyboard.A);

		//Layers

		/*var backgroundLayer=game.add.group();

		var playerLayer=game.add.group();

		backgroundLayer.create(0,0,"Back");
		playerLayer.create(this.player);*/
		

	},

	update: function(){

		if(forward.isDown){

			if(this.player.y > 0){
				this.player.loadTexture("Player(Front)");
				this.player.y.moveUp(3);
			}
					
		}

		if(back.isDown){

			if(this.player.y < 1890){
				this.player.y.moveDown(3);
				this.player.loadTexture("Player(Back)");
			}

		}

		if(right.isDown){

			if(this.player.x < 1890){
				this.player.x.moveRight(3);
				this.player.loadTexture("Player(Right)");
			}	

		}

		if(left.isDown){

			if(this.player.x > 0){
				this.player.x.moveLeft(3);
				this.player.loadTexture("Player(Left)");
			}

		}

	},

	render: function(){


	},

};