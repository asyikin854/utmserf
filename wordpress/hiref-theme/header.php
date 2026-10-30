<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="hiref-header" id="hiref-header">
  <!-- Top utility bar -->
  <div class="hiref-topbar">
    <div class="hiref-container hiref-topbar__inner">
      <div class="hiref-topbar__left">
        <a href="tel:<?php echo esc_attr( str_replace( ' ', '', hiref_option( 'hiref_phone', '+6075557036' ) ) ); ?>" class="hiref-topbar__link">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <?php echo esc_html( hiref_option( 'hiref_phone', '+607 555 7036' ) ); ?>
        </a>
        <a href="mailto:<?php echo esc_attr( hiref_option( 'hiref_email', 'hirefofficial@gmail.com' ) ); ?>" class="hiref-topbar__link">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <?php echo esc_html( hiref_option( 'hiref_email', 'hirefofficial@gmail.com' ) ); ?>
        </a>
      </div>
      <div class="hiref-topbar__right">
        <a href="#news" class="hiref-topbar__btn">News</a>
        <a href="#news" class="hiref-topbar__btn">Announcement</a>
      </div>
    </div>
  </div>

  <!-- Main nav -->
  <div class="hiref-container hiref-nav__inner">
    <!-- Logo -->
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hiref-logo">
      <div class="hiref-logo__icon">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
      </div>
      <div class="hiref-logo__text">
        <span class="hiref-logo__name">HIREF</span>
        <span class="hiref-logo__sub">UTM · Johor Bahru</span>
      </div>
    </a>

    <!-- Desktop nav -->
    <nav class="hiref-nav" id="hiref-nav">
      <?php
      wp_nav_menu( [
        'theme_location' => 'primary',
        'container'      => false,
        'menu_class'     => 'hiref-nav__list',
        'fallback_cb'    => 'hiref_fallback_nav',
        'walker'         => new HIREF_Nav_Walker(),
      ] );
      ?>
    </nav>

    <!-- Search -->
    <button class="hiref-nav__search hidden-mobile" aria-label="Search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </button>

    <!-- Mobile hamburger -->
    <button class="hiref-hamburger" id="hiref-hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile menu -->
  <div class="hiref-mobile-menu" id="hiref-mobile-menu" aria-hidden="true">
    <?php
    wp_nav_menu( [
      'theme_location' => 'primary',
      'container'      => false,
      'menu_class'     => 'hiref-mobile-menu__list',
      'fallback_cb'    => false,
    ] );
    ?>
    <div class="hiref-mobile-menu__cta">
      <a href="#contact" class="hiref-btn hiref-btn--primary hiref-btn--block">Join Us</a>
    </div>
  </div>
</header>

<?php
/* Nav Walker + fallback are defined in functions.php so they load before header rendering. */
?>
