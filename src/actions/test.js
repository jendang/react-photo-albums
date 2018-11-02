// export function helloWorld(firstName, lastName) {
//     return {
//       type: 'HELLO_WORLD',
//       payload: {
//         firstName: firstName,
//         lastName: lastName
//       }
//     }
// }

export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'

export function helloWorld(firstName, lastName) {
    return {
      type: 'JENNY_IS_SMART',
      payload: {
        firstName: firstName,
        lastName: lastName
      }
    }
  }