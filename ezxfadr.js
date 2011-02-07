var make_ezxfadr = function (delta, timeout, id) {
  var old_img = { style: { opacity: '1' }},
      new_img,
      ezfadr = function (id) {
    if (old_img.id === id) return; // do not crossfade the same img
    if (new_img) return; // do not fade if we're already fading...
    new_img = document.getElementById(id);
    (function rec () {
      var old_opacity = Number(old_img.style.opacity);
      var new_opacity = Number(new_img.style.opacity);
      old_img.style.opacity = Math.max(old_opacity - delta, 0);
      new_img.style.opacity = Math.min(new_opacity + delta, 1);
      if (new_opacity < 1 || old_opacity > 0) {
        setTimeout(rec, timeout);
      } else {              
        old_img = new_img;
        new_img = false;
      }
    })();
  };
  ezfadr(id); // fade-in first image
  return ezfadr;
};
