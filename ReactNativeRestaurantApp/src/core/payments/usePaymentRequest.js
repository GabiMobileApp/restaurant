import {
  chargePaypalCustomer as chargePaypalCustomerAPI,
  chargeStripeCustomer as chargeStripeCustomerAPI,
  checkoutPaypal as checkoutPaypalAPI,
  detachCustomerCard as detachCustomerCardAPI,
  fetchPaypalTokenFromServer as fetchPaypalTokenFromServerAPI,
  getPaymentSheetKeys as getPaymentSheetKeysAPI,
  getStripeKeys as getStripeKeysAPI,
  setupStripe as setupStripeAPI,
} from './api/paymentProcessor/paymentRequestClient'

const usePaymentRequest = appConfig => {
  const chargePaypalCustomer = ({ amount, currency, token }) => {
    return chargePaypalCustomerAPI({ amount, currency, token })
  }
  const chargeStripeCustomer = body => {
    return chargeStripeCustomerAPI(appConfig, body)
  }
  const checkoutPaypal = options => {
    return checkoutPaypalAPI(appConfig, options)
  }
  const detachCustomerCard = body => {
    return detachCustomerCardAPI(appConfig, body)
  }
  const fetchPaypalTokenFromServer = () => {
    return fetchPaypalTokenFromServerAPI(appConfig)
  }
  const getPaymentSheetKeys = async (customerId, currency, amount) => {
    return await getPaymentSheetKeysAPI(appConfig, customerId, currency, amount)
  }
  const getStripeKeys = () => {
    return getStripeKeysAPI(appConfig)
  }
  const setupStripe = async email => {
    return await setupStripeAPI(appConfig, email)
  }

  return {
    chargePaypalCustomer,
    chargeStripeCustomer,
    checkoutPaypal,
    detachCustomerCard,
    fetchPaypalTokenFromServer,
    getPaymentSheetKeys,
    getStripeKeys,
    setupStripe,
  }
}

export default usePaymentRequest
