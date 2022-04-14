import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counterReducer'
import { loadSettings, saveSettings } from './store-utilits'

// loading counter setting form localStorage ===================>
const loadedSettings = loadSettings()

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadedSettings, composeWithDevTools())

// saving counter setting to localStorage =====================>
store.subscribe(() => {
    return saveSettings(store.getState())
})