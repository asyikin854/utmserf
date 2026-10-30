  <!-- ── FOOTER ── -->
  <footer class="hiref-footer">
    <div class="hiref-container">
      <div class="hiref-footer__grid">

        <!-- Brand -->
        <div class="hiref-footer__brand">
          <div class="hiref-footer__logo">
            <div class="hiref-logo__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
            </div>
            <div>
              <p class="hiref-footer__logo-name">HIREF</p>
              <p class="hiref-footer__logo-sub">High Speed Reacting Flow Laboratory</p>
            </div>
          </div>
          <p class="hiref-footer__desc">Advancing the frontiers of thermofluids, combustion, and supersonic reacting flow research at Universiti Teknologi Malaysia.</p>
          <div class="hiref-footer__social">
            <?php if ( $linkedin = hiref_option( 'hiref_linkedin' ) ) : ?>
              <a href="<?php echo esc_url( $linkedin ); ?>" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            <?php endif; ?>
            <?php if ( $fb = hiref_option( 'hiref_facebook' ) ) : ?>
              <a href="<?php echo esc_url( $fb ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            <?php endif; ?>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="hiref-footer__col">
          <p class="hiref-footer__col-title">Quick Links</p>
          <?php
          wp_nav_menu( [
            'theme_location' => 'footer',
            'container'      => false,
            'menu_class'     => 'hiref-footer__links',
            'fallback_cb'    => function() {
              echo '<ul class="hiref-footer__links">';
              $items = [
                'About HIREF'   => '#about',
                'Research Areas' => '#research',
                'News & Updates' => '#news',
                'Events'         => '#events',
                'Collaborations' => '#collaborations',
                'Contact Us'     => '#contact',
              ];
              foreach ( $items as $label => $href ) {
                echo '<li><a href="' . esc_attr( $href ) . '">' . esc_html( $label ) . '</a></li>';
              }
              echo '</ul>';
            },
          ] );
          ?>
        </div>

        <!-- Office Hours -->
        <div class="hiref-footer__col">
          <p class="hiref-footer__col-title">Office Hours</p>
          <div class="hiref-footer__hours">
            <div class="hiref-footer__hours-row">
              <span>Sunday &ndash; Thursday</span>
              <span class="hiref-footer__hours-open">9:00 AM &ndash; 5:00 PM</span>
            </div>
            <div class="hiref-footer__hours-row">
              <span>Friday &amp; Saturday</span>
              <span class="hiref-footer__hours-closed">Closed</span>
            </div>
            <div class="hiref-footer__hours-row">
              <span>Public Holidays</span>
              <span class="hiref-footer__hours-closed">Closed</span>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <div class="hiref-footer__col">
          <p class="hiref-footer__col-title">Contact</p>
          <div class="hiref-footer__contact">
            <p><?php echo esc_html( hiref_option( 'hiref_address', 'Block E06, Faculty of Mechanical Engineering, UTM, 81310 Skudai, Johor' ) ); ?></p>
            <a href="mailto:<?php echo esc_attr( hiref_option( 'hiref_email', 'hirefofficial@gmail.com' ) ); ?>"><?php echo esc_html( hiref_option( 'hiref_email', 'hirefofficial@gmail.com' ) ); ?></a>
            <a href="tel:<?php echo esc_attr( str_replace( ' ', '', hiref_option( 'hiref_phone', '+6075557036' ) ) ); ?>"><?php echo esc_html( hiref_option( 'hiref_phone', '+607 555 7036' ) ); ?></a>
          </div>
        </div>

      </div><!-- /.hiref-footer__grid -->

      <div class="hiref-footer__bottom">
        <p class="hiref-footer__copy">&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> HIREF, Universiti Teknologi Malaysia. All rights reserved.</p>
        <p class="hiref-footer__copy hiref-footer__copy--right">Part of the School of Mechanical Engineering, UTM</p>
      </div>
    </div>
  </footer>

<?php wp_footer(); ?>
</body>
</html>
