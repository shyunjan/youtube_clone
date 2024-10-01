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
        ></path>
      </svg>
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
        ></path>
      </svg>
      <button>
        <div class="h-8 w-8 rounded-full dark:bg-dark-main-bg" />
      </button>
    </div>
  </header>

  <!-- Contents 영역 -->
  <section id="contents" class="flex h-full w-full">
    <!-- xl이하 screen을 위한 좌측 App drawer 및 mini-guide -->
    <aside id="app_drawer" class="h-full dark:bg-slate-300">
      <!-- Mini-guide -->
      <nav id="mini-guide" class="flex h-full w-16 flex-col items-center pt-4 dark:bg-dark-main-bg">
        <a href={null} class="my-4 flex flex-col items-center">
          <div class="mb-1 h-6 w-6 text-center">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="pointer-events-none h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              focusable="false"
              aria-hidden="true"
              ><g
                ><path
                  d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"
                  class="dark:fill-dark-main-text"
                ></path></g
              ></svg
            >
          </div>
          <span class="text-xxs dark:text-dark-main-text">홈</span>
        </a>
        <a href={null} class="my-4 flex flex-col items-center">
          <div class="mb-1 h-6 w-6 text-center">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="pointer-events-none h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
              ><path
                d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                class="dark:fill-dark-main-text"
              ></path></svg
            >
          </div>
          <span class="text-xxs dark:text-dark-main-text">Shorts</span>
        </a>
        <a href={null} class="my-4 flex flex-col items-center">
          <div class="mb-1 h-6 w-6 text-center">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="pointer-events-none h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              enable-background="new 0 0 24 24"
              aria-hidden="true"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
              ><path
                d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                class="dark:fill-dark-main-text"
              ></path></svg
            >
          </div>
          <span class="text-xxs dark:text-dark-main-text">구독</span>
        </a>
        <a href={null} class="my-4 flex flex-col items-center">
          <div class="mb-1 h-6 w-6 text-center">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              class="pointer-events-none h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              focusable="false"
              aria-hidden="true"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
              ><path
                d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                class="dark:fill-dark-main-text"
              ></path></svg
            >
          </div>
          <span class="text-xxs dark:text-dark-main-text">내 페이지</span>
        </a>
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
