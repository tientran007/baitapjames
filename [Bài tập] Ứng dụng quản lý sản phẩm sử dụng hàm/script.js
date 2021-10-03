let product = [];
function start() {
  init();
  diplayListProduct();
  updateQuantityProduct();
}
start();

function init() {
  if (getLocalStorage("strorageProduct") == null) {
    product = [
      "iphone 13 Pro Max",
      "SamSung Galaxy 21 Ultra",
      "Vivo C15",
      "Oppo K1",
    ];
    saveLocalStorage("strorageProduct", product);
  } else {
    product = getLocalStorage("strorageProduct");
  }
}

function getLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function saveLocalStorage(key, datas) {
  window.localStorage.setItem(key, JSON.stringify(datas));
}

// addroArray lấy dữ liệu từ ô đã nhập thêm vào đầu mảng
function addtoArray() {
  let data = document.getElementById("dataproduct").value;
  let index = product.indexOf(data);
  if (data == "") {
    alert("Bạn chưa nhập sản phẩm");
  } else {
    if (index == -1) {
      product.unshift(data);
      saveLocalStorage("strorageProduct", product);
      document.getElementById("dataproduct").value = "";
    } else {
      alert("Sản phẩm đã được thêm vào giỏ hàng!");
      document.getElementById("dataproduct").value = "";
    }
  }
  start();
}

// updateQuantityProduct cập nhật số lượng sản phẩm hiện tại(độ dài của mảng)
function updateQuantityProduct() {
  document.getElementById(
    "quantityproduct"
  ).value = `${product.length} Product`;
}

// diplayListProduct hiện thị danh sách sản phẩm
function diplayListProduct() {
  let showListProduct = `<table  cellspacing= "0">`;
  for (let i = 0; i < product.length; i++) {
    showListProduct += ` 
             <tr class="trproduct" id="tr_${i}">
                <td class="nameproduct"  id="nameproduct${i}"> ${product[i]} </td>
                <td>
                <button  id="edit${i}" onclick="editProduct(${i})" >Edit</button>
                <button  id="Update${i}" class="d_none" onclick="updateproduct(${i})" >Update</button>
                <button  id="Cancel${i}" class="d_none" onclick="reset(${i})" >Cancel</button>
                <button  id="dele${i}" onclick="deleProduct(${i})" >Delete</button>
                </td>
             </tr> `;
  }
  showListProduct += "</table>";
  document.getElementById("listproduct").innerHTML = showListProduct;
}

//  Thay đổi thông tin sản phẩm
function editProduct(x) {
  let tr = document.getElementById(`tr_${x}`);
  tr.children[0].innerHTML = `<input type="text" id="ip_${x}" value = "${product[x]}">`;
  tr.children[1].children[0].classList.add("d_none");
  tr.children[1].children[1].classList.remove("d_none");
  tr.children[1].children[2].classList.remove("d_none");
  tr.children[1].children[3].classList.add("d_none");
}

function updateproduct(x) {
  let newproductname = document.getElementById(`ip_${x}`).value;
  let index = product.indexOf(newproductname);
  if (newproductname == "" || newproductname == null) {
    alert("Bạn chưa nhập thông tin");
  } else {
    if (index == -1 || newproductname == product[x]) {
      product[x] = newproductname;
    saveLocalStorage("strorageProduct",product);
      start();
      reset(x);
    } else {
      alert("Sản phầm này đã được thêm vào giỏ hàng");
    }
  }
}
function reset(x) {
  let tr = document.getElementById(`tr_${x}`);
  tr.children[0].innerHTML = `${product[x]}`;
  tr.children[1].children[0].classList.remove("d_none");
  tr.children[1].children[1].classList.add("d_none");
  tr.children[1].children[2].classList.add("d_none");
  tr.children[1].children[3].classList.remove("d_none");
}
// Xóa sản phẩm
function deleProduct(x) {
  let comfirm = confirm("Bạn có muốn xóa sản phẩm này!");
  if (comfirm == true) {
    product.splice(x, 1);
    saveLocalStorage("strorageProduct",product);
    start();
  }
}
