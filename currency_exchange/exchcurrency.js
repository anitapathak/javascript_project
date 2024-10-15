const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  const dropdowns=document.querySelectorAll(".dropdown select");
  const btn=document.querySelector("form button");
  const fromcurr=document.querySelector(".from select");
  const tocurr=document.querySelector(".to select");
  const msg=document.querySelector(".msg");
  for(let select of dropdowns){
    for(currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(select.name==="from" && currcode==="USD"){
            newoption.selected="selected"
        }else if(select.name==="to" && currcode==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
  }
  const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
  };
  btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval===""||amtval<1){
        amtval=1;
        amount.value="1";
    }
    const URL=`${BASE_URL}/${fromcurr.value.toLowerCase}/${tocurr.value.toLowerCase}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[tocurr.value.toLowerCase()];
    let finalval=amtval*rate;
    msg.innerText=`${amtval} ${fromcurr.value}=${finalval} ${tocurr.value}`;
  });