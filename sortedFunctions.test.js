const fs = require("fs");
const fileStore = require("./helpers/fileStore");
const RNG = require("./generatePhoneNumbers");
const sortPhoneNumbers = require("./sortingFunction");

describe("sorting tests", () => {
  beforeEach(done => {
    RNG.generatePhoneNumbers();
    done();
  });

  afterEach(done => {
    fs.unlink("phoneNumbers.json", error => {
      if (error) throw error;
      done();
    });
  });

  test("should sort phone numbers in ascending order", done => {
    sortPhoneNumbers(["asc"], 1);
    setTimeout(function() {
      fileStore.read("sortedPhoneNumbersAscending", (readError, fileData) => {
        if (!readError) {
          let firstIndex = fileData.sortedList.indexOf(fileData.min);
          let lastIndex = fileData.sortedList.indexOf(fileData.max);
          expect(fileData.min).toEqual(fileData.sortedList[firstIndex]);
          expect(fileData.max).toEqual(fileData.sortedList[lastIndex]);
          done();
        }
      });
      fs.unlink("sortedPhoneNumbersAscending.json", error => {
        if (error) throw error;
        done();
      });
    }, 1000);
  });
  
  test("should sort phone numbers in descending order", done => {
    sortPhoneNumbers(["desc"], 2);
    setTimeout(function() {
      fileStore.read("sortedPhoneNumbersAscending", (readError, fileData) => {
        if (!readError) {
          let firstIndex = fileData.sortedList.indexOf(fileData.min);
          let lastIndex = fileData.sortedList.indexOf(fileData.max);
          expect(fileData.min).toEqual(fileData.sortedList[firstIndex]);
          expect(fileData.max).toEqual(fileData.sortedList[lastIndex]);
          done();
        }
      });
      fs.unlink("sortedPhoneNumbersDescending.json", error => {
        if (error) throw error;
        done();
      });
    }, 1000);
  });
});
