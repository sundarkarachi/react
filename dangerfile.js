const { readFileSync } = require("fs");

const spellcheck = require("danger-plugin-spellcheck").default;

const edited = [...danger.git.modified_files, ...danger.git.created_files];
