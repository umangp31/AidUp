import {create} from 'zustand'

export const useProfile=create((set)=>({
    currentProfile:undefined,
    setCurrentProfile: (newProfile)=>set({currentProfile:newProfile})
}))