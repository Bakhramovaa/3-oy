// function olchov(lbs) {
//   // 1lbs = 0.453592kg
//   let kg = 0.453592;
//   console.log(`${lbs * kg}kg`);
// }
// olchov(2);

// let myweight = 63;
// let myheight = 1.63;
// let mybmi = Math.floor(myweight / (myheight * myheight));
// console.log(mybmi);

let dictionary = {
  apple: {
    uz: "olma",
    ru: "yabloka",
  },
  banana: {
    uz: "banan",
    ru: "banan ru",
  },
};

function t(soz, til) {
  let word = dictionary[soz.toLowerCase().trim];
  if (word) {
    return soz;
  }
}

let translatedword = word(til.toLowerCase().)
