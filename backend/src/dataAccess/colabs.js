import { Mongo } from "../database/mongo.js"
import { ObjectId } from 'mongodb'

const collectionName = 'colabs'

export default class ColabsDataAccess {
    async getColabs() {
        const result = await Mongo.db
        .collection(collectionName)
        .find({ })
        .toArray()

        return result
    }

    async getAvailableColabs() {
        const result = await Mongo.db
        .collection(collectionName)
        .find({ available: true })
        .toArray()

        return result
    }

    async addColab(colabData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(colabData)

        return result
    }

    async deleteColab (colabId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({ _id: new ObjectId(colabId) })

        return result
    }

    async updateColab(colabId, colabData) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            { _id: new ObjectId(colabId) },
            { $set: colabData }
        )

        return result
    }
    
}