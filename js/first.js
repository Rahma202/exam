 let newItem=document.getElementById("newItem");
let addBtn=document.getElementById("addBtn");

let arrayList;
if(localStorage.getItem("item")==null){
    arrayList=[];
}
else{
    arrayList=JSON.parse(localStorage.getItem("item"))
    
}
function addItem(){
   let product={
        items:newItem.value
    }
    arrayList.push(product);
    localStorage.setItem("item",JSON.stringify(arrayList));
    displayItem();

}
function displayItem(){
  var cartona="";
    for(let i=0;i<arrayList.length;i++){
        cartona +=
        `<input class="form-control w-50  d-inline m-auto" type="text"  value="${arrayList[i].items}">
        <a class="btn btn-danger" onclick="deletItem(${i})">X</a>`
    }
 document.getElementById("complete").innerHTML=cartona;
}
$("#addBtn").click(
    function(){
       addItem();
        clear();
    }
)


function clear(){
    newItem.value="";
}

function deletItem(index){
    arrayList.splice(index,1);
    localStorage.setItem("item",JSON.stringify(arrayList));
    displayItem();
}

    function changeColr(){
        var x=Math.round(Math.random()*255);
        var y=Math.round(Math.random()*255);
        var z=Math.round(Math.random()*255);
          $(".two").css("backgroundColor",`rgb(${x},${y},${z})`)
        
        }
        $(".two").mousemove(
            function(){
                setInterval(changeColr,500);   
            }
        )
        
        let nameInput=document.getElementById("nameInput");
        let emailInput=document.getElementById("emailInput");
        let phoneInput=document.getElementById("phoneInput");
        let alertMassegeName=document.getElementById("alertMassegeName");
       let alertMassegeEmail=document.getElementById("alertMassegeEmail");
       let alertMassegeNumber=document.getElementById("alertMassegeNumber");
       nameInput.addEventListener("blur",testName);
       emailInput.addEventListener("blur",testEmail);
       phoneInput.addEventListener("blur",testNumber);
        function testName(){
            var regex=/^[A-Z][a-z]{2,8}$/;
            if(regex.test(nameInput.value)==true){
                nameInput.classList.add(`is-valid`);
                nameInput.classList.remove(`is-invalid`);
                alertMassegeName.classList.replace(`d-block`,'d-none');
            }
            else{
                nameInput.classList.add(`is-invalid`);
                nameInput.classList.remove(`is-valid`);
                alertMassegeName.classList.replace(`d-none`,'d-block');
    
            } 
        }
       
        function testEmail(){
            var regex=/^(\w{4,8})\s@gmail.com$/;
            if(regex.test(  emailInput.value)==true){
                emailInput.classList.add(`is-valid`);
                emailInput.classList.remove(`is-invalid`);
                alertMassegeEmail.classList.replace(`d-block`,'d-none');
            }else{
                emailInput.classList.add(`is-invalid`);
                emailInput.classList.remove(`is-valid`);
                alertMassegeEmail.classList.replace(`d-none`,'d-block');
    
            } 

        }

        function testNumber(){
            var regex=/^(002)?01[1,5,0,2][0-9]{8}$/;
            if(regex.test(phoneInput.value)==true){
                phoneInput.classList.add(`is-valid`);
                phoneInput.classList.remove(`is-invalid`);
                alertMassegeNumber.classList.replace(`d-block`,'d-none');
            }else{
                phoneInput.classList.add(`is-invalid`);
                phoneInput.classList.remove(`is-valid`);
                alertMassegeNumber.classList.replace(`d-none`,'d-block');
    
            } 

        }
    $("#colorR").hover(
        function(){
            $(".four").css("backgroundColor","#EC5036")
        }
    )
    $("#colorG").hover(
        function(){
            $(".four").css("backgroundColor","#75B304")
        }
    )
    $("#colorG").hover(
        function(){
            $(".four").css("backgroundColor","#75B304")
        }
    )
    $("#colorB").hover(
        function(){
            $(".four").css("backgroundColor","#063BBF")
        }
    )
             
       
   


