// Using object literals to replace if-else statements
const getCurrency = (country) => {
	const currency = {
		USA: "USD",
		England: "GBP",
		Mexico: "MXN",
		Japan: "JPY",
		China: "CNY",
		Germany: "EUR",
		France: "EUR",
	};
	return currency[country.toLowerCase()] || "N/A";
};

console.log(getCurrency("USA")); // USD

// Traditional way (if-else)
// const getCurrency = (country) => {
//   let currency;
//   if (country === 'USA') {
//     currency = 'USD';
//   } else if (country === 'England') {
//     currency = 'GBP';
//   } else if (country === 'Mexico') {
//     currency = 'MXN';
//   } else if (country === 'Japan') {
//     currency = 'JPY';
//   } else if (country === 'China') {
//     currency = 'CNY';
//   } else if (country === 'Germany' || country === 'France') {
//     currency = 'EUR';
//   } else {
//     currency = 'N/A';
//   }
//   return currency;
// }
