

export const professionalDetails = {
  get name() {
    return `${professionals.name.first} ${professionals.name.last}`;
  },
  picture: `${professionals.picture.large}`,
  gender: `${professionals.gender}`,
  age: `${professionals.dob.age}`,
  get location() {
    return `${professionals.location.city}, ${professionals.location.country}`;
  },
};
