$(function() {


    var couleurs = ["purple", "red", "green", "blue", "yellow", "orange", "black", "grey", "cyan", "blue-grey", "default"];
    $.each( couleurs, function( key, couleur ) {
        $('#demo').append("<a href=\"#\" class=\"copy-me\"><div class=\"col-xm-2 col-sm-2 col-md-2 col-lg-2 tag-"+couleur+" text-white\" id=\"tag-"+couleur+"\"><h4>"+couleur+"</h4></div></a>");
        for ( i = 1; i< 6; i++ ){
            $('#demo').append("<a href=\"#\" class=\"copy-me\"><div class=\"col-xm-2 col-sm-2 col-md-2 col-lg-2 tag-"+couleur+" lighter-"+i+" text-white\" id=\"tag-"+couleur+" lighter-"+i+"\"><h4>"+couleur+" lighter "+i+"</h4></div></a>");
        }
        $('#demo').append("<a href=\"#\" class=\"copy-me\"><div class=\"col-xm-2 col-sm-2 col-md-2 col-lg-2 tag-"+couleur+" text-white\" id=\"tag-"+couleur+"\"><h4>"+couleur+"</h4></div></a>");
        for ( i = 5; i> 0; i-- ){
            $('#demo').append("<a href=\"#\" class=\"copy-me\"><div class=\"col-xm-2 col-sm-2 col-md-2 col-lg-2 tag-"+couleur+" darker-"+i+" text-white\" id=\"tag-"+couleur+" darker-"+i+"\"><h4>"+couleur+" darker "+i+"</h4></div></a>");
        }

    });

    // Lors d'un clique sur une couleur
    $('.copy-me').on('click', function(){
        alert($(this).children().attr('id')+" !");
        copyToClipboard($(this).children().attr('id'));
    });

});

// fonction qui créé la copie
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(element).select();
  document.execCommand("copy");
  $temp.remove();

}
