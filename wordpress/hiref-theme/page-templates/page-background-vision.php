<?php
/**
 * Template Name: Background, Vision & Mission
 */
get_header(); ?>

<section class="hiref-page-hero">
  <div class="hiref-page-hero__overlay"></div>
  <div class="hiref-container hiref-page-hero__content">
    <div class="hiref-breadcrumb">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
      <span class="hiref-breadcrumb__sep">/</span>
      <span>About Us</span>
      <span class="hiref-breadcrumb__sep">/</span>
      <span class="hiref-breadcrumb__current">Background, Vision &amp; Mission</span>
    </div>
    <h1 class="hiref-page-hero__title">Background, Vision &amp; Mission</h1>
  </div>
</section>

<main class="hiref-page-main">
  <div class="hiref-container hiref-page-content">
    <div>
      <section class="hiref-bvm__section">
        <span class="hiref-page-label">Our Story</span>
        <h2 class="hiref-page-heading">Background</h2>
        <div class="hiref-bvm__highlight">
          <p>HiREF (High Speed Reacting Flow Laboratory) was established in <strong style="color:var(--clr-orange)">2012</strong> at Universiti Teknologi Malaysia.</p>
        </div>
        <div class="hiref-page-text">
          <p>It was created to generate new and exciting innovative research projects related to combustion and heat transfer. This focus has driven the group to engage in cutting-edge research areas such as combustion turbulence modelling and experiments, detonation engine combustion, flame synthesis and flameless combustion.</p>
          <p>The prime focus of HiREF is the engineering applications of high-speed reacting flows in the presence of various physical phenomena such as combustion and heat transfer. This has driven the group to engage in cutting-edge research areas such as combustion turbulence modelling and experiments, pulse combustion, flameless combustion, and the development of Pulse Combustion Engines.</p>
          <p>The HiREF team is currently working to develop accurate turbulence and thermochemical models for different combustion applications, to build state-of-the-art experimental platforms for supersonic shock wave investigations, to synthesise combustion-based nanomaterials, and to establish a knowledge base for multidisciplinary thermofluid research topics.</p>
        </div>
        <h3 style="font-size:1.0625rem;font-weight:700;color:var(--clr-gray-900);margin:2rem 0 1rem">Active Research Areas</h3>
        <div class="hiref-bvm__areas">
          <?php
          $areas = [
            'Development of Pulse Detonation Engines',
            'Flameless Combustion for Biogas and Biomass',
            'Combustion Safety',
            'Pulse Combustion for Boiler and Drying Applications',
            'Mesoscale Vortex Combustion',
            'Combustion-based Synthesis of Nanomaterials',
            'Combustion Modelling',
            'Nanofluids Heat Transfer Enhancement — macroscale and microscale',
            'Heat Transfer and Combustion Measurement and Diagnostics',
          ];
          foreach ( $areas as $area ) {
            echo '<div class="hiref-bvm__area-item"><span class="hiref-bvm__area-dot"></span><span class="hiref-bvm__area-text">' . esc_html( $area ) . '</span></div>';
          }
          ?>
        </div>
      </section>

      <section class="hiref-bvm__section">
        <span class="hiref-page-label">Where We're Headed</span>
        <h2 class="hiref-page-heading">Vision</h2>
        <div class="hiref-bvm__vision-card">
          <div class="hiref-bvm__card-bar"></div>
          <p class="hiref-bvm__card-text">To become a hub of novel flame technology for the nation</p>
        </div>
      </section>

      <section class="hiref-bvm__section">
        <span class="hiref-page-label">Our Purpose</span>
        <h2 class="hiref-page-heading">Mission</h2>
        <div class="hiref-bvm__mission-card">
          <div class="hiref-bvm__card-bar"></div>
          <p class="hiref-bvm__card-text">To establish HiREF as a world-renowned centre of excellence in Research, Development and Innovation (R&amp;D&amp;I)</p>
        </div>
      </section>
    </div>
  </div>
</main>

<?php get_footer();
