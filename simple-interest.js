function welcome(){
    alert("welcome")
}

function result(){
    let interest = document.querySelector("#interest")
    let total = document.querySelector("#total")
    let amt = parseInt(document.querySelector("#amount").value)
    let rate = parseInt(document.querySelector("#rate").value)
    let time = parseInt(document.querySelector("#time").value)
    let answer = (amt*rate*time)/100
   let cumulative = answer + amt
   
  interest.innerHTML=(answer + " is the amount to be paid as  INTEREST");
  total.innerHTML=(cumulative + " is the TOTAL amount to be paid after " + time +"yrs");
}
