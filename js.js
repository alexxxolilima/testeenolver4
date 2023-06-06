function sim(){
    alert("Você aceitou namorar comigo!");
 }
 function desviar(t){
    var btn = t;
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("Opa.Nâo foi dessa vez... ");
 }

 function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}
