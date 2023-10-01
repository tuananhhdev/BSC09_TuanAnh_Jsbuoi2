// function test() {
//   let str = "12";
//   let res = [];
//   for (let i = 0, len = str.length; i < len; i++) {
//     res.push(+str.charAt(i));

//   }
//   console.log(res);
// }
// test();
function test() {
  // var string = "83";
  var nhap2So = document.getElementById("nhap_2_so").value;
  var count = 0;
  var list = [];
  for (var i = 0; i < nhap2So.length; i++) {
    const num1 = Number(nhap2So.charAt(i));
    list.push(num1);
    count += num1;
  }

  console.log(list, count);
  var ketQua = (document.querySelector(".ket_qua").innerHTML = count);
}
test();
