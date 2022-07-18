
//* saving settings to localStorage function =======================================================================>>
// export const saveState = (state) => {
//     try {
//         const serializedState = JSON.stringify(state)
//         localStorage.setItem('state', serializedState)
//     } catch {
//         // ignore write errors
//     }
// }
import {RootState} from './store'

export const saveData = (state: RootState) => {
  localStorage.setItem('savedJoyMeProgress', JSON.stringify({
    'profile': state.categories,
  }))
}

//* loading settings from localStorage function =====================================================================>>
// export const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('state')
//         if (serializedState === null) {
//             return undefined;
//         }
//         return JSON.parse(serializedState)
//     } catch (err) {
//         return undefined;
//     }
// }
export const loadData = () => {
  const loadedData = localStorage.getItem('savedJoyMeProgress')
  if(loadedData) {
    return JSON.parse(loadedData)
  }
}
