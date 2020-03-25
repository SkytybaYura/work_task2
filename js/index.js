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

