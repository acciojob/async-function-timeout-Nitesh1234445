//your JS code here. If required.
let text = document.getElementById('text');
let delay = document.getElementById('delay');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

async function promisefnc(delayTime, message){
	try{
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(message);
		},delayTime);
	})
  }catch(err){
		return err;
  }
}
btn.addEventListener("click" , async ()=> {
	let delayTime = Number(delay.value);
	let msg = text.value;
	let result = await promisefnc( delayTime, msg);
	output.textContent = result;
})


