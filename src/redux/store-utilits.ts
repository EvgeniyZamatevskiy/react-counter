import { AppRootType } from './store'

// link to article: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

//* saving settings to localStorage function
// export const saveState = (state) => {
//     try {
//         const serializedState = JSON.stringify(state)
//         localStorage.setItem('state', serializedState)
//     } catch {
//         // ignore write errors
//     }
// }
export const saveSettings = (state: AppRootType) => {
    localStorage.setItem('counterSettings', JSON.stringify({
        'counter': state.counter,
    }))
}

//* loading settings from localStorage function
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
export const loadSettings = () => {
    const counterSettings = localStorage.getItem('counterSettings')
    if (counterSettings) {
        return JSON.parse(counterSettings)
    }
}