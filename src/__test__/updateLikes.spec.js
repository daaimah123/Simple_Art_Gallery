const axios = require('axios');
import { updateLikes } from '../../server/routes/gallery.router'; // Adjust the import path as necessary

jest.mock('axios');

describe('updateLikes', () => {
 it('updates the likes of a specific gallery item', async () => {
    const galleryItemId = '123';
    const action = 'like';
    const updatedData = { id: galleryItemId, likes: 6 }; // Example updated data

    axios.put.mockImplementationOnce(() => Promise.resolve({ data: updatedData }));

    const result = await updateLikes(galleryItemId, action);
    expect(result).toEqual(updatedData);
    expect(axios.put).toHaveBeenCalledWith(`/gallery/like/${galleryItemId}`, { action });
 });
});
