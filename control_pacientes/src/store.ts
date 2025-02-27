import { create } from 'zustand'
import { patient } from './types'

type PatientState = {
    patients: patient[]
}

export const usePatientStore = create<PatientState>(() => ({
    patients: []
}))