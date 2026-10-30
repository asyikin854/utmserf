<?php get_header(); ?>

<!-- ── HERO SLIDER ── -->
<section class="hiref-hero" id="home">
  <?php
  $slides = get_posts( [ 'post_type' => 'hiref_slide', 'posts_per_page' => 10, 'orderby' => 'menu_order', 'order' => 'ASC' ] );
  if ( empty( $slides ) ) {
    // Default slides if none exist in WP
    $slides = [
      (object)[ 'ID' => 0, '_tag' => 'Research Mission', '_headline' => "Global Leader in\nResource Sustainability", '_sub' => 'Advancing turbulence and thermochemical models across combustion, heat transfer, and supersonic reacting flows.', '_img' => get_template_directory_uri() . '/assets/images/slide-1.jpg' ],
      (object)[ 'ID' => 0, '_tag' => 'Universiti Teknologi Malaysia', '_headline' => "World-Ranked\nResearch University", '_sub' => 'HIREF is proudly part of UTM — a globally recognised research university advancing science and engineering.', '_img' => get_template_directory_uri() . '/assets/images/slide-2.jpg' ],
      (object)[ 'ID' => 0, '_tag' => 'High Speed Flow', '_headline' => "High Speed\nReacting Flow Lab", '_sub' => "State-of-the-art platforms for supersonic shock wave investigations and hypersonic propulsion at UTM's HIREF.", '_img' => get_template_directory_uri() . '/assets/images/slide-3.jpg' ],
    ];
    $use_defaults = true;
  }
  ?>

  <div class="hiref-hero__slides" data-slides>
    <?php
    foreach ( $slides as $i => $slide ) :
      if ( isset( $use_defaults ) ) {
        $tag      = $slide->_tag;
        $headline = $slide->_headline;
        $sub      = $slide->_sub;
        $img_url  = $slide->_img;
      } else {
        $tag      = get_post_meta( $slide->ID, '_hiref_tag', true );
        $headline = get_post_meta( $slide->ID, '_hiref_headline', true );
        $sub      = get_post_meta( $slide->ID, '_hiref_sub', true );
        $img_url  = get_the_post_thumbnail_url( $slide->ID, 'full' );
      }
    ?>
    <div class="hiref-hero__slide<?php echo $i === 0 ? ' is-active' : ''; ?>" data-slide="<?php echo esc_attr( $i ); ?>">
      <div class="hiref-hero__bg" style="background-image:url('<?php echo esc_url( $img_url ); ?>')"></div>
      <div class="hiref-hero__overlay"></div>
      <div class="hiref-container hiref-hero__content">
        <span class="hiref-hero__tag"><?php echo esc_html( $tag ); ?></span>
        <h1 class="hiref-hero__headline"><?php echo nl2br( esc_html( $headline ) ); ?></h1>
        <p class="hiref-hero__sub"><?php echo esc_html( $sub ); ?></p>
        <div class="hiref-hero__ctas">
          <a href="#research" class="hiref-btn hiref-btn--primary">
            Explore Research
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#about" class="hiref-btn hiref-btn--ghost">About HIREF</a>
        </div>
      </div>
    </div>
    <?php endforeach; ?>
  </div>

  <!-- Slide dots -->
  <div class="hiref-hero__dots">
    <?php foreach ( $slides as $i => $slide ) : ?>
    <button class="hiref-hero__dot<?php echo $i === 0 ? ' is-active' : ''; ?>" data-slide="<?php echo esc_attr( $i ); ?>" aria-label="Slide <?php echo esc_attr( $i + 1 ); ?>"></button>
    <?php endforeach; ?>
  </div>

  <div class="hiref-hero__scroll">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
  </div>
</section>

