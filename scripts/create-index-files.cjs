"use strict";

const fs = require("fs");
const glob = require("glob");
const path = require("path");
const componentPrefix = "Paw";
const excludeComponents = ["Placeholder"];

function createIndexFiles() {
    const filesContent = generateFilesContent();
    saveIndexJs(filesContent.contentIndexJs);
    console.log("index.js created");
}

function generateFilesContent() {
    const pathsComponentFolders = glob.sync("*", {
        cwd: path.resolve(__dirname, "..", "src/components"),
    });

    const imports = [];
    const exports = [];
    for (const nameComponentFolder of pathsComponentFolders) {
        if (excludeComponents.includes(nameComponentFolder)) {
            continue;
        }

        const pathsVueComponents = glob.sync("*.vue", {
            cwd: path.resolve(__dirname, "..", `src/components/${nameComponentFolder}`),
        });

        for (const nameComponentVue of pathsVueComponents) {
            const sfComponentName = nameComponentVue.replace('.vue', '');
            const importLine = `import ${componentPrefix}${sfComponentName} from "./src/components/${nameComponentFolder}/${nameComponentVue}";`;
            imports.push(importLine);
            const exportLine = `    ${componentPrefix}${sfComponentName}`;
            exports.push(exportLine);
        }
    }
    const contentIndexJs =
        `// Auto-generated file by create-index-files.js. Do not edit manually\n` +
        imports.join("\n") +
        "\n\n" +
        "export {\n" +
        exports.join(",\n") +
        "\n};\n";
    return {
        contentIndexJs,
    };
}

function saveIndexJs(contentIndexJs) {
    const pathTargetIndexJs = path.resolve(__dirname, "..", "index.js");
    fs.writeFileSync(pathTargetIndexJs, contentIndexJs);
}

module.exports = {
    createIndexFiles,
};

if (require.main === module) {
    createIndexFiles();
}
