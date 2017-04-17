churnMessaging = {
  // set vars here
  show_message: false,
  template_dir: 'templates',
  card_update_url: 'https://churnbuster.io/update',
  msg_seen: localStorage.getItem('chrnMsgSeen'),
  params: {
    overlay_bg: true,
    close_btn: true,
    position: 'center' // center, bottom-right, bottom-left, top-right, top-left
  },

  check: function(){
    // check the variable and kick things off
    if(this.show_message) {
      // check if msg_seen exists to determine which template we should display
      if (this.msg_seen) { // saw first message
        this.show('churn-message-2');
      } else {
        // hasn't seen a message
        this.show('churn-message-1');
        // set localstorage
        localStorage.setItem('chrnMsgSeen', 1);
      }
    }
  },
  show: function(template) {
    var that = this;
    // load the template & place it into the messages
    var req = new XMLHttpRequest();
    req.onload = function() {
      // create a message div
      var div = document.createElement('div');
      div.setAttribute('id', 'churn-message');
      document.body.appendChild(div);
      // place the template contents into the div
      var chrnMsgDiv = document.getElementById('churn-message');
      chrnMsgDiv.innerHTML = this.responseText;
      // set up the message area
      if (that.params.overlay_bg == true) {
        // use bg overlay
        var div = document.createElement('div');
        div.setAttribute('id', 'churn-message-bg');
        document.body.appendChild(div);
      }
      if (that.params.close_btn == true) {
        // add the close button
        var div = document.createElement('div');
        div.setAttribute('id', 'churn-message-close');
        chrnMsgDiv.appendChild(div);
        document.getElementById('churn-message-close').onclick = function() {
          // fadout the bg and message
          churnMessaging.fadeout(document.getElementById('churn-message'));
          churnMessaging.fadeout(document.getElementById('churn-message-bg'));
        };
      }
      // add the cta
      var cta = document.createElement('a');
      cta.setAttribute('id', 'churn-messaging-update-url');
      cta.href = that.card_update_url;
      var ctaText = document.createTextNode("Update Your Card");
      cta.appendChild(ctaText);
      chrnMsgDiv.appendChild(cta);
      // display the message
      that.fadein(chrnMsgDiv);
    }
    req.open('get', this.template_dir+'/'+template+'.tmpl', true);
    req.send();
  },
  fadein: function(el) {
    var that = this;
    el.style.opacity = 0;
    el.style.display = 'block';

    // position the overlay before fading in
    if (that.params.position == 'center') {
      winMiddle = window.innerHeight / 2;
      elMiddle = el.offsetHeight / 2;
      elHalfWidth = el.offsetWidth / 2;
      el.style.top = (winMiddle - elMiddle) + 'px';
      el.style.left = 'calc(50% - '+elHalfWidth+'px)';
    }
    if (that.params.position == 'bottom-right') {
      el.style.bottom = '10px';
      el.style.right = '10px';
    }
    if (that.params.position == 'bottom-left') {
      el.style.bottom = '10px';
      el.style.left = '10px';
    }
    if (that.params.position == 'top-right') {
      el.style.top = '10px';
      el.style.right = '10px';
    }
    if (that.params.position == 'top-left') {
      el.style.top = '10px';
      el.style.left = '10px';
    }
    // do the fade in
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
      last = +new Date();

      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  },
  fadeout: function(el) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
      if (op <= 0.1){
        clearInterval(timer);
        el.style.display = 'none';
      }
      el.style.opacity = op;
      el.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
    }, 10);
  }
}