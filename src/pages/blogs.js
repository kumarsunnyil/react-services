import React from 'react';

const Blogs = () => {
	return (
		<div
		style={{
			display: 'flex',
			justifyContent: 'Right',
			alignItems: 'Right',
			height: '100vh'
		}}
		>
			<div class="container">
			

			<div class="card mt-4">
				<div class="card-body">
					<h4 class="card-title"> Article Title </h4>
					<div class="card-subtitle text-muted mb-2">
						March 13 -2021
                </div>
					<div class="card-text mb2" > Alovely Description of the article
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae condimentum nisl. Maecenas molestie, nisi quis feugiat vestibulum, urna risus feugiat massa, at semper nisl tortor id ipsum. Vestibulum consequat a massa vel maximus. Nulla pretium nulla a ex molestie dictum. Aenean aliquet, nibh sit amet laoreet tincidunt, lectus tellus sollicitudin diam, eget hendrerit lacus nulla feugiat mauris. Vestibulum non elit sit amet quam ultricies varius et ut turpis. Quisque dictum, ligula sed suscipit consequat, neque libero consectetur nisl, eget euismod odio lorem id nibh. Mauris augue lorem, blandit pharetra bibendum sed, auctor ac turpis. In ullamcorper neque in consequat ornare. Sed ullamcorper orci lectus, ac fermentum tellus tempor eu. Quisque ut ante metus. Morbi bibendum justo tortor, at accumsan ante fermentum quis. Aenean et purus pellentesque urna dignissim maximus id in sapien. Vestibulum facilisis lectus sem, congue sollicitudin lorem pharetra vitae. Curabitur quis ante imperdiet magna egestas porta.</p>
						<a href="articles/slug >" class="btn btn-primary" > Slug Read More...</a>
					</div>
				</div>
			</div>
			

		</div>
		</div>
	);
};

export default Blogs;
