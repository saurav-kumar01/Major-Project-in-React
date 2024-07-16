const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPERITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJRCT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}


export default conf