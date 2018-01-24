import { ADD_PET, REMOVE_PET } from '../constants'

export function addPet(pet) {
  return {
    type: ADD_PET,
    payload: pet
  }
}

export function removePet(petId) {
  return {
    type: REMOVE_PET,
    payload: petId
  }
}
