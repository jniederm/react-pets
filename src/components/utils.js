import Faker from 'faker'

const petImages = {
  cat: 'cat.png',
  dog: 'dog.png',
  hamster: 'hamster.png',
  epic: 'epic.jpg'
}

export function petImageUrl(kind) {
  return Object.keys(petImages).includes(kind)
    ? `images/${petImages[kind]}`
    : 'images/unknown.png'
}

export function randomPet() {
  return {
    name: Faker.name.firstName(),
    kind: Faker.random.arrayElement(
      Object.keys(petImages).filter(kind => kind !== 'epic')
    )
  }
}
