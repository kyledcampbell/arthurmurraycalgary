const submitButton=document.getElementById("submit"),inputs=document.querySelectorAll("#contactForm input"),theform=document.getElementById("contactForm");function addDirtyListeners(){inputs.forEach((function(t){t.addEventListener("input",dirtyInput,!1),t.addEventListener("blur",dirtyInput,!1)}))}function dirtyInput(t){elem=t.currentTarget,(elem.nodeName="INPUT")&&elem.classList.add("dirty")}window.addEventListener("load",(t=>{addDirtyListeners(),submitButton.setAttribute("disabled","disabled"),submitButton.style.cursor="not-allowed"}),!1),inputs.forEach((function(t){t.addEventListener("keyup",(t=>{const e=t.currentTarget.value;submitButton.disabled=!1,submitButton.style.cursor="pointer",""===e&&(submitButton.disabled=!0,submitButton.style.cursor="not-allowed")}),!1)}));const newStudentOffer=document.querySelector("#newStudentOffer"),calendarLink=document.querySelector("#calendarLink"),navToggle=document.querySelector("#navToggle");newStudentOffer.addEventListener("click",(function(){navToggle.checked=!1}),!1),calendarLink.addEventListener("click",(function(){navToggle.checked=!1}),!1),document.querySelectorAll("form").forEach((t=>{t.addEventListener("submit",(e=>{t.classList.contains("is-submitting")&&e.preventDefault(),t.classList.add("is-submitting")}))}));