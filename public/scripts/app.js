// IIFE --> Immediatley Invoked Function Expression

(function(){
    function Start(){
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();


onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

