let img; // Variabel for bildet
let x, y; // Variabler for posisjonen til bildet
let xspeed, yspeed; // Variabler for farten til bildet

function preload() {
  // Last inn bildet før sketchen starter
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Fjording%2C_mother_and_daughter.jpg/500px-Fjording%2C_mother_and_daughter.jpg'); // Erstatt 'URL_TIL_BILDE' med URLen til ditt ønskede bilde
}

function setup() {
  // Opprett canvas som dekker hele vinduet og legg til en unik id ('p5-canvas') slik at vi kan style det
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.id('p5-canvas');
  cnv.style('z-index', '9999'); // Sørger for at canvaset ligger øverst
  img.resize(70, 70); // Endre størrelsen på bildet hvis nødvendig
  imageMode(CENTER); // Posisjoner bildet basert på senteret
  x = width / 2; // Startposisjon x
  y = height / 2; // Startposisjon y
  xspeed = 2; // Fart i x-retning
  yspeed = 3; // Fart i y-retning
}

function draw() {
  clear(); // Fjern bakgrunnen på hvert draw-loop for å opprettholde gjennomsiktighet
  
  // Tegn bildet på den nye posisjonen
  image(img, x, y);
  
  // Oppdater posisjonen til bildet
  x = x + xspeed;
  y = y + yspeed;
  
  // Sjekk grensene for å hoppe rundt på siden
  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }
}
