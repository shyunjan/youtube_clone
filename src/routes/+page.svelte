<script>
  import Browser from './Browser.svelte';
</script>

<!-- Main Layout -->
<div id="main" class="relative flex h-full w-full flex-wrap">
  <!-- 상단 Header 영역 -->
  <header class="flex h-14 w-full items-center justify-between px-3 py-1 dark:bg-dark-main-bg">
    <button class="w-16">
      <i class="fa-solid fa-bars text-3xl dark:text-dark-main-text dark:hover:text-orange-400"></i>
    </button>
    <img src="/Youtube-logo-with-flat-design-edited.png" alt="logo" class="w-30 mx-2 h-8" />
    <div id="header_buttons" class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        class="pointer-events-none h-full w-full dark:fill-slate-100"
        viewBox="0 0 24 24"
        focusable="false"
        aria-hidden="true"
        ><path
          d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
        ></path></svg
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
        aria-hidden="true"
        class="pointer-events-none h-full w-full dark:fill-slate-100"
        ><path
          d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"
        ></path></svg
      >
      <button>
        <div class="h-8 w-8 rounded-full dark:bg-dark-main-bg" />
      </button>
    </div>
  </header>

  <section id="contents" class="flex h-full w-full">
    <!-- xl이하 screen을 위한 좌측 App drawer 및 mini-guide -->
    <aside id="app_drawer" class="flex h-full dark:bg-slate-300">
      <!-- Mini-guide -->
      <nav id="mini-guide" class="h-full w-10 bg-blue-300">
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </nav>
      <!-- App drawer -->
      <nav class="left-0 top-0 z-[3000] h-full w-32 dark:bg-blue-200">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </nav>
    </aside>

    <!-- 검색 결과 영상 List 영역 -->
    <Browser />
  </section>
</div>
