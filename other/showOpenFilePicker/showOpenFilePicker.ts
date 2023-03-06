;(  function(){
  const btn = document.querySelector('#btn') as HTMLButtonElement

  const filePicker= async()=>{
   const fileHandle = window.showOpenFilePicker()
   console.log(fileHandle);
  //  const file = await fileHandle.getFile()
   
  }
  btn.addEventListener('click',filePicker)
})()