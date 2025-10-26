(function(){
  function tick(){
    var end=new Date(); end.setHours(23,59,59,999);
    var diff=end - new Date();
    var vals={d:Math.max(0, Math.floor(diff/86400000)),h:Math.max(0, Math.floor((diff%86400000)/3600000)),m:Math.max(0, Math.floor((diff%3600000)/60000)),s:Math.max(0, Math.floor((diff%60000)/1000))};
    var root=document.getElementById('nb-countdown'); if(!root) return;
    ['d','h','m','s'].forEach(function(k){ var el=root.querySelector('[data-nb="'+k+'"]'); if(el) el.textContent=(vals[k]+"").padStart(2,'0'); });
  }
  setInterval(tick,1000); tick();
  var filters=document.querySelectorAll('[data-nb-filter]');
  filters.forEach(function(btn){ btn.addEventListener('click', function(){
    filters.forEach(function(b){ b.classList.remove('active-filter'); });
    btn.classList.add('active-filter');
  });});
})();
