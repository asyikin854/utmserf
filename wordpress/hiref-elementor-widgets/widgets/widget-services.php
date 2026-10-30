<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Services extends Widget_Base {
	public function get_name()       { return 'hiref_services'; }
	public function get_title()      { return 'HIREF Services'; }
	public function get_icon()       { return 'eicon-flow'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Services' ] );
		$this->add_control( 'use_cpt', [ 'label' => 'Pull from Services CPT', 'type' => Controls_Manager::SWITCHER, 'default' => 'yes' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag',     'type' => Controls_Manager::TEXT, 'default' => 'What We Offer' ] );
		$this->add_control( 'heading',       [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'HiREF Services' ] );
		$this->add_control( 'intro', [ 'label' => 'Intro', 'type' => Controls_Manager::TEXTAREA,
			'default' => 'Our laboratory offers a range of testing, analysis, and consultancy services to industry and academia.' ] );

		$repeater = new Repeater();
		$repeater->add_control( 'name',  [ 'label' => 'Service Name', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'desc',  [ 'label' => 'Description',  'type' => Controls_Manager::TEXTAREA ] );
		$repeater->add_control( 'price', [ 'label' => 'Price / Rate (optional)', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'photo', [ 'label' => 'Photo',        'type' => Controls_Manager::MEDIA ] );

		$this->add_control( 'services', [
			'label'       => 'Services',
			'type'        => Controls_Manager::REPEATER,
			'fields'      => $repeater->get_controls(),
			'condition'   => [ 'use_cpt!' => 'yes' ],
			'default'     => [
				[ 'name' => 'Combustion Testing',          'desc' => 'Testing and analysis of combustion processes for industrial applications.' ],
				[ 'name' => 'Heat Transfer Analysis',      'desc' => 'Thermal analysis and heat transfer coefficient measurements.' ],
				[ 'name' => 'Supersonic Flow Testing',     'desc' => 'High-speed flow characterisation using Schlieren imaging and pressure measurements.' ],
				[ 'name' => 'Nanomaterial Synthesis',      'desc' => 'Flame-based synthesis of metal oxide nanoparticles.' ],
				[ 'name' => 'Consultancy & Training',      'desc' => 'Technical consultancy and short-course training programmes.' ],
			],
			'title_field' => '{{{ name }}}',
		] );
		$this->end_controls_section();
	}

	protected function render() {
		$s    = $this->get_settings_for_display();
		$list = [];

		if ( $s['use_cpt'] === 'yes' ) {
			$posts = get_posts( [ 'post_type' => 'hiref_service', 'posts_per_page' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' ] );
			foreach ( $posts as $p ) {
				$list[] = [
					'name'  => get_the_title( $p->ID ),
					'desc'  => get_the_excerpt( $p->ID ),
					'price' => get_post_meta( $p->ID, '_hiref_price', true ),
					'photo' => [ 'url' => get_the_post_thumbnail_url( $p->ID, 'medium_large' ) ],
				];
			}
			if ( empty( $list ) ) $list = $s['services'] ?? [];
		} else {
			$list = $s['services'] ?? [];
		}
		?>
		<section class="hiref-page-content">
		  <div class="hiref-container">
		    <div class="hiref-section__header">
		      <div>
		        <span class="hiref-label"><?php echo esc_html( $s['section_label'] ); ?></span>
		        <h2 class="hiref-heading"><?php echo esc_html( $s['heading'] ); ?></h2>
		      </div>
		      <?php if ( $s['intro'] ) : ?>
		      <p class="hiref-section__desc"><?php echo esc_html( $s['intro'] ); ?></p>
		      <?php endif; ?>
		    </div>
		    <div class="hiref-services__grid">
		      <?php foreach ( $list as $svc ) :
		        $photo = is_array( $svc['photo'] ) ? ( $svc['photo']['url'] ?? '' ) : '';
		      ?>
		      <div class="hiref-service-card">
		        <?php if ( $photo ) : ?>
		        <div class="hiref-service-card__img">
		          <img src="<?php echo esc_url( $photo ); ?>" alt="<?php echo esc_attr( $svc['name'] ); ?>" loading="lazy" />
		        </div>
		        <?php endif; ?>
		        <div class="hiref-service-card__body">
		          <h3 class="hiref-service-card__name"><?php echo esc_html( $svc['name'] ); ?></h3>
		          <p class="hiref-service-card__desc"><?php echo esc_html( $svc['desc'] ); ?></p>
		          <?php if ( ! empty( $svc['price'] ) ) : ?>
		          <p class="hiref-service-card__price"><?php echo esc_html( $svc['price'] ); ?></p>
		          <?php endif; ?>
		        </div>
		      </div>
		      <?php endforeach; ?>
		    </div>
		  </div>
		</section>
		<?php
	}
}
