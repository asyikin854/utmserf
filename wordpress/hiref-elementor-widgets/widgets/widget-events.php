<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Events extends Widget_Base {
    public function get_name()  { return 'hiref_events'; }
    public function get_title() { return 'HIREF Events'; }
    public function get_icon()  { return 'eicon-calendar'; }
    public function get_categories() { return [ 'hiref' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content', [ 'label' => 'Events' ] );
        $this->add_control( 'source', [
            'label'   => 'Source',
            'type'    => Controls_Manager::SELECT,
            'default' => 'cpt',
            'options' => [ 'cpt' => 'From WordPress (CPT)', 'manual' => 'Manual entries' ],
        ] );

        // Manual repeater
        $r = new Repeater();
        $r->add_control( 'name',     [ 'label' => 'Event Name', 'type' => Controls_Manager::TEXT ] );
        $r->add_control( 'abbr',     [ 'label' => 'Abbreviation', 'type' => Controls_Manager::TEXT, 'default' => 'IMAT 2024' ] );
        $r->add_control( 'dates',    [ 'label' => 'Dates', 'type' => Controls_Manager::TEXT ] );
        $r->add_control( 'location', [ 'label' => 'Location', 'type' => Controls_Manager::TEXT ] );
        $r->add_control( 'status',   [ 'label' => 'Status', 'type' => Controls_Manager::SELECT, 'default' => 'upcoming', 'options' => [ 'upcoming' => 'Upcoming', 'ended' => 'Ended' ] ] );
        $this->add_control( 'events', [
            'label'      => 'Events',
            'type'       => Controls_Manager::REPEATER,
            'fields'     => $r->get_controls(),
            'condition'  => [ 'source' => 'manual' ],
            'title_field'=> '{{{ abbr }}}',
            'default'    => [
                [ 'name' => '11th International Conference on Combustion', 'abbr' => 'i-CIPEC 2024', 'dates' => '18–20 Dec 2024', 'location' => 'KL, Malaysia', 'status' => 'upcoming' ],
                [ 'name' => '13th International Meeting on Advances in Thermofluid', 'abbr' => 'IMAT 2024', 'dates' => '18–19 Dec 2024', 'location' => 'KL, Malaysia', 'status' => 'upcoming' ],
                [ 'name' => '12th International Meeting on Advances in Thermofluids', 'abbr' => 'IMAT 2021', 'dates' => '1 Nov 2021', 'location' => 'Virtual', 'status' => 'ended' ],
            ],
        ] );
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();

        if ( $settings['source'] === 'cpt' ) {
            $all = get_posts( [ 'post_type' => 'hiref_event', 'posts_per_page' => -1 ] );
            $upcoming = $past = [];
            foreach ( $all as $ev ) {
                $s = get_post_meta( $ev->ID, '_hiref_status', true );
                $entry = [
                    'name'     => get_the_title( $ev->ID ),
                    'abbr'     => get_post_meta( $ev->ID, '_hiref_abbr', true ),
                    'dates'    => get_post_meta( $ev->ID, '_hiref_dates', true ),
                    'location' => get_post_meta( $ev->ID, '_hiref_location', true ),
                    'status'   => $s,
                ];
                if ( $s === 'upcoming' ) $upcoming[] = $entry; else $past[] = $entry;
            }
        } else {
            $upcoming = array_filter( $settings['events'], fn($e) => $e['status'] === 'upcoming' );
            $past     = array_filter( $settings['events'], fn($e) => $e['status'] === 'ended' );
        }
        ?>
        <section class="hiref-section hiref-section--gray" id="events">
          <div class="hiref-container">
            <div class="hiref-section__header hiref-section__header--left">
              <span class="hiref-label">Conferences & Workshops</span>
              <h2 class="hiref-heading">Events</h2>
            </div>

            <?php if ( $upcoming ) : ?>
            <div class="hiref-events__upcoming">
              <h3 class="hiref-events__sub-label hiref-events__sub-label--live"><span class="hiref-events__pulse"></span> Upcoming</h3>
              <div class="hiref-events__grid">
                <?php foreach ( $upcoming as $ev ) : ?>
                <div class="hiref-event-card hiref-event-card--upcoming">
                  <div class="hiref-event-card__top">
                    <span class="hiref-event-card__abbr"><?php echo esc_html( $ev['abbr'] ); ?></span>
                    <span class="hiref-event-card__badge">Upcoming</span>
                  </div>
                  <h4 class="hiref-event-card__name"><?php echo esc_html( $ev['name'] ); ?></h4>
                  <div class="hiref-event-card__meta">
                    <span><?php echo esc_html( $ev['dates'] ); ?></span>
                    <span><?php echo esc_html( $ev['location'] ); ?></span>
                  </div>
                  <a href="https://events.utm.my/" target="_blank" rel="noopener noreferrer" class="hiref-event-card__link">
                    Let's Join Us <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                  </a>
                </div>
                <?php endforeach; ?>
              </div>
            </div>
            <?php endif; ?>

            <?php if ( $past ) : ?>
            <div class="hiref-events__past">
              <h3 class="hiref-events__sub-label"><span class="hiref-events__dot--gray"></span> Past Events</h3>
              <div class="hiref-events__past-list">
                <?php foreach ( $past as $ev ) : ?>
                <div class="hiref-event-past-row">
                  <div class="hiref-event-past-row__left">
                    <span class="hiref-event-past-row__abbr"><?php echo esc_html( $ev['abbr'] ); ?></span>
                    <span class="hiref-event-past-row__name"><?php echo esc_html( $ev['name'] ); ?></span>
                  </div>
                  <div class="hiref-event-past-row__right">
                    <span><?php echo esc_html( $ev['dates'] ); ?></span>
                    <span class="hiref-event-past-row__ended">Ended</span>
                  </div>
                </div>
                <?php endforeach; ?>
              </div>
            </div>
            <?php endif; ?>
          </div>
        </section>
        <?php
    }
}
