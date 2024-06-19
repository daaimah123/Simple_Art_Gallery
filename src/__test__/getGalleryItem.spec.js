const axios = require('axios');
import { getGalleryItem } from '../../server/routes/gallery.router'; // Adjust the import path as necessary

jest.mock('axios');

describe('getGalleryItem', () => {
 it('fetches successfully data from an API', async () => {
    const galleryItemId = '123';
    const data = { id: galleryItemId, likes: 5 }; // Example data

    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    const result = await getGalleryItem(galleryItemId);
    expect(result).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(`/gallery/${galleryItemId}`);
 });
});
