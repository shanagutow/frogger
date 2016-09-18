//var buggy1 = new Enemy(1);
// Enemies our player must avoid
var Enemy = function(x,y){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    console.log("new enemy");
    this.loc = loc;
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    console.log("enemy ");
    console.log(this.x);
    console.log(this.y);
    console.log("end enemy");

    Enemy.prototype.render = function() {
    console.log("start render");
    console.log(this.x);
    console.log(this.y);
    console.log(this.sprite);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    console.log("end render");
    }

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    console.log("enemyProUp test");
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(x,y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    Enemy.call(this, loc);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//function player(){
  //  update()
  //  render()
  //  handleInput()
//}
/*
var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

// call the Person sayHello method.
person1.sayHello(); // logs "Hello, I'm Alice"
person2.sayHello(); // logs "Hello, I'm Bob"
*/
var Player = function() {
    this.sprite = 'images/char-pink-girl.png';
};

Player.prototype.update = function() {
    //console.log("update test");
};

Player.prototype.render = function(x,y) {   // user added
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.x = 200;
    this.y = 410;


};

Player.prototype.handleInput = function(key) {
    switch(key){
            case 'left' :
              this.x = this.x - 83;
              break;
            case 'right' :
              this.x = this.x + 83;
              break;
            case 'up' :
              this.y = this.y - 83;
              break;
            case 'down' :
              this.y = this.y + 83;
              break;
        }
    console.log("handleInput test");
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


