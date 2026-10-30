<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Grants extends Widget_Base {
	public function get_name()       { return 'hiref_grants'; }
	public function get_title()      { return 'HIREF Grants'; }
	public function get_icon()       { return 'eicon-table'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Grants' ] );
		$this->add_control( 'use_cpt', [ 'label' => 'Pull from Grants CPT', 'type' => Controls_Manager::SWITCHER, 'default' => 'yes' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag', 'type' => Controls_Manager::TEXT, 'default' => 'Research Funding' ] );
		$this->add_control( 'heading',       [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Grants' ] );

		$repeater = new Repeater();
		$repeater->add_control( 'title',    [ 'label' => 'Project Title', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'pi',       [ 'label' => 'Principal Investigator', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'funder',   [ 'label' => 'Funder / Agency', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'amount',   [ 'label' => 'Amount (RM)', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'year',     [ 'label' => 'Year', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'status',   [ 'label' => 'Status', 'type' => Controls_Manager::SELECT,
			'options' => [ 'active' => 'Active', 'completed' => 'Completed' ], 'default' => 'active' ] );

		$this->add_control( 'grants', [
			'label'       => 'Grants',
			'type'        => Controls_Manager::REPEATER,
			'fields'      => $repeater->get_controls(),
			'condition'   => [ 'use_cpt!' => 'yes' ],
			'default'     => [],
			'title_field' => '{{{ title }}}',
		] );
		$this->end_controls_section();
	}

	protected function render() {
		$s    = $this->get_settings_for_display();
		$list = [];

		if ( $s['use_cpt'] === 'yes' ) {
			$posts = get_posts( [ 'post_type' => 'hiref_grant', 'posts_per_page' => -1, 'orderby' => 'date', 'order' => 'DESC' ] );
			foreach ( $posts as $p ) {
				$list[] = [
					'title'  => get_the_title( $p->ID ),
					'pi'     => get_post_meta( $p->ID, '_hiref_pi', true ),
					'funder' => get_post_meta( $p->ID, '_hiref_funder', true ),
					'amount' => get_post_meta( $p->ID, '_hiref_amount', true ),
					'year'   => get_post_meta( $p->ID, '_hiref_year', true ),
					'status' => get_post_meta( $p->ID, '_hiref_status', true ) ?: 'completed',
				];
			}
		} else {
			$list = $s['grants'] ?? [];
		}
		?>
		<section class="hiref-page-content">
		  <div class="hiref-container">
		    <div class="hiref-section__header">
		      <div>
		        <span class="hiref-label"><?php echo esc_html( $s['section_label'] ); ?></span>
		        <h2 class="hiref-heading"><?php echo esc_html( $s['heading'] ); ?></h2>
		      </div>
		    </div>
		    <div class="hiref-data-table-wrap">
		      <table class="hiref-data-table">
		        <thead>
		          <tr>
		            <th>Project Title</th>
		            <th>Principal Investigator</th>
		            <th>Funder</th>
		            <th>Amount (RM)</th>
		            <th>Year</th>
		            <th>Status</th>
		          </tr>
		        </thead>
		        <tbody>
		          <?php if ( empty( $list ) ) : ?>
		          <tr><td colspan="6" class="hiref-data-table__empty">No grants found. Add entries via Elementor or the Grants CPT.</td></tr>
		          <?php else : ?>
		          <?php foreach ( $list as $g ) : ?>
		          <tr>
		            <td><?php echo esc_html( $g['title'] ); ?></td>
		            <td><?php echo esc_html( $g['pi'] ); ?></td>
		            <td><?php echo esc_html( $g['funder'] ); ?></td>
		            <td><?php echo esc_html( $g['amount'] ); ?></td>
		            <td><?php echo esc_html( $g['year'] ); ?></td>
		            <td><span class="hiref-badge hiref-badge--<?php echo esc_attr( $g['status'] ); ?>"><?php echo esc_html( ucfirst( $g['status'] ) ); ?></span></td>
		          </tr>
		          <?php endforeach; ?>
		          <?php endif; ?>
		        </tbody>
		      </table>
		    </div>
		  </div>
		</section>
		<?php
	}
}
