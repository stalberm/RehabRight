const { exec } = require("child_process");
const path = require("path");

const API_KEY = "xyz";
const PORT = 8108;

const currentDir = path.resolve(__dirname, "typesense-data");

const command = `docker run -d -p ${PORT}:8108 \
-v ${currentDir}:/data typesense/typesense:0.25.1 \
--data-dir /data \
--api-key=${API_KEY} \
--enable-cors`;

exec(command, (err, stdout, stderr) => {
    if (!err && !stderr) console.log("Typesense Server is running...");

    if (err) {
        console.log("Error running server: ", err);
    }

    if (stderr) {
        console.log("Error running server: ", stderr);
    }

    if (stdout) {
        console.log("Server output: ", stdout);
    }
});