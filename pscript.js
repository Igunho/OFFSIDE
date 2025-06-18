let iterations = {
    novidades: 0
}
let count = 0

$(document).ready(function() {
    $("#next").click(function() {
        const hidden = $("#next").siblings(".card:hidden")

        console.log(hidden)
        if(iterations.novidades < 4) {
            $(hidden[iterations.novidades]).show()
            $("#next").siblings(".card:visible:first").hide()
            iterations.novidades++
        }
    })
    $("#previous").click(function() {
        const hidden = $("#next").siblings(".card:hidden")

        console.log(hidden)
        if(iterations.novidades > 0) {
            $(hidden[iterations.novidades-1]).show()
            $("#next").siblings(".card:visible:last").hide()
            iterations.novidades--
        }
    })

    $(".carrinho").click(function() {
        count++
        $("#carrinho").text("🛒Carrinho " + count)
    })
})
