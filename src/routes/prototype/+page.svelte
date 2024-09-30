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

<header>
  <nav
    class="flex h-14 flex-col justify-between px-3 py-1 transition-height duration-500 ease-in-out lg:flex-row lg:items-center dark:bg-neutral-900"
    class:h-68={visibleMenu}
  >
    <!-- display:none 대신에 visibility:hidden을 사용하고 height에 특정한 숫자가 지정되지 않으면 transition-height가 작동하지 않는다 -->
    <section class="flex items-center justify-between">
      <img src="/Youtube-logo-with-flat-design-edited.png" alt="logo" class="h-10 w-32 py-1" />
      <button class="lg:hidden" on:click={toggleMenu} on:keypress={toggleMenu}>
        <i class="fa-solid fa-bars text-3xl dark:text-white dark:hover:text-orange-400"></i>
      </button>
    </section>
    <ul
      class="flex flex-col justify-between lg:flex lg:flex-row lg:justify-center dark:text-white"
      class:hidden={!visibleMenu}
    >
      <li><a href={null} class="main-menu">Home</a></li>
      <li><a href={null} class="main-menu">Gallery</a></li>
      <li><a href={null} class="main-menu">Weddings</a></li>
      <li><a href={null} class="main-menu">FAQ</a></li>
      <li><a href={null} class="main-menu">Bookings</a></li>
    </ul>
    <ul
      class="my-1 flex min-w-16 justify-center pb-2 text-center lg:flex lg:pb-1"
      class:hidden={!visibleMenu}
    >
      <li class="cursor-pointer rounded-sm p-1 hover:bg-orange-400">
        <img src="twitter-logo.png" alt="twitter_logo" class="inline w-5" />
      </li>
      <li class="cursor-pointer rounded-sm p-1 hover:bg-orange-400">
        <img src="facebook-logo.png" alt="facebook-logo" class="inline w-5" />
      </li>
    </ul>
  </nav>
</header>
<section>
  <article
    class="prose h-screen max-w-full bg-slate-50 prose-h1:text-rose-700 prose-p:text-stone-800 prose-a:text-sky-600 dark:bg-neutral-900 prose-h1:dark:text-orange-300 prose-p:dark:text-stone-300 prose-a:dark:text-emerald-300"
  >
    <h1>Welcome to SvelteKit</h1>
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
  </article>
</section>
