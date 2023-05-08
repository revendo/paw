const componentProps = (args) => {
    let output = '';
    Object.entries(args).forEach((param) => {
        let key = param[0];
        let value = param[1];
        // arg key is object
        if (key instanceof Object || typeof key === 'object') {
            output += componentProps(key);
        }
        key = kebabCase(key);
        // Ignore 'default' arg
        if (key === 'default') return;
        // arg value is boolean
        if (value instanceof Boolean || typeof value === 'boolean') {
            if (!value) {
                output += `\n  :${key}='false'`;
                return;
            }
            output += `\n  ${key}`;
            return;
        }
        // arg value is object or array
        if (value instanceof Object || typeof value === 'object' || value instanceof Array) {
            value = JSON.stringify(value);
            output += `\n  :${key}='${value}'`;
            return;
        }
        output += `\n  ${key}="${value}"`;
    });
    return output;
}

const kebabCase = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

export { componentProps, kebabCase };
