

console.log('This is a promise');


let prom1 = new Promise((resolve,reject) => {
  let a = Math.random();
  if(a>0.5){
    reject("Man this is not done, the script should uninstall the project")
  }
  else{
    console.log('Fetching the data...')
    setTimeout(() => {
      console.log('Thank you for continuing')
      resolve("We are working")
    }, 2000);
  }
}).then((text,num)=> {
  console.log(text);
}).catch((err)=>{
  console.log(`Man we got an error ${err}`)
});