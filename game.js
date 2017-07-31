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

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally=true;

		game.stage.backgroundColor = "#4488AA";

		this.player=game.add.sprite(game.world.centerX,game.world.centerY,"Player(Back)");

		this.player.animations.add("walk", [0,1,2,0]);

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
				this.player.y-=1;
				
				if(this.player.key==="Player(Back)"){
					this.player.loadTexture("Player(Front)");
					this.player.animations.play("walk", 5, true);
				}
				if(this.player.key==="Player(Left)"){
					this.player.loadTexture("Player(Front)");
					this.player.animations.play("walk", 5, true);
				}
				if(this.player.key==="Player(Right)"){
					this.player.loadTexture("Player(Front)");
					this.player.animations.play("walk", 5, true);
				}
			
			}
					
		}

		if(forward.isUP){
			this.player.animations.stop(null, true);
		}

		if(back.isDown){

			if(this.player.y < 1890){
				this.player.y+=1;

				if(this.player.key==="Player(Front)"){
					this.player.loadTexture("Player(Back)");
					this.player.animations.play("walk", 5, true);
				}
				if(this.player.key==="Player(Left)"){
					this.player.loadTexture("Player(Back)");
					this.player.animations.play("walk", 5, true);
				}
				if(this.player.key==="Player(Right)"){
					this.player.loadTexture("Player(Back)");
					this.player.animations.play("walk", 5, true);
				}
			}

		}

		if(back.isUP){
			this.player.animations.stop(null, true);
		}

		if(right.isDown){

			if(this.player.x < 1890){
				this.player.x+=1;

				if(this.player.key==="Player(Back)"){
					this.player.loadTexture("Player(Right)");
					this.player.animations.play("walk", 5, true);
				}
				else if(this.player.key==="Player(Left)"){
					this.player.loadTexture("Player(Right)");
					this.player.animations.play("walk", 5, true);
				}
				else if(this.player.key==="Player(Front)"){
					this.player.loadTexture("Player(Right)");
					this.player.animations.play("walk", 5, true);
				}
			}	

		}

		if(right.isUP){
			this.player.animations.stop(null, true);
		}

		if(left.isDown){

			if(this.player.x > 0){
				this.player.x-=1;

				if(this.player.key==="Player(Back)"){
					this.player.loadTexture("Player(Left)");
					this.player.animations.play("walk", 5, true);
				}
				if(this.player.key==="Player(Front)"){
					this.player.loadTexture("Player(Left)");
					this.player.animations.play("walk", 5, true);
				}
				if(this.player.key==="Player(Right)"){
					this.player.loadTexture("Player(Left)");
					this.player.animations.play("walk", 5, true);
				}
			}

		}

		if(left.isUP){
			this.player.animations.stop(null, true);
		}

	},

	render: function(){


	},

	/*changeTexture: function(){

		if(forward.isDown){

			this.player.loadTexture("Player(Front)");

		}

		if(back.isDown){

			this.player.loadTexture("Player(Back)");

		}

		if(right.isDown){

			this.player.loadTexture("Player(Right)");

		}

		if(left.isDown){

			this.player.loadTexture("Player(Left)");

		}

	},*/

};