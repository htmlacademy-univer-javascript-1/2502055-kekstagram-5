import { getPhotos} from './server-api.js';
import { setFormSubmit } from './form.js';
import { addFilters } from './data-filters.js';
import { drawPhotos } from './draw-photos.js';
import { alertLoadError } from './util.js';

let photos = [];

const onLoadSuccess = (data) => {
  photos = data.slice();
  drawPhotos(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

getPhotos(onLoadSuccess, alertLoadError);
addFilters();
setFormSubmit();

export {photos};
