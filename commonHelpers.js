import{a as b,S as R,i as d}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const H="43969100-31d832a553472532b672b1645",j="https://pixabay.com/api/",f=15;b.defaults.baseURL=j;const L=async(e,t=1)=>(await b.get("",{params:{key:H,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:f,page:t}})).data,S=e=>e.reduce((t,{tags:o,webformatURL:a,largeImageURL:s,likes:r,views:n,comments:q,downloads:B})=>t+`
			<li class="gallery-item item-gallery">
				<a class="item-gallery-link" href="${s}">
					<img class="item-gallery-img" src="${a}" alt="${o}">
				</a>
				<ul class="item-gallery-data">
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Likes</h2>
						<p class="item-gallery-counter">${r}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Views</h2>
						<p class="item-gallery-counter">${n}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Comments</h2>
						<p class="item-gallery-counter">${q}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Downloads</h2>
						<p class="item-gallery-counter">${B}</p>
					</li>
				</ul>
			</li>
		`,""),m=e=>{e.classList.add("is-hidden")},P=e=>{e.classList.remove("is-hidden")},v=e=>{e.classList.add("is-hidden")},w=e=>{e.classList.remove("is-hidden")},O=e=>{e.classList.add("is-disabled")},h=e=>{e.classList.remove("is-disabled")},y=document.querySelector(".js-gallery"),$=document.querySelector(".js-search-form"),i=document.querySelector(".js-loader"),c=document.querySelector(".js-search-form-submit-button"),l=document.querySelector(".js-load-more-button");let g="",u=1,p=0;const E=new R(".item-gallery-link",{captionsData:"alt",captionsDelay:250}),A=async e=>{e.preventDefault(),y.innerHTML="",u=1,v(l);const t=e.currentTarget;if(g=t.elements.searchword.value.trim(),g===""){d.error({message:"No images match your search. Please try again!",position:"topRight"}),t.reset();return}try{O(c),P(i);const{hits:o,totalHits:a}=await L(g,u);if(a===0){h(c),d.error({message:"No images match your search. Please try again!",position:"topRight"}),t.reset(),m(i);return}y.insertAdjacentHTML("beforeend",S(o)),E.refresh(),m(i),h(c),p=Math.ceil(a/f),p>1&&w(l)}catch{h(c),m(i),d.error({message:"Search params is not valid!",position:"topRight"}),t.reset();return}t.reset()};$.addEventListener("submit",A);const F=()=>{const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})},M=async e=>{try{v(l),P(i),u+=1;const{hits:t,totalHits:o}=await L(g,u);if(y.insertAdjacentHTML("beforeend",S(t)),E.refresh(),F(),m(i),p=Math.ceil(o/f),u<p)w(l);else{l.removeEventListener("click",M),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{h(c),m(i),d.error({message:"Search params is not valid!",position:"topRight"}),form.reset();return}};l.addEventListener("click",M);
//# sourceMappingURL=commonHelpers.js.map
