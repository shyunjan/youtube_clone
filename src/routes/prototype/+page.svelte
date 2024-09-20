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

<header class="flex max-w-full flex-wrap items-center dark:bg-neutral-900">
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
  <section
    class="transition-height flex h-0 w-full flex-col duration-500 ease-in-out lg:visible lg:h-auto lg:w-auto lg:flex-grow lg:flex-row lg:items-center"
    class:invisible={!visibleMenu}
    class:h-48={visibleMenu}
  >
    <!-- display:none 대신에 visibility:hidden을 사용하고 height에 특정한 숫자가 지정되지 않으면 transition-[height]가 작동하지 않는다 -->
    <article
      class="prose flex max-w-full flex-grow flex-col justify-end text-white lg:flex lg:flex-row lg:items-center lg:justify-center"
    >
      <div class="main-menu">Home</div>
      <div class="main-menu">Gallery</div>
      <div class="main-menu">Weddings</div>
      <div class="main-menu">FAQ</div>
      <div class="main-menu">Bookings</div>
    </article>
    <section class="m-4 mt-2 text-center lg:mt-4">
      <img
        src="twitter-logo.png"
        alt="twitter_logo"
        class="inline w-5 cursor-pointer hover:bg-orange-400"
      />
      <img
        src="facebook-logo.png"
        alt="facebook-logo"
        class="inline w-5 cursor-pointer hover:bg-orange-400"
      />
    </section>
  </section>
</header>
