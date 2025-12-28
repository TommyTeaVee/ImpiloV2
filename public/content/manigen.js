const fs = require("fs");
const path = require("path");

// ----------------------------
// CONFIG
// ----------------------------

const folderPath = "./Alex"; // <-- Change to your folder path
const outputFile = "manifest.json"; // The manifest file to create
const audioFile = "audio.mp3";       // Optional, can be null
const videoURL = "https://www.youtube.com/embed/example1"; // Optional

// ----------------------------
// SCRIPT
// ----------------------------

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Failed to read folder:", err);
    return;
  }

  // Filter only images (jpg, png, jpeg)
  const images = files.filter(file =>
    [".jpg", ".jpeg", ".png", ".gif"].includes(path.extname(file).toLowerCase())
  );

  const manifest = {
    images,
    audio: audioFile || null,
    video: videoURL || null
  };

  fs.writeFile(
    path.join(folderPath, outputFile),
    JSON.stringify(manifest, null, 2),
    (err) => {
      if (err) {
        console.error("Failed to write manifest:", err);
      } else {
        console.log(`Manifest generated at ${path.join(folderPath, outputFile)}`);
      }
    }
  );
});
