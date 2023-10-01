function tinhTrungBinh() {
  var soThu1 = document.getElementById("so1").value;
  var soThu2 = document.getElementById("so2").value;
  var soThu3 = document.getElementById("so3").value;
  var soThu4 = document.getElementById("so4").value;
  var soThu5 = document.getElementById("so5").value;
  var tinhTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  console.log(tinhTB);
  var ketQuaTB = (document.getElementById("ket_qua_trung_binh").innerHTML =
    "Giá trị trung bình là :  " + tinhTB);
}
