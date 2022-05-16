import { reactive, onBeforeUnmount, onMounted } from "vue";

export default function () {
  let Point = reactive({
    x: 0,
    y: 0,
  });

  function savePoint(event) {
    Point.x = event.pageX;
    Point.y = event.pageY;
    console.log(event.pageX, event.pageY);
  }

  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });

  return Point;
}