<!-- ── STATS BAR ── -->
<section class="hiref-stats">
  <div class="hiref-container">
    <div class="hiref-stats__grid">
      <?php
      $stats = [
        [ 'value' => hiref_option( 'hiref_stat_publications', '120+' ), 'label' => 'Indexed Publications', 'icon' => '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>' ],
        [ 'value' => hiref_option( 'hiref_stat_citations', '2,400+' ), 'label' => 'Total Citations', 'icon' => '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>' ],
        [ 'value' => hiref_option( 'hiref_stat_patents', '8' ), 'label' => 'Patents Granted', 'icon' => '<circle cx="12" cy="12" r="10"/><path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9"/><path d="M12 11v11"/><path d="M4.93 4.93 9 9"/><path d="M19.07 4.93 15 9"/>' ],
        [ 'value' => hiref_option( 'hiref_stat_masters', '25+' ), 'label' => 'Master Postgraduate', 'icon' => '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' ],
        [ 'value' => hiref_option( 'hiref_stat_phd', '15+' ), 'label' => 'PhD Postgraduate', 'icon' => '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' ],
      ];
      foreach ( $stats as $stat ) :
      ?>
      <div class="hiref-stats__item">
        <div class="hiref-stats__value-row">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?php echo $stat['icon']; // phpcs:ignore WordPress.Security.EscapeOutput ?></svg>
          <span class="hiref-stats__value"><?php echo esc_html( $stat['value'] ); ?></span>
        </div>
        <span class="hiref-stats__label"><?php echo esc_html( $stat['label'] ); ?></span>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── ABOUT ── -->
