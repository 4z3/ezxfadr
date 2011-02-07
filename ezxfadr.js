/*!
 * ezxfadr v0.0
 *  Copyright 2011, tv
 *  Released under the MIT License.
 *  More information: https://github.com/4z3/ezxfadr
 */
var make_ezxfadr = function (delta, timeout, id) {
  var old_img = { style: { opacity: '1' }},
      new_img,
      ezxfadr = function (id) {
    if (old_img.id === id) return; // do not crossfade the same img
    if (new_img) return; // do not fade if we're already fading...
    new_img = document.getElementById(id);
    (function rec () {
      var next_old_opacity = Math.max(Number(old_img.style.opacity) - delta, 0);
      var next_new_opacity = Math.min(Number(new_img.style.opacity) + delta, 1);
      old_img.style.opacity = next_old_opacity;
      new_img.style.opacity = next_new_opacity;
      if (next_new_opacity < 1) {
        setTimeout(rec, timeout);
      } else {              
        old_img.style.opacity = 0; // just in case we're out of sync...
        old_img = new_img;
        new_img = false;
      }
    })();
  };
  ezxfadr(id); // fade-in first image
  return ezxfadr;
};
