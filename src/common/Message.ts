import { format } from 'util'

export const Message = {
  ERROR_CODE: 'Error value is %s'
}

export function getMessage(msg, ...args) {
  return format(msg, ...args)
}