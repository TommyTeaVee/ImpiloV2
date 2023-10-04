import React from 'react';
import contents from './contents'

export function Article()
{
    var [content,setContent] = React.useState(contents[0]);

	function handleLanguage(locale) {
		// find the content in contents variable
		var filtered = contents.filter(function (item) {
			return item.locale === locale;
		});
		// get ready to set current content
		var object = {};

		// get the actual existing content
		if (filtered.length >= 1) {
			object = filtered[0];
		} else {
			object = contents[0];
		}
		// do stuff on this website
		document.documentElement.lang = object.locale;
		document.documentElement.style.fontFamily = object.fontFamily;
		document.title = object.title;

		// save the setting
		setContent(object);
		// localStorage.setItem("content", object.locale)
	}

	// get viewer's setting once this website load
	React.useEffect(function () {
		handleLanguage(/*localStorage.getItem("content")*/);
	}, []);

	return (
		<>
			<div className="uk-padding" data-uk-grid="">
				<div className="uk-width-expand@s">
					<h3
						className="uk-margin-small"
						style={{ fontFamily: content.fontFamily }}
					>
						{content["head_line"]}
					</h3>
					<p className="uk-margin-small">
						<a
							className="uk-text-secondary"
							href="https://impilomag.co.za/"
							target="_blank"
							rel="noreferrer"
						>
							{/* <u>{content["made_by"]}</u>
						{" "}
						{content["translate_by"]} */}
					</a></p>
				</div>
				<div className="uk-width-auto@s">
					<select
						className="uk-select"
						value={content.locale}
						onChange={function (event) {
							handleLanguage(event.currentTarget.value);
						}}
					>
						{contents.map(function (item) {
							return (
								<option key={item.locale} value={item.locale}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className="uk-grid-small uk-grid-divider" data-uk-grid="">
				<div className="uk-width-1-2@s">
					{/* https://pixabay.com/images/id-3025022/ */}
					
					
					<p>{content["whats_it"]}</p>
					<p className="uk-text-center">
                   

<video src="http://localhost/impilo-webs/images/media/Pellesi.mp4"
 width="400" loop muted playsinline uk-video="autoplay: inview">
	
 </video>
					</p>
				</div>
				<div className="uk-width-2-2@s">
					<div
						className="uk-grid-small uk-child-width-1-2@s uk-grid-divider"
						data-uk-grid=""
					>
						<div>
							<p className="uk-dropcap">{content["other_text_3"]}</p>
						</div>
						<div>
							<p className="uk-dropcap">{content["other_text_2"]}</p>
						</div>
					</div>
					<hr />
					
					<p className="uk-dropcap">{content["made_by"]}</p>
				</div>
			</div>
		</>
	);
}
