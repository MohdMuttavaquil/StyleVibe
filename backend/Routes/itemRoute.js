import express from 'express'
import { categoryItems, getItems, trendingItems } from '../Controller/iitemsController.js'

const itemRoute = express.Router()

itemRoute.get('/allItems', getItems)
itemRoute.post('/category', categoryItems)
itemRoute.get('/trending', trendingItems)

export default itemRoute