# In-App Dunning for Failed Payments
## Compatible with Stripe, Braintree, Authorize.net, and any other payment processor

In-app-dunning is a javascript library that allows you respond to failed payments by displaying a message to subscribers while they are logged into your app.

It's an easy way to give them a nudge to update their payment method while you have their attention.

[Churn Buster logo]
If you are finding failed payments to be a regular problem, check out our core application at https://churnbuster.io.


## Requirements

The only requirement for getting this library to work is to provide a way to set this variable:

```InAppDunning.showMessage = true|false;```

## Installation

To start using the library simply add this code to the head of the html documents you want the message to be displayed on, taking care to set the `showMessage` variable appropriately so only the customers you want to see the messaging see it.
```
<script type="text/javascript" src="in-app-dunning.js"></script>
<script type="text/javascript">
  InAppDunning.showMessage = true|false;

  window.onload = function () {
    InAppDunning.check();
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

Default messaging is provided, editable to your liking.

Depending on the style selected you can change the messages by setting the following variables.

For the modal style:

```InAppDunning.modal.msg1.text1
InAppDunning.modal.msg1.text2
InAppDunning.modal.msg1.buttonText
InAppDunning.modal.msg2.text1
InAppDunning.modal.msg2.text2
InAppDunning.modal.msg2.buttonText```

For the bar style:

```InAppDunning.bar.msg1.text
InAppDunning.bar.msg1.buttonText
InAppDunning.bar.msg2.text
InAppDunning.bar.msg2.buttonText```

### Color

For the modal style, change button colors quite with these options:

```InAppDunning.modal.msg1.buttonTextcolor
InAppDunning.modal.msg1.buttonColor
InAppDunning.modal.msg2.buttonTextcolor
InAppDunning.modal.msg2.buttonColor```

For the bar style:

```InAppDunning.bar.bgColor
InAppDunning.bar.textColor
InAppDunning.bar.buttonBgColor
InAppDunning.bar.buttonTextcolor```

### Close Button

If you want to get a little in the face of your customers and not let them dismiss the messaging you can use the `InAppDunning.closeBtn` option to hide it (the default is to show it)
=======
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

```InAppDunning.closeBtn```

### Position

You can position the modal in 5 different places of the screen and the bar in 2 by setting `InAppDunning.modal.position`.

The 5 modal options are:

```center|bottom-right|bottom-left|top-right|top-left```

And the 2 bar options are:

```top|bottom```

### Modal Specific Options
***Background***

You can choose to either have a background behind the modal, or not have one, with this option:

```InAppDunning.modal.overlayBg```

It's value can be either `true` or `false`

### Bar Specific Options
**Text Color**

The bar option also has 1 additional option to set the color of text.

```InAppDunning.bar.textColor```

Copyright 2017 Churn Buster - Released under the MIT License
