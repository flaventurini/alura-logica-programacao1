//Arquivo JS usado no p5.js

//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 15;
let raioBolinha = diametroBolinha / 2;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raioBolinha > width || xBolinha - raioBolinha <0) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raioBolinha  > height || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

/* function verificaColisaoRaquete() {
  if (xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete) {
    velocidadeXBolinha *= -1;
  }
} */

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}