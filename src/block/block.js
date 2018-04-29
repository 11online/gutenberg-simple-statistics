/**
 * BLOCK: gutenberg-simple-statistics
 *
 * A block that allows you to add statistics that count up
 * 
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const PlainText = wp.blocks.PlainText; // Import the PlainText input

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-gutenberg-simple-statistics', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Simple Statistics' ), // Block title.
	icon: 'performance', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Statistics' ),
	],
	attributes: { // set up our default attributes
		stats: {
			type: "array", // arrays don't take sub attributes
			default: [],
		},
		randomKey: {
			type: 'string', // set up our random key so we can have unique ids for the count up animation
			default: 'statistics-block'
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function({ attributes, setAttributes, focus, setFocus, isSelected, className }) {

		// if our random key is the default, set our random key so we can have unique ids on the front end
		if(attributes.randomKey === 'statistics-block') {
			const randomKey = Math.floor(Math.random() * 9999);
			setAttributes({randomKey: randomKey});
		}

		// Creates a component to add new stats. This has a button with an onclick to add a new stat with default values and uses setAttributes to save the new list of stats
		const addRow = (
			<div style={{textAlign: 'right'}}>
				<button type="button" style={{marginLeft: "10px", marginRight: "10px"}} className="components-button components-icon-button" 
					onClick={() => {
						const newStats = [...attributes.stats]
						const newStat = {
							value: "",
							label: ""
						}
						newStats.push(newStat)
						setAttributes({stats: newStats})
					}
				}>{ __("Add Statistic:")}<span className="dashicons dashicons-plus"></span></button>
			</div>
		);

		// Creates a component to delete stats. This has a button with an onclick that slices the array on the index and uses the setAttribute function to save the new list of stats.
		const deleteStat = (index) => {

			return (
				<div className="stat-edit-box">
					<div className="stat-edit-buttons" style={{display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #e2e4e7'}}>
						
						<button type="button" style={{paddingLeft: "2px", paddingRight: "2px"}} className="components-button components-icon-button"
							onClick={ () => {
								let newStats = [ ...attributes.stats ]
								newStats.splice(index, 1)
								setAttributes( { stats: newStats } )
								}
							}><span className="dashicons dashicons-trash"></span>
						</button>
					</div>
				</div>
			)
		}

		// this is just a simple helper for rendering plain text inputs
		// it takes a field and an index so we can update the correct stat
		const renderPlainText = (field, stat, index) => {
			return (
				<PlainText
					style={{textAlign: "center", minWidth: '50px'}}
					value={stat[field]}
					className={field}
					onChange={ (value) => {
						let newStats = [ ...attributes.stats ]
						newStats[index][field] = value
						setAttributes( { stats: newStats } )
					}}
					placeholder={field === 'label' ? __( "Label" ) :  __( "0" ) }
				/>
			)
		}

		// method to start the count up
		const renderCountUp = (stat, index) => {
			// set our options
			const countUpOptions = {
			  useEasing: true,
			  useGrouping: true,
			}
			// get our unique id
			const id = 'countup-'+attributes.randomKey+index
			// build the count up
			const countUp = new CountUp( id, 0, stat.value, 0, 2.5, countUpOptions);
			// if we correctly built the count up, start the animation
			if (!countUp.error) {
				countUp.start();
			} else {
				console.error(countUp.error);
			}
		}

		return (
			<div className={ className }>
				<div className='container'>
					{
						// map through our stats and render them, if we are in focus (user has selected the block), show our inputs, otherwise, show our html
						attributes.stats.map((stat, index) => {
							// return an array with our html and a hidden div that starts the animation if we aren't focused
							return [ (
									<div className="statistic" key={index}>
										<div>
											{ focus ? renderPlainText('value', stat, index) : <div className="value" id={"countup-"+attributes.randomKey+index}>{stat.value}</div> }
										</div>
										<div>
											{ focus ? renderPlainText('label', stat, index) : <div className="label" id={"countup-"+attributes.randomKey+index}>{stat.label}</div> }
										</div>
										{ focus ? deleteStat(index) : null }
									</div>
								), 
								<div style={{display: 'none'}}>{!focus ? setTimeout( () => { renderCountUp(stat, index)  }, 100) : null }</div> 
							]
						})
					}
				</div>
				{ focus ? addRow : null }
			</div>
		)
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function({ attributes, className }) {

		return (
			<div className={ className }>
				<div className='container'>
					{
						// map through our stats and show the html
						attributes.stats.map((stat, i) => {
							return (
								<div className="statistic" key={i}>
									<div>
										<div className="simple-statistic-countup" data-value={stat.value} id={'countup-'+attributes.randomKey+i}>0</div>
									</div>
									<div className="label">
										{stat.label}
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	},
} );
