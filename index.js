let add = document.getElementById("add");
let plus = document.getElementById("plus");
let negative = document.getElementById("negative");
let iconcart = document.getElementById("iconcart");
let number = document.getElementById("number");
let note = document.getElementById("note");
let card = document.getElementById("cart");
let mainphoto = document.getElementById("mainphoto");
let h3 = document.getElementById("h3");
let main = document.getElementById("main");
let checkout = document.getElementById("checkout");
let list = document.getElementById("list");
let xx = document.getElementById("xx");
let links = document.getElementById("links");
let y = 0;
let x = 0;

/*plus--------------------------------------------------------------------------------------------------------------*/
function plu() {
  x = x + 1;

  number.innerHTML = `${x}`;
}
/*negative----------------------------------------------------------------------------------------------------------*/

function negativ() {
  if (x != 0) {
    x = x - 1;

    number.innerHTML = `${x}`;
  }
}
/*add--------------------------------------------------------------------------------------------------------------------*/
let c = 0;

function ad() {
  note.innerHTML = number.innerHTML;
  x = 0;
  n = number.innerHTML;
  if (note.innerHTML != 0) {
    card.innerHTML = `<h2>cart</h2>
  
    <div id="product">
    <img name="productimg" src="${main.src}" id="productimage" alt="">
    <h6>Fall Limited Edition Sneakers</h6>
    <p>$125 x ${n}</p><h3>$${125 * +n}</h3>
    
    <button onclick="checkou()" id="checkout" >check out</button>
    </div>
    
    `;
  }
  number.innerHTML = `0`;
  note.style.display = "inline";
  if (note.innerHTML == 0) {
    note.style.display = "none";
  } else if (note.innerHTML > 0) {
    note.innerHTML = n;
    n = note.innerHTML;
  }
}

/*note and cart display----------------------------------------------------------------------------------------------------------*/

let z = 0;
function displa() {
  z = z + 1;

  if (z % 2 == 0) {
    y = 0;
    note.style.display = "inlone";
    card.style.display = "none ";
  } else {
    y = 0;
    note.style.display = "none";
    card.style.display = "inline ";
  }
}

if (note.innerHTML == 0) {
  note.style.display = "none";
}
/*check out --------------------------------------------------------------------------------------------------------------------*/

function checkou() {
  card.innerHTML = `<h2>cart</h2>
<h3>your cart is empty</h3>`;
}

/*list show---------------------------------------------------------------------------------------------------------------*/
if (screen.width <= 378) {
  let l = 1;

  function listshow() {
    l = l + 1;

    if (l % 1 == 0) {
      list.style.display = "none";
      links.style.display = "inline-block";
    } else {
      list.style.display = "inline ";
      links.style.display = "none";
    }
  }
  function listhidden() {
    list.style.display = "inline ";
    links.style.display = "none";
  }
} else if (screen.width > 378) {
  list.style.display = "none";
  xx.style.display = "none";
}
