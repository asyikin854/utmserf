<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Collaborations extends Widget_Base {
	public function get_name()       { return 'hiref_collaborations'; }
	public function get_title()      { return 'HIREF Collaborations'; }
	public function get_icon()       { return 'eicon-site-identity'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Header' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag',     'type' => Controls_Manager::TEXT, 'default' => 'Industry & Academia' ] );
		$this->add_control( 'heading',       [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Collaborations' ] );
		$this->add_control( 'intro', [ 'label' => 'Intro text', 'type' => Controls_Manager::TEXTAREA,
			'default' => 'We partner with leading industries and academic institutions to translate fundamental research into real-world impact across the energy sector.' ] );
		$this->end_controls_section();

		$default_tabs = [
			'industry'      => 'Industry',
			'national'      => 'National',
			'international' => 'International',
			'academic'      => 'Academic',
			'government'    => 'Government',
		];

		$default_entries = [
			'industry' => [
				[ 'abbr' => 'PETRONAS', 'name' => 'Petroliam Nasional Berhad',        'logo' => 'https://logo.clearbit.com/petronas.com' ],
				[ 'abbr' => 'TNB',      'name' => 'Tenaga Nasional Berhad',           'logo' => 'https://logo.clearbit.com/tnb.com.my' ],
				[ 'abbr' => 'MISC',     'name' => 'MISC Berhad',                      'logo' => 'https://logo.clearbit.com/misc.com.my' ],
				[ 'abbr' => 'SAPURA',   'name' => 'Sapura Energy',                    'logo' => 'https://logo.clearbit.com/sapuraenergy.com' ],
				[ 'abbr' => 'YTL',      'name' => 'YTL Power International',          'logo' => 'https://logo.clearbit.com/ytlpower.com' ],
				[ 'abbr' => 'MAS',      'name' => 'Malaysia Airlines',                'logo' => 'https://logo.clearbit.com/malaysiaairlines.com' ],
				[ 'abbr' => 'SHELL',    'name' => 'Shell Malaysia',                   'logo' => 'https://logo.clearbit.com/shell.com' ],
				[ 'abbr' => 'RAPID',    'name' => 'Refinery & Petrochemical Complex', 'logo' => 'https://logo.clearbit.com/petronas.com' ],
			],
			'national' => [
				[ 'abbr' => 'MOSTI',       'name' => 'Ministry of Science, Technology & Innovation', 'logo' => 'https://logo.clearbit.com/mosti.gov.my' ],
				[ 'abbr' => 'MOHE',        'name' => 'Ministry of Higher Education',                 'logo' => 'https://logo.clearbit.com/mohe.gov.my' ],
				[ 'abbr' => 'MIGHT',       'name' => 'Malaysian Industry-Government Group for High Technology', 'logo' => 'https://logo.clearbit.com/might.org.my' ],
				[ 'abbr' => 'UTM Holdings','name' => 'UTM Holdings',                                 'logo' => 'https://logo.clearbit.com/utm.my' ],
				[ 'abbr' => 'IRDA',        'name' => 'Iskandar Regional Development Authority',      'logo' => 'https://logo.clearbit.com/irda.com.my' ],
				[ 'abbr' => 'SIRIM',       'name' => 'SIRIM Berhad',                                 'logo' => 'https://logo.clearbit.com/sirim.my' ],
				[ 'abbr' => 'TNBR',        'name' => 'TNB Research',                                 'logo' => 'https://logo.clearbit.com/tnb.com.my' ],
			],
			'international' => [
				[ 'abbr' => 'Cambridge',  'name' => 'University of Cambridge',        'logo' => 'https://logo.clearbit.com/cam.ac.uk' ],
				[ 'abbr' => 'Leeds',      'name' => 'University of Leeds',            'logo' => 'https://logo.clearbit.com/leeds.ac.uk' ],
				[ 'abbr' => 'Cranfield',  'name' => 'Cranfield University',           'logo' => 'https://logo.clearbit.com/cranfield.ac.uk' ],
				[ 'abbr' => 'Wisconsin',  'name' => 'University of Wisconsin-Madison','logo' => 'https://logo.clearbit.com/wisc.edu' ],
				[ 'abbr' => 'SUNY',       'name' => 'SUNY Korea',                     'logo' => 'https://logo.clearbit.com/suny.edu' ],
				[ 'abbr' => 'Tokyo Met',  'name' => 'Tokyo Metropolitan University',  'logo' => 'https://logo.clearbit.com/tmu.ac.jp' ],
				[ 'abbr' => 'Kyushu',     'name' => 'Kyushu University',              'logo' => 'https://logo.clearbit.com/kyushu-u.ac.jp' ],
				[ 'abbr' => 'Jiangsu',    'name' => 'Jiangsu University',             'logo' => 'https://logo.clearbit.com/ujs.edu.cn' ],
				[ 'abbr' => 'Ryukyus',    'name' => 'University of the Ryukyus',      'logo' => 'https://logo.clearbit.com/u-ryukyu.ac.jp' ],
			],
			'academic' => [
				[ 'abbr' => 'UTM',    'name' => 'Universiti Teknologi Malaysia',    'logo' => 'https://logo.clearbit.com/utm.my' ],
				[ 'abbr' => 'UM',     'name' => 'Universiti Malaya',                'logo' => 'https://logo.clearbit.com/um.edu.my' ],
				[ 'abbr' => 'UPM',    'name' => 'Universiti Putra Malaysia',        'logo' => 'https://logo.clearbit.com/upm.edu.my' ],
				[ 'abbr' => 'UiTM',   'name' => 'Universiti Teknologi MARA',        'logo' => 'https://logo.clearbit.com/uitm.edu.my' ],
				[ 'abbr' => 'UTHM',   'name' => 'Universiti Tun Hussein Onn',       'logo' => 'https://logo.clearbit.com/uthm.edu.my' ],
				[ 'abbr' => 'IIUM',   'name' => 'Intl. Islamic University Malaysia', 'logo' => 'https://logo.clearbit.com/iium.edu.my' ],
				[ 'abbr' => 'UTeM',   'name' => 'Universiti Teknikal Malaysia',     'logo' => 'https://logo.clearbit.com/utem.edu.my' ],
				[ 'abbr' => 'UniMAP', 'name' => 'Universiti Malaysia Perlis',       'logo' => 'https://logo.clearbit.com/unimap.edu.my' ],
			],
			'government' => [
				[ 'abbr' => 'JKR',  'name' => 'Jabatan Kerja Raya',                         'logo' => 'https://logo.clearbit.com/jkr.gov.my' ],
				[ 'abbr' => 'KPDN', 'name' => 'Ministry of Domestic Trade & Cost of Living', 'logo' => 'https://logo.clearbit.com/kpdnhep.gov.my' ],
				[ 'abbr' => 'MARA', 'name' => 'Majlis Amanah Rakyat',                        'logo' => 'https://logo.clearbit.com/mara.gov.my' ],
				[ 'abbr' => 'MTDC', 'name' => 'Malaysian Technology Development Corp',        'logo' => 'https://logo.clearbit.com/mtdc.com.my' ],
				[ 'abbr' => 'EPU',  'name' => 'Economic Planning Unit',                      'logo' => 'https://logo.clearbit.com/epu.gov.my' ],
				[ 'abbr' => 'MIDA', 'name' => 'Malaysian Investment Development Authority',   'logo' => 'https://logo.clearbit.com/mida.gov.my' ],
			],
		];

		foreach ( $default_tabs as $key => $label ) {
			$this->start_controls_section( 'tab_' . $key, [ 'label' => $label . ' Tab' ] );
			$this->add_control( 'tab_label_' . $key, [
				'label'   => 'Tab Label',
				'type'    => Controls_Manager::TEXT,
				'default' => $label,
			] );

			$repeater = new Repeater();
			$repeater->add_control( 'abbr', [ 'label' => 'Abbreviation', 'type' => Controls_Manager::TEXT ] );
			$repeater->add_control( 'name', [ 'label' => 'Full Name',    'type' => Controls_Manager::TEXT ] );
			$repeater->add_control( 'logo', [ 'label' => 'Logo URL (Clearbit or custom)', 'type' => Controls_Manager::TEXT ] );

			$this->add_control( 'entries_' . $key, [
				'label'       => 'Entries',
				'type'        => Controls_Manager::REPEATER,
				'fields'      => $repeater->get_controls(),
				'default'     => $default_entries[ $key ],
				'title_field' => '{{{ abbr }}}',
			] );
			$this->end_controls_section();
		}
	}

	protected function render() {
		$s    = $this->get_settings_for_display();
		$tabs = [
			[ 'key' => 'industry',      'label' => $s['tab_label_industry']      ?: 'Industry' ],
			[ 'key' => 'national',      'label' => $s['tab_label_national']      ?: 'National' ],
			[ 'key' => 'international', 'label' => $s['tab_label_international'] ?: 'International' ],
			[ 'key' => 'academic',      'label' => $s['tab_label_academic']      ?: 'Academic' ],
			[ 'key' => 'government',    'label' => $s['tab_label_government']    ?: 'Government' ],
		];
		?>
		<section class="hiref-section hiref-section--white" id="collaborations">
		  <div class="hiref-container">
		    <div class="hiref-collab__header">
		      <div>
		        <span class="hiref-label"><?php echo esc_html( $s['section_label'] ); ?></span>
		        <h2 class="hiref-heading"><?php echo esc_html( $s['heading'] ); ?></h2>
		      </div>
		      <p class="hiref-body"><?php echo esc_html( $s['intro'] ); ?></p>
		    </div>

		    <div class="hiref-collab__tabs">
		      <?php foreach ( $tabs as $i => $tab ) : ?>
		      <button class="hiref-collab__tab<?php echo $i === 0 ? ' is-active' : ''; ?>" data-tab="<?php echo esc_attr( $tab['key'] ); ?>">
		        <?php echo esc_html( $tab['label'] ); ?>
		      </button>
		      <?php endforeach; ?>
		    </div>

		    <?php foreach ( $tabs as $i => $tab ) :
		      $entries    = $s[ 'entries_' . $tab['key'] ] ?? [];
		      $count      = count( $entries );
		      $all        = array_merge( $entries, $entries );
		      $dots_count = max( 1, (int) ceil( $count / 4 ) );
		    ?>
		    <div class="hiref-collab__panel<?php echo $i === 0 ? ' is-active' : ''; ?>" data-tab="<?php echo esc_attr( $tab['key'] ); ?>" data-offset="0">
		      <div class="hiref-collab__viewport">
		        <div class="hiref-collab__track">
		          <?php foreach ( $all as $entry ) : ?>
		          <div class="hiref-collab-card">
		            <div class="hiref-collab-card__logo">
		              <img
		                src="<?php echo esc_url( $entry['logo'] ?? '' ); ?>"
		                alt="<?php echo esc_attr( $entry['name'] ?? '' ); ?>"
		                loading="lazy"
		                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
		              />
		              <span class="hiref-collab-card__abbr" style="display:none"><?php echo esc_html( $entry['abbr'] ?? '' ); ?></span>
		            </div>
		            <p class="hiref-collab-card__name"><?php echo esc_html( $entry['name'] ?? '' ); ?></p>
		          </div>
		          <?php endforeach; ?>
		        </div>
		      </div>

		      <button class="hiref-collab__arrow hiref-collab__arrow--prev" aria-label="Previous">
		        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
		      </button>
		      <button class="hiref-collab__arrow hiref-collab__arrow--next" aria-label="Next">
		        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
		      </button>

		      <div class="hiref-collab__dots">
		        <?php for ( $d = 0; $d < $dots_count; $d++ ) : ?>
		        <button class="hiref-collab__dot<?php echo $d === 0 ? ' is-active' : ''; ?>" data-index="<?php echo esc_attr( $d ); ?>"></button>
		        <?php endfor; ?>
		      </div>
		    </div>
		    <?php endforeach; ?>

		  </div>
		</section>
		<?php
	}
}
