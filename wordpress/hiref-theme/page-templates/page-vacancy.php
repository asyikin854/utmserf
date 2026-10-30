<?php
/**
 * Template Name: Vacancy
 */
get_header(); ?>

<section class="hiref-page-hero">
  <div class="hiref-page-hero__overlay"></div>
  <div class="hiref-container hiref-page-hero__content">
    <div class="hiref-breadcrumb">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
      <span class="hiref-breadcrumb__sep">/</span>
      <span class="hiref-breadcrumb__current">Vacancy</span>
    </div>
    <h1 class="hiref-page-hero__title">Vacancy</h1>
  </div>
</section>

<main class="hiref-page-main">
  <div class="hiref-container hiref-page-content">
    <div style="margin-bottom:2.5rem">
      <span class="hiref-page-label">Join Our Team</span>
      <h2 class="hiref-page-heading">Open Positions</h2>
      <p class="hiref-page-desc">We welcome motivated researchers and students to join the HiREF laboratory at Universiti Teknologi Malaysia.</p>
    </div>

    <div class="hiref-vacancy-card">
      <div class="hiref-vacancy-card__hdr hiref-vacancy-card__hdr--dark">
        <span class="hiref-vacancy-tag">Research Positions</span>
        <h3 class="hiref-vacancy-card__title">Master / PhD Positions</h3>
      </div>
      <div class="hiref-vacancy-card__body">
        <h4 class="hiref-vacancy-role">PhD / MSc Full Time Researcher Opportunity</h4>
        <div class="hiref-vacancy-details">
          <?php
          $details = [
            'Institution' => 'Universiti Teknologi Malaysia, Skudai, Johor, Malaysia (On-site)',
            'Type' => 'Postgraduate position (PhD/MSc Researcher) — UTM Johor Bahru, Faculty of Mechanical Engineering',
            'Research Focus' => 'Multidisciplinary experimental research — developing a combustion-based synthesis process for producing carbon nanotubes',
            'Stipend' => 'A monthly stipend will be provided',
          ];
          foreach ( $details as $label => $val ) {
            echo '<div class="hiref-vacancy-detail"><p class="hiref-vacancy-detail__label">' . esc_html( $label ) . '</p><p class="hiref-vacancy-detail__val">' . esc_html( $val ) . '</p></div>';
          }
          ?>
        </div>
        <h5 class="hiref-vacancy-section-title">Eligibility Requirements</h5>
        <div class="hiref-vacancy-reqs">
          <?php
          $reqs = [
            'BSc Mechanical Engineering (or related) with CGPA > 3.10 → enrol as MSc student',
            'BSc Mechanical Engineering (or related) with CGPA > 3.65 → enrol as PhD student',
            'MSc Mechanical Engineering (or related) with CGPA > 3.50 → enrol as normal PhD student',
          ];
          foreach ( $reqs as $req ) {
            echo '<div class="hiref-vacancy-req"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span class="hiref-vacancy-req__text">' . esc_html( $req ) . '</span></div>';
          }
          ?>
        </div>
        <h5 class="hiref-vacancy-section-title">Candidate Profile</h5>
        <div class="hiref-vacancy-profile">
          <?php
          $profile = [
            'Interest in research related to combustion and material science',
            'Ability to work independently to design and develop test rig (training provided)',
            'Experience with CFD tools such as Ansys Fluent is a plus',
            'Proficient in English (Written and Spoken)',
            'Enthusiastic, self-motivated, independent and hardworking',
            'Open for Malaysian candidates only',
            'Expected start date: negotiable',
          ];
          foreach ( $profile as $item ) {
            echo '<div class="hiref-vacancy-profile__item"><span class="hiref-vacancy-profile__dot"></span>' . esc_html( $item ) . '</div>';
          }
          ?>
        </div>
        <div class="hiref-vacancy-apply">
          <div>
            <p class="hiref-vacancy-apply__label">Apply To</p>
            <p class="hiref-vacancy-apply__name">Dr. Norikhwan Hamzah</p>
          </div>
          <a href="mailto:norikhwan@utm.my" class="hiref-btn hiref-btn--orange hiref-btn--sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            norikhwan@utm.my
          </a>
        </div>
      </div>
    </div>

    <div class="hiref-vacancy-card">
      <div class="hiref-vacancy-card__hdr hiref-vacancy-card__hdr--navy">
        <span class="hiref-vacancy-tag">Student Programme</span>
        <h3 class="hiref-vacancy-card__title">Internship</h3>
      </div>
      <div class="hiref-vacancy-card__body">
        <h4 class="hiref-vacancy-role">Internship Programme</h4>
        <div class="hiref-vacancy-intern-info">
          HiREF has internship positions open <strong>throughout the year</strong> for a minimum of <strong style="color:var(--clr-orange)">12 weeks</strong>. Interested students should email their CVs to the contacts below.
        </div>
        <div class="hiref-vacancy-contacts">
          <?php
          $contacts = [
            [ 'Contact 1', 'Dr Mohd Fairus Mohd Yasin', 'mohdfairus@mail.fkm.utm.my' ],
            [ 'Contact 2', 'Dr Norikhwan Hamzah', 'norikhwan@utm.my' ],
          ];
          foreach ( $contacts as $c ) {
            echo '<div class="hiref-vacancy-contact"><p class="hiref-vacancy-contact__label">' . esc_html( $c[0] ) . '</p><p class="hiref-vacancy-contact__name">' . esc_html( $c[1] ) . '</p><a href="mailto:' . esc_attr( $c[2] ) . '" class="hiref-vacancy-contact__email"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> ' . esc_html( $c[2] ) . '</a></div>';
          }
          ?>
        </div>
      </div>
    </div>
  </div>
</main>

<?php get_footer();
