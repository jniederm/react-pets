import { ADD_PET, REMOVE_PET, FETCH_EPIC_PETS, SET_PETS, SET_LOADING } from '../constants'

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

export function fetchEpicPets() {
  return {
    type: FETCH_EPIC_PETS
  }
}

export function setPets(newPets) {
  return {
    type: SET_PETS,
    payload: newPets
  }
}

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading
  }
}
