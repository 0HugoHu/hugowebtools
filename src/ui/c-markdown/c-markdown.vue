<script setup lang="ts">
import { marked } from 'marked';
import DomPurify from 'dompurify';

const props = withDefaults(defineProps<{ markdown?: string }>(), { markdown: '' });
const { markdown } = toRefs(props);

marked.use({
  renderer: {
    link(href, title, text) {
      return `<a class="c-markdown-link" href="${href}" target="_blank" rel="noopener">${text}</a>`;
    },
  },
});

const html = computed(() => DomPurify.sanitize(marked(markdown.value), { ADD_ATTR: ['target'] }));
</script>

<template>
  <div class="c-markdown" v-html="html" />
</template>

<style lang="less" scoped>
.c-markdown {
  ::v-deep(.c-markdown-link) {
    color: #4a8a8d;
    text-decoration: none;
    transition: color 0.2s ease;
    font-weight: 500;

    &:hover {
      color: #76ABAE;
      text-decoration: underline;
    }
  }
}

:global(.dark) .c-markdown {
  ::v-deep(.c-markdown-link) {
    color: #76ABAE;

    &:hover {
      color: #93c5c8;
    }
  }
}
</style>
