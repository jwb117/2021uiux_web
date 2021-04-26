function findChecked(){
  // alert("확인");
  let found = null;
  const kcity = document.getElementsByName("city");
  for(let i=0; i<kcity.length; i++){
   if(kcity[i].checked == true){
     found=kcity[i];
   }
     }


   if(found != null)
   alert(found.value + "이 선택되어있습니다.");

     else
     alert("선택된 도시가 없습니다.");

}
