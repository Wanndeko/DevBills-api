import { Router, response } from "express";

import packageJson from '../../package.json'

export const baseRoutes = Router()

baseRoutes.get('/', (_, response) =>{
    const {name, version, description, author} = packageJson

    response.status(200).json({name, version, description, author})
})