$(".whack1").click(function(){
    $(".mole1").hide();
     $(".thirdMole").show();
    $(".moleTwo").show();
});
    
$(".whack2").click(function(){
    $(".moleTwo").hide();
     $(".mole1").show();
    $(".thirdMole").show();
});
    
$(".whack3").click(function(){
    $(".thirdMole").hide();
    $(".mole1").show();
    $(".moleTwo").show();
});
    
$(".reset").click(function(){
    $("img").show();
});

$(".ye").click(function(){
    $(".whack1").hide();
    });
    
 $(".empty").click(function(){
    $(".game").hide();
    });   