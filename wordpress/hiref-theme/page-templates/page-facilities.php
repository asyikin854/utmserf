<?php
/**
 * Template Name: HiREF Facilities
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
      <span class="hiref-breadcrumb__current">HiREF Facilities</span>
    </div>
    <h1 class="hiref-page-hero__title">HiREF Facilities</h1>
  </div>
</section>

<main class="hiref-page-main">
  <div class="hiref-container hiref-page-content">
    <div style="margin-bottom:2rem">
      <span class="hiref-page-label">Lab Equipment</span>
      <h2 class="hiref-page-heading">Research Facilities</h2>
      <p class="hiref-page-desc">HiREF provides world-class research facilities to conduct high-impact research in combustion, thermofluid engineering and nanomaterial synthesis.</p>
    </div>

    <div class="hiref-lab-items">
      <?php
      $facilities = [
        [ 'name' => 'Quasi-Pyrolysis Chamber', 'subtitle' => 'Flame Synthesis Setup', 'desc' => 'Flame Synthesis of Carbon Nanotubes research is conducted in this test rig, equipped with up-to-date mass flow controllers for fuel and oxidizers, enabling more accurate and precise data collection.', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2022/10/Flame-Synthesis-Setup-2.jpg', 'fallback' => 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=640' ],
        [ 'name' => 'Rotating Detonation Engine', 'subtitle' => 'RDE Setup', 'desc' => 'Located in a soundproof chamber at the back of the lab, two 46 mm × 46 mm engines are set up for experimenting on the fundamentals of Rotating Detonation Engines (RDEs) and thermal management respectively.', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2022/10/RDE-Setup.jpg', 'fallback' => 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=640' ],
        [ 'name' => 'Flameless Combustion Chamber', 'subtitle' => 'Combustion Setup', 'desc' => 'Combustion chambers of various sizes are used to experiment on flameless combustion. Fuels under study include syngas and biogas.', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2022/10/Flameless-Combustor-Setup-1.jpg', 'fallback' => 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=640' ],
      ];

      foreach ( $facilities as $f ) {
        echo '<div class="hiref-lab-card"><div class="hiref-lab-card__grid">';
        echo '<div class="hiref-lab-card__img"><img src="' . esc_url( $f['img'] ) . '" alt="' . esc_attr( $f['name'] ) . '" onerror="this.src=\'' . esc_url( $f['fallback'] ) . '\'"></div>';
        echo '<div class="hiref-lab-card__body">';
        echo '<p class="hiref-lab-card__subtitle">' . esc_html( $f['subtitle'] ) . '</p>';
        echo '<h3 class="hiref-lab-card__title">' . esc_html( $f['name'] ) . '</h3>';
        echo '<p class="hiref-lab-card__desc">' . esc_html( $f['desc'] ) . '</p>';
        echo '</div></div></div>';
      }
      ?>
    </div>

    <div class="hiref-lab-note hiref-lab-note--navy">
      <h3 class="hiref-lab-note__title">GTC — Gas Turbine Combustion Research Group</h3>
      <p class="hiref-lab-note__text">The Gas Turbine Combustion Research Group (GTCRG) operates under the SERF umbrella and has its own dedicated facilities. For detailed GTC facility information, please contact the lab directly.</p>
    </div>
  </div>
</main>

<?php get_footer();
