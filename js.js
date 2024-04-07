fetch("https://raw.githubusercontent.com/nelsenpro/toko/main/contoh.json").then(e=>e.json()).then(e=>{let t=e,n=0;function l(e){return t.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())||t.category.toLowerCase().includes(e.toLowerCase())||t.location.toLowerCase().includes(e.toLowerCase()))}function a(e){let t=document.getElementById("search-input").value.trim(),n=RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi");return e.replace(n,e=>`<span class="highlight">${e}</span>`)}function r(e){let t=document.getElementById("result-container");if(t.innerHTML="",0===e.length)t.innerHTML="Tidak ada hasil yang ditemukan";else{let l=Math.min(n+10,e.length);for(let r=n;r<l;r++){let i=e[r],s=document.createElement("div");s.classList.add("store"),s.innerHTML=`<h3>${a(i.name)}</h3>
                <p>
                <strong>Kategori:</strong> ${a(i.category)}
                </p>
                <p>
                <strong>Lokasi:</strong> ${a(i.location)}
                </p>

                <p>
                <strong>Deskripsi:</strong> ${a(i.description)}
                </p>
                <p>
                <strong>Jam Kerja:</strong> ${a(i.operational_hours)}
                </p>

                <p>
                <strong>Website:</strong> ${a(i.website)}
                </p>
                <p><strong>Telepon:</strong> <a href="tel:${i.telepon}">${a(i.telepon)}</a></p>`,t.appendChild(s)}}""===document.getElementById("search-input").value&&(t.innerHTML=""),t.style.display=e.length>0?"block":"none"}document.getElementById("search-input").addEventListener("keyup",()=>{let e=document.getElementById("search-input").value,t=l(e);n=0,r(t)}),document.getElementById("next-button").addEventListener("click",()=>{let e=document.getElementById("search-input").value,t=l(e);n+=10,r(t)}),document.getElementById("prev-button").addEventListener("click",()=>{let e=document.getElementById("search-input").value,t=l(e);n=Math.max(0,n-10),r(t)})}).catch(e=>{console.error("Error fetching data:",e),document.getElementById("result-container").innerHTML="Terjadi kesalahan saat mengambil data toko. Silakan coba lagi."}),document.getElementById("search-input").addEventListener("input",function(){let e=this.value.trim(),t=document.getElementById("result-container");""===e?t.style.display="none":t.style.display="block"}),document.getElementById("next-button").addEventListener("click",function(){let e=document.getElementById("search-input").value.trim(),t=document.getElementById("result-container");""===e?t.style.display="none":t.style.display="block"}),document.getElementById("prev-button").addEventListener("click",function(){let e=document.getElementById("search-input").value.trim(),t=document.getElementById("result-container");""===e?t.style.display="none":t.style.display="block"});