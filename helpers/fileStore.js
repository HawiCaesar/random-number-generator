const fs = require("fs");
const path = require("path");

const fileStore = {};

fileStore.baseDir = path.join(__dirname, "/../");

fileStore.create = (file, data, callback) => {
  fs.open(
    `${fileStore.baseDir}${file}.json`,
    "wx",
    (openError, fileDescriptor) => {
      if (!openError && fileDescriptor) {
        const stringData = JSON.stringify(data);

        fs.writeFile(fileDescriptor, stringData, writeError => {
          if (!writeError) {
            fs.close(fileDescriptor, closeError => {
              if (!closeError) {
                callback(false);
              } else {
                callback("There was an error when closing the file");
              }
            });
          }
        });
      } else {
        callback("Could create new file, phone numbers already exists");
      }
    }
  );
};

fileStore.read = (file, callback) => {
  fs.readFile(
    `${fileStore.baseDir}${file}.json`,
    "utf-8",
    (openError, data) => {
      if (!openError && data) {
        const dataObject = JSON.parse(data);
        callback(false, dataObject);
      } else {
        callback(openError);
      }
    }
  );
};

module.exports = fileStore;
