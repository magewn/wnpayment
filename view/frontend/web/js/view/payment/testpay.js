/** Explorer/Payment/view/frontend/web/js/view/payment/testpay.js **/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'testpay',
                component: 'MageWN_WNPayment/js/view/payment/method-renderer/testpay-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
