# In-App Dunning for Failed Payments
## Compatible with Stripe, Braintree, Authorize.net, and any other payment processor

![example-message](https://cloud.githubusercontent.com/assets/472769/26421100/6c2ec082-408a-11e7-9932-9e652d94abd1.png)

In-app-dunning is a javascript library that allows you respond to failed payments by displaying a message to subscribers while they are logged into your app.

It's an easy way to give them a nudge to update their payment method while you have their attention.

If you are finding failed payments to be a regular problem, check out our core application at https://churnbuster.io.

## Requirements

The library only requires 2 things to work (as outlined below), the `show` option to be set and a url for your payment form.

## Installation

To start using the library simply include the js file on your page and include the `InAppDunning.show` code with the variables you want to include.
```
<script type="text/javascript" src="in-app-dunning.js"></script>
<script type="text/javascript">
  InAppDunning.show({
    show: true,
    url: 'https://churnbuster.io/update',
    style: 'modal', // modal|bar
    close: true,
    position:  'center', // modal: center|bottom-right|bottom-left|top-right|top-left // bar: top|bottom
    button: {
      color: '#fff',
      bgColor: '#2ecc71'
    },
    modal: {
      overlay: true
    },
    bar: {
      color: '#3498db',
      bgColor: '#ffffff'
    }
  });
</script>
```

## Customization Options

As you can see in the above code block, we've provided a ton of options to customize this library. Here's a breakdown and explanation for each option (* = required):

| Option | Explanation/Setting | Default |
| ------------- | ------------- | ------------- |
| show* | Can be either true or false, true will display the dunning message | false |
| url* | This is the url you want the button in the message to go to (most likely a payment form) | blank |
| style | Can be either `modal` or `bar` (default is modal) | modal |
| close | Set this to `true` to allow the user to close the message, set it to false to force them to look at it until they take action | true |
| position | Depending whether you've set the style to modal or bar you can position the message many ways. Modal options are: `center`, `bottom-right`, `bottom-left`, `top-right`, `top-left`, bar options are: `top` or `bottom` | modal = center, bar = bottom |
| button.color | Sets the color of the text in the button | white |
| button.bgColor | Sets the background color of the button | green |
| modal.overlay | Sets whether to use an overlay under the modal to ensure no other options can be clicked, only availabe if style = modal, can either be `true` or `false` | true |
| bar.color | Sets the text color used in the bar style. Style must equal bar. | blue |
| bar.bgColor | Sets the background color of the bar. Style must be set to bar. | white |


![Churnbuster](https://cloud.githubusercontent.com/assets/472769/26270608/cf301612-3cc1-11e7-979f-45a1cea644ce.png)
Copyright 2017 Churn Buster - Released under the MIT License
