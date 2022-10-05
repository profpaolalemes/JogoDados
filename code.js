onEvent("btao1", "click", function( ) {
  var numero1 = randomNumber(1, 6);
  var numero2 = randomNumber(1, 6);
  setNumber("etq_num1", numero1);
  if (getNumber("etq_num1") == 1) {
    setImageURL("imagem1", "assets/1.PNG");
  } else if ((getNumber("etq_num1") == 2)) {
    setImageURL("imagem1", "assets/2.PNG");
  } else if ((getNumber("etq_num1") == 3)) {
    setImageURL("imagem1", "assets/3.PNG");
  } else if ((getNumber("etq_num1") == 4)) {
    setImageURL("imagem1", "assets/4.PNG");
  } else if ((getNumber("etq_num1") == 5)) {
    setImageURL("imagem1", "assets/5.PNG");
  } else if ((getNumber("etq_num1") == 6)) {
    setImageURL("imagem1", "assets/6.PNG");
  }
  setNumber("etq_num2", numero2);
  if (getNumber("etq_num2") == 1) {
    setImageURL("imagem2", "assets/1.PNG");
  } else if ((getNumber("etq_num2") == 2)) {
    setImageURL("imagem2", "assets/2.PNG");
  } else if ((getNumber("etq_num2") == 3)) {
    setImageURL("imagem2", "assets/3.PNG");
  } else if ((getNumber("etq_num2") == 4)) {
    setImageURL("imagem2", "assets/4.PNG");
  } else if ((getNumber("etq_num2") == 5)) {
    setImageURL("imagem2", "assets/5.PNG");
  } else if ((getNumber("etq_num2") == 6)) {
    setImageURL("imagem2", "assets/6.PNG");
  }
  var varTotal = numero1 + numero2;
  setNumber("etq_total_num", varTotal);
});
