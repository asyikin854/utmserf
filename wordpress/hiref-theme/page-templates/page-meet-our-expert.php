<?php
/**
 * Template Name: Meet Our Expert
 */
get_header(); ?>

<section class="hiref-page-hero">
  <div class="hiref-page-hero__overlay"></div>
  <div class="hiref-container hiref-page-hero__content">
    <div class="hiref-breadcrumb">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
      <span class="hiref-breadcrumb__sep">/</span>
      <span>Our Expert</span>
      <span class="hiref-breadcrumb__sep">/</span>
      <span class="hiref-breadcrumb__current">Meet Our Expert</span>
    </div>
    <h1 class="hiref-page-hero__title">Meet Our Expert</h1>
  </div>
</section>

<main class="hiref-page-main">
  <div class="hiref-container hiref-page-content">
    <div style="margin-bottom:2rem">
      <span class="hiref-page-label">Our Researchers</span>
      <h2 class="hiref-page-heading">Expert Profiles</h2>
      <p class="hiref-page-desc">Our team comprises internationally trained researchers with doctoral degrees from world-leading universities in the UK, USA, Japan, and Malaysia.</p>
    </div>

    <div class="hiref-experts">
      <?php
      $experts = [
        [ 'name' => 'Prof. Dr. Mazlan Abdul Wahid', 'degrees' => 'BEng Aero (Florida) · MSc Combustion (Leeds) · PhD Mech (SUNY)', 'bio' => 'Professor in the Department of Thermofluid, Faculty of Engineering, School of Mechanical Engineering. Received his Bachelor degree from Embry-Riddle Aeronautical University, Daytona Beach, Florida; Master Degree from University of Leeds, Yorkshire, England, UK; and PhD from State University of New York, Buffalo, New York, USA.', 'research' => 'Combustion, Energy and Heat Transfer; Sustainable low emission combustion; High speed reacting flow; Sustainable energy conversion; Heat transfer enhancement.', 'linkedin' => 'https://linkedin.com/in/mazlan-abdul-wahid-1a265099', 'photo' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/05/MAWfrontnobg_half.png' ],
        [ 'name' => 'Assoc. Prof. Ts. Dr Mohd Fairus Mohd Yasin', 'degrees' => 'BSc Eng (Wisconsin) · PhD Mech (Cambridge)', 'bio' => 'Senior lecturer in the Department of Thermofluid. Received his Bachelor degree from the University of Wisconsin, Madison, United States and completed his PhD from the University of Cambridge, United Kingdom in 2014.', 'research' => 'Specialises in reacting flow modelling using OpenFOAM. Reviewer for the Applied Energy journal.', 'linkedin' => 'https://linkedin.com/in/fairus-mohd-yasin-10565118', 'photo' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/05/MFMSFrontnobg_half.png' ],
        [ 'name' => 'Assoc. Prof. Madya Dr. Aminuddin Saat', 'degrees' => 'BEng Mech (UTM) · MSc Auto (Coventry) · PhD Combustion (Leeds)', 'bio' => "Senior lecturer in the School of Mechanical Engineering, Department of Thermofluid. Received his bachelor's degree from UTM; MSc from Coventry University, UK; and PhD from the University of Leeds, UK.", 'research' => 'Combustion and flame studies, burning rates and flame propagation, flame instability, combustion in aerosols and sprays, optical diagnostics, thermodynamics, heat transfer.', 'linkedin' => 'https://linkedin.com/in/aminuddin-saat-b45246244', 'photo' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/07/AS.png' ],
        [ 'name' => 'Dr Natrah Kamaruzaman', 'degrees' => 'BSc Mech (Okinawa) · MSc Mech (UTM) · PhD Mech (UTM)', 'bio' => 'Senior lecturer in the Department of Thermofluid. Received her Bachelor degree from the University of the Ryukyus, Okinawa, Japan; Master and PhD from Universiti Teknologi Malaysia.', 'research' => 'Research analysis, new concept development, simulation and validation. Broad knowledge in micro cooling, heat transfer, fluid dynamics and thermal engineering.', 'linkedin' => 'https://linkedin.com/in/natrah-kamaruzaman-877518aa', 'photo' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/07/NK.png' ],
        [ 'name' => 'Dr Mohsin Mohd Sies', 'degrees' => 'BSc Nuclear (RPI) · MSc Mech (Ann Arbor) · PhD Mech (UTM)', 'bio' => 'Senior lecturer in the Department of Thermofluid. Received his Bachelor Degree from Rensselaer Polytechnic Institute, Troy, NY; Master degree from University of Michigan, Ann Arbor; PhD from Universiti Teknologi Malaysia.', 'research' => 'High-speed combustion phenomena (Detonation waves), Chemical kinetics, Turbulent combustion, Thermodynamics and energy studies, Computational methods in Engineering.', 'linkedin' => 'https://linkedin.com/in/mohsin-mohd-sies-66986020a', 'photo' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2023/08/Dr-Mohsin-Mohd-Sies.png' ],
        [ 'name' => 'Dr Norikhwan Hamzah', 'degrees' => 'BSc Eng (Wisconsin) · MSc Thermal Power (Cranfield) · PhD Mech (UTM)', 'bio' => 'Senior lecturer in the Department of Thermofluid. Bachelor from University of Wisconsin, Madison (2007); MSc in Thermal Power from Cranfield University, UK (2015); PhD from UTM (2020).', 'research' => 'Experimental works on advanced material synthesis using combustion processes.', 'linkedin' => 'https://linkedin.com/in/norikhwan-hamzah-2730863a', 'photo' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/05/NHfrontnobg_half.png' ],
        [ 'name' => 'Ir Dr Norazila Othman', 'degrees' => 'BEng Aero (UTM) · MEng Mech (UTM) · PhD Aero (Tokyo)', 'bio' => "Senior lecturer at UTM's Faculty of Mechanical Engineering, Department of Thermofluid. BSc in Mechanical Aeronautics from UTM (2009); MSc from UTM (2011); PhD from Tokyo Metropolitan University (2016).", 'research' => 'Biodiesel, microgas turbines, and biomass gasification technology.', 'linkedin' => 'https://linkedin.com/in/ir-ts-dr-norazila-othman-357399158', 'photo' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/05/NOFrontnobg_half.png' ],
        [ 'name' => 'Dr Mohd Faizal Hasan', 'degrees' => 'BEng Mech (Japan) · MEng Mech (UTM) · PhD Eng (Japan)', 'bio' => 'Obtained his Ph.D. degree in Engineering from Keio University, Japan. His PhD research focused on Palladium/Argentum (Pd/Ag) purification membrane for fuel cell applications, and methanol steam reforming for hydrogen production.', 'research' => 'Densification, torrefaction and gasification of biomass.', 'linkedin' => null, 'photo' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/07/MFH.png' ],
      ];

      foreach ( $experts as $e ) {
        echo '<div class="hiref-expert-card"><div class="hiref-expert-card__grid">';
        echo '<div class="hiref-expert-card__photo"><img src="' . esc_url( $e['photo'] ) . '" alt="' . esc_attr( $e['name'] ) . '" onerror="this.src=\'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=300\';this.className=\'w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow\'"></div>';
        echo '<div class="hiref-expert-card__body">';
        echo '<div class="hiref-expert-card__header">';
        echo '<div><h3 class="hiref-expert-card__name">' . esc_html( $e['name'] ) . '</h3>';
        echo '<p class="hiref-expert-card__degrees">' . esc_html( $e['degrees'] ) . '</p></div>';
        if ( $e['linkedin'] ) {
          echo '<a href="' . esc_url( $e['linkedin'] ) . '" target="_blank" rel="noopener noreferrer" class="hiref-expert-card__linkedin"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>';
        }
        echo '</div>';
        echo '<div class="hiref-expert-card__slabel">Biography</div>';
        echo '<p class="hiref-expert-card__bio">' . esc_html( $e['bio'] ) . '</p>';
        echo '<div class="hiref-expert-card__research"><div class="hiref-expert-card__rlabel">Research Focus</div>';
        echo '<p class="hiref-expert-card__rtext">' . esc_html( $e['research'] ) . '</p></div>';
        echo '</div></div></div>';
      }
      ?>
    </div>
  </div>
</main>

<?php get_footer();
