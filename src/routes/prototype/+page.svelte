<script>
  let visibleMenu = false;

  function toggleMenu() {
    visibleMenu = !visibleMenu;
  }
</script>

<svelte:window
  on:resize={() => {
    visibleMenu = false;
  }}
/>

<header class="flex max-w-full flex-wrap dark:bg-neutral-900">
  <img src="/Youtube-logo-with-flat-design-edited.png" alt="logo" class="mx-3 my-2 h-10 w-32" />
  <section
    role="button"
    tabindex="0"
    class="mx-2 my-1 flex h-12 flex-grow flex-col items-end justify-evenly py-1 lg:hidden"
    on:click={toggleMenu}
    on:keypress={toggleMenu}
  >
    <span class="h-1 w-8 rounded dark:bg-white" />
    <span class="h-1 w-8 rounded dark:bg-white" />
    <span class="h-1 w-8 rounded dark:bg-white" />
  </section>
  <section class="flex w-full justify-stretch lg:w-auto lg:flex-grow lg:justify-end">
    <article
      class="prose flex max-w-full flex-grow flex-col justify-end text-white transition-[height] duration-500 ease-in-out lg:visible lg:mb-0 lg:flex lg:h-auto lg:flex-row lg:items-center"
      class:invisible={!visibleMenu}
      class:h-44={visibleMenu}
      class:h-0={!visibleMenu}
      class:mb-4={visibleMenu}
    >
      <!-- display:none 대신에 visibility:hidden을 사용하고 height에 특정한 숫자가 지정되지 않으면 transition-[height]가 작동하지 않는다 -->
      <div class="main-menu">Home</div>
      <div class="main-menu">Gallery</div>
      <div class="main-menu">Weddings</div>
      <div class="main-menu">FAQ</div>
      <div class="main-menu">Bookings</div>
      <div class="not-prose mx-4 text-center">
        <img src="twitter-logo.png" alt="twitter_logo" class="inline w-5 hover:bg-orange-400" />
        <img src="facebook-logo.png" alt="facebook-logo" class="inline w-5 hover:bg-orange-400" />
      </div>
    </article>
  </section>
</header>
