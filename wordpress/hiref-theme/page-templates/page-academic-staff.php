<?php
/**
 * Template Name: Academic Staff
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
      <span>Organization Structure</span>
      <span class="hiref-breadcrumb__sep">/</span>
      <span class="hiref-breadcrumb__current">Academic Staff</span>
    </div>
    <h1 class="hiref-page-hero__title">Organization Structure — Academic Staff</h1>
  </div>
</section>

<main class="hiref-page-main">
  <div class="hiref-container hiref-page-content">
    <div style="margin-bottom:2rem">
      <span class="hiref-page-label">Our Team</span>
      <h2 class="hiref-page-heading">Academic Staff</h2>
      <p class="hiref-page-desc">HiREF is led by a team of highly qualified academics from the Department of Thermofluid, School of Mechanical Engineering, Universiti Teknologi Malaysia.</p>
    </div>

    <?php
    $fellows = [
      [ 'name' => 'Prof. Dr. Mazlan Abdul Wahid', 'email' => 'mazlan@utm.my', 'profile' => 'mw1v' ],
      [ 'name' => 'Dr. Mohd Fairus Mohd Yasin', 'email' => 'mohdfairus@utm.my', 'profile' => 'OQG5' ],
      [ 'name' => 'Prof. Madya Dr. Aminuddin Saat', 'email' => 'aminudin@utm.my', 'profile' => 'E2OY' ],
      [ 'name' => 'Dr. Mohsin Mohd Sies', 'email' => 'mohsin@utm.my', 'profile' => 'ZQry' ],
      [ 'name' => 'Dr. Norikhwan Hamzah', 'email' => 'norikhwan@utm.my', 'profile' => 'gWdY' ],
      [ 'name' => 'Dr. Natrah Kamaruzaman', 'email' => 'natrahk@utm.my', 'profile' => '11Db' ],
      [ 'name' => 'Ir. Dr. Norazila Othman', 'email' => 'norazilao@utm.my', 'profile' => 'vynD' ],
      [ 'name' => 'Dr. Mohd Faizal Hasan', 'email' => 'mfaizal@utm.my', 'profile' => 'OQ7b' ],
    ];
    $associates = [
      [ 'name' => 'Dr. Muhammad Thalhah Zainal', 'email' => 'mthalhah@utm.my', 'profile' => 'R8Vl' ],
      [ 'name' => 'Prof. Madya Ir. Dr. Mohd Zarhamdy Md. Zain', 'email' => 'zarhamdy@utm.my', 'profile' => 'jdGk' ],
    ];

    $render_table = function ( $title, $rows ) {
      echo '<div class="hiref-staff-section"><h3 class="hiref-staff-title">' . esc_html( $title ) . '</h3>';
      echo '<div class="hiref-table-wrap"><table class="hiref-table"><thead><tr>';
      echo '<th>Name</th><th>Role</th><th>Email</th><th>Profile</th>';
      echo '</tr></thead><tbody>';
      foreach ( $rows as $r ) {
        echo '<tr>';
        echo '<td class="col-name">' . esc_html( $r['name'] ) . '</td>';
        echo '<td>' . esc_html( $r['role'] ?? 'Research Fellow' ) . '</td>';
        echo '<td><a href="mailto:' . esc_attr( $r['email'] ) . '" class="hiref-table__link">' . esc_html( $r['email'] ) . '</a></td>';
        echo '<td><a href="https://utmscholar.utm.my/Scholar/ScholarInfoDetails/' . esc_attr( $r['profile'] ) . '" target="_blank" rel="noopener noreferrer" class="hiref-table__link">UTM Scholar ↗</a></td>';
        echo '</tr>';
      }
      echo '</tbody></table></div></div>';
    };

    $render_table( 'Research Fellows', array_map( function ( $f ) { return array_merge( $f, [ 'role' => 'Research Fellow' ] ); }, $fellows ) );
    $render_table( 'Associate Research Fellows', array_map( function ( $a ) { return array_merge( $a, [ 'role' => 'Associate Research Fellow' ] ); }, $associates ) );
    ?>
  </div>
</main>

<?php get_footer();
