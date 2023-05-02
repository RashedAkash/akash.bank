document.getElementById('btn').addEventListener('click', function name(event) {
  const dNone = document.getElementById('bank-area');
  dNone.style.display = 'none';
  const dBlock = document.getElementById('transaction');
  dBlock.style.display = 'block';
  
})




//deposit button
// document.getElementById('addDeposit').addEventListener('click', function name(event) {
//  const addValue = document.getElementById('depositAmount').value;
//   const newValue = parseFloat(addValue);



//  updateSpan('currentAmount', newValue);
//   updateSpan('Balance', newValue);
  


//   document.getElementById('depositAmount').value = '';
  
  

  
// })

// function updateSpan(id,newValue,addNewWithdraw) {
// const addBalance = document.getElementById(id).innerText;
//   const newBalance = parseFloat(addBalance);
//   const totalBalance = newValue + newBalance;
//   document.getElementById(id).innerText = totalBalance;
  
// }

// withdraw button
// document.getElementById('withdrawButton').addEventListener('click',
//   function () {
//     const addWithdraw = document.getElementById('addWithdraw').value;
//     const addNewWithdraw = parseFloat(addWithdraw);

//     updateSpan('currentWithdraw', addNewWithdraw);
    
//     updateSpan('Balance', -1* addNewWithdraw);

    
    
//     document.getElementById('addWithdraw').value = '';




  
// })


// deposit button
document.getElementById('addDeposit').addEventListener('click', function () {
  const Value = document.getElementById('depositAmount').value;
  const nawValue = parseFloat(Value);
  
  changeSpan('currentAmount', nawValue);
   changeSpan('Balance', nawValue);

  document.getElementById('depositAmount').value = '';  

}
)
// withdraw button
document.getElementById('withdrawButton').addEventListener('click', function () {
  const withdraw = document.getElementById('addWithdraw').value;
  const nawWithdraw = parseFloat(withdraw);

  changeSpan('currentWithdraw', nawWithdraw);
  changeSpan('Balance', -1 * nawWithdraw);
  
  document.getElementById('addWithdraw').value = '';



})


function changeSpan(id,nawValue,nawWithdraw) {
  const addAmount = document.getElementById(id).innerText;
  const newAmount = parseFloat(addAmount);
  const totalAmount = nawValue + newAmount;
  document.getElementById(id).innerText = totalAmount;
}




//cal

