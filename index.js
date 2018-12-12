
      
    var sunny= 'This building is W19. W19 is Endicott Building. This building was built in 2018. Weather was sunny and nice.';
            
    var snowing= 'This building is W19. W19 is Endicott Building. This building was built in 2018. Weather was snowing and cold.';
          
    var cloudy= 'This building is W19. W19 is Endicott Building. This building was built in 2018. Weather was cloudy and bad.';
            
      
    function changeImage(imageName)
      {
        //1. Find the sky image element (HTML).
        var myImg= document.getElementById("image-360");
      
        //2. Change the image src attribute.
        myImg.setAttribute( 'src' ,imageName);
        
        //3. Call the animation for fade in.
        myImg.emit('fade');
        
      }
      
    function showText(textContent)
      {
        //0.Find the textElement
        var textElement= document.getElementById("showText");
        
        //1.Hide the text.
        textElement.setAttribute("opacity", "0");
        
        //2.Update the 0text value.
        textElement.setAttribute("value", textContent);
        
        //3.Call the fade-in and lowering text animation.
        textElement.emit('move');
        textElement.emit('fade');
      }
    
    var animation1= "<a-animation attribute='rotation' dur='3000' "+
                    " fill='forwards' to='0 360 0' "+
                    " repeat='indefinite' easing='linear'></a-animation>"
    
    function addAnimation(el)
    {
      el.innerHTML= animation1;
    }
    
    function startAnimation(el)
    {
      el.emit("start");    
    }  

    

 

      

 

