var lista = $("#lista")
var checkbox = $(".incarichi li input")
var rimuovi = $(".incarichi li button")
var aggiungi = $("#aggiungi")


checkbox.click(function() {
  if ($(this).prop("checked") == true) {
    $(this).parent().addClass("spuntato")
  } else {
    $(this).parent().removeClass("spuntato")
  }
})

rimuovi.click(function() {
  $(this).parent().remove()
})

aggiungi.click(function() {

  var nuovoCompito = $("#nuovo-compito")
  var template = $(".template li").clone()

  template.prepend(nuovoCompito.val())
  lista.append(template)
  nuovoCompito.val("")
})
