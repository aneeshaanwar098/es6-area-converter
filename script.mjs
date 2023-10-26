function convert(event){
    event.preventDefault();

    console.log("function is running")

    let marla = document.querySelector("#inputMarla").value;
    let squareFeet = marla * 272.25 ;

    console.log(marla)
    console.log(squareFeet)

    document.querySelector("#output").innerHTML = `${squareFeet} square feet`;
}