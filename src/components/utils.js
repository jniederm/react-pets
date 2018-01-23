import Faker from 'faker'

const petImages = {
  cat: 'cat.png',
  dog: 'dog.png',
  hamster: 'hamster.png'
}

export function petImageUrl(kind) {
  return Object.keys(petImages).includes(kind)
    ? `images/${petImages[kind]}`
    : 'images/unknown.png'
}

export function randomPet() {
  return {
    name: Faker.name.firstName(),
    kind: Faker.random.arrayElement(Object.keys(petImages))
  }
}
