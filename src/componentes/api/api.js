export default function API(){
    //var prod = fetch('../../..//datab.json');

    fetch('./datab.json')
    .then(response => response.json())
    .then(data => console.log(data))

}