function btnTinhLuong() {
  var luongMotNgay = document.getElementById("luong_mot_ngay").value;
  var soNgayLam = document.getElementById("so_ngay_lam").value;
  var tinhLuong = luongMotNgay * soNgayLam;
  console.log(tinhLuong);
  document.getElementById("ket_qua").innerHTML = tinhLuong + " VND";
}
