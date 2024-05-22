export const createMarkup = images => {
  return images.reduce(
    ( html, { tags, webformatURL, largeImageURL, likes, views, comments, downloads } ) => {
      return (
        html +
        `
			<li class="gallery-item item-gallery">
				<a class="item-gallery-link" href="${largeImageURL}">
					<img class="item-gallery-img" src="${webformatURL}" alt="${tags}">
				</a>
				<ul class="item-gallery-data">
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Likes</h2>
						<p class="item-gallery-counter">${likes}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Views</h2>
						<p class="item-gallery-counter">${views}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Comments</h2>
						<p class="item-gallery-counter">${comments}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Downloads</h2>
						<p class="item-gallery-counter">${downloads}</p>
					</li>
				</ul>
			</li>
		`
      );
    },
    ''
  );
};
