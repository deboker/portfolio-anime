(()=>{let e=document.querySelector("#menu-icon"),t=document.querySelector(".navbar");e.onclick=()=>{e.classList.toggle("bx-x"),t.classList.toggle("active")};let c=document.querySelectorAll("section"),o=document.querySelectorAll("header nav a");window.onscroll=()=>{c.forEach((e=>{let t=window.scrollY,c=e.offsetTop-150,l=e.offsetHeight,s=e.getAttribute("id");t>=c&&t<c+l&&o.forEach((e=>{e.classList.remove("active"),document.querySelector("header nav a[href*="+s+"]").classList.add("active")}))})),document.querySelector("header").classList.toggle("sticky",window.scrollY>100),e.classList.remove("bx-x"),t.classList.remove("active")}})();