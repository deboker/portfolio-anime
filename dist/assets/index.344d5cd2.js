const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};a();let n=document.querySelector("#menu-icon"),s=document.querySelector(".navbar");n.onclick=()=>{n.classList.toggle("bx-x"),s.classList.toggle("active")};let d=document.querySelectorAll("section"),u=document.querySelectorAll("header nav a");window.onscroll=()=>{d.forEach(o=>{let i=window.scrollY,r=o.offsetTop-150,e=o.offsetHeight,t=o.getAttribute("id");i>=r&&i<r+e&&u.forEach(l=>{l.classList.remove("active"),document.querySelector("header nav a[href*="+t+"]").classList.add("active")})}),document.querySelector("header").classList.toggle("sticky",window.scrollY>100),n.classList.remove("bx-x"),s.classList.remove("active")};
