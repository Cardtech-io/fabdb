export default {
    type: 'output',
    regex: /<blockquote>([^]+?)<\/blockquote>/gi,
    replace: '<blockquote class="relative py-2 px-8 pl-12 my-8 text-xl italic border border-l-4 quote rounded-lg z-0">' +
        '<div class="stylistic-quote-mark text-gray-200" aria-hidden="true">&ldquo;</div>' +
        '<p>$1</p>' +
        '</blockquote>'
};
