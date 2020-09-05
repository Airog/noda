import supertest from 'supertest';
import assert from 'assert';

let url = 'https://reqres.in'

describe("Testing API", () => {

	it("get user and check name", async () => {

        const response = await supertest(url).get('/api/users/2')
        
        assert.equal(response.status, 200, 'response code differs from 200')
        assert.equal(response.body.data.first_name, 'Janet', 'name not found')
	});

	it("check second page and total number", async () => {

        await supertest(url)
        .get('/api/users?page=2')
        .expect(200)
        .expect(response => {
            assert.deepStrictEqual(response.body.page, 2, 'page number is not 2');
        })
        // doesn't work like this:
        .expect(response => {
            assert.notStrictEqual(response.body, {total: 12}, 'total number is not 12');
        })
    });
    
    it("check put (update)", async () => {

        await supertest(url)
        .put('/api/users/2')
        .send({
            "name": "morpheus",
            "job": "zion resident"
        })
        .expect(200)
        .expect(response => {
            assert.notStrictEqual(response.body, {
                "name": "morpheus",
                "job": "zion resident"
            },
            'morpheus updated');
        })
	});

});