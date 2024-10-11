<script>
  import MyPageSvg from '$lib/icons/My-page-svg.svelte';
  import HomeSvg from '$lib/icons/Home-svg.svelte';
  import ShortsSvg from '$lib/icons/Shorts-svg.svelte';
  import SubscriptionSvg from '$lib/icons/Subscription-svg.svelte';
  import WatchRecordSvg from '$lib/icons/Watch-record-svg.svelte';
  import MyChannelSvg from '$lib/icons/My-channel-svg.svelte';
  import PlayListSvg from '$lib/icons/Play-list-svg.svelte';
  import MyVideosSvg from '$lib/icons/My-videos-svg.svelte';
  import PlayLateListSvg from '$lib/icons/Play-late-list-svg.svelte';
  import FavouriteSvg from '$lib/icons/Favourite-svg.svelte';
  import Browser from './Browser.svelte';
</script>

<!-- Main Layout -->
<div id="main" class="relative flex h-full w-full flex-wrap">
  <!-- 상단 Header 영역 -->
  <header class="flex h-14 w-full items-center justify-between px-3 dark:bg-dark-main-bg">
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
        class="pointer-events-none h-full w-full dark:fill-slate-100"
        width="24"
        focusable="false"
        aria-hidden="true"
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
    <aside id="app_drawer" class="relative flex w-60 shrink-0 dark:bg-slate-300">
      <!-- Mini-guide -->
      <nav id="mini-guide" class="w-18 flex flex-col items-center px-1 pt-1 dark:bg-dark-main-bg">
        <a href={null} class="my-[15px] flex flex-col items-center">
          <div class="mb-1 h-6 w-6 text-center">
            <HomeSvg pathClass="dark:fill-dark-main-text" />
          </div>
          <span class="text-xxs dark:text-dark-main-text">홈</span>
        </a>
        <a href={null} class="my-[15px] flex flex-col items-center">
          <div class="mb-1 h-6 w-6 text-center">
            <ShortsSvg pathClass="dark:fill-dark-main-text" />
          </div>
          <span class="text-xxs dark:text-dark-main-text">Shorts</span>
        </a>
        <a href={null} class="my-[15px] flex flex-col items-center">
          <div class="mb-1 h-6 w-6 text-center">
            <SubscriptionSvg pathClass="dark:fill-dark-main-text" />
          </div>
          <span class="text-xxs dark:text-dark-main-text">구독</span>
        </a>
        <a href={null} class="my-[15px] flex flex-col items-center">
          <div class="mb-1 h-6 w-6 text-center">
            <MyPageSvg pathClass="dark:fill-dark-main-text" />
          </div>
          <span class="text-xxs dark:text-dark-main-text">내 페이지</span>
        </a>
      </nav>
      <!-- App drawer -->
      <nav class="absolute left-0 top-0 z-[3000] flex w-60 flex-col px-2 pt-3 dark:bg-dark-main-bg">
        <!-- Main menu -->
        <div id="main_menu" class="pb-3">
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <HomeSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="text-sm dark:text-dark-main-text">홈</span>
          </a>
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <ShortsSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="text-sm dark:text-dark-main-text">Shorts</span>
          </a>
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <SubscriptionSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="text-sm dark:text-dark-main-text">구독</span>
          </a>
        </div>
        <!-- My page menu -->
        <div id="my_page_menu" class="border-t-1 py-3 dark:border-dark-main-text/20">
          <a href={null} class="flex items-center px-4 py-2">
            <span class="mr-2 text-base dark:text-dark-main-text">내 페이지</span>
            <div class="inline-block h-4 w-4 text-center">
              <svg
                height="16"
                width="16"
                viewBox="0 0 16 16"
                class="pointer-events-none h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                aria-hidden="true"
                ><path
                  d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"
                  class="dark:fill-dark-main-text"></path
                ></svg>
            </div>
          </a>
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <MyChannelSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="text-sm dark:text-dark-main-text">내 채널</span>
          </a>
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <WatchRecordSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="text-sm dark:text-dark-main-text">시청 기록</span>
          </a>
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <PlayListSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="text-sm dark:text-dark-main-text">재생목록</span>
          </a>
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <MyVideosSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="text-sm dark:text-dark-main-text">내 동영상</span>
          </a>
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <PlayLateListSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="text-sm dark:text-dark-main-text">나중에 볼 동영상</span>
          </a>
          <a href={null} class="flex items-center px-4 py-2">
            <div class="mr-6 text-center">
              <FavouriteSvg pathClass="dark:fill-dark-main-text" />
            </div>
            <span class="truncate text-sm dark:text-dark-main-text"
              >좋아요 표시한 동영상 동영상 동영상 동영상</span>
          </a>
        </div>
        <!-- Subscription menu -->
        <div id="my_page_menu" class="border-t-1 py-3 dark:border-dark-main-text/20">
          <div class="px-4 py-2">
            <span class="mr-2 text-base dark:text-dark-main-text">구독</span>
          </div>
        </div>
      </nav>
    </aside>

    <!-- 검색 결과 영상 List 영역 -->
    <Browser />
  </section>
</div>
