import ColabsDataAccess from "../dataAccess/colabs.js"
import { ok, serverError } from "../helpers/httpResponses.js"

export default class ColabsControllers {
    constructor() {
        this.dataAccess = new ColabsDataAccess()
    }

    async getColabs() {
        try {
            const colabs = await this.dataAccess.getColabs()

            return ok(colabs)
        } catch (error) {
            return serverError(error)
        }
    }

    async getAvailableColabs() {
        try {
            const colabs = await this.dataAccess.getAvailableColabs()

            return ok(colabs)
        } catch (error) {
            return serverError(error)
        }
    }

    async addColab(colabData) {
        try {
            const result = await this.dataAccess.addColab(colabData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteColab(colabId) {
        try {
            const result = await this.dataAccess.deleteColab(colabId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateColab(colabId, colabData) {
        try {
            const result = await this.dataAccess.updateColab(colabId, colabData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}