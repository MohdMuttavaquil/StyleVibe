import express from 'express'
import { categoryItems, getItems } from '../Controller/iitemsController.js'

const itemRoute = express.Router()

itemRoute.get('/allItems', getItems)
itemRoute.post('/category', categoryItems)

export default itemRoute