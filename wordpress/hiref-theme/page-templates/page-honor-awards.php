<?php
/**
 * Template Name: Honor & Awards
 */
get_header(); ?>

<section class="hiref-page-hero">
  <div class="hiref-page-hero__overlay"></div>
  <div class="hiref-container hiref-page-hero__content">
    <div class="hiref-breadcrumb">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
      <span class="hiref-breadcrumb__sep">/</span>
      <span>R&amp;D</span>
      <span class="hiref-breadcrumb__sep">/</span>
      <span class="hiref-breadcrumb__current">Honor &amp; Awards</span>
    </div>
    <h1 class="hiref-page-hero__title">Honor &amp; Awards</h1>
  </div>
</section>

<main class="hiref-page-main">
  <div class="hiref-container hiref-page-content">
    <div style="margin-bottom:2rem">
      <span class="hiref-page-label">Recognition</span>
      <h2 class="hiref-page-heading">Awards &amp; Honours</h2>
      <p class="hiref-page-desc">Recognising the achievements of our researchers, students and alumni across national and international platforms from 2008 to present.</p>
    </div>

    <div class="hiref-awards">
      <?php
      $awards = [
        '2023' => [
          'Dr. Natrah honored with the Excellent Service Award for the year 2022.',
          'Assoc. Prof. Dr. Aminuddin Saat — Anugerah Jasa Bakti achievement.',
          "Prof. Mazlan Abd Wahid and team appointed as training provider for 'Hydrogen Gas Turbine Technology Course' by ILSAS, TNB Integrated Learning Solution Sdn Bhd.",
          'Prof. Dr. Mazlan Abd Wahid appointed as Guest Professor at Jiangsu University.',
          'Prof. Dr. Mazlan Abd Wahid — Best Paper Award at the 17th Asian International Conference on Fluid Machinery (AICFM17), Zhenjiang, China.',
          "Muhammad Amirrul Amin Moen, Dr. Norikhwan Hamzah, Vincent Tan Yi De, Dr. Mohd Fairus Mohd Yasin — Best Paper Award, 22nd Asia Simulation Conference 2023, for 'Analysis of Fuel Concentration Effect Towards CNT Growth in Methane Diffusion Flames Using CFD Simulations'.",
          'Dr. Norikhwan Hamzah and team — Bronze Award at 25th Industrial Art & Technology Exhibition (INATEX 2023).',
        ],
        '2022' => [
          'Prof. Mazlan Abd Wahid — Global Top 2% Scientist 2022 (joined 51 other UTM researchers).',
          "Dr. Mohammad Nurizat Rahman (alumnus) — 'The Most Promising Researcher' award at TNBR's Employee Excellence Award 2022.",
          'Dr. Norikhwan Hamzah — Best Paper Award at SIE Conference 2022.',
        ],
        '2021' => [
          "Dr Norazila Othman & team — Gold at Asia International Innovation Exhibition (AIINEX) 2021 for 'Novel Swirl Fixed Based Gasifier'.",
          "Dr Norazila Othman & team — Special Award at AIINEX 2021 for 'Cfinder'.",
          "Dr Norazila Othman & team — Gold at AIINEX 2021 for 'Cfinder'.",
          "Dr Norazila Othman & team — Best Award at AIINEX 2021 for 'Novel Swirl Fixed Based Gasifier'.",
          "Dr Mohd Fairus Mohd Yasin & team — Silver at Malaysia Technology Expo 2021 (MTE) International Innovation Awards for 'Green Synthesis Solution for Carbon-Based Nanomaterial in Environment'.",
        ],
        '2020' => [
          'Mohammad Nazri Mohd Jaafar & team — Science Award at SARES 2020 (International Sustainable Aviation and Energy Research Society).',
        ],
        '2019' => [
          "Mohd Fairus Mohd Yasin & team — Best Presenter Award at 11th International Meeting on Advances in ThermoFluids (Kyushu University) for 'Detailed Chemistry Approach for Computational Study of Flame Synthesis'.",
        ],
        '2014' => [
          "Silver Medal — Malaysia Technology Expo (MTE) 2014 for 'Low NOx Flameless Combustor Fueled by Biogas From Palm Oil Mill Effluent'.",
          "Bronze Medal — Malaysia Technology Expo (MTE) 2014 for 'Pulse Combustion Hot Water Boiler'.",
        ],
        '2009' => [
          "Gold Medal — Malaysia Technology Expo (MTE) 2009 for 'Pulse Combustion Tray Dryer'.",
        ],
        '2008' => [
          "Bronze Medal — Innovation and Technology Expo 2008 (INATEX) for 'Pulse Combustion Tray Dryer'.",
        ],
      ];

      foreach ( $awards as $year => $items ) {
        echo '<div class="hiref-award-year">';
        echo '<div class="hiref-award-badge"><span>' . esc_html( $year ) . '</span></div>';
        echo '<div class="hiref-award-items">';
        foreach ( $items as $item ) {
          $medal = null;
          foreach ( [ 'Gold', 'Silver', 'Bronze' ] as $m ) {
            if ( stripos( $item, $m ) !== false ) { $medal = $m; break; }
          }
          echo '<div class="hiref-award-item">';
          if ( $medal ) {
            $cls = strtolower( $medal );
            echo '<span class="hiref-medal hiref-medal--' . esc_attr( $cls ) . '">' . esc_html( $medal ) . '</span>';
          } else {
            echo '<span class="hiref-award-dot"></span>';
          }
          echo '<p class="hiref-award-text">' . esc_html( $item ) . '</p>';
          echo '</div>';
        }
        echo '</div></div>';
      }
      ?>
    </div>
  </div>
</main>

<?php get_footer();
