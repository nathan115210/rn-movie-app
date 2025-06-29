export const isValidImageUrl = async (url: string): Promise<boolean> => {
    if (!url || url === 'N/A') return false;

    try {
        const response = await fetch(url, {method: 'HEAD'}); // faster than GET
        const contentType = response.headers.get('Content-Type') || '';
        const status = response.status;

        // Basic check: must return 200 and be an image
        return status === 200 && contentType.startsWith('image/');
    } catch (error) {
        return false;
    }
};
