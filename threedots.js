const ages=[23,56,78,45];
const ages2=[22,25,88];
const ages3=[32,35,48];
const allAges=ages.concat(ages2).concat([5]).concat(ages3);
const allAges2=[...ages,...ages2,5,...ages3]
console.log(allAges2);
const business=650;
const minister=450;
const sochib=250;
// const maximum=Math.max(business,minister,sochib);

const takaPoisa=[567,765,768];
const maximum=Math.max(...takaPoisa);
console.log(maximum);