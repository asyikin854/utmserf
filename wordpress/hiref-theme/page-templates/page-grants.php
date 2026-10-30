<?php
/**
 * Template Name: Grants
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
      <span class="hiref-breadcrumb__current">Grant</span>
    </div>
    <h1 class="hiref-page-hero__title">Research Grants</h1>
  </div>
</section>

<main class="hiref-page-main">
  <div class="hiref-container hiref-page-content">
    <div style="margin-bottom:3.5rem">
      <span class="hiref-page-label">Funding</span>
      <h2 class="hiref-page-heading">Current &amp; Recent Grants</h2>
    </div>
    <div class="hiref-table-wrap">
      <table class="hiref-table">
        <thead><tr><th>Grant / Scheme</th><th>Project Title</th><th>Budget</th><th>Principal Investigator</th></tr></thead>
        <tbody>
          <?php
          $current = [
            [ 'FRGS 2023', 'Synthesis of Yellow Grease Oil and Polypropylene Plastic Wastes to Novel Green Fuel Using Co-Pyrolysis Optimum Correlation', 'RM 126,710', 'Dr. Norazila Othman' ],
            [ 'UTMER 2023', 'Thermal Effects On Magnetic Bearings In Turbomachinery System', 'RM 69,200', 'Assoc. Prof. Dr. Aminuddin Saat' ],
            [ 'UTM-TDR 45.1', 'Development of Rotating Detonation Engine', 'RM 80,000', 'Prof Dr Mazlan Abdul Wahid' ],
            [ 'Biogas RDE', 'Continuous Rotating Detonation Engines Fueled by Biogas for Rural Area Power Generation', 'RM 135,000', 'Prof Dr Mazlan Abdul Wahid' ],
            [ 'CNT Growth', 'Understanding Effects of Mixture Fraction and Fuel Composition on Carbon Nanotube Growth', 'RM 80,000', 'Dr Mohd Fairus Mohd Yasin' ],
            [ 'CNT Hydrophilic', 'Synthesis of Hydrophilic Carbon Nanotube in Low Temperature Environment with Combustion-Assisted CVD', 'RM 155,600', 'Dr Mohd Fairus Mohd Yasin' ],
            [ 'MWCNT-30', 'Multi-Walled Carbon Nanotubes 30nm (MWCNT-30)', 'RM 20,000', 'Dr Mohd Fairus Mohd Yasin' ],
            [ 'EFB Briquettes', 'Investigation on Dual-Function Natural Binder Based Empty Fruit Bunch Briquettes Torrefied by Microwave Heating', 'RM 30,000', 'Dr Mohd Faizal Hassan' ],
            [ 'Li-Ion Battery', 'Multi-Dimensional Thermal Transport of a Lithium-Ion Battery Under Different Thermal Conditions', 'RM 30,000', 'Dr Mohd Ibthisham Ardani' ],
            [ 'Nanomaterial CVD', 'Investigation of Nanomaterial Growth on High-Mobility Substrate Using Chemical Vapor Deposition', 'RM 140,000', 'Dr Mohd Mohsin Mohd Sies' ],
            [ 'Biodiesel Burner', 'Optimization on Combustion Performance of Firing Biodiesel from Waste Cooking Oil in an Oil Burner', 'RM 30,000', 'Dr Norazila Othman' ],
            [ 'CNT Yarn', 'Synthesis of Carbon Nanotube Yarn in Quasi-Pyrolysis Environment', 'RM 20,000', 'Dr Norikhwan Hamzah' ],
          ];
          foreach ( $current as $g ) {
            echo '<tr><td class="col-scheme">' . esc_html( $g[0] ) . '</td><td>' . esc_html( $g[1] ) . '</td><td class="col-budget">' . esc_html( $g[2] ) . '</td><td>' . esc_html( $g[3] ) . '</td></tr>';
          }
          ?>
        </tbody>
      </table>
    </div>

    <h2 class="hiref-page-heading" style="margin-top:3.5rem;margin-bottom:1.5rem">Historical Grants</h2>
    <div class="hiref-table-wrap">
      <table class="hiref-table">
        <thead><tr><th>Grant / Scheme</th><th>Project Title</th><th>Period</th><th>Funding Body</th></tr></thead>
        <tbody>
          <?php
          $historical = [
            [ 'EScience / MOSTI 2013', 'Development of Novel Low NOx Flameless Combustion System Fueled by Biogas from Palm Oil Mill Effluent', 'June 2013 – May 2015', 'MOSTI' ],
            [ 'RUG 2012', 'Development of Pulse Detonation Engine', 'Dec 2012 – Nov 2014', 'UTM Research University Grant' ],
            [ 'PRGS 2012', 'Pulse Combustion Hot Water Boiler Prototype', 'Aug 2012 – Jul 2014', 'Ministry of Higher Education' ],
            [ 'RUG 2011', 'Pulse Detonation Combustion for Technological Development of Green Engine', 'Apr 2011 – Mar 2013', 'UTM Research University Grant' ],
            [ 'FRGS 2010', 'Theoretical and Experimental Investigation on Hydrogen-Enriched Gaseous Diffusion Flames', 'Apr 2010 – Mar 2012', 'Ministry of Higher Education' ],
            [ 'EScience 2008', 'Pulse Detonation for Propulsion Purposes', 'Nov 2008 – Feb 2011', 'MOSTI' ],
            [ 'FRGS 2006', 'Biofuel Pulse Combustion Characteristics', 'Nov 2006 – Oct 2008', 'Ministry of Higher Education' ],
            [ 'EScience 2006', 'Portable Biofuel Pulse Combustion Dryer', 'Dec 2006 – Nov 2008', 'MOSTI' ],
            [ 'RMC 2004', 'Studies on Effect of Swirl Intensities and Fuel Mixtures on Combustion and Flame Characteristics', 'Jun 2004 – Jun 2006', 'UTM Research Management Centre' ],
          ];
          foreach ( $historical as $g ) {
            echo '<tr><td class="col-hist-scheme">' . esc_html( $g[0] ) . '</td><td>' . esc_html( $g[1] ) . '</td><td>' . esc_html( $g[2] ) . '</td><td>' . esc_html( $g[3] ) . '</td></tr>';
          }
          ?>
        </tbody>
      </table>
    </div>
  </div>
</main>

<?php get_footer();
