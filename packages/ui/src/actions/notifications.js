import makeActionCreator from 'utils/redux/makeActionCreator'

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

/**
 * A variant to theme the display of a notification
 * @typedef {'success'|'warning'|'error'|'info'} Variant
 */

/**
 * A showNotification action
 * @typedef {Object} ShowNotificationAction
 * @prop {'SHOW_NOTIFICATION'} type
 * @prop {string} content
 * @prop {Variant} variant
 */

/**
 * @function showNotification
 * @param  {string} content The body content of the notification
 * @param  {'success'|'warning'|'error'|'info'} variant The type of the notification
 * @return {ShowNotificationAction} The showNotification action
 */
export const showNotification = makeActionCreator(
  SHOW_NOTIFICATION,
  'content',
  'variant'
)
export const hideNotification = makeActionCreator(HIDE_NOTIFICATION)

export default {
  showNotification,
  hideNotification
}
