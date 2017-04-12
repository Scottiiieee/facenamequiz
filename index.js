// A program to create a quiz with a list of names and one picture
let challenge = require('C:/Users/Scott Layne/Documents/index');

describe("A program that can help people learn to associate names and faces.", () => {
	it("can take in a list of names from a file", () => {
		expect(true).tobe(true);
	});
	
	it("can take in a list of names from a file", () => {
		expect("filename 'ISAT252S17_02' ").tobe(true);
		
	});

	it("can take in a list of e-ID'S from a file", () => {
		expect("filename 'roster'").tobe(true);	
	});

	it("can choose a picture of a student", () => {
		expect("one picture of student").tobe(true);
	});
	
	it("can show a list of 4 names in a column", () => {
		expect("four names from filename 'roster'").tobe(true);
	});

	it("will allow the user to select a name from the list of names", () => {
		expect("A list of names and one to be chosen from list.").tobe(true);
	});

});