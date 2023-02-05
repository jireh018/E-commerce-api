const agg = [
    {
        '$match': {
            'product': new ObjectId('63dde93012808d70e322f930')
        }
    }, {
        '$group': {
            '_id': null,
            'averageRating': {
                '$avg': '$rating'
            },
            'numOfReviews': {
                '$sum': 1
            }
        }
    }
];

const client = await MongoClient.connect(
    '',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('10-e-commerce').collection('reviews');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();