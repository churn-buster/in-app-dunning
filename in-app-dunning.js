churnMessaging = {
  // set vars here
  showMessage: false,
  buttonUrl: 'https://churnbuster.io/update',
  msgSeen: localStorage.getItem('chrnMsgSeen'),
  switchMsgAfter: 24, // hours
  style: 'bar', // modal|bar
  closeBtn: true,
  modal: {
    msg1: {
      text1: 'Hey!',
      text2: 'We\'ve had some trouble with your most recent payment. We\'ll keep trying. If you need to update your payment information, click the green button.',
      buttonText: 'Update Your Card',
      buttonTextcolor: '#fff',
      buttonColor: '#2ecc71'
    },
    msg2: {
      text1: 'Hey!',
      text2: 'We haven\'t been able to process your past-due balance, and your account is currently delinquent. Please update your payment information right away to avoid interruption to your service.',
      buttonText: 'Update Your Card',
      buttonTextcolor: '#fff',
      buttonColor: '#2ecc71'
    },
    overlayBg: true,
    position: 'center' // center|bottom-right|bottom-left|top-right|top-left
  },
  bar: {
    msg1: {
      text: 'We\'ve had some trouble with your most recent payment. If you need to update your payment information',
      buttonText: 'Do it'
    },
    msg2: {
      text: 'We haven\'t been able to process your past-due balance. Please update your payment information right away to avoid interruption.',
      buttonText: 'Update Your Card'
    },
    bgColor: '#fff',
    textColor: '#333',
    buttonBgColor: '#2ecc71',
    buttonTextcolor: '#fff',
    position: 'bottom' // top|bottom
  },

  check: function(){
    // check the variable and kick things off
    if(this.showMessage) {
      // get current timestamp
      var currentTimestamp = Math.floor(Date.now() / 1000);
      var spaceBetweenMessages = currentTimestamp - this.msgSeen;
      var switchAfter = this.switchMsgAfter * 3600;
      // check if msg_seen exists to determine which template we should display
      if (this.msgSeen && spaceBetweenMessages > switchAfter) {
        // saw first message & it's time for #2
        this.show(2);
      } else if (this.msgSeen) {
        // has seen the 1st message before but it\'s not time for message 2
        this.show(1);
      } else {
        // hasn't seen a message
        this.show(1);
        // set localstorage
        localStorage.setItem('chrnMsgSeen', Math.floor(Date.now() / 1000));
      }
    }
  },
  show: function(msgNum) {
    // create the message
    var ctaText = 'Get Started';
    var ctaBgColor = '#666';
    var ctaTextColor = '#fff';
    var msgNum = 'msg'+msgNum;
    var div = document.createElement('div');
    div.setAttribute('id', 'churn-message');
    document.body.appendChild(div);
    // place the template contents into the div
    var chrnMsgDiv = document.getElementById('churn-message');
    if (this.style == 'bar') {
      chrnMsgDiv.innerHTML = '<i class="churn-messaging-card"></i>'+this.bar[msgNum].text;
    } else {
      chrnMsgDiv.innerHTML = '<i class="churn-messaging-card"></i><h1>'+this.modal[msgNum].text1+'</h1><p>'+this.modal[msgNum].text2+'</p>';
    }
    // if style=bar set it up
    if (this.style == 'bar') {
      ctaText = this.bar[msgNum].buttonText;
      ctaBgColor = this.bar.buttonBgColor;
      ctaTextColor = this.bar.buttonTextcolor;
      div.setAttribute('class', 'churn-message-bar');
      // set background color
      div.style.backgroundColor = this.bar.bgColor;
      // set text color
      div.style.color = this.bar.textColor;
    } else {
      ctaText = this.modal[msgNum].buttonText;
      ctaBgColor = this.modal[msgNum].buttonBgColor;
      ctaTextColor = this.modal[msgNum].buttonTextcolor;
      // or if style=modal set it up
      if (this.modal.overlayBg == true) {
        // use bg overlay
        var div = document.createElement('div');
        div.setAttribute('id', 'churn-message-bg');
        document.body.appendChild(div);
      }
    }
    // see if we need to show the close button
    if (this.closeBtn == true) {
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
    cta.href = this.buttonUrl;
    var ctaText = document.createTextNode(ctaText);
    cta.appendChild(ctaText);
    cta.style.backgroundColor = ctaBgColor;
    cta.style.color = ctaTextColor;
    chrnMsgDiv.appendChild(cta);
    // display the message
    this.fadein(chrnMsgDiv);
  },
  fadein: function(el) {
    el.style.opacity = 0;
    el.style.display = 'block';

    // if it's a modal, position it before fading in
    if (this.style == 'modal') {
      if (this.modal.position == 'center') {
        winMiddle = window.innerHeight / 2;
        elMiddle = el.offsetHeight / 2;
        elHalfWidth = el.offsetWidth / 2;
        el.style.top = (winMiddle - elMiddle) + 'px';
        el.style.left = 'calc(50% - '+elHalfWidth+'px)';
      }
      if (this.modal.position == 'bottom-right') {
        el.style.bottom = '10px';
        el.style.right = '10px';
      }
      if (this.modal.position == 'bottom-left') {
        el.style.bottom = '10px';
        el.style.left = '10px';
      }
      if (this.modal.position == 'top-right') {
        el.style.top = '10px';
        el.style.right = '10px';
      }
      if (this.modal.position == 'top-left') {
        el.style.top = '10px';
        el.style.left = '10px';
      }
    } else {
      // position the bar
      el.style[this.bar.position] = 0;
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