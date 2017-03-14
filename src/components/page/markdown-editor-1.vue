<style lang="css">

#editor {
    width: 100vw;
    height: 70vh;
}
textarea {
  width: 50%;
  height: 200px;
  outline: none;
}
</style>

<template>

<div id="editor">
    <markdown-editor v-model="content"></markdown-editor>
</div>

</template>

<script>

import {
    MarkdownEditor
}
from 'markdown-it-editor'
import hljs from 'highlightjs' // have to npm install highlight
import 'highlightjs/styles/github.css'

export default {
    components: {
        MarkdownEditor
    },
    data() {
        return {
            content: '# hello world',
            options: {
                highlight(str, lang) { // you can add highlightjs plugin to highlight your code
                        if (lang && hljs.getLanguage(lang)) {
                            try {
                                return hljs.highlight(lang, str).value
                            } catch (__) {}
                        }
                        return ''
                    },
                    // markdown-it options @more-see
                    // https://github.com/markdown-it/markdown-it#init-with-presets-and-options
                    html: true, // Enable HTML tags in source
                    xhtmlOut: false, // Use '/' to close single tags (<br />).
                    // This is only for full CommonMark compatibility.
                    breaks: true, // Convert '\n' in paragraphs into <br>
                    langPrefix: 'language-', // CSS language prefix for fenced blocks. Can be
                    // useful for external highlighters.
                    linkify: false, // Autoconvert URL-like text to links

                    // Enable some language-neutral replacement + quotes beautification
                    typographer: false,

                    // Double + single quotes replacement pairs, when typographer enabled,
                    // and smartquotes on. Could be either a String or an Array.
                    //
                    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
                    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
                    quotes: '“”‘’',

                    // Highlighter function. Should return escaped HTML,
                    // or '' if the source string is not changed and should be escaped externaly.
                    // If result starts with <pre... internal wrapper is skipped.
                    highlight: function( /*str, lang*/ ) {
                        return '';
                    }

            }
        }
    }
}

</script>
