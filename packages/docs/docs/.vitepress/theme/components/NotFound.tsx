import { defineComponent } from 'vue'

const NotFound = defineComponent({
  name: 'NotFound',
  setup() {
    return () => (
      <div>
        <a href="/">home</a>
        <div>Custom 404 Page</div>
      </div>
    )
  }
})
export default NotFound
