let product = ["iphone 13 Pro Max", "SamSung Galaxy 21 Ultra", "Vivo C15" , "Oppo K1"];
diplayListProduct()
// addroArray lấy dữ liệu từ ô đã nhập thêm vào đầu mảng
function addtoArray() {
  let data = document.getElementById("dataproduct").value;
  if (data == "") {
    alert("Bạn chưa nhập sản phẩm");
  } else {
    product.unshift(data);
    document.getElementById("dataproduct").value = "";
  }
  diplayListProduct();
  updateQuantityProduct();
}
// updateQuantityProduct cập nhật số lượng sản phẩm hiện tại(độ dài của mảng)
function updateQuantityProduct() {
  document.getElementById(
    "quantityproduct"
  ).value = `${product.length} Product`;
}
// diplayListProduct hiện thị danh sách sản phẩm
function diplayListProduct() {
  let showListProduct = `<table>`;
  for (let i = 0; i < product.length; i++) {
    showListProduct += ` 
             <tr>
                <td class="nameproduct"><input id="nameproduct${i}" type="text" value="${product[i]}" disabled ></td>
                <td><button class="editbtn" id="${i}" onclick="editProduct(${i})" >Edit</button></td>
                <td><button class="delebtn" id="${i}" onclick="deleProduct(${i})" >Delete</button></td>
             </tr> `;
  }
  showListProduct += "</table>";
  document.getElementById("listproduct").innerHTML = showListProduct;
}
//  Thay đổi thông tin sản phẩm
function editProduct(x) {
  var rename = prompt("Thay đổi tên sản phẩm: ");
  if (rename == "" || rename == null) {
    alert("Bạn chưa nhập thông tin");
  } else {
    product[x] = rename;
    diplayListProduct();
  }
}

// Xóa sản phẩm
function deleProduct(x) {
  var comfirm = confirm("Bạn có muốn xóa sản phẩm này!");
  if (comfirm == true) {
    product.splice(x, 1);
    diplayListProduct();
    updateQuantityProduct();
  }
}
