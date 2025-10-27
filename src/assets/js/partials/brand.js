(function(){
  var root=document.getElementById('nb-countdown');
  if(root){
    var deadlineAttr=root.getAttribute('data-deadline');
    var end = deadlineAttr ? new Date(deadlineAttr) : new Date();
    if(isNaN(end.getTime())){
      end = new Date();
    }
    if(!deadlineAttr){
      end.setDate(end.getDate()+3);
      end.setHours(23,59,59,999);
    }
    function tick(){
      var diff=end - new Date();
      var vals={d:Math.max(0, Math.floor(diff/86400000)),h:Math.max(0, Math.floor((diff%86400000)/3600000)),m:Math.max(0, Math.floor((diff%3600000)/60000)),s:Math.max(0, Math.floor((diff%60000)/1000))};
      ['d','h','m','s'].forEach(function(k){ var el=root.querySelector('[data-nb="'+k+'"]'); if(el) el.textContent=(vals[k]+"").padStart(2,'0'); });
    }
    setInterval(tick,1000); tick();
  }
  var filters=document.querySelectorAll('[data-nb-filter]');
  filters.forEach(function(btn){ btn.addEventListener('click', function(){
    filters.forEach(function(b){ b.classList.remove('active-filter'); });
    btn.classList.add('active-filter');
  });});
})();

// Hook NeedsBoxes filters to Salla list when supported
(function(){var list=document.getElementById('nb-products-list'); if(!list) return; var sortMap={ pop:'popularity', priceAsc:'price-asc', priceDesc:'price-desc', new:'latest' }; var sortSel=document.getElementById('nb-sort'); function applySort(){ if(!sortSel) return; var v=sortMap[sortSel.value]||''; if(v){ list.setAttribute('sort', v); list.dispatchEvent(new CustomEvent('refresh',{bubbles:true})); } } if(sortSel){ sortSel.addEventListener('change', applySort); applySort(); } var min=document.getElementById('nb-price-min'); var max=document.getElementById('nb-price-max'); function applyPrice(){ if(min&&min.value) list.setAttribute('min-price', min.value); else list.removeAttribute('min-price'); if(max&&max.value) list.setAttribute('max-price', max.value); else list.removeAttribute('max-price'); list.dispatchEvent(new CustomEvent('refresh',{bubbles:true})); } if(min) min.addEventListener('change', applyPrice); if(max) max.addEventListener('change', applyPrice); document.querySelectorAll('[data-nb-filter]').forEach(function(btn){ btn.addEventListener('click', function(){ var cat=btn.getAttribute('data-nb-filter'); if(cat && cat!=='all'){ list.setAttribute('category', cat); } else { list.removeAttribute('category'); } list.dispatchEvent(new CustomEvent('refresh',{bubbles:true})); }); });})();
