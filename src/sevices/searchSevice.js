import * as reguest from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await reguest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
