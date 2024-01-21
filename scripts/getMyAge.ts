const THE_BIGGEST_AGE = 125;

const validateAge = (age: number) => {
  return age > THE_BIGGEST_AGE || age < 0;
};

const getMyAge = (date: Date | number | string) => {
  const isValidDate = String(date) !== "Invalid Date";
  const isValidNumber = Number.isFinite(Number(date));

  if (!isValidNumber || !isValidDate) {
    throw new Error("Invalid date");
  }

  const currentYear = new Date().getFullYear();
  const providedYear = date instanceof Date ? date.getFullYear() : Number(date);
  const age = currentYear - providedYear;

  const isAgeInvalid = validateAge(age);
  if (isAgeInvalid) {
    throw new Error(`It's probably unrealistic to be ${age} years old`);
  }

  return age;
};

console.log(getMyAge(new Date(2000, 1, 1)));
console.log(getMyAge(2000));
console.log(getMyAge("2000"));
