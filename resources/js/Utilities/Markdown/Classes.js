const classMap = {
    a: 'link',
    h1: 'text-2xl',
    h2: 'text-xl',
    h3: 'text-lg',
    ol: 'list-decimal ml-8',
    p: 'my-4',
    ul: 'list-disc ml-8',
};

export default Object.keys(classMap)
    .map(key => ({
        type: 'output',
        regex: new RegExp(`<${key}(.*)>`, 'g'),
        replace: `<${key} class="${classMap[key]}" $1>`
    }));
