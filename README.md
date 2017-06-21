# In-App Dunning for Failed Payments
## Compatible with Stripe, Braintree, Authorize.net and most payment processors

![example-message](https://cloud.githubusercontent.com/assets/472769/26421100/6c2ec082-408a-11e7-9932-9e652d94abd1.png)

When recurring payments fail, prompt users to take action while they are logged into your app (and you have their attention!).

In-app-dunning is a javascript library that displays a in-app messages at the right time, directing the user to update their credit card via your billing page.

If failed subscription payments are a problem for your business,
check out our core product at https://churnbuster.io.

## Requirements

Installing in-app dunning requires:
- Basic Javascript
- A URL for your credit card update page
- Access to subscriber failed payment status (via payment processor)

## Installation

Copy/paste the code below, **replace 'CUSTOMER_FAILED_PAYMENT_STATUS' with your real variable** and customize the pop-up as desired (see: Customization Options).

```
<script type="text/javascript" src="in-app-dunning.js"></script>
<script type="text/javascript">
  if (CUSTOMER_FAILED_PAYMENT_STATUS == "failed") {
    InAppDunning.show({
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
  }
</script>
```

## Customization Options

As you can see in the above code block, there are options to customize this library. Here's an explanation for each option (* = required):

| Option | Explanation/Setting | Default |
| ------------- | ------------- | ------------- |
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
