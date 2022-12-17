const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const btn = document.querySelector("#btn")


btn.addEventListener("click", () => {
    const ortalamaBul = ort(input1.value , input2.value)
    if(!ortalamaBul){
        alert("notları tam gir baybe")
    }
    const harfBul = harf(ortalamaBul)
    alert(`notunuz : ${ortalamaBul} harf notunuz: ${harfBul}`)




})

const ort = (number1,number2 ) =>{
    if(!durum(number1) || !durum(number2)){
        return false;
    }
    let ortalama = Number(number1*0.4) + Number (number2*0.6)
    return ortalama;


}

const harf =(not) => {
    if(!durum(not)){
        return false;
    }

    let notDurumu;
    if(not >=90 && not<100){
        notDurumu = "A"
    }
    else if(not>= 60 && not<90){
        notDurumu = "b"
    }
    else{
        notDurumu = "f"
    }
    return notDurumu
 
}


const durum = (score)=>{
    return (score || score ===0) && !isNaN(score) && score<=100 && score>=0
    
}
