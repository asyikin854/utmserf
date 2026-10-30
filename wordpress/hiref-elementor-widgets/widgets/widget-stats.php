<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Stats extends Widget_Base {
    public function get_name()  { return 'hiref_stats'; }
    public function get_title() { return 'HIREF Stats Bar'; }
    public function get_icon()  { return 'eicon-counter'; }
    public function get_categories() { return [ 'hiref' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content', [ 'label' => 'Stats' ] );
        $repeater = new Repeater();
        $repeater->add_control( 'value', [ 'label' => 'Value', 'type' => Controls_Manager::TEXT, 'default' => '120+' ] );
        $repeater->add_control( 'label', [ 'label' => 'Label', 'type' => Controls_Manager::TEXT, 'default' => 'Publications' ] );
        $this->add_control( 'stats', [
            'label'  => 'Stats',
            'type'   => Controls_Manager::REPEATER,
            'fields' => $repeater->get_controls(),
            'default' => [
                [ 'value' => '120+',   'label' => 'Indexed Publications' ],
                [ 'value' => '2,400+', 'label' => 'Total Citations' ],
                [ 'value' => '8',      'label' => 'Patents Granted' ],
                [ 'value' => '25+',    'label' => 'Master Postgraduate' ],
                [ 'value' => '15+',    'label' => 'PhD Postgraduate' ],
            ],
            'title_field' => '{{{ value }}} {{{ label }}}',
        ] );
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="hiref-stats">
          <div class="hiref-container">
            <div class="hiref-stats__grid">
              <?php foreach ( $settings['stats'] as $s ) : ?>
              <div class="hiref-stats__item">
                <div class="hiref-stats__value-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  <span class="hiref-stats__value"><?php echo esc_html( $s['value'] ); ?></span>
                </div>
                <span class="hiref-stats__label"><?php echo esc_html( $s['label'] ); ?></span>
              </div>
              <?php endforeach; ?>
            </div>
          </div>
        </section>
        <?php
    }
}
