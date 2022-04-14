import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counterReducer'
import { loadSettings, saveSettings } from './store-utilits'

export type AppRootType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
   counter: counterReducer
})

// loading counter setting form localStorage
const loadedSettings = loadSettings()

export const store = createStore(rootReducer, loadedSettings, composeWithDevTools())

// saving counter setting to localStorage
store.subscribe(() => {
   return saveSettings(store.getState())
})