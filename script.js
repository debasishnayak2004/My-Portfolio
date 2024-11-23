$(document).ready(function(){
    $("nav ul li a").click(function(){
        $(this).toggleClass("menu-active");
        $(this).parent().siblings().children().removeClass('menu-active');
    });
// mobile nav start
    $(".toggle-btn i").click(function(){
        $(".mobile-menu-box").css({"display": "block", "display": "flex"});
        $("nav").css("display", "none");
    });
    $(".toggle-close i").click(function(){
        $(".mobile-menu-box").css({"display": "none"});
        $("nav").css({"display": "block", "display": "flex"});
    });
    $(".mobile-menu ul li a").click(function(){
        $(".mobile-menu-box").css("display", "none");
        $("nav").css({"display": "block", "display": "flex"});
    });
    // mobile nav end
    

    // nav bar scroll 
    // $(window).on("scroll", function(){
    //     if($(window).scrollTop()){
    //         $("nav").addClass("scroll-nav");
    //         $(".menu-list ul li a").css("color", "black");
    //     }else{
    //         $("nav").removeClass("scroll-nav");
    //         $(".menu-list ul li a").css("color", "white")
    //     }
    // })
    // $(window).scrollTop(function(){
    //     $(".present-info-count").css("backgroundColor" ,"red")
    // })

    
})


// java scrpit auto play text
const typed = new Typed('.auto-play', {
    strings: ["Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

//   Message btn
let success = false;
document.getElementById('message-btn').onclick = function(event){
    event.preventDefault();
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    if(firstName == ""){
        document.getElementById("first-name-p").innerText = "*Please enter your first name.";
    }else{
        let regName = /[a-zA-Z]/;
                 var check = regName.test(firstName);
                 if(check == true){
                    document.getElementById("valid-first").innerText = "";
                 }else{
                    document.getElementById("valid-first").innerText = "its not a valid character.";
                 }
        document.getElementById("first-name-p").innerText = "";
        success = true;
    };

    if(lastName == ""){
        document.getElementById("last-name-p").innerText = "*Please enter your last name.";
    }else{
        let regLast = /[a-zA-Z]/;
                 var check = regLast.test(lastName);
                 if(check == true){
                    document.getElementById("valid-last").innerText = "";
                 }else{
                    document.getElementById("valid-last").innerText = "its not a valid character.";
                 }
        document.getElementById("last-name-p").innerText = "";
        success = true;
    };

    if(email == ""){
        document.getElementById("email-p").innerText = "*Please enter your email.";
    }else{
        let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let checkEmail = validEmail.test(email);
        if(checkEmail == true){
            document.getElementById("email-valid").innerText = "";
        }else{
            document.getElementById("email-valid").innerText = "its not a valid email.";
        }
        document.getElementById("email-p").innerText = "";
        success = true;
    };

    if(subject == ""){
        document.getElementById("subject-p").innerText = "*Please enter your subject.";
    }else{
        document.getElementById("subject-p").innerText = "";
        success = true;
    };

    if(message == ""){
        document.getElementById("messge-p").innerText = "*Please enter your message.";
    }else{
        document.getElementById("messge-p").innerText = "";
        success = true;
    };
    

}

// wow animation
var wow = new WOW(
    {
      boxClass:     'wow',     
      animateClass: 'animated', 
      offset:       0,          
      mobile:       true,       
      live:         true,       
      callback:     function(box) {
        
      },
      scrollContainer: null,
      resetAnimation: true 
    }
  );
  wow.init();

  

