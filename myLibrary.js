function bouncing(object1,object2){
    if(object1.x-object2.x<=object1.width/2+object2.width/2 &&
      object2.x-object1.x<=object1.width/2+object2.width/2 && 
      object1.y-object2.y<=object1.height/2+object2.height/2 &&
      object2.y-object1.y<+object1.height/2+object2.height/2){
        //object1.shapeColor="red"
        //object2.shapeColor=("red");
        object1.velocityX=object1.velocityX*-1;
        object2.velocityX=object2.velocityX*-1;
  
      }
      else{
       // object1.shapeColor="green";
        //object2.shapeColor=("green");
        object1.velocityX=object1.velocityX*1;
        object2.velocityX=object2.velocityX*1;
      }
  
  
  }

  function touching(object1,object2){//function touching takes 2 objects as arguments. arguments are values that a function can take. 
    if(object1.x-object2.x<=object1.width/2+object2.width/2 &&
      object2.x-object1.x<=object1.width/2+object2.width/2 && 
      object1.y-object2.y<=object1.height/2+object2.height/2 &&
      object2.y-object1.y<+object1.height/2+object2.height/2){
      return true;
      }
      else{
      return false;
      }
  
  
  }