<section class="hiref-section hiref-section--white" id="about">
  <div class="hiref-container">
    <div class="hiref-about__grid">
      <div class="hiref-about__copy">
        <span class="hiref-label">Who We Are</span>
        <h2 class="hiref-heading">High Speed Reacting Flow Laboratory</h2>
        <p class="hiref-body hiref-body--lg">
          HIREF is dedicated to developing accurate turbulence and thermochemical models for diverse combustion applications. We build state-of-the-art experimental platforms for supersonic shock wave investigations.
        </p>
        <p class="hiref-body">
          We actively conduct fundamental and applied research in Combustion, Heat Transfer, Microscale Reacting Flow, Supersonic Combustion, and Flame-based Synthesis of Nanomaterials — bridging academic excellence with real-world energy challenges.
        </p>
        <a href="#research" class="hiref-link hiref-link--arrow">
          View Research Areas
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>

      <div class="hiref-about__groups">
        <?php
        $groups = [
          [ 'name' => 'SERF', 'full' => 'Sustainable Energy and Reacting Flow Research Group', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/07/SERF-2.png', 'color' => 'orange' ],
          [ 'name' => 'HIREF', 'full' => 'High Speed Reacting Flow Laboratory', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2023/12/HIREFLogo_WhiteFont-1-300x249.png', 'color' => 'sky' ],
          [ 'name' => 'GTC', 'full' => 'Gas Turbine Combustion Research Group', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/07/GTCRG-Logo-298x300.jpg', 'color' => 'emerald' ],
        ];
        foreach ( $groups as $g ) :
        ?>
        <div class="hiref-group-card">
          <div class="hiref-group-card__icon hiref-group-card__icon--<?php echo esc_attr( $g['color'] ); ?>">
            <img src="<?php echo esc_url( $g['img'] ); ?>" alt="<?php echo esc_attr( $g['name'] ); ?>" onerror="this.style.display='none';this.parentElement.innerHTML='<span><?php echo esc_attr( $g['name'] ); ?></span>'" />
          </div>
          <div class="hiref-group-card__info">
            <p class="hiref-group-card__name"><?php echo esc_html( $g['name'] ); ?></p>
            <p class="hiref-group-card__full"><?php echo esc_html( $g['full'] ); ?></p>
          </div>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        <?php endforeach; ?>

        <div class="hiref-about__utm-note">
          Part of the <strong>School of Mechanical Engineering</strong>, Universiti Teknologi Malaysia (UTM) — one of Malaysia's premier research universities.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── RESEARCH AREAS ── -->
<section class="hiref-section hiref-section--gray" id="research">
  <div class="hiref-container">
    <div class="hiref-section__header">
      <div>
        <span class="hiref-label">What We Do</span>
        <h2 class="hiref-heading">Research Areas</h2>
      </div>
      <p class="hiref-section__desc">Multidisciplinary research at the intersection of energy, fluid mechanics, and materials science.</p>
    </div>

    <div class="hiref-research__grid">
      <?php
      $areas = get_posts( [ 'post_type' => 'hiref_research', 'posts_per_page' => 12 ] );
      if ( empty( $areas ) ) :
        $default_areas = [
          [ 'icon' => 'flame',      'color' => 'orange', 'title' => 'Combustion',              'desc' => 'Fundamental and applied research in turbulent combustion, flame dynamics, and thermochemical modelling for clean energy applications.' ],
          [ 'icon' => 'zap',        'color' => 'amber',  'title' => 'Heat Transfer',            'desc' => 'Advanced heat transfer studies including convection, radiation, and coupled thermal-fluid interactions in engineering systems.' ],
          [ 'icon' => 'microscope', 'color' => 'sky',    'title' => 'Microscale Reacting Flow', 'desc' => 'Miniaturised combustion systems and microfluidic reacting flows for next-generation energy and chemical processing technologies.' ],
          [ 'icon' => 'wind',       'color' => 'blue',   'title' => 'Supersonic Combustion',    'desc' => 'State-of-the-art experimental platforms for supersonic shock wave investigations and hypersonic propulsion research.' ],
          [ 'icon' => 'beaker',     'color' => 'teal',   'title' => 'Flame-based Nanomaterials','desc' => 'Synthesis of functional nanomaterials via flame processes, leveraging high-temperature reacting flows for material engineering.' ],
          [ 'icon' => 'atom',       'color' => 'slate',  'title' => 'Thermofluids',             'desc' => 'Multidisciplinary thermofluid research encompassing gas turbine combustion, sustainable energy, and reacting flow modelling.' ],
        ];
        foreach ( $default_areas as $area ) :
      ?>
      <div class="hiref-research-card hiref-research-card--<?php echo esc_attr( $area['color'] ); ?>">
        <div class="hiref-research-card__icon"><?php echo hiref_icon( $area['icon'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
        <h3 class="hiref-research-card__title"><?php echo esc_html( $area['title'] ); ?></h3>
        <p class="hiref-research-card__desc"><?php echo esc_html( $area['desc'] ); ?></p>
      </div>
      <?php
        endforeach;
      else :
        foreach ( $areas as $area ) :
          $icon  = get_post_meta( $area->ID, '_hiref_icon', true ) ?: 'atom';
          $color = get_post_meta( $area->ID, '_hiref_color', true ) ?: 'slate';
      ?>
      <div class="hiref-research-card hiref-research-card--<?php echo esc_attr( $color ); ?>">
        <div class="hiref-research-card__icon"><?php echo hiref_icon( $icon ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
        <h3 class="hiref-research-card__title"><?php echo esc_html( get_the_title( $area->ID ) ); ?></h3>
        <p class="hiref-research-card__desc"><?php echo esc_html( get_the_excerpt( $area->ID ) ); ?></p>
      </div>
      <?php
        endforeach;
      endif;
      ?>
    </div>
  </div>
</section>

<!-- ── NEWS ── -->
<section class="hiref-section hiref-section--white" id="news">
  <div class="hiref-container">
    <div class="hiref-section__header">
      <div>
        <span class="hiref-label">Latest Updates</span>
        <h2 class="hiref-heading">News</h2>
      </div>
      <a href="<?php echo esc_url( get_post_type_archive_link( 'hiref_news' ) ?: '#' ); ?>" class="hiref-link hiref-link--arrow hiref-link--muted">
        All News <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </div>

    <div class="hiref-news__grid">
      <?php
      $news = get_posts( [ 'post_type' => 'hiref_news', 'posts_per_page' => 3 ] );
      if ( empty( $news ) ) {
        $news = get_posts( [ 'post_type' => 'post', 'posts_per_page' => 3 ] );
      }
      foreach ( $news as $item ) :
        $tag      = get_post_meta( $item->ID, '_hiref_tag', true ) ?: 'News';
        $date_str = get_post_meta( $item->ID, '_hiref_date', true ) ?: get_the_date( 'M j, Y', $item->ID );
        $img      = get_the_post_thumbnail_url( $item->ID, 'medium_large' ) ?: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=640';
      ?>
      <article class="hiref-news-card">
        <a href="<?php echo esc_url( get_permalink( $item->ID ) ); ?>" class="hiref-news-card__img-wrap">
          <img src="<?php echo esc_url( $img ); ?>" alt="<?php echo esc_attr( get_the_title( $item->ID ) ); ?>" loading="lazy" />
          <span class="hiref-news-card__tag"><?php echo esc_html( $tag ); ?></span>
        </a>
        <div class="hiref-news-card__body">
          <time class="hiref-news-card__date"><?php echo esc_html( $date_str ); ?></time>
          <h3 class="hiref-news-card__title">
            <a href="<?php echo esc_url( get_permalink( $item->ID ) ); ?>"><?php echo esc_html( get_the_title( $item->ID ) ); ?></a>
          </h3>
          <p class="hiref-news-card__excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt( $item->ID ), 25 ) ); ?></p>
          <a href="<?php echo esc_url( get_permalink( $item->ID ) ); ?>" class="hiref-news-card__more">
            Read more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ── EVENTS ── -->
<section class="hiref-section hiref-section--gray" id="events">
  <div class="hiref-container">
    <div class="hiref-section__header hiref-section__header--left">
      <span class="hiref-label">Conferences & Workshops</span>
      <h2 class="hiref-heading">Events</h2>
    </div>

    <?php
    $upcoming = get_posts( [ 'post_type' => 'hiref_event', 'posts_per_page' => -1, 'meta_key' => '_hiref_status', 'meta_value' => 'upcoming' ] );
    $past     = get_posts( [ 'post_type' => 'hiref_event', 'posts_per_page' => -1, 'meta_key' => '_hiref_status', 'meta_value' => 'ended' ] );
    if ( empty( $upcoming ) && empty( $past ) ) :
      $upcoming = [
        (object)[ 'ID' => 0, 'post_title' => '11th International Conference on Combustion, Incineration, Pyrolysis and Climate Change', '_abbr' => 'i-CIPEC 2024', '_dates' => '18 – 20 December 2024', '_location' => 'Kuala Lumpur, Malaysia' ],
        (object)[ 'ID' => 0, 'post_title' => '13th International Meeting on Advances in Thermofluid', '_abbr' => 'IMAT 2024', '_dates' => '18 – 19 December 2024', '_location' => 'Kuala Lumpur, Malaysia' ],
      ];
      $past = [
        (object)[ 'ID' => 0, 'post_title' => '12th International Meeting on Advances in Thermofluids', '_abbr' => 'IMAT 2021', '_dates' => '1 November 2021', '_location' => 'Virtual' ],
        (object)[ 'ID' => 0, 'post_title' => '9th International Meeting on Advances in Thermofluids', '_abbr' => 'IMAT 2017', '_dates' => '25 January 2017', '_location' => 'Malaysia' ],
        (object)[ 'ID' => 0, 'post_title' => '7th International Meeting on Advances in Thermofluids', '_abbr' => 'IMAT 2014', '_dates' => '26 – 27 November 2014', '_location' => 'Malaysia' ],
      ];
      $use_event_defaults = true;
    endif;
    ?>

    <!-- Upcoming -->
    <div class="hiref-events__upcoming">
      <h3 class="hiref-events__sub-label hiref-events__sub-label--live">
        <span class="hiref-events__pulse"></span> Upcoming
      </h3>
      <div class="hiref-events__grid">
        <?php foreach ( $upcoming as $ev ) :
          $abbr     = isset( $use_event_defaults ) ? $ev->_abbr     : get_post_meta( $ev->ID, '_hiref_abbr', true );
          $dates    = isset( $use_event_defaults ) ? $ev->_dates    : get_post_meta( $ev->ID, '_hiref_dates', true );
          $location = isset( $use_event_defaults ) ? $ev->_location : get_post_meta( $ev->ID, '_hiref_location', true );
        ?>
        <div class="hiref-event-card hiref-event-card--upcoming">
          <div class="hiref-event-card__top">
            <span class="hiref-event-card__abbr"><?php echo esc_html( $abbr ); ?></span>
            <span class="hiref-event-card__badge">Upcoming</span>
          </div>
          <h4 class="hiref-event-card__name"><?php echo esc_html( isset( $use_event_defaults ) ? $ev->post_title : get_the_title( $ev->ID ) ); ?></h4>
          <div class="hiref-event-card__meta">
            <span><?php echo esc_html( $dates ); ?></span>
            <span><?php echo esc_html( $location ); ?></span>
          </div>
          <a href="https://events.utm.my/" target="_blank" rel="noopener noreferrer" class="hiref-event-card__link">
            Let's Join Us <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          </a>
        </div>
        <?php endforeach; ?>
      </div>
    </div>

    <!-- Past -->
    <div class="hiref-events__past">
      <h3 class="hiref-events__sub-label">
        <span class="hiref-events__dot--gray"></span> Past Events
      </h3>
      <div class="hiref-events__past-list">
        <?php foreach ( $past as $ev ) :
          $abbr  = isset( $use_event_defaults ) ? $ev->_abbr  : get_post_meta( $ev->ID, '_hiref_abbr', true );
          $dates = isset( $use_event_defaults ) ? $ev->_dates : get_post_meta( $ev->ID, '_hiref_dates', true );
        ?>
        <div class="hiref-event-past-row">
          <div class="hiref-event-past-row__left">
            <span class="hiref-event-past-row__abbr"><?php echo esc_html( $abbr ); ?></span>
            <span class="hiref-event-past-row__name"><?php echo esc_html( isset( $use_event_defaults ) ? $ev->post_title : get_the_title( $ev->ID ) ); ?></span>
          </div>
          <div class="hiref-event-past-row__right">
            <span><?php echo esc_html( $dates ); ?></span>
            <span class="hiref-event-past-row__ended">Ended</span>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<!-- ── COLLABORATIONS ── -->
<?php
$collab_data = [
  'Industry' => [
    [ 'abbr' => 'PETRONAS', 'name' => 'Petroliam Nasional Berhad',         'logo' => 'https://logo.clearbit.com/petronas.com' ],
    [ 'abbr' => 'TNB',      'name' => 'Tenaga Nasional Berhad',            'logo' => 'https://logo.clearbit.com/tnb.com.my' ],
    [ 'abbr' => 'MISC',     'name' => 'MISC Berhad',                       'logo' => 'https://logo.clearbit.com/misc.com.my' ],
    [ 'abbr' => 'SAPURA',   'name' => 'Sapura Energy',                     'logo' => 'https://logo.clearbit.com/sapuraenergy.com' ],
    [ 'abbr' => 'YTL',      'name' => 'YTL Power International',           'logo' => 'https://logo.clearbit.com/ytlpower.com' ],
    [ 'abbr' => 'MAS',      'name' => 'Malaysia Airlines',                 'logo' => 'https://logo.clearbit.com/malaysiaairlines.com' ],
    [ 'abbr' => 'SHELL',    'name' => 'Shell Malaysia',                    'logo' => 'https://logo.clearbit.com/shell.com' ],
    [ 'abbr' => 'RAPID',    'name' => 'Refinery & Petrochemical Complex',  'logo' => 'https://logo.clearbit.com/petronas.com' ],
  ],
  'National' => [
    [ 'abbr' => 'MOSTI',    'name' => 'Ministry of Science, Technology & Innovation', 'logo' => 'https://logo.clearbit.com/mosti.gov.my' ],
    [ 'abbr' => 'MOHE',     'name' => 'Ministry of Higher Education',                 'logo' => 'https://logo.clearbit.com/mohe.gov.my' ],
    [ 'abbr' => 'MIGHT',    'name' => 'Malaysian Industry-Government Group for High Technology', 'logo' => 'https://logo.clearbit.com/might.org.my' ],
    [ 'abbr' => 'UTM Holdings', 'name' => 'UTM Holdings',                             'logo' => 'https://logo.clearbit.com/utm.my' ],
    [ 'abbr' => 'IRDA',     'name' => 'Iskandar Regional Development Authority',      'logo' => 'https://logo.clearbit.com/irda.com.my' ],
    [ 'abbr' => 'SIRIM',    'name' => 'SIRIM Berhad',                                 'logo' => 'https://logo.clearbit.com/sirim.my' ],
    [ 'abbr' => 'TNBR',     'name' => 'TNB Research',                                 'logo' => 'https://logo.clearbit.com/tnb.com.my' ],
  ],
  'International' => [
    [ 'abbr' => 'Cambridge',    'name' => 'University of Cambridge',        'logo' => 'https://logo.clearbit.com/cam.ac.uk' ],
    [ 'abbr' => 'Leeds',        'name' => 'University of Leeds',            'logo' => 'https://logo.clearbit.com/leeds.ac.uk' ],
    [ 'abbr' => 'Cranfield',    'name' => 'Cranfield University',           'logo' => 'https://logo.clearbit.com/cranfield.ac.uk' ],
    [ 'abbr' => 'Wisconsin',    'name' => 'University of Wisconsin–Madison','logo' => 'https://logo.clearbit.com/wisc.edu' ],
    [ 'abbr' => 'SUNY',         'name' => 'SUNY Korea',                     'logo' => 'https://logo.clearbit.com/suny.edu' ],
    [ 'abbr' => 'Tokyo Met',    'name' => 'Tokyo Metropolitan University',  'logo' => 'https://logo.clearbit.com/tmu.ac.jp' ],
    [ 'abbr' => 'Kyushu',       'name' => 'Kyushu University',              'logo' => 'https://logo.clearbit.com/kyushu-u.ac.jp' ],
    [ 'abbr' => 'Jiangsu',      'name' => 'Jiangsu University',             'logo' => 'https://logo.clearbit.com/ujs.edu.cn' ],
    [ 'abbr' => 'Ryukyus',      'name' => 'University of the Ryukyus',      'logo' => 'https://logo.clearbit.com/u-ryukyu.ac.jp' ],
  ],
  'Academic' => [
    [ 'abbr' => 'UTM',    'name' => 'Universiti Teknologi Malaysia',    'logo' => 'https://logo.clearbit.com/utm.my' ],
    [ 'abbr' => 'UM',     'name' => 'Universiti Malaya',                'logo' => 'https://logo.clearbit.com/um.edu.my' ],
    [ 'abbr' => 'UPM',    'name' => 'Universiti Putra Malaysia',        'logo' => 'https://logo.clearbit.com/upm.edu.my' ],
    [ 'abbr' => 'UiTM',   'name' => 'Universiti Teknologi MARA',        'logo' => 'https://logo.clearbit.com/uitm.edu.my' ],
    [ 'abbr' => 'UTHM',   'name' => 'Universiti Tun Hussein Onn',       'logo' => 'https://logo.clearbit.com/uthm.edu.my' ],
    [ 'abbr' => 'IIUM',   'name' => 'Intl. Islamic University Malaysia', 'logo' => 'https://logo.clearbit.com/iium.edu.my' ],
    [ 'abbr' => 'UTeM',   'name' => 'Universiti Teknikal Malaysia',     'logo' => 'https://logo.clearbit.com/utem.edu.my' ],
    [ 'abbr' => 'UniMAP', 'name' => 'Universiti Malaysia Perlis',       'logo' => 'https://logo.clearbit.com/unimap.edu.my' ],
  ],
  'Government' => [
    [ 'abbr' => 'JKR',   'name' => 'Jabatan Kerja Raya',                      'logo' => 'https://logo.clearbit.com/jkr.gov.my' ],
    [ 'abbr' => 'KPDN',  'name' => 'Ministry of Domestic Trade & Cost of Living', 'logo' => 'https://logo.clearbit.com/kpdnhep.gov.my' ],
    [ 'abbr' => 'MARA',  'name' => 'Majlis Amanah Rakyat',                    'logo' => 'https://logo.clearbit.com/mara.gov.my' ],
    [ 'abbr' => 'MTDC',  'name' => 'Malaysian Technology Development Corp',   'logo' => 'https://logo.clearbit.com/mtdc.com.my' ],
    [ 'abbr' => 'EPU',   'name' => 'Economic Planning Unit',                  'logo' => 'https://logo.clearbit.com/epu.gov.my' ],
    [ 'abbr' => 'MIDA',  'name' => 'Malaysian Investment Development Authority', 'logo' => 'https://logo.clearbit.com/mida.gov.my' ],
  ],
];
$collab_tabs = array_keys( $collab_data );
$first_tab   = $collab_tabs[0];
?>
<section class="hiref-section hiref-section--white" id="collaborations">
  <div class="hiref-container">
    <div class="hiref-collab__header">
      <div>
        <span class="hiref-label">Industry &amp; Academia</span>
        <h2 class="hiref-heading">Collaborations</h2>
      </div>
      <p class="hiref-body">We partner with leading industries and academic institutions to translate fundamental research into real-world impact across the energy sector.</p>
    </div>

    <!-- Tab buttons -->
    <div class="hiref-collab__tabs">
      <?php foreach ( $collab_tabs as $tab ) : ?>
      <button class="hiref-collab__tab<?php echo $tab === $first_tab ? ' is-active' : ''; ?>" data-tab="<?php echo esc_attr( $tab ); ?>">
        <?php echo esc_html( $tab ); ?>
      </button>
      <?php endforeach; ?>
    </div>

    <!-- Tab panels -->
    <?php foreach ( $collab_data as $tab => $entries ) :
      $count = count( $entries );
      // Double-up entries for infinite scroll feel (show originals + copy)
      $all = array_merge( $entries, $entries );
      $dots_count = (int) ceil( $count / 4 );
    ?>
    <div class="hiref-collab__panel<?php echo $tab === $first_tab ? ' is-active' : ''; ?>" data-tab="<?php echo esc_attr( $tab ); ?>" data-offset="0">
      <div class="hiref-collab__viewport">
        <div class="hiref-collab__track">
          <?php foreach ( $all as $entry ) : ?>
          <div class="hiref-collab-card">
            <div class="hiref-collab-card__logo">
              <img
                src="<?php echo esc_url( $entry['logo'] ); ?>"
                alt="<?php echo esc_attr( $entry['name'] ); ?>"
                loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
              />
              <span class="hiref-collab-card__abbr" style="display:none"><?php echo esc_html( $entry['abbr'] ); ?></span>
            </div>
            <p class="hiref-collab-card__name"><?php echo esc_html( $entry['name'] ); ?></p>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Arrow controls -->
      <button class="hiref-collab__arrow hiref-collab__arrow--prev" aria-label="Previous">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="hiref-collab__arrow hiref-collab__arrow--next" aria-label="Next">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <!-- Dot indicators -->
      <div class="hiref-collab__dots">
        <?php for ( $d = 0; $d < $dots_count; $d++ ) : ?>
        <button class="hiref-collab__dot<?php echo $d === 0 ? ' is-active' : ''; ?>" data-index="<?php echo esc_attr( $d ); ?>"></button>
        <?php endfor; ?>
      </div>
    </div>
    <?php endforeach; ?>

  </div>
</section>

<!-- ── CONTACT ── -->
<section class="hiref-section hiref-section--gray" id="contact">
  <div class="hiref-container">
    <div class="hiref-contact__grid">
      <!-- Info -->
      <div class="hiref-contact__info">
        <span class="hiref-label">Get in Touch</span>
        <h2 class="hiref-heading">Contact Us</h2>
        <p class="hiref-body">Interested in collaboration, postgraduate opportunities, or research partnerships? Reach out to our team.</p>

        <div class="hiref-contact__items">
          <div class="hiref-contact__item">
            <div class="hiref-contact__item-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p class="hiref-contact__item-label">Phone</p>
              <p class="hiref-body--sm">Prof Dr Mazlan: +607 555 7036</p>
              <p class="hiref-body--sm">Dr Mohd Fairus: +607 553 4574</p>
            </div>
          </div>
          <div class="hiref-contact__item">
            <div class="hiref-contact__item-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <p class="hiref-contact__item-label">Email</p>
              <a href="mailto:<?php echo esc_attr( hiref_option( 'hiref_email', 'hirefofficial@gmail.com' ) ); ?>" class="hiref-link hiref-link--orange hiref-body--sm"><?php echo esc_html( hiref_option( 'hiref_email', 'hirefofficial@gmail.com' ) ); ?></a>
            </div>
          </div>
          <div class="hiref-contact__item">
            <div class="hiref-contact__item-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p class="hiref-contact__item-label">Location</p>
              <p class="hiref-body--sm">HiREF, Block E06, Faculty of Mechanical Engineering<br>Universiti Teknologi Malaysia<br>81310 Skudai, Johor</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="hiref-contact__cards">
        <div class="hiref-contact-card">
          <h3 class="hiref-contact-card__title">
            <span class="hiref-contact-card__dot"></span> Office Hours
          </h3>
          <div class="hiref-office-hours">
            <div class="hiref-office-hours__row">
              <span>Sunday – Thursday</span>
              <span class="hiref-office-hours__open">9:00 AM – 5:00 PM</span>
            </div>
            <div class="hiref-office-hours__row">
              <span>Friday & Saturday</span>
              <span class="hiref-office-hours__closed">Closed</span>
            </div>
            <div class="hiref-office-hours__row">
              <span>Public Holidays</span>
              <span class="hiref-office-hours__closed">Closed</span>
            </div>
          </div>
        </div>

        <div class="hiref-contact-card">
          <h3 class="hiref-contact-card__title">Follow HIREF</h3>
          <div class="hiref-social-list">
            <a href="https://www.utm.my/hiref" target="_blank" rel="noopener noreferrer" class="hiref-social-item">
              <div class="hiref-social-item__icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg></div>
              <span>www.utm.my/hiref</span>
              <svg class="hiref-social-item__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <?php if ( $linkedin = hiref_option( 'hiref_linkedin' ) ) : ?>
            <a href="<?php echo esc_url( $linkedin ); ?>" target="_blank" rel="noopener noreferrer" class="hiref-social-item">
              <div class="hiref-social-item__icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></div>
              <span>LinkedIn — HIREF</span>
              <svg class="hiref-social-item__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <?php endif; ?>
            <?php if ( $fb = hiref_option( 'hiref_facebook' ) ) : ?>
            <a href="<?php echo esc_url( $fb ); ?>" target="_blank" rel="noopener noreferrer" class="hiref-social-item">
              <div class="hiref-social-item__icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div>
              <span>Facebook — HIREF</span>
              <svg class="hiref-social-item__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
function hiref_icon( $name ) {
  $icons = [
    'flame'      => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    'zap'        => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    'microscope' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>',
    'wind'       => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>',
    'beaker'     => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>',
    'atom'       => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>',
  ];
  return $icons[ $name ] ?? $icons['atom'];
}
?>

<?php get_footer(); ?>
