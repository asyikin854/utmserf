<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Research extends Widget_Base {
    public function get_name()  { return 'hiref_research'; }
    public function get_title() { return 'HIREF Research Grid'; }
    public function get_icon()  { return 'eicon-gallery-grid'; }
    public function get_categories() { return [ 'hiref' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content', [ 'label' => 'Research Areas' ] );
        $repeater = new Repeater();
        $repeater->add_control( 'title', [ 'label' => 'Title', 'type' => Controls_Manager::TEXT, 'default' => 'Combustion' ] );
        $repeater->add_control( 'desc',  [ 'label' => 'Description', 'type' => Controls_Manager::TEXTAREA ] );
        $repeater->add_control( 'color', [
            'label'   => 'Color',
            'type'    => Controls_Manager::SELECT,
            'default' => 'orange',
            'options' => [ 'orange' => 'Orange', 'amber' => 'Amber', 'sky' => 'Sky Blue', 'blue' => 'Blue', 'teal' => 'Teal', 'slate' => 'Slate' ],
        ] );
        $this->add_control( 'areas', [
            'label'  => 'Areas',
            'type'   => Controls_Manager::REPEATER,
            'fields' => $repeater->get_controls(),
            'default' => [
                [ 'title' => 'Combustion',              'color' => 'orange', 'desc' => 'Fundamental and applied research in turbulent combustion.' ],
                [ 'title' => 'Heat Transfer',            'color' => 'amber',  'desc' => 'Advanced heat transfer studies.' ],
                [ 'title' => 'Microscale Reacting Flow', 'color' => 'sky',    'desc' => 'Miniaturised combustion systems.' ],
                [ 'title' => 'Supersonic Combustion',    'color' => 'blue',   'desc' => 'Supersonic shock wave investigations.' ],
                [ 'title' => 'Flame-based Nanomaterials','color' => 'teal',   'desc' => 'Synthesis of functional nanomaterials via flame.' ],
                [ 'title' => 'Thermofluids',             'color' => 'slate',  'desc' => 'Multidisciplinary thermofluid research.' ],
            ],
            'title_field' => '{{{ title }}}',
        ] );
        $this->add_control( 'section_label', [ 'label' => 'Section Tag', 'type' => Controls_Manager::TEXT, 'default' => 'What We Do' ] );
        $this->add_control( 'heading', [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Research Areas' ] );
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $icon_svg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>';
        ?>
        <section class="hiref-section hiref-section--gray" id="research">
          <div class="hiref-container">
            <div class="hiref-section__header">
              <div>
                <span class="hiref-label"><?php echo esc_html( $settings['section_label'] ); ?></span>
                <h2 class="hiref-heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
              </div>
              <p class="hiref-section__desc">Multidisciplinary research at the intersection of energy, fluid mechanics, and materials science.</p>
            </div>
            <div class="hiref-research__grid">
              <?php foreach ( $settings['areas'] as $area ) : ?>
              <div class="hiref-research-card hiref-research-card--<?php echo esc_attr( $area['color'] ); ?>">
                <div class="hiref-research-card__icon"><?php echo $icon_svg; // phpcs:ignore ?></div>
                <h3 class="hiref-research-card__title"><?php echo esc_html( $area['title'] ); ?></h3>
                <p class="hiref-research-card__desc"><?php echo esc_html( $area['desc'] ); ?></p>
              </div>
              <?php endforeach; ?>
            </div>
          </div>
        </section>
        <?php
    }
}
