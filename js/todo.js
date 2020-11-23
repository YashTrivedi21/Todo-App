const unorderedList = $("ul")

unorderedList.on("click", "li", function () {
    $(this).toggleClass("done");
})
unorderedList.on("click", "span", function (event) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input").on("keypress", function (event) {
    if(event.which===13) {
        let inpText = $(this).val()
        $("ul").append("<li><span><i class='fa fa-trash'  aria-hidden='false'></i></span> " + inpText + "</li>")
        $(this).val("")
    }
})
$("#toggle-form").click(function(){
    $("input").fadeToggle();
})