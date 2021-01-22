/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password. 

Expected Result:
PasswordValidationResult=  [false, false, true, false, false]
*/
const passwords1 = ['Se%5', 'TktE.TJTU', '384#HsHF', 'dvyyeyy!5', 'tryT3729'];
const passwords2 = ['StUFf27%', 'Pl3nty!', 'Jai33', 'shajsaUA**&&', 'Pl3nty!'];
let previousPasswords = [
	'fhD8!yrjj',
	'ttkTu.wer3',
	'dvyyeyy!5',
	'qwbfj76%',
	'tytT3729.',
	'384#HsHf',
	'Jai33',
];

const passwordValidator = (passwords, prevPasswords) => {
	let res = [];
	const regex1 = /[A-Z]/g;
	const regex2 = /[a-z]/g;
	const regex3 = /[0-9]/g;
	const regex4 = /\W/g;
	for (let i = 0; i < passwords.length; i++) {
		if (
			passwords[i].length >= 5 &&
			passwords[i].match(regex1) !== null &&
			passwords[i].match(regex2) !== null &&
			passwords[i].match(regex3) !== null &&
			passwords[i].match(regex4) !== null &&
			!prevPasswords.includes(passwords[i])
		) {
			res.push(true);
		} else {
			res.push(false);
		}
	}
	return res;
};

console.log(passwordValidator(passwords1, previousPasswords));
console.log(passwordValidator(passwords2, previousPasswords));
