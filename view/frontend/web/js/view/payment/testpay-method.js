/** Explorer/Payment/view/frontend/web/js/view/payment/testpay-method.js **/
define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';
 
        return Component.extend({
            defaults: {
                template: 'MageWN_WNPayment/payment/testpay'
            },
 
            /** Returns send check to info */
            getMailingAddress: function() {
                return window.checkoutConfig.payment.checkmo.mailingAddress;
            },
 
            
        });
    }
);
