function btnDoiTien() {
  var nhapSoTien = document.getElementById("so_tien").value;
  var tinhTien = nhapSoTien * 23500;
  console.log(tinhTien);
  document.getElementById("ket_qua").innerHTML = tinhTien + " VND";
}
