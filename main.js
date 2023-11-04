document.getElementById("btnSubmit").onclick = function (event) {
  event.preventDefault();
  var name = document.getElementById("txtName").value;
  var price = document.getElementById("nPrice").value;
  price = Number(price);
  var childPrice = price / 2;
  var adultNumber = document.getElementById("nAdultNumber").value;
  adultNumber = Number(adultNumber);
  var childNumber = document.getElementById("nChildNumber").value;
  childNumber = Number(childNumber);
  var charity = document.getElementById("charity").value;

  var revenue = price * adultNumber + childPrice * childNumber;
  var charityMoney = revenue / Number(charity);
  console.log(name, revenue, charity);
  document.getElementById("nameResult").innerHTML = name;

  if (name == "" || price == 0) {
    document.querySelector(".danger").innerHTML =
      "Vui lòng nhập đầy đủ thông tin";
    document.querySelector(".showResult").classList.add("d-none");
  } else {
    document.querySelector(".danger").innerHTML = "";
    document.querySelector(".showResult").classList.remove("d-none");
    document.getElementById("nameResult").innerHTML = name;
    document.getElementById("numberResult").innerHTML =
      adultNumber + childNumber;
    document.getElementById("revenueResult").innerHTML = revenue;
    document.getElementById("charityPercent").innerHTML = charity + "%";
    document.getElementById("charityResult").innerHTML = charityMoney;
    document.getElementById("income").innerHTML = revenue - charityMoney;
  }
};
