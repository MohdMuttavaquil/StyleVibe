import express from 'express'
import { categoryItems, getItems, itemById, trendingItems } from '../Controller/iitemsController.js'

const itemRoute = express.Router()

itemRoute.get('/allItems', getItems)
itemRoute.post('/category', categoryItems)
itemRoute.get('/trending', trendingItems)
itemRoute.post('/item', itemById)

export default itemRoute