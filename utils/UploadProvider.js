const { BaseProvider } = require('@admin-bro/upload')
const { promises, existsSync } = require("fs")
const { resolve, dirname } = require("path")

class UploadProvider extends BaseProvider {
    constructor(bucket, assetPath) {
        // it requires bucket as a parameter to properly pass it to other methods
        super(bucket)

        this.assetPath = assetPath
    }

    async upload(file, key, ActionContext) {
        const fullPath = resolve(this.assetPath, key)
        const dirPath = dirname(fullPath)

        if (!existsSync(dirPath)) {
            await promises.mkdir(dirPath, { recursive: true })
        }
        await promises.copyFile(file.path, fullPath)
        await promises.unlink(file.path)
        return key
    }

    async delete(key, bucket, context) {
        const filePath = resolve(this.assetPath, key)

        if (existsSync(filePath)) {
            await promises.unlink(filePath)
            const dirPath = dirname(filePath)
            const otherFiles = await promises.readdir(dirPath)
            if (otherFiles && otherFiles.length == 0) {
                await promises.rmdir(dirPath)
            }
        }
    }

    path(key, bucket, context) {
        // return "/" + bucket; // default 
        return "/" + key;
    }
}

module.exports = UploadProvider;
