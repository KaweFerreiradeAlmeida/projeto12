var boy,boy_runnig;
var path,pathImg;
var i;
var leftBoundary,invisibleGround ;
var rightBoundary,invisibleGrounD;
function preload(){
 pathImg = loadImage("path.png"); //loadImage (carregarImagem) da pista)
  boy_runnig = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");//loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  
  createCanvas(400,400);
   path =createSprite(200,160,20,50); //crie um sprite para a pista 
  path.addImage(pathImg)//adicione uma imagem para a pista
 path.velocityY = 5//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=0.8;

boy = createSprite(200,190,20,50);//crie um sprite de menino
boy.addAnimation("correndo",boy_runnig);//adicione uma animação de corrida para ele
boy.scale=0.70;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
invisibleGround = createSprite(0,0,400,10);
  invisibleGround.visible = false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
invisibleGrounD = createSprite(410,0,400,10);
  invisibleGrounD.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.bounceOff(leftBoundary);
  boy.bounceOff(rightBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
