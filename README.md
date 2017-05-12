# In-App-Dunning

In-app-dunning is a javascript library that allows you respond to failed payments by displaying a message to subscribers while they are logged into your app.

It's an easy way to give them a nudge to update their payment method while you have their attention.

## Requirements

The only requirement for getting this library to work is to provide a way to set this variable:

```churnMessaging.showMessage = true|false;```

## Installation

To start using the library simply add this code to the head of the html documents you want the message to be displayed on, taking care to set the `showMessage` variable appropriately so only the customers you want to see the messaging see it.
```
<script type="text/javascript" src="in-app-dunning.js"></script>
<script type="text/javascript">
  churnMessaging.showMessage = true|false;

  window.onload = function () {
    churnMessaging.check();
  }
</script>
```

## Customization

We've provided a ton of options to customize this library.

### Style

There's 2 styles provided, modal and bar. "Modal" will take over the screen, "Bar" will simply show up over top of your page at the bottom of the screen.

The style is set with this variable:

```style: 'modal|bar'```

### Messaging

We've provided 2 different messages with some great default text. You can edit the messaging to your liking and also change when the 2nd message is displayed.

Depending on the style selected you can change the messages by setting the following variables.

For the modal style:

```
churnMessaging.modal.msg1.text1
churnMessaging.modal.msg1.text2
churnMessaging.modal.msg1.buttonText
churnMessaging.modal.msg2.text1
churnMessaging.modal.msg2.text2
churnMessaging.modal.msg2.buttonText
```

For the bar style:

```
churnMessaging.bar.msg1.text
churnMessaging.bar.msg1.buttonText
churnMessaging.bar.msg2.text
churnMessaging.bar.msg2.buttonText
```

### Color

For the modal style, change button colors quite with these options:

```
churnMessaging.modal.msg1.buttonTextcolor
churnMessaging.modal.msg1.buttonColor
churnMessaging.modal.msg2.buttonTextcolor
churnMessaging.modal.msg2.buttonColor
```

For the bar style:

```
churnMessaging.bar.bgColor
churnMessaging.bar.textColor
churnMessaging.bar.buttonBgColor
churnMessaging.bar.buttonTextcolor
```

### Close Button

For more aggressive messaging, you can hide the close button (so the notification can't be easily dismissed) by using the `churnMessaging.closeBtn` option.

```churnMessaging.closeBtn```

### Position

You can position the modal in 5 different places of the screen, and the bar in 2, by setting `churnMessaging.modal.position`.

The 5 modal options are:

```center|bottom-right|bottom-left|top-right|top-left```

And the 2 bar options are:

```top|bottom```

### Modal Specific Options
***Background***

You can choose to either have a background behind the overlay, or not have a backround, with this option:

```churnMessaging.modal.overlayBg```

It's value can be either `true` or `false`

### Bar Specific Options
**Text Color**

The bar option also has 1 additional option to set the color of text.

```churnMessaging.bar.textColor```

Copyright 2017 Churn Buster - Released under the MIT License
