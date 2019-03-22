const fs = require("fs");
const fileStore = require("./helpers/fileStore");
const RNG = require("./generatePhoneNumbers");

describe("test phone number generation functions", () => {
  test("phone number generated should have a length of 10", () => {
    expect(RNG.generatePhoneNumber().length).toEqual(10);
  });

  test("saving phone numbers to file should work", done => {
    let phoneNumbersDb = ["0123456789", "0987654321"];

    RNG.savePhoneNumbersToFile({
      totalPhoneNumbersGenerated: 2,
      list: phoneNumbersDb
    });

    fileStore.read("phoneNumbers", (readError, fileData) => {
      if (!readError) {
        expect(fileData.list).toEqual(phoneNumbersDb);
        done();
      }
    });

    fs.unlink("phoneNumbers.json", error => {
      if (error) throw error;
      done();
    });
  });

  // test depends on value in the while loop generatePhoneNumbers(),
  test("test an array of 50 phone numbers is generated", done => {
    RNG.generatePhoneNumbers();
    fileStore.read("phoneNumbers", (readError, fileData) => {
      if (!readError) {
        expect(fileData.totalPhoneNumbersGenerated).toEqual(50);
        expect(fileData.list.length).toEqual(50);
        done();
      }
    });

    fs.unlink("phoneNumbers.json", error => {
      if (error) throw error;
      done();
    });
  });
});
