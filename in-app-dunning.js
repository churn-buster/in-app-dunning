InAppDunning = {
  // set vars here
  modal: {
    msg: {
      text1: 'Hey!',
      text2: 'We\'ve had some trouble with your most recent payment. We\'ll keep trying. If you need to update your payment information, click the green button.',
      buttonText: 'Update Your Card',
      buttonTextcolor: '#fff',
      buttonColor: '#2ecc71'
    }
  },
  bar: {
    msg: {
      text: 'We\'ve had some trouble with your most recent payment. If you need to update your payment information',
      buttonText: 'Do it'
    }
  },
  show: function(opts) {
    if (opts.show === true) {
      // create the message
      var ctaText = 'Get Started';
      var ctaBgColor = '#666';
      var ctaTextColor = '#fff';
      var div = document.createElement('div');
      div.setAttribute('id', 'in-app-message');
      document.body.appendChild(div);
      // place the template contents into the div
      var chrnMsgDiv = document.getElementById('in-app-message');
      if (opts.style == 'bar') {
        chrnMsgDiv.innerHTML = '<i class="in-app-messaging-card"></i>'+this.bar.msg.text;
      } else {
        chrnMsgDiv.innerHTML = '<i class="in-app-messaging-card"></i><h1>'+this.modal.msg.text1+'</h1><p>'+this.modal.msg.text2+'</p>';
      }
      // if style=bar set it up
      if (opts.style && opts.style == 'bar') {
        ctaText = this.bar.msg.buttonText;
        ctaBgColor = opts.button.bgColor;
        ctaTextColor = opts.button.color;
        div.setAttribute('class', 'in-app-message-bar');
        // set background color
        div.style.backgroundColor = opts.bar.bgColor;
        // set text color
        div.style.color = opts.bar.color;
        chrnMsgDiv.style[opts.position] = 0;
      } else {
        ctaText = this.modal.msg.buttonText;
        if (opts.button && opts.button.bgColor) {
          ctaBgColor = opts.button.bgColor;
        }
        if (opts.button && opts.button.color) {
          ctaTextColor = opts.button.color;
        }
        // or if style=modal set it up
        if (opts.modal && opts.modal.overlay && opts.modal.overlay == true) {
          // use bg overlay
          var bgDiv = document.createElement('div');
          bgDiv.setAttribute('id', 'in-app-message-bg');
          document.body.appendChild(bgDiv);
        }
        // position the modal
        if (opts.position == 'center' || !opts.position) {
          // need to display to be visible to get values so set the visibility instead
          chrnMsgDiv.style.visibility = "hidden";
          chrnMsgDiv.style.display = "block";
          winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          winMiddle = winHeight / 2;
          elMiddle = chrnMsgDiv.offsetHeight / 2;
          elHalfWidth = chrnMsgDiv.offsetWidth / 2;
          chrnMsgDiv.style.top = (winMiddle - elMiddle) + 'px';
          chrnMsgDiv.style.left = 'calc(50% - '+elHalfWidth+'px)';
          // reset the display/visibility
          chrnMsgDiv.style.display = "none";
          chrnMsgDiv.style.visibility = "visible";
        }
        if (opts.position == 'bottom-right') {
          chrnMsgDiv.style.bottom = '10px';
          chrnMsgDiv.style.right = '10px';
        }
        if (opts.position == 'bottom-left') {
          chrnMsgDiv.style.bottom = '10px';
          chrnMsgDiv.style.left = '10px';
        }
        if (opts.position == 'top-right') {
          chrnMsgDiv.style.top = '10px';
          chrnMsgDiv.style.right = '10px';
        }
        if (opts.position == 'top-left') {
          chrnMsgDiv.style.top = '10px';
          chrnMsgDiv.style.left = '10px';
        }
      }
      // see if we need to show the close button
      if (opts.close == true) {
        // add the close button
        var div = document.createElement('div');
        div.setAttribute('id', 'in-app-message-close');
        chrnMsgDiv.appendChild(div);
        document.getElementById('in-app-message-close').onclick = function() {
          // fadout the bg and message
          InAppDunning.fadeout(document.getElementById('in-app-message'));
          InAppDunning.fadeout(document.getElementById('in-app-message-bg'));
        };
      }
      // add the cta
      var cta = document.createElement('a');
      cta.setAttribute('id', 'in-app-messaging-update-url');
      cta.href = this.buttonUrl;
      var ctaText = document.createTextNode(ctaText);
      cta.appendChild(ctaText);
      cta.style.backgroundColor = ctaBgColor;
      cta.style.color = ctaTextColor;
      chrnMsgDiv.appendChild(cta);
      // display the message
      this.fadein(chrnMsgDiv);
    }
  },
  fadein: function(el) {
    el.style.opacity = 0;
    el.style.display = 'block';
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