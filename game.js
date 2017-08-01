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

		game.load.tilemap("Map001", "img/Map/Map001.json", null, Phaser.Tilemap.TILED_JSON);
		game.load.image("Tiles", "img/Map/Tiles/Tiles001-Sheet.png");

		//PlayerAll

		//Walk
		game.load.spritesheet("PlayerW(Back)", "img/Player/All/Walk/Player(Back)-Sheet.png", 30, 30);
		game.load.spritesheet("PlayerW(Front)", "img/Player/All/Walk/Player(Front)-Sheet.png", 30, 30);
		game.load.spritesheet("PlayerW(Left)", "img/Player/All/Walk/Player(Left)-Sheet.png", 30, 30);
		game.load.spritesheet("PlayerW(Right)", "img/Player/All/Walk/Player(Right)-Sheet.png", 30, 30);

		//Attack
		game.load.spritesheet("Player")

		//PlayerNone
		game.load.spritesheet("Player(BackNone)", "img/Player/None/Player(BackNone)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(FrontNone)", "img/Player/None/Player(FrontNone)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(LeftNone)", "img/Player/None/Player(LeftNone)-Sheet.png", 30, 30);
		game.load.spritesheet("Player(RightNone)", "img/Player/None/Player(RightNone)-Sheet.png", 30, 30);
	},

	create: function(){
		//map= game.add.tilemap("Map001");
		//map.addTilesetImage("Ground", "Tiles");

		game.add.tileSprite(0, 0, 1920, 1920, "Back");
		game.world.setBounds(0, 0, 1920, 1920);

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally=true;

		this.player=game.add.sprite(game.world.centerX,game.world.centerY,"PlayerW(Back)");

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

		//Movement

		if(forward.isDown){

				if(this.player.key==="PlayerW(Back)"){
					this.player.loadTexture("PlayerW(Front)");
					this.player.animations.play("walk", 10, true);
				}
				else if(this.player.key==="PlayerW(Left)"){
					this.player.loadTexture("PlayerW(Front)");
					this.player.animations.play("walk", 10, true);
				}
				else if(this.player.key==="PlayerW(Right)"){
					this.player.loadTexture("PlayerW(Front)");
					this.player.animations.play("walk", 10, true);
				}

				if(this.player.y > 0){
					this.player.y-=1;
				}
					
		}
		else if(back.isDown){

			if(this.player.key==="PlayerW(Front)"){
					this.player.loadTexture("PlayerW(Back)");
					this.player.animations.play("walk", 10, true);
				}
				else if(this.player.key==="PlayerW(Left)"){
					this.player.loadTexture("PlayerW(Back)");
					this.player.animations.play("walk", 10, true);
				}
				else if(this.player.key==="PlayerW(Right)"){
					this.player.loadTexture("PlayerW(Back)");
					this.player.animations.play("walk", 10, true);
				}

				if(this.player.y < 1890){
					this.player.y+=1;
				}

		}
		else if(right.isDown){

			if(this.player.x < 1890){
				this.player.x+=1;

				if(this.player.key==="PlayerW(Back)"){
					this.player.loadTexture("PlayerW(Right)");
					this.player.animations.play("walk", 10, true);
				}
				else if(this.player.key==="PlayerW(Left)"){
					this.player.loadTexture("PlayerW(Right)");
					this.player.animations.play("walk", 10, true);
				}
				else if(this.player.key==="PlayerW(Front)"){
					this.player.loadTexture("PlayerW(Right)");
					this.player.animations.play("walk", 10, true);
				}
			}	

		}
		else if(left.isDown){

			if(this.player.x > 0){
				this.player.x-=1;

				if(this.player.key==="PlayerW(Back)"){
					this.player.loadTexture("PlayerW(Left)");
					this.player.animations.play("walk", 10, true);
				}
				else if(this.player.key==="PlayerW(Front)"){
					this.player.loadTexture("PlayerW(Left)");
					this.player.animations.play("walk", 10, true);
				}
				else if(this.player.key==="PlayerW(Right)"){
					this.player.loadTexture("PlayerW(Left)");
					this.player.animations.play("walk", 10, true);
				}
			}

		}
		else{

			this.player.animations.stop("walk");

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