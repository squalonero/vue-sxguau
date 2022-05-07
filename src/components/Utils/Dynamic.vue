<script>
export default {
  data () {
    return {
      someVar: 'Test'
    }
  },
  props: {
    templateHtml: {
      templateHtml: true,
      type: String
    }
  },
  created () {
    this.$options.template = this.templateHtml
  }
}
</script>