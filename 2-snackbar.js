import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form"),l=(e,s)=>new Promise((t,o)=>{setTimeout(()=>{s==="fulfilled"?t(e):o(e)},e)}),n=(e,s)=>{const t=s==="fulfilled"?`✅ Виконана обіцянка за ${e}ms`:`❌ Відхилена обіцянка за ${e}ms`,o=s==="fulfilled"?`Виконана обіцянка за ${e} ms`:`Відхилена обіцянка за ${e}ms`;console.log(t),s==="fulfilled"?i.success({message:o,position:"topRight"}):i.error({message:o,position:"topRight"})};r.addEventListener("submit",function(e){e.preventDefault();const s=new FormData(this),t=Number(s.get("delay")),o=s.get("state");if(isNaN(t)||t<0){i.error({message:"Будь ласка, введіть дійсну затримку",position:"topRight"});return}if(!["fulfilled","rejected"].includes(o)){i.error({message:'Стан повинен бути або "fulfilled", або "rejected"',position:"topRight"});return}l(t,o).then(()=>{n(t,o)}).catch(()=>{n(t,o)}),r.reset()},!1);
//# sourceMappingURL=2-snackbar.js.map
