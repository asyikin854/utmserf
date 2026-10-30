<?php
/**
 * Template Name: HiREF Services
 */
get_header(); ?>

<section class="hiref-page-hero">
  <div class="hiref-page-hero__overlay"></div>
  <div class="hiref-container hiref-page-hero__content">
    <div class="hiref-breadcrumb">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
      <span class="hiref-breadcrumb__sep">/</span>
      <span>Facilities &amp; Services</span>
      <span class="hiref-breadcrumb__sep">/</span>
      <span class="hiref-breadcrumb__current">HiREF Services</span>
    </div>
    <h1 class="hiref-page-hero__title">HiREF Services</h1>
  </div>
</section>

<main class="hiref-page-main">
  <div class="hiref-container hiref-page-content">
    <div style="margin-bottom:2rem">
      <span class="hiref-page-label">What We Offer</span>
      <h2 class="hiref-page-heading">Laboratory Services</h2>
      <p class="hiref-page-desc">HiREF offers advanced testing and simulation services for combustion and thermofluid research, available to academic and industry partners.</p>
    </div>

    <div class="hiref-lab-items">
      <?php
      $services = [
        [ 'name' => 'CFD for Reacting and Non-Reacting Flow', 'desc' => 'To understand and predict the flow field characteristics, CFD simulation is carried out on the subject of study. Simulations are performed on Ansys Fluent and OpenFOAM.', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2022/10/CFD-Facilities-Picture.jpg', 'fallback' => 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=640' ],
        [ 'name' => 'Combustion Testing of Natural Gas Composition', 'desc' => 'Laminar flame characteristics are studied using high-speed Schlieren imaging of combustion taking place inside a 29-litre cylinder chamber with optical window access.', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2022/10/Flame-Optics-Setup-cropped.jpg', 'fallback' => 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=640' ],
      ];

      foreach ( $services as $i => $s ) {
        echo '<div class="hiref-lab-card"><div class="hiref-lab-card__grid">';
        echo '<div class="hiref-lab-card__img"><img src="' . esc_url( $s['img'] ) . '" alt="' . esc_attr( $s['name'] ) . '" onerror="this.src=\'' . esc_url( $s['fallback'] ) . '\'"></div>';
        echo '<div class="hiref-lab-card__body">';
        echo '<p class="hiref-lab-card__subtitle">Service ' . ( $i + 1 ) . '</p>';
        echo '<h3 class="hiref-lab-card__title">' . esc_html( $s['name'] ) . '</h3>';
        echo '<p class="hiref-lab-card__desc">' . esc_html( $s['desc'] ) . '</p>';
        echo '</div></div></div>';
      }
      ?>
    </div>

    <div class="hiref-lab-note hiref-lab-note--orange">
      <h3 class="hiref-lab-note__title">Interested in Our Services?</h3>
      <p class="hiref-lab-note__text" style="margin-bottom:1rem">For service inquiries, collaboration proposals, or to discuss your research needs, contact our team directly.</p>
      <a href="mailto:hirefofficial@gmail.com" class="hiref-btn hiref-btn--orange hiref-btn--sm">Contact HiREF</a>
    </div>
  </div>
</main>

<?php get_footer();
