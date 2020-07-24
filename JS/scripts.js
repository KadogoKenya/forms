

// function getStoryLines(){

// }

const getStoryLines = () => {
    let person1 = $("#person1").val();
    let person2 = $("#person2").val();
    let animal=$("animal").val();
    let verb=$("verb").val();
    let exclamation=$("exclamation").val();
    let noun=$("noun").val();

    $(".person1").text(person1)

    $(".person2").text(person2)
    $(".animal").text(animal)
    $(".verb").text(verb)
    $(".exclamation").text(exclamatiom)
    $(".noun").text(noun)

    $("#story").show()
}
$("#subb").click(event => {

    event.preventDefault()
    let person1 = $("#person1").val();
    
    let person2 = $("#person2").val();

    let animal = $("#animal").val();
    let verb=$("#verb").val();
    let exclamation=$("#exclamation").val();
    let noun=$("#noun").val();

    $(".person1").text(person1)

    $(".person2").text(person2)

    $(".animal").text(animal)
    $(".verb").text(verb)
    $(".exclamation").text(exclamation)
    $(".noun").text(noun)

    $("#story").show()
   })



  