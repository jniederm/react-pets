import { ADD_PET } from '../constants'

export function addPet(pet) {
  return {
    type: ADD_PET,
    payload: pet
  }
}
