<?php
#Explorer/Payment/Model/Testpay.php
namespace MageWN\WNPayment\Model;
class Testpay extends \Magento\Payment\Model\Method\AbstractMethod
{
    protected $_code = 'testpay';
    protected $_isOffline = true;
}
