$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 600, 55, 20, "red");
    createPlatform(100, 500, 80, 10, "orange");
    createPlatform(400, 400, 60, 20, "yellow");
    createPlatform(150, 290, 90, 10, "darkgreen");
    createPlatform(650, 300, 150, 25, "blue");
    createPlatform(1100, 400, 300, 15, "purple");
    createPlatform(1300, 300, 100, 10, "cyan");
    createPlatform(1100, 200, 70, 10, "lightgreen");
    createPlatform(1300, 120, 90, 80, "white");




    // TODO 3 - Create Collectables
    createCollectable("diamond", 1300, 30, 1, 1);
    createCollectable("kennedi", 50, 50);
    createCollectable("steve", 950, 700, 0.2, 0.2);
    createCollectable("database", 1350, 320, 0.1, 1.0125);



    
    // TODO 4 - Create Cannons 850, 1050, 650, 950, 380, 250
    createCannon("right", 700, 2500);
    createCannon("bottom", 1000, 2000);
    createCannon("bottom", 800, 1000);
    createCannon("top", 1000, 1500);
    createCannon("left", 270, 2000)



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
