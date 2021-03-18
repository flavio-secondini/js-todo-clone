var lista = $("#lista")
var aggiungi = $("#aggiungi")


$(document).on("click", ".incarichi li input", function() {
  if ($(this).prop("checked") == true) {
    $(this).parent().addClass("spuntato")
  } else {
    $(this).parent().removeClass("spuntato")
  }
})

$(document).on("click", ".incarichi li button", function () {
  $(this).parent().remove()
})

aggiungi.click(function() {

  var nuovoCompito = $("#nuovo-compito")
  var template = $(".template li").clone()

  if (nuovoCompito.val().length > 0) {
    template.children("span").prepend(nuovoCompito.val())
    lista.append(template)
    nuovoCompito.val("")
  }
})
