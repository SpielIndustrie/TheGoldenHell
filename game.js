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

		//Player

			//PlayerAll

				//Walk

					game.load.spritesheet("PlayerW(Back)", "img/Player/All/Walk/Player(Back)-Sheet.png", 30, 30);
					game.load.spritesheet("PlayerW(Front)", "img/Player/All/Walk/Player(Front)-Sheet.png", 30, 30);
					game.load.spritesheet("PlayerW(Left)", "img/Player/All/Walk/Player(Left)-Sheet.png", 30, 30);
					game.load.spritesheet("PlayerW(Right)", "img/Player/All/Walk/Player(Right)-Sheet.png", 30, 30);

				//Attack

					game.load.spritesheet("PlayerA(Back)", "img/Player/All/Attack/Player(Back)-Sheet.png", 30, 30);

			//PlayerNone

				//Walk

					game.load.spritesheet("Player(BackNone)", "img/Player/None/Player(BackNone)-Sheet.png", 30, 30);
					game.load.spritesheet("Player(FrontNone)", "img/Player/None/Player(FrontNone)-Sheet.png", 30, 30);
					game.load.spritesheet("Player(LeftNone)", "img/Player/None/Player(LeftNone)-Sheet.png", 30, 30);
					game.load.spritesheet("Player(RightNone)", "img/Player/None/Player(RightNone)-Sheet.png", 30, 30);

		//Items

			//Begin

				game.load.image("Keule", "img/Items/Begin/Keule.png");
				game.load.image("Head", "img/Items/Begin/Head.png");
	},

	create: function(){
		//map= game.add.tilemap("Map001");
		//map.addTilesetImage("Ground", "Tiles");

		game.add.tileSprite(0, 0, 1920, 1920, "Back");
		game.world.setBounds(0, 0, 1920, 1920);

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally=true;

		this.keule=game.add.sprite(game.world.centerX - 20, game.world.centerY + 30, "Keule");

		this.head=game.add.sprite(game.world.centerX + 20, game.world.centerY - 30, "Head");

		this.player=game.add.sprite(game.world.centerX,game.world.centerY,"Player(BackNone)");

		this.player.animations.add("walk", [0,1,2,0]);
		//this.player.animations.add("attack", [0,1,2]);

		game.camera.follow(this.player);

		forward=game.input.keyboard.addKey(Phaser.Keyboard.W);
		back=game.input.keyboard.addKey(Phaser.Keyboard.S);
		right=game.input.keyboard.addKey(Phaser.Keyboard.D);
		left=game.input.keyboard.addKey(Phaser.Keyboard.A);

		attack=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//Layers

		/*var backgroundLayer=game.add.group();
		var playerLayer=game.add.group();
		backgroundLayer.create(0,0,"Back");
		playerLayer.create(this.player);*/
		

	},

	update: function(){

		//Player

			//PlayerAll

				//Movement

					if(forward.isDown){
							if(this.player.y > 0){
								this.player.y-=1;
							}
							if(this.player.key==="PlayerW(Back)"){
								this.player.loadTexture("PlayerW(Front)");
							}
							else if(this.player.key==="PlayerW(Left)"){
								this.player.loadTexture("PlayerW(Front)");
							}
							else if(this.player.key==="PlayerW(Right)"){
								this.player.loadTexture("PlayerW(Front)");
							}
							if(this.player.key==="PlayerW(Right)" || "PlayerW(Left)" || "PlayerW(Front)" || "PlayerW(BacK)"){

								this.player.animations.play("walk", 10, true);

							}	
					}
					else if(back.isDown){
							if(this.player.y < 1890){
								this.player.y+=1;
							}
							if(this.player.key==="PlayerW(Front)"){
								this.player.loadTexture("PlayerW(Back)");
							}
							else if(this.player.key==="PlayerW(Left)"){
								this.player.loadTexture("PlayerW(Back)");
							}
							else if(this.player.key==="PlayerW(Right)"){
								this.player.loadTexture("PlayerW(Back)");
							}
							if(this.player.key==="PlayerW(Right)" || "PlayerW(Left)" || "PlayerW(Front)" || "PlayerW(BacK)"){

								this.player.animations.play("walk", 10, true);

							}
							
					}
					else if(right.isDown){

						if(this.player.x < 1890){
							this.player.x+=1;

							if(this.player.key==="PlayerW(Back)"){
								this.player.loadTexture("PlayerW(Right)");
							}
							else if(this.player.key==="PlayerW(Left)"){
								this.player.loadTexture("PlayerW(Right)");
							}
							else if(this.player.key==="PlayerW(Front)"){
								this.player.loadTexture("PlayerW(Right)");
							}
							if(this.player.key==="PlayerW(Right)" || "PlayerW(Left)" || "PlayerW(Front)" || "PlayerW(BacK)"){

								this.player.animations.play("walk", 10, true);

							}
						}	

					}
					else if(left.isDown){

						if(this.player.x > 0){
							this.player.x-=1;

							if(this.player.key==="PlayerW(Back)"){
								this.player.loadTexture("PlayerW(Left)");
							}
							else if(this.player.key==="PlayerW(Front)"){
								this.player.loadTexture("PlayerW(Left)");
							}
							else if(this.player.key==="PlayerW(Right)"){
								this.player.loadTexture("PlayerW(Left)");
							}
							
							if(this.player.key==="PlayerW(Right)" || "PlayerW(Left)" || "PlayerW(Front)" || "PlayerW(BacK)"){

								this.player.animations.play("walk", 10, true);

							}
						}

					}
					else{

						this.player.animations.stop("walk");

					}

				//Attack

					/*if(attack.isDown){

						this.player.animations("attack", 5, true);

					}
					else{

						this.player.animations.stop("attack");

					}*/

			//PlayerNone

				//Movement

					if(forward.isDown){

							if(this.player.key==="Player(BackNone)"){
								this.player.loadTexture("Player(FrontNone)");
								this.player.animations.play("walk", 10, true);
							}
							else if(this.player.key==="Player(LeftNone)"){
								this.player.loadTexture("Player(FrontNone)");
								this.player.animations.play("walk", 10, true);
							}
							else if(this.player.key==="Player(RightNone)"){
								this.player.loadTexture("Player(FrontNone)");
								this.player.animations.play("walk", 10, true);
							}

							if(this.player.y > 0){
								this.player.y-=1;
							}
								
					}
					else if(back.isDown){

						if(this.player.key==="Player(None)"){
								this.player.loadTexture("Player(BackNone)");
								this.player.animations.play("walk", 10, true);
							}
							else if(this.player.key==="Player(LeftNone)"){
								this.player.loadTexture("Player(BackNone)");
								this.player.animations.play("walk", 10, true);
							}
							else if(this.player.key==="Player(RightNone)"){
								this.player.loadTexture("Player(BackNone)");
								this.player.animations.play("walk", 10, true);
							}

							if(this.player.y < 1890){
								this.player.y+=1;
							}

					}
					else if(right.isDown){

						if(this.player.x < 1890){
							this.player.x+=1;

							if(this.player.key==="Player(BackNone)"){
								this.player.loadTexture("Player(RightNone)");
								this.player.animations.play("walk", 10, true);
							}
							else if(this.player.key==="Player(LeftNone)"){
								this.player.loadTexture("Player(RightNone)");
								this.player.animations.play("walk", 10, true);
							}
							else if(this.player.key==="Player(FrontNone)"){
								this.player.loadTexture("Player(RightNone)");
								this.player.animations.play("walk", 10, true);
							}
						}	

					}
					else if(left.isDown){

						if(this.player.x > 0){
							this.player.x-=1;

							if(this.player.key==="Player(BackNone)"){
								this.player.loadTexture("Player(LeftNone)");
								this.player.animations.play("walk", 10, true);
							}
							else if(this.player.key==="Player(FrontNone)"){
								this.player.loadTexture("Player(LeftNone)");
								this.player.animations.play("walk", 10, true);
							}
							else if(this.player.key==="Player(RightNone)"){
								this.player.loadTexture("Player(LeftNone)");
								this.player.animations.play("walk", 10, true);
							}
						}

					}
					else{

						this.player.animations.stop("walk");

					}

				//PickUp

					if(this.player.x == this.keule.x || this.keule.x == this.keule.x){

						if(this.player.y == this.keule.y || this.player.y == this.keule.y){

							this.player.loadTexture("PlayerW(Back)");
							this.keule.destroy();

						}

					}

					if(this.player.x == this.head.x || this.player.x == this.head.x){

						if(this.player.y == this.head.y || this.player.y == this.head.y){

							this.player.loadTexture("PlayerW(Back)");
							this.head.destroy();

						}

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