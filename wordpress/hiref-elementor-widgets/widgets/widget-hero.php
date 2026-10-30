<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Hero extends Widget_Base {
    public function get_name()  { return 'hiref_hero'; }
    public function get_title() { return 'HIREF Hero Slider'; }
    public function get_icon()  { return 'eicon-slideshow'; }
    public function get_categories() { return [ 'hiref' ]; }
    public function get_keywords()   { return [ 'hero', 'slider', 'hiref' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'slides_section', [ 'label' => 'Slides' ] );

        $repeater = new Repeater();
        $repeater->add_control( 'tag', [ 'label' => 'Tag', 'type' => Controls_Manager::TEXT, 'default' => 'Research Mission' ] );
        $repeater->add_control( 'headline', [ 'label' => 'Headline', 'type' => Controls_Manager::TEXTAREA, 'default' => "Global Leader in\nResource Sustainability" ] );
        $repeater->add_control( 'sub', [ 'label' => 'Sub-text', 'type' => Controls_Manager::TEXTAREA, 'default' => 'Advancing turbulence and thermochemical models.' ] );
        $repeater->add_control( 'image', [ 'label' => 'Background Image', 'type' => Controls_Manager::MEDIA, 'default' => [] ] );
        $repeater->add_control( 'cta_text', [ 'label' => 'CTA Label', 'type' => Controls_Manager::TEXT, 'default' => 'Explore Research' ] );
        $repeater->add_control( 'cta_link', [ 'label' => 'CTA Link', 'type' => Controls_Manager::URL, 'default' => [ 'url' => '#research' ] ] );

        $this->add_control( 'slides', [
            'label'   => 'Slides',
            'type'    => Controls_Manager::REPEATER,
            'fields'  => $repeater->get_controls(),
            'default' => [
                [ 'tag' => 'Research Mission', 'headline' => "Global Leader in\nResource Sustainability", 'sub' => 'Advancing turbulence and thermochemical models.' ],
                [ 'tag' => 'UTM Research', 'headline' => "World-Ranked\nResearch University", 'sub' => 'HIREF is proudly part of UTM.' ],
            ],
            'title_field' => '{{{ tag }}}',
        ] );

        $this->add_control( 'interval', [ 'label' => 'Auto-play interval (ms)', 'type' => Controls_Manager::NUMBER, 'default' => 6000 ] );
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $slides   = $settings['slides'] ?? [];
        ?>
        <section class="hiref-hero" id="home">
          <div class="hiref-hero__slides" data-slides>
            <?php foreach ( $slides as $i => $slide ) : $img = $slide['image']['url'] ?? ''; ?>
            <div class="hiref-hero__slide<?php echo $i === 0 ? ' is-active' : ''; ?>">
              <div class="hiref-hero__bg" style="background-image:url('<?php echo esc_url( $img ); ?>')"></div>
              <div class="hiref-hero__overlay"></div>
              <div class="hiref-container hiref-hero__content">
                <span class="hiref-hero__tag"><?php echo esc_html( $slide['tag'] ); ?></span>
                <h1 class="hiref-hero__headline"><?php echo nl2br( esc_html( $slide['headline'] ) ); ?></h1>
                <p class="hiref-hero__sub"><?php echo esc_html( $slide['sub'] ); ?></p>
                <div class="hiref-hero__ctas">
                  <a href="<?php echo esc_url( $slide['cta_link']['url'] ?? '#' ); ?>" class="hiref-btn hiref-btn--primary">
                    <?php echo esc_html( $slide['cta_text'] ?: 'Explore Research' ); ?>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                  <a href="#about" class="hiref-btn hiref-btn--ghost">About HIREF</a>
                </div>
              </div>
            </div>
            <?php endforeach; ?>
          </div>
          <div class="hiref-hero__dots">
            <?php foreach ( $slides as $i => $slide ) : ?>
            <button class="hiref-hero__dot<?php echo $i === 0 ? ' is-active' : ''; ?>" data-dot="<?php echo esc_attr( $i ); ?>"></button>
            <?php endforeach; ?>
          </div>
          <div class="hiref-hero__scroll">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </section>
        <?php
    }
}
