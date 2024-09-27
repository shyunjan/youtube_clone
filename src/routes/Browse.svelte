<script lang="ts">
  import { afterUpdate } from 'svelte';

  const category: {
    box: HTMLDivElement | null;
    leftButton: boolean;
    rightButton: boolean;
    shift: number;
    clientWidth: number;
  } = {
    box: null,
    leftButton: false,
    rightButton: false,
    shift: 0,
    clientWidth: 0
  };

  function categoryScrollLeft() {
    if (category.box) category.box.scrollLeft -= category.shift;
  }

  function categoryScrollRight() {
    if (category.box) category.box.scrollLeft += category.shift;
  }

  function setCategoryScrollButtonDisplay(node: HTMLDivElement | null, clientWidth: number) {
    if (node) {
      if (!clientWidth) clientWidth = node.clientWidth; // border-with를 제외한 layout width
      const scrollWidth = node.scrollWidth; // border-with를 제외한 contents width
      // const offsetWidth = node.offsetWidth; // border-with를 포함한 layout width
      const scrollLeft = node.scrollLeft;
      category.shift = Math.round(clientWidth / 2);

      if (scrollWidth - scrollLeft > clientWidth) category.rightButton = true;
      else category.rightButton = false;
      if (scrollLeft > 0) category.leftButton = true;
      else category.leftButton = false;
    }
  }

  afterUpdate(() => {
    setCategoryScrollButtonDisplay(category.box, category.box!.clientWidth);
  });
</script>

<section class="h-full w-full dark:bg-stone-900">
  <!-- 카테고리 리스트 박스 -->
  <div class="mx-2 flex pt-8">
    <button
      on:click={categoryScrollLeft}
      class="dark:text-slate-100"
      class:hidden={!category.leftButton}>&lt;</button
    >
    <div
      class="flex h-full flex-grow overflow-x-hidden"
      bind:this={category.box}
      bind:clientWidth={category.clientWidth}
      on:scrollend={(event) => {
        setCategoryScrollButtonDisplay(event.currentTarget, event.currentTarget.clientWidth);
      }}
    >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >전체</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >뉴스</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >스포츠</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >영화</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >과학</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >밀리터리</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >동물</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >종교</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >건강</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >강좌</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >애니메이션</span
      >
      <span
        class="mx-1 whitespace-nowrap rounded-md border-solid bg-stone-600 px-2 py-1 text-slate-100"
        >코믹스</span
      >
    </div>
    <button
      on:click={categoryScrollRight}
      class="dark:text-slate-100"
      class:hidden={!category.rightButton}>&gt;</button
    >
  </div>
</section>
