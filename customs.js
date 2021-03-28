document.body.addEventListener('keydown', moveBlock);
var block = document.querySelector('#blueRect');

var clientX = document.documentElement.clientWidth;
var clientY = document.documentElement.clientHeight;   
console.log(clientX);  
console.log(clientY);

function moveBlock(event) {
console.log('moveBlock--> ', event.key);
var blockStyle = block.getAttribute('style');
console.log('blockStyle--> ', blockStyle);

var horPos = parseInt(block.style.marginLeft);
var vertPos = parseInt(block.style.marginTop);
var blockW = parseInt(block.style.width);
var blockH = parseInt(block.style.height);    
console.log(horPos);
console.log(vertPos);
console.log(blockH);
console.log(blockW);
  
    
    
switch(event.key){
        
case 'ArrowRight' :
  if (horPos < document.documentElement.clientWidth - blockW) {
   block.style.marginLeft = horPos + blockW + 'px';
  }    
break;
  
case 'ArrowLeft' :
  if (horPos > 0) {
   block.style.marginLeft = horPos - blockW + 'px';}      
break;

case 'ArrowUp' :
  if (vertPos > 0) {
   block.style.marginTop = vertPos - blockH + 'px';}
break;

case 'ArrowDown' :
  if (vertPos < document.documentElement.clientHeight - blockH) {
   block.style.marginTop = vertPos + blockH + 'px';}
break;

} 
    
    
}



