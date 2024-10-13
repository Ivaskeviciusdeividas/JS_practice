import fs from 'fs';
import parse from 'csv-parser'
import Item from './Item.js'

export  function readFileAndMapItems(filePath) {
    const ret = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
        .pipe(parse({delimiter: ':'}))
        .on('data', function(csvrow) {
            try {
                const item = new Item(csvrow.ID, csvrow.Item, csvrow.Price,
                    csvrow.Quantity, csvrow.Category, csvrow.Shop)

                if (csvrow.Item === "Wine") {
                    item.ageRestricted = true
                }

                ret.push(item)
            } catch (e) {
                console.log(e)
            }
        })
        .on('end',function() {
                resolve(ret)
        });
    })
}
