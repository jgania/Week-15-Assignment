const HOUSES_ENDPOINT = 'https://62b51cffda3017eabb14e834.mockapi.io/houseProject';

class HousesApi {
    get = async () => {
        try{
            const resp = await fetch(HOUSES_ENDPOINT)
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchHouses had an issue.', e)
        }
    }

    put = async (house) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue')
        }
    }
}

export const housesApi = new HousesApi