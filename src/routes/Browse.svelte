<script lang="ts">
  let category_box: HTMLDivElement;
  function scrollRight() {
    let scrollWidth = category_box.scrollWidth; // border-with를 제외한 contents 폭
    let clientWidth = category_box.clientWidth; // border-with를 제외한 layout 폭
    // let offsetWidth = category_box.offsetWidth; // border-with를 포함한 layout 폭
    let scrollLeft = category_box.scrollLeft;
    console.debug(`scrollWidth = ${scrollWidth}; clientWidth = ${clientWidth}`);
    console.debug(`scrollLeft = ${scrollLeft}`);
    category_box.scrollLeft = scrollLeft + 100;
    scrollWidth = category_box.scrollWidth;
    clientWidth = category_box.clientWidth;
    // offsetWidth = category_box.offsetWidth;
    scrollLeft = category_box.scrollLeft;
    console.debug(`scrollWidth = ${scrollWidth}; clientWidth = ${clientWidth}`);
    console.debug(`scrollLeft = ${scrollLeft}`);
  }
</script>

<!-- 카테고리 리스트 박스 -->
<div class="flex pt-8">
  <button>&lt;</button>
  <div
    class="mx-1 flex h-full w-40 overflow-hidden overflow-x-auto scroll-smooth"
    bind:this={category_box}
  >
    <span class="mx-1 whitespace-nowrap border-solid bg-stone-500 px-2 py-1 text-slate-100"
      >전체</span
    >
    <span class="mx-1 whitespace-nowrap border-solid bg-stone-500 px-2 py-1 text-slate-100"
      >뉴스</span
    >
    <span class="mx-1 whitespace-nowrap border-solid bg-stone-500 px-2 py-1 text-slate-100"
      >스포츠</span
    >
    <span class="mx-1 whitespace-nowrap border-solid bg-stone-500 px-2 py-1 text-slate-100"
      >영화</span
    >
    <span class="mx-1 whitespace-nowrap border-solid bg-stone-500 px-2 py-1 text-slate-100"
      >과학</span
    >
    <span class="mx-1 whitespace-nowrap border-solid bg-stone-500 px-2 py-1 text-slate-100"
      >밀리터리</span
    >
    <span class="mx-1 whitespace-nowrap border-solid bg-stone-500 px-2 py-1 text-slate-100"
      >동물</span
    >
  </div>
  <button on:click={scrollRight}>&gt;</button>
</div>
