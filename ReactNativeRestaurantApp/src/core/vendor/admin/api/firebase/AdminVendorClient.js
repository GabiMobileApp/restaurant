import { db } from '../../../../firebase/config'

export const subscribeAdminVendors = (vendorsTableName, callback) => {
  const ref = db.collection(vendorsTableName)

  return ref.onSnapshot(
    querySnapshot => {
      const data = []
      querySnapshot?.forEach(doc => {
        const vendorData = doc.data()
        data.push({
          id: doc.id,
          data: vendorData,
        })
      })
      callback?.(data)
    },
    error => {
      console.warn(error)
    },
  )
}

export const addVendor = async (vendorsTableName, newVendor) => {
  return db
    .collection(vendorsTableName)
    .add(newVendor)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
