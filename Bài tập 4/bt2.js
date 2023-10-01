// Tính Chu Vi
function tinhChuVi() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  var ketQuaChuVi = document.querySelector(".ket_qua_chu_vi");
  ketQuaChuVi = (chieuDai + chieuRong) * 2;
  console.log(ketQuaChuVi);
  document.getElementById("ket_qua_chu_vi").innerHTML =
    "Chu vi là " + ketQuaChuVi;
}

// Tính Diện Tích
function tinhDienTich() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieurong = document.getElementById("chieuRong").value;
  var ketQuaDienTich = document.querySelector("ket_qua_dien_tich");
  ketQuaDienTich = chieuDai * chieurong;
  console.log(
    "🚀 ~ file: bt2.js:6 ~ tinhDienTich ~ ketQuaDienTich:",
    ketQuaDienTich
  );
  document.getElementById("ket_qua_dien_tich").innerHTML =
    "Diện tích  là " + ketQuaDienTich;
}
