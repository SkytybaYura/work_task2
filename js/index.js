// let dialog = document.querySelector('dialog');
//    document.querySelector('#openDialog').onclick = function() {
//     dialog.show(); 
//    }
//    document.querySelector('#closeDialog').onclick = function() {
//     dialog.close();
//    }



// $('.click-jq').click(() => {
//     $('p').toggle(1000);
// });  

(function($) {
$(function() {

	$('#up').click(function() {
		$('html, body').animate({scrollTop: 0},500);
		return false;
	})

})
})(jQuery) 

function ValidMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('clientemail').value;
    let valid = re.test(myMail);
    if (valid) output = 'E-mail введено правильно!';
    else output = 'E-mail  введено неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}

$(function($){
   $("#phone").mask("+38 (099) 999-9999");
});

 ! function(i) {
 let o, n;
 i(".title_block").on("click", function() {
 o = i(this).parents(".accordion_item"), n = o.find(".info"),
 o.hasClass("active_block") ? (o.removeClass("active_block"),
 n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
 o.siblings(".active_block").removeClass("active_block").children(
 ".info").stop(!0, !0).slideUp())
 })
 }(jQuery);

