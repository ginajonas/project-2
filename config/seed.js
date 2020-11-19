const db = require('../models')

let diseases = [
  {
    name: 'Fish Odor Syndrome',
    minTemperature: 30,
    maxTemperature: 35,
    nausea: true,
    dehydration: false,
    diarrhea: false,
  },
  { name: 'Dreaming Rage' },
  { name: 'Sheep Scarring' },
  { name: 'Spine Soreness' },
  { name: 'Lime Feet' },
  { name: 'Stiffening Anxiety' },
  { name: 'Numbing Blisters' },
  { name: 'Frenzied Inflammation' },
  { name: 'Cat Inflammation' },
  { name: 'Fading Tumor' },
  { name: 'Undead Stomach' },
  { name: 'Pestilent Deficiency' },
  { name: 'Sage Disease' },
  { name: 'Explosive Anxiety' },
  { name: 'Rabid Syphilis' },
  { name: 'Running Asthma' },
  { name: 'Creeping Delusions' },
  { name: 'Aggressive Infertility' },
  { name: 'Animated Hands' },
  { name: 'Silent Blight' },
  { name: 'Exhausting Bronchitis' },
  { name: 'Marsh Lupus' },
  { name: 'Horse Anemia' },
  { name: 'Zombie Ulcers' },
  { name: 'Shaky Swelling' },
  { name: 'Frozen Dehydration' },
  { name: 'Phantom Aching' },
  { name: 'Weakening Mutation' },
  { name: 'Jumping Euphoria' },
  { name: 'Undead Poisoning' },
  { name: 'Jungle Finger' },
  { name: 'Delirious Paralysis' },
  { name: 'Mouse Hands' },
  { name: 'Wraith Fever' },
  { name: 'Happy Disease' },
  { name: 'Sedated Malaria' },
  { name: 'Grave Rash' },
  { name: 'Ogre Nausea' },
  { name: 'Angry Sores' },
  { name: 'Contagious Sleep Disorder' },
  { name: 'Trivial Tongue' },
  { name: 'Wild Warts' },
  { name: 'Elephant Cannibalism' },
  { name: 'Stimulated Cramps' },
  { name: 'Sniffling Fatigue' },
  { name: 'Pig Irritation' },
  { name: 'Shivering Hallucinations' },
  { name: 'Beer Paranoia' },
  { name: 'Rabid Cholera' },
]

db.sequelize.sync().then(() => {
  db.Disease.bulkCreate(diseases)
})
