<script lang="ts">
  import { afterUpdate } from 'svelte';

  const category: {
    box: HTMLDivElement | null;
    leftButton?: boolean;
    rightButton?: boolean;
    shift?: number;
    clientWidth?: number;
  } = { box: null };

  function categoryScrollLeft() {
    if (category.box) category.box.scrollLeft -= category.shift!;
  }

  function categoryScrollRight() {
    if (category.box) category.box.scrollLeft += category.shift!;
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

<section id="browser" class="h-full w-full overflow-x-hidden py-4 dark:bg-dark-main-bg">
  <!-- Category list box -->
  <div class="relative mx-2 flex">
    <div
      class="absolute left-0 top-0 z-[2020] flex h-full w-24"
      class:hidden={!category.leftButton}
    >
      <button on:click={categoryScrollLeft} class="dark:bg-dark-main-bg"
        ><svg
          height="24px"
          width="24px"
          id="icon"
          style="enable-background:new 0 0 16 16;"
          version="1.1"
          viewBox="0 0 16 16"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="dark:fill-slate-100"
          ><polygon points="5,8 10,3 10.7,3.7 6.4,8 10.7,12.3 10,13 " /><rect
            id="_x3C_Transparent_Rectangle_x3E_"
            class="fill-none"
            height="24"
            width="24"
          /></svg
        ></button
      ><span
        class="flex-grow bg-gradient-to-r from-cod-gray-950 from-20% to-cod-gray-200/0 to-80%"
        aria-label="hidden"
      />
    </div>
    <div
      class="flex h-full flex-grow overflow-x-hidden"
      bind:this={category.box}
      bind:clientWidth={category.clientWidth}
      on:scrollend={(event) => {
        setCategoryScrollButtonDisplay(event.currentTarget, event.currentTarget.clientWidth);
      }}
    >
      <!-- 이 scroll box의 width가 변경되면 위의 bind:clientWidth를 통해서 afterUpdate()가 trigger된다 -->
      <span class="tag">전체</span>
      <span class="tag">뉴스</span>
      <span class="tag">라이브</span>
      <span class="tag">스포츠</span>
      <span class="tag">영화</span>
      <span class="tag">과학</span>
      <span class="tag">밀리터리</span>
      <span class="tag">동물</span>
      <span class="tag">종교</span>
      <span class="tag">건강</span>
      <span class="tag">강좌</span>
      <span class="tag">애니메이션</span>
      <span class="tag">코믹스</span>
    </div>
    <div
      class="absolute right-0 top-0 z-[2020] flex h-full w-24 justify-end"
      class:hidden={!category.rightButton}
    >
      <span
        class="flex-grow bg-gradient-to-l from-cod-gray-950 from-20% to-cod-gray-200/0 to-80%"
        aria-label="hidden"
      />
      <button on:click={categoryScrollRight} class="dark:bg-dark-main-bg"
        ><svg
          height="24px"
          width="24px"
          viewBox="0 0 16 16"
          id="icon"
          style="enable-background:new 0 0 16 16;"
          version="1.1"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="dark:fill-slate-100"
          ><polygon points="11,8 6,13 5.3,12.3 9.6,8 5.3,3.7 6,3 " /><rect
            id="_x3C_Transparent_Rectangle_x3E_"
            height="24"
            width="24"
            class="fill-none"
          /></svg
        ></button
      >
    </div>
  </div>
</section>
