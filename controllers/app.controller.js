import express from 'express'

export const homeUrl = async (req, res)=>{
res.render('components/home')
}

export const loginUrl = async (req, res)=>{
res.render('components/login')
}

export const notificationsUrl = async (req, res)=>{
res.render('components/notifications')
}

export const libraryUrl = async (req, res)=>{
res.render('components/library')
}
export const cloud1AImodelUrl = async (req, res)=>{
res.render('components/cloud1AImodel')
}

export const searchUrl = async (req, res)=>{
res.render('components/search')
}