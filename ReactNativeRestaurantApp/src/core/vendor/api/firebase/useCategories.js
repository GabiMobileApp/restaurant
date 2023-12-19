import { useState, useEffect } from 'react'
import { subscribeCategories as subscribeCategoriesAPI } from './FirebaseVendorClient'
import { useVendorConfig } from '../../hooks/useVendorConfig'

const useCategories = () => {
  const { config } = useVendorConfig()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const unsubscribeCategories = subscribeCategoriesAPI(
      config.isMultiVendorEnabled
        ? config.tables?.vendorCategoriesTableName
        : config.tables?.categoriesTableName,
      onCategoriesUpdate,
    )
    return unsubscribeCategories
  }, [])

  const onCategoriesUpdate = list => {
    setCategories(list)
  }

  return { categories }
}

export default useCategories